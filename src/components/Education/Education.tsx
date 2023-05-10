import "./style.css";

const Educations = [
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

      {Educations.map((Education) => (
        <div className="cart-education">
          <h3>{Education.title}</h3>
          <p>{Education.description}</p>

          <div className="box-span">
            <span>{Education.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
