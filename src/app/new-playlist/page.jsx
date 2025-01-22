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

            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="new-playlist-textarea"
              placeholder="Add an optional description"
            ></textarea>

            <div className="new-playlist-visibility-section">
              <div className="new-playlist-radio-group">
                <label className="new-playlist-radio-button">
                  <input
                    type="radio"
                    name="visibility"
                    value="public"
                    checked={visibility === "public"}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="new-playlist-radio-input"
                  />
                  <span>Public</span>
                </label>
                <label className="new-playlist-radio-button">
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    checked={visibility === "private"}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="new-playlist-radio-input"
                  />
                  <span>Private</span>
                </label>
              </div>
            </div>

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
