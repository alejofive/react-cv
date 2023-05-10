import "./style.css";

const index = () => {
  return (
    <section>
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
    </section>
  );
};

export default index;
