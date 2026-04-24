function Navbar() {
  return (
    <nav
      style={{
        background: "#1e293b",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <h2>CivicTrack</h2>

      <div>
        <span style={{ marginRight: "20px", cursor: "pointer" }}>Home</span>
        <span style={{ cursor: "pointer" }}>Report</span>
      </div>
    </nav>
  );
}

export default Navbar;