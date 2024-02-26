import HNavbar from "./Home-nav";
import "./Home.css";
import FileReaderPage from "./FileReaderPage";
function Home() {
  return (
    <>
      <div className="Home">
        <HNavbar />
      </div>
      <div>
        <FileReaderPage />
      </div>
    </>
  );
}

export default Home;
