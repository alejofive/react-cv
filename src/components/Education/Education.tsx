import "./style.css";

const educations = [
  {
    title: "Los Angeles University",
    description: "Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0",
    date: "Sep 2010",
  },
  {
    title: "New York University",
    description: "Bachelor of Fine Arts in Graphic Design, GPA: 3.4/4.0",
    date: "Sep 2010",
  },
];

const Education = () => {
  return (
    <section className="box-Education">
      <h1 className="education-title">Education</h1>

      {educations.map((education) => (
        <div className="cart-education">
          <h3>{education.title}</h3>
          <p>{education.description}</p>

          <div className="box-span">
            <span>{education.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
