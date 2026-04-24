function Navbar() {
  return (
    <nav
      style={{
        background: "#0f172a",
        color: "white",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0 }}>CivicTrack</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span style={{ cursor: "pointer" }}>Home</span>
        <span style={{ cursor: "pointer" }}>Report Issue</span>
      </div>
    </nav>
  );
}

export default Navbar;