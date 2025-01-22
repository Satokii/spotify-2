"use client";

import { useState } from "react";

import "./styles/new-playlist.css";
import "./styles/new-playlist-form.css";

function NewPlaylist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("public");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Playlist title is required!");
      return;
    }

    const playlistData = {
      title: title.trim(),
      description: description.trim() || null,
      visibility,
    };

    console.log("Playlist Created:", playlistData);
    alert("Playlist successfully created!");
    setTitle("");
    setDescription("");
    setVisibility("public");
  };

  return (
    <div className="new-playlist-outer-container grid">
      <div className="scrollbar-new-playlist">
        <main className="new-playlist grid">
          <form onSubmit={handleSubmit} className="new-playlist-form">
            <h2 className="new-playlist-title">Create New Playlist</h2>
            {/* <label htmlFor="title" className="new-playlist-label">
              Playlist Title
            </label> */}
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="new-playlist-input"
              placeholder="Add a name"
              required
            />

            {/* <label htmlFor="description" className="new-playlist-label">
              Description (Optional)
            </label> */}
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="new-playlist-textarea"
              placeholder="Add an optional description"
            ></textarea>

            {/* <label htmlFor="visibility" new-playlist-="new-playlist-label">
              Visibility
            </label> */}
            <select
              id="visibility"
              name="visibility"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="new-playlist-select"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>

            <button type="submit" className="new-playlist-button">
              Create Playlist
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default NewPlaylist;
