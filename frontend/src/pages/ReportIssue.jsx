import { useState } from "react";

function ReportIssue() {
  const [form, setForm] = useState({
    name: "",
    type: "Pothole",
    description: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    console.log("Saved:", data);

    alert("Issue submitted successfully!");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Report Issue</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <br /><br />

        <select name="type" onChange={handleChange}>
          <option>Pothole</option>
          <option>Garbage</option>
          <option>Broken Road</option>
          <option>Streetlight</option>
          <option>Drainage</option>
        </select>

        <br /><br />

        <textarea
          name="description"
          placeholder="Describe issue"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportIssue;