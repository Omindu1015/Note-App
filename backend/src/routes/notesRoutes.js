import express from 'express';
import { getAllNotes, createNote, deleteNote, updateNote, getNoteById } from '../controllers/notesController.js';

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/",createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);



export default router;

//mongodb+srv://ominduviva840:VxS0ABaRAy6NOFwu@cluster0.dzsovn6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

