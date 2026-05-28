import express from "express"
import Song from "../models/Song.js"

const router = express.Router()

// GET /api/songs - fetch all songs
router.get("/", (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(500).json({ error: err.message }))
})

// POST /api/songs - add a new song
router.post("/", (req, res) => {
  const { title, artist, spotifyUrl } = req.body
  const song = new Song({ title, artist, spotifyUrl }) // save the song in the format that we specify in the model
  song.save()
    .then((savedSong) => {
      res.status(201).json(savedSong)
    })
    .catch((error) => {
      res.status(400).json({ error: "Could not save song" })
    })
})

// PATCH /api/songs/:id/banger - add one banger vote
router.patch("/:id/banger", (req, res) => {
  const { id } = req.params
  Song.findByIdAndUpdate(
    id, // what song to update
    { $inc: { bangerVotes: 1 } }, // how to update (increment bangerVotes by 1)
    { new: true } // return the updated version instead of original
  )
    .then((song) => {
      res.json(song)
    })
    .catch((error) => {
      res.status(400).json({ error: "Could not update song" })
    })
})

// PATCH /api/songs/:id/cringe - add one cringe vote
router.patch("/:id/cringe", (req, res) => {
  const { id } = req.params
  Song.findByIdAndUpdate(
    id,
    { $inc: { cringeVotes: 1 } },
    { new: true }
  )
    .then((song) => {
      res.json(song)
    })
    .catch((error) => {
      res.status(400).json({ error: "Could not update song" })
    })
})

// DELETE /api/songs/:id - delete a song
router.delete("/:id", (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ message: "Song deleted" })
    })
    .catch((error) => {
      res.status(400).json({ error: "Could not delete song" })
    })
})

export default router
