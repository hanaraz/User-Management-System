import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
    res.send("THIS IS THE USER ROUTE")
});

export default route;