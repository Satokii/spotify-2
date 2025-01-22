"use client";

import { useState } from "react";

import "./styles/new-playlist.css"
import "./styles/new-playlist-form.css"

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
          <form onSubmit={handleSubmit} className="form">
            <h2 className="title">Create New Playlist</h2>
            <label htmlFor="title" className="label">
              Playlist Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              placeholder="Enter playlist title"
              required
            />

            <label htmlFor="description" className="label">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea"
              placeholder="Enter playlist description"
            ></textarea>

            <label htmlFor="visibility" className="label">
              Visibility
            </label>
            <select
              id="visibility"
              name="visibility"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="select"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>

            <button type="submit" className="button">
              Create Playlist
            </button>
          </form>
          {/* <section className="new-playlist--sub-container grid"></section> */}
        </main>
      </div>
    </div>
  );
}

export default NewPlaylist;
