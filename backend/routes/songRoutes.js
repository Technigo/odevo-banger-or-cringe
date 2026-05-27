import express from "express"
import Song from "../models/Song.js"

const router = express.Router()

router.get("/", (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json({ error: err.message }))
})

export default router
