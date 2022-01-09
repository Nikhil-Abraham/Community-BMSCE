import React, { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState("");
  const [semester, setSem] = useState("");
  const [linked_in, setLink] = useState("");
  const [github, setGithub] = useState("");

  async function UserProfile(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        bio,
        profile,
        semester,
        linked_in,
        github,
      }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={UserProfile}>
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          type="image"
          
          />
          <br  />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          type="text"
          placeholder="bio"
        />
        <br />
        <input
          value={semester}
          onChange={(e) => setSem(e.target.value)}
          type="text"
          placeholder="semester"
        />
        <br />
        <input
          value={linked_in}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder="LinkedIn link"
        />
        <br />
        <input
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          type="text"
          placeholder="Github link"
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}
