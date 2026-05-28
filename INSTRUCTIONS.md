# 🎵 Banger or Cringe – Exercise

## What you're building

You've been given a finished React frontend. Your job is to build the backend endpoint that makes the buttons work in the app.

## Getting started

1. Fork the repo from GitHub
2. Clone it to your computer
3. Navigate into the `backend/` folder:
   ```bash
   cd backend
   npm install
   ```
4. Create a `.env` file (your teacher will share the connection string):
   ```
   MONGO_URL=<connection string from teacher>
   PORT=9000
   ```
5. Start the server:
   ```bash
   npm run dev
   ```
6. Start the frontend in a separate terminal window:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

## You'll be working in this file

```
backend/routes/songRoutes.js
```

This is where you add your endpoint. The file already contains `GET` and `POST` from our walkthrough — use them as inspiration!

---

---

# Step 1 – 🔥 Vote BANGER

**Your task:** When someone clicks the 🔥 BANGER button, `bangerVotes` should increase by 1 in the database.

### Your endpoint

```
PATCH /api/songs/:id/banger
```

`:id` is the song's unique id in MongoDB.

### Hints

- Use `Song.findByIdAndUpdate()` to update a document
- `$inc` is a MongoDB operator that increases a value by a given number
- `{ new: true }` makes the function return the *updated* document

### Skeleton to get you started

```javascript
router.patch("/:id/banger", (req, res) => {
  Song.findByIdAndUpdate(req.params.id, { /* what goes here? */ }, { new: true })
    .then((result) => {
      // Send the result back to the client
    })
    .catch(() => {
      res.status(400).json({ error: "Could not update song" })
    })
})
```

### You're done when...

The 🔥 BANGER button in the frontend increases the counter on the correct song.

---

---

# Step 2 – 💀 Vote CRINGE

**Your task:** When someone clicks the 💀 CRINGE button, `cringeVotes` should increase by 1 in the database.

### Your endpoint

```
PATCH /api/songs/:id/cringe
```

`:id` is the song's unique id in MongoDB.

### Hints

- Use `Song.findByIdAndUpdate()` to update a document
- `$inc` is a MongoDB operator that increases a value by a given number
- `{ new: true }` makes the function return the *updated* document

### Skeleton to get you started

```javascript
router.patch("/:id/cringe", (req, res) => {
  // similar to banger endpoint
})
```

### You're done when...

The 💀 CRINGE button in the frontend increases the counter on the correct song.

---

---

# Step 3 – ✕ Delete a song (Bonus)

**Your task:** When someone clicks ✕ Delete, the song should be removed from the database and disappear from the list.

### Your endpoint

```
DELETE /api/songs/:id
```

`:id` is the song's unique id in MongoDB.

### Hints

- Use `Song.findByIdAndDelete()` to remove a document
- Once deleted, send back a confirmation message

### Skeleton to get you started

```javascript
router.delete("/:id", (req, res) => {
  // Some way to get the song with the specific id and use a delete method.
    .then((result) => {
      // Send a confirmation message back to the client
    })
    .catch(() => {
      res.status(400).json({ error: "Could not delete song" })
    })
})
```

### You're done when...

The ✕ Delete button in the frontend removes the song from the list.

---

---

## 💡 General tips

- **Run the server with `npm run dev`** — it restarts automatically when you save
- **Read the error messages in the terminal** — they usually tell you exactly what went wrong
- **Ask the AI** — but make sure you understand the answer before you paste it in!
- **Look at GET and POST** already in the file — your endpoint follows the same pattern

## 🏁 When all groups are done

We'll test the live app together against the shared database!