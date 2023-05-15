import "./style.css";

const userHeader = [
  {
    name: "Alejandro Garcia",
    profile: "Front Developer",
    banner: "./img/Background.png",
    user: "./img/Photo.png",
  },
];

const Header = () => {
  return (
    <header>
      {userHeader.map((item) => (
        <div className="container-header">
          <img className="banner" src={item.banner} alt="" />

          <img className="logo-user" src={item.user} alt="" />
          <h1>{item.name}</h1>
          <h3>{item.profile}</h3>
        </div>
      ))}
    </header>
  );
};

export default Header;
