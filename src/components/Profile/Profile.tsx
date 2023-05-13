import "./style.css";

const dataProfiles = [
  {
    birth: "11.12.1990",
    phone: "+1 293 9283 1921",
    address: "San Francisco, 22021",
    email: "samantha@gmail.com",
  },
];

const Profile = () => {
  return (
    <section>
      <h1 className="profile-title">Profile</h1>
      {dataProfiles.map((profile) => (
        <div className="cart">
          <div className="cart-text">
            <h3>Date of birth:</h3>
            <p>{profile.birth}</p>
          </div>
          <div className="cart-text">
            <h3>Phone:</h3>
            <p>{profile.phone}</p>
          </div>
          <div className="cart-text">
            <h3>Mail:</h3>
            <p>{profile.email}</p>
          </div>
          <div className="cart-text">
            <h3>Address:</h3>
            <p>{profile.address}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Profile;
