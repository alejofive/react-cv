import "./style.css";

const skills = [
  {
    skill1: "Figma",
    skill2: "Photoshop",
    skill3: "After Effects",
    skill4: "Sketch",
  },
];

const Skill = () => {
  return (
    <section className="box-skill">
      <h3>Skills</h3>

      {skills.map((skill) => (
        <ul className="box-skills">
          <li className="">{skill.skill1}</li>
          <li className="">{skill.skill2}</li>
          <li className="">{skill.skill3}</li>
          <li className="">{skill.skill4}</li>
        </ul>
      ))}
    </section>
  );
};

export default Skill;
