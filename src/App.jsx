import Row from "./components/Row";
import requests from "./API/apiRequests";
import "./css/app.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />

      <Banner />

      <Row
        fetchUrl={requests.originals}
        title={"NETFLIX ORGINALS"}
        isLargeRow={true}
      />
      <Row fetchUrl={requests.trending} title={"Trending Now"} />
      <Row fetchUrl={requests.romanceMovies} title={"Romantic Movies"} />
      <Row fetchUrl={requests.horrorMovies} title={"Horror Movies"} />
      <Row fetchUrl={requests.action} title={"Action Movies"} />
      <Row fetchUrl={requests.comedyMovies} title={"Comedy Movies"} />
      <Row fetchUrl={requests.documentaries} title={"Documentaries"} />
    </div>
  );
}
export default App;
