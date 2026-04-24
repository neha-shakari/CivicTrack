import { useEffect, useState } from "react";

function IssueList() {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const res = await fetch("http://localhost:8080/api/issues");
    const data = await res.json();
    setIssues(data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>📍 Reported Issues</h1>

      {issues.length === 0 ? (
        <p>No issues reported yet</p>
      ) : (
        issues.map((issue) => (
          <div
            key={issue.id}
            style={{
              background: "white",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{issue.type}</h3>
            <p><b>Name:</b> {issue.name}</p>
            <p><b>Description:</b> {issue.description}</p>
            <p><b>Location:</b> {issue.location}</p>
            <p><b>Status:</b> {issue.status}</p>
          </div>
        ))
      )}

      <button onClick={fetchIssues} style={{ marginTop: "10px" }}>
        Refresh
      </button>
    </div>
  );
}

export default IssueList;