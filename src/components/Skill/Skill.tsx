import "./style.css";

const skills = ["Figma", "Photoshop", "After Effects", "Sketch"];

const Skill = () => {
  return (
    <section className="box-skill">
      <h3>Skills</h3>

      <ul className="box-skills">
        {skills.map((skill) => (
          <li className="">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skill;
