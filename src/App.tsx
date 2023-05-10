import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import Skill from "./components/Skill";

import Employment from "./components/Employment/Employment";
import Worked from "./components/Worked";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="row box ">
          <div className="col-5">
            <Profile />
            <Education />
            <Skill />
          </div>
          <div className="col-7">
            <Employment />
            <Worked />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
