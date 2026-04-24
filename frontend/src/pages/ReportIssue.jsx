function ReportIssue() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Report an Issue</h1>

      <input
        placeholder="Your Name"
        style={{ padding: "10px", width: "300px" }}
      />
      <br /><br />

      <select style={{ padding: "10px", width: "320px" }}>
        <option>Pothole</option>
        <option>Garbage</option>
        <option>Broken Road</option>
        <option>Streetlight</option>
        <option>Drainage</option>
      </select>

      <br /><br />

      <textarea
        placeholder="Describe the issue"
        rows="4"
        style={{ padding: "10px", width: "300px" }}
      ></textarea>

      <br /><br />

      <input
        placeholder="Area / Location"
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <button
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ReportIssue;