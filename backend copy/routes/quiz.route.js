import express from "express";
import { createQuiz, getQuizzes, updateQuiz, deleteQuiz } from "../controllers/quiz.controller.js";


const router = express.Router();


//Get routes
router.get("/all-quizes", getQuizzes);

//Post routes
router.post("/create-quiz", createQuiz);

//Put routes
router.put("/update-quiz/:id", updateQuiz);

//Delete routes
router.delete("/delete-quiz/:id", deleteQuiz);


export default router;