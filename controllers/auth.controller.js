import { User } from "../models/user.model.js";
import { College } from "../models/college.model.js";
import { Student } from "../models/student.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is missing");
    process.exit(1)
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password,wallet_address,role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        let roleDoc;
        let roleModel;

        // Create role-specific document
        if (role === "Student") {
            roleDoc = new Student({ portfolio_token_id: null, badges: [] });
            roleModel = "Student";
        } else if (role === "College") {
            roleDoc = new College({ college_name: name });
            roleModel = "College";
        } else {
            return res.status(400).json({ message: "Invalid role" });
        }

        await roleDoc.save();

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            wallet_address,
            role: roleDoc._id,
            roleModel,
        });

        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, role: roleModel },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({ user, roleDoc, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const existingUser = await User.findOne({ email })
        await existingUser.populate({path:"role",model:existingUser.roleModel});
        if (!existingUser) {
            return res.status(404).json({ message: "User does not exist" });
        }

        // Compare password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: existingUser._id, role: existingUser.roleModel },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({ user: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { registerUser, loginUser };
