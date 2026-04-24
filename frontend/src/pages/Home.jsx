function Home() {
  const cards = [
    { icon: "🕳️", title: "Potholes" },
    { icon: "🗑️", title: "Garbage" },
    { icon: "💡", title: "Streetlights" },
    { icon: "🚧", title: "Broken Roads" },
    { icon: "🌊", title: "Drainage" }
  ];

  return (
    <div>
      <h1>Welcome to CivicTrack 🚀</h1>
      <p>Report civic issues in your area instantly.</p>

      <button
        style={{
          padding: "10px 15px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          marginTop: "10px"
        }}
      >
        Report Issue
      </button>

      <h2 style={{ marginTop: "30px" }}>Issue Categories</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
        {cards.map((c, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "30px" }}>{c.icon}</div>
            <h3>{c.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;