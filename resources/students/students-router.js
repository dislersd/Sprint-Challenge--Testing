const router = require("express").Router();
const db = require("./students-model");

router.get("/", async (req, res) => {
  try {
    const students = await db.getAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "error getting students" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await db.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "error retrieving student" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.body.title && req.body.genre) {
      const newstudent = await db.insert(req.body);
      res.status(201).json(newstudent);
    } else {
      res.status(422).json({ message: "please give more info" });
    }
  } catch (error) {
    res.status(500).json({ message: "error posting" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const change = await db.update(id, req.body);
    res.status(200).json(change);
  } catch (error) {
    res.status(500).json({ message: "error updating" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "student successfully deleted" });
    } else {
      res.status(404).json({ message: "No student with that ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "error deleting" });
  }
});

module.exports = router;
