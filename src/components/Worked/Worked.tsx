import "./style.css";

const workedImages = [
  {
    img1: "./img/amazon.png",
    img2: "./img/apple.png",
    img3: "./img/facebook.png",
  },
];

const Worked = () => {
  return (
    <>
      <section className="box-worked">
        <h1>Worked with</h1>
        {workedImages.map((workedImage) => (
          <div className="worked-img">
            <img src={workedImage.img1} alt="" />
            <img src={workedImage.img2} alt="" />
            <img src={workedImage.img3} alt="" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Worked;
