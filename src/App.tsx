import "./App.css";
import Header from "./components/Header";
import Profile from "./components/section-left";
import Employment from "./components/section-right";

function App() {

  

  return (
    <>
      <div className="container">
        <Header />
        <section className="row box">
          <Profile />
          <Employment />
        </section>
      </div>
    </>
  );
}

export default App;
