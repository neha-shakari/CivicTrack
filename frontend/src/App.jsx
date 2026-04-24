import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import IssueList from "./pages/IssueList";

function App() {
  return (
    <div style={{ fontFamily: "Arial", background: "#f5f7fb", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
        <Home />
        <ReportIssue />
        <IssueList />
      </div>
    </div>
  );
}

export default App;
