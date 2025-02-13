"use client";

import { useState } from "react";
import { useClient } from "@/components/ClientContext";
import axios from "axios";

import "./styles/new-playlist.css";
import "./styles/new-playlist-form.css";

function NewPlaylist() {
  const { token, userId } = useClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState(true);
  const [newPlaylistId, setNewPlaylistId] = useState("");
  const [navToNewPlaylist, setNavToNewPlaylist] = useState(false);

  const createPlaylist = async () => {
    const { data } = await axios.post(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        name: title,
        description,
        public: visibility,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNewPlaylistId(data.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Playlist title is required!");
      return;
    }

    await createPlaylist();

    setTitle("");
    setDescription("");
    setVisibility(true);
    setNavToNewPlaylist(true);
  };

  if (navToNewPlaylist === true) {
    setNavToNewPlaylist(false);
    window.location.href = `/user-playlist/${newPlaylistId}`;
  }

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
                    value={true}
                    checked={visibility === true}
                    onChange={(e) => setVisibility(e.target.value === "true")}
                    className="new-playlist-radio-input"
                  />
                  <span>Public</span>
                </label>
                <label className="new-playlist-radio-button">
                  <input
                    type="radio"
                    name="visibility"
                    value={false}
                    checked={visibility === false}
                    onChange={(e) => setVisibility(e.target.value === "true")}
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
