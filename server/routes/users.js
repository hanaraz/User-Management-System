import express from "express";
import User from "../models/User.js";

const route = express.Router();

route.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

route.post("/", async(req, res) => {
    const user = req.body;
    try {
        const newUser = new User(user);
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

route.patch("/:id", async(req, res) => {
    const id = req.params.id;
    const user = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

route.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted succesfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

export default route;