import "./style.css";

const employments = [
  {
    title: "UI Designer at Market Studios",
    description:
      "Successfully translated subject matter into concrete design for newsletters, promotional materials and sales collateral. Created design graphics for marketing and sales presentations, training videosand corporate websites.",
    date: "Oct 2012 — Sep 2015",
  },
  {
    title: "Graphic Designer at FireWeb",
    description:
      "Created new design themes for marketing and collateral materials. Collaborated with creative team to design and produce computer-generated artwork for marketing and promotional materials.",
    date: "Oct 2015 — Jan 2018",
  },
  {
    title: "Graphic Designer at 5Tech",
    description:
      "Developed numerous marketing programs (logos, brochures, newsletters, infographics, presentations, and advertisements) and guaranteed that they exceeded the expectations of our clients.",
    date: "Feb 2018 — Apr 2018",
  },
];

const Employment = () => {
  return (
    <>
      <h1 className="employment-title">Employment</h1>
      {employments.map((employment) => (
        <div className="box-text-employment">
          <div className="employment-text-title">
            <h4>{employment.title}</h4>
            <span>{employment.date}</span>
          </div>
          <p>{employment.description}</p>
        </div>
      ))}
    </>
  );
};

export default Employment;
