import mongoose from "mongoose"

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  spotifyUrl: {
    type: String,
    default: ""
  },
  bangerVotes: {
    type: Number,
    default: 0
  },
  cringeVotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Song = mongoose.model("Song", songSchema)

export default Song