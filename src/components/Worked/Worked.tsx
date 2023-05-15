import "./style.css";

const workedImages = [
  "./img/amazon.png",
  "./img/apple.png",
  "./img/facebook.png",
];

const Worked = () => {
  return (
    <>
      <section className="box-worked">
        <h1>Worked with</h1>
        <div className="worked-img">
          {workedImages.map((workedImage) => (
            <img src={workedImage} alt="" />
          ))}
        </div>
      </section>
    </>
  );
};

export default Worked;
