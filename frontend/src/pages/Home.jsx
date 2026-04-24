function Home() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Welcome to CivicTrack 🚀</h1>

      <p>
        Report civic issues like potholes, garbage, drainage, broken roads and more.
      </p>

      <button style={{ padding: "10px 15px", marginTop: "10px" }}>
        Report an Issue
      </button>

      <h2 style={{ marginTop: "30px" }}>Issue Categories</h2>

      <ul>
        <li>🕳️ Potholes</li>
        <li>🗑️ Garbage</li>
        <li>💡 Streetlights</li>
        <li>🚧 Broken Roads</li>
        <li>🌊 Drainage</li>
      </ul>
    </div>
  );
}

export default Home;