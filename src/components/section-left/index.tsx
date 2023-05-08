import "./style.css";

const Profile = () => {
  return (
    <div className="col-5">
      <h1 className="profile-title">Profile</h1>

      <div className="cart">
        <div className="cart-text">
          <h3>Date of birth:</h3>
          <p>11.12.1990</p>
        </div>
        <div className="cart-text">
          <h3>Phone:</h3>
          <p>+1 293 9283 1921</p>
        </div>
        <div className="cart-text">
          <h3>Mail:</h3>
          <p>samantha@gmail.com</p>
        </div>
        <div className="cart-text">
          <h3>Address:</h3>
          <p>San Francisco, 22021</p>
        </div>
      </div>

      <section className="box-Education">
        <div className="cart-education">
          <h1 className="profile-title">Education</h1>

          <h3>Los Angeles University</h3>
          <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>

          <span>Sep 2010</span>
        </div>

        <div className="cart-education">
          <h1 className="profile-title">New York University</h1>
          <p>Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0</p>

          <span>Sep 2010</span>
        </div>
      </section>

      <section className="box-skill">
        <h3>Skills</h3>

        <ul className="row">
          <li className="col-6 ">Figma</li>
          <li className="col-6"> Photoshop</li>
          <li className="col-6">After Effects</li>
          <li className="col-6">Sketch</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
