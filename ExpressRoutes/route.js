const express = require("express");
const router = express.Router();
const User = require("../Mongoose/userSchema");
const Todo = require("../Mongoose/todoSchema");
const Routine = require("../Mongoose/routineSchema");
const CustomLocations = require("../Mongoose/customLocationSchema");

const Note = require("../Mongoose/notesSchema");
const axios = require("axios");
let weatheAPIfetchCounter = 0;

// const getTodoData = require("./getTodo");

// Create a new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new todo
router.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//to delet todo

router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting event with ID:", id);
    await Todo.findByIdAndDelete(id);
    res.status(204).end(); // Success, no content
  } catch (error) {
    console.log("request reach backend router");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/routines", async (req, res) => {
  try {
    const routines = await Routine.find();
    res.status(200).json(routines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/routines", async (req, res) => {
  try {
    const newRoutine = new Routine(req.body);
    await newRoutine.save();
    res.status(201).json(newRoutine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//delet routine
router.delete("/routines/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Routine.findByIdAndDelete(id);
    res.status(204).end(); // Success, no content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/weather", async (req, res) => {
  try {
    const weatherApiURL = process.env.WEATHER_API_URL;
    const apiKey = process.env.WEATHER_API_KEY;
    const city = req.query.city;

    const url = `${weatherApiURL} ${city}&APPID=${apiKey}`;

    const response = await axios.get(url);
    const weatherData = response.data;
    res.status(200).json(weatherData);
    weatheAPIfetchCounter++;
    console.log(
      `Total weather API calls since starting server : ${weatheAPIfetchCounter}`
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching weather data");
  }
});

//for adding costom locations
router.post("/addlocation", async (req, res) => {
  try {
    const newLocation = new CustomLocations(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//for getting added locations

router.get("/locations", async (req, res) => {
  try {
    const locations = await CustomLocations.find();
    res.status(200).json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//deleting costom locations.

router.delete("/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CustomLocations.findByIdAndDelete(id);
    res.status(204).end(); // Success, no content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get notes
router.get("/notes", async (req, res) => {
  try {
    const fetchedNotes = await Note.find();
    res.status(200).json(fetchedNotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// add a new note
router.post("/notes", async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delet note

router.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(204).end(); // Success, no content
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// ... balance routes ...

module.exports = router;
