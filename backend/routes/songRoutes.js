import express from "express"
import Song from "../models/Song.js"

const router = express.Router()

router.get("/", (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.post("/", (req, res) => {
  const { title, artist, spotifyUrl } = req.body
  const song = new Song({ title, artist, spotifyUrl })
  song.save().then((savedSong) => {
    res.status(201).json(savedSong)
  }).catch((error) => {
    res.status(400).json({ error: "Could not save song" })
  })
})

export default router
