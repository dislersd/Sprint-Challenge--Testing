const router = require("express").Router();
const db = require('./games-model.js');

router.get("/", async (req, res) => {
  try {
    const games = await db.getAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: "error getting games" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await db.findById(id);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "error retrieving game" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.body.title && req.body.genre) {
      const newgame = await db.insert(req.body);
      res.status(201).json(newgame);
    } else {
      res.status(422).json({ message: 'please give more info' })
    }
 
  } catch (error) {
    res.status(500).json({ message: "error posting" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const change = await db.update(id, req.body)
    res.status(200).json(change)
  } catch (error) {
    res.status(500).json({ message: 'error updating' })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: 'Game successfully deleted' });
		} else {
			res.status(404).json({ message: 'No game with that ID' });
		}
  } catch (error) {
    res.status(500).json({ message: 'error deleting' })
  }
})

module.exports = router;
