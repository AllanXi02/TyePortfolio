import Accordion from "./Accordion";
import "./AboutSub1.css";

function AboutSub1() {
  const items = [
    {
      title: "Editable",
      content:
        "The pulp of rose hips can be made into jam with a special flavor. The fruit is rich in vitamin C and vitamin P, which can prevent acute and chronic infectious diseases, coronary heart disease, liver disease and prevent the production of carcinogenic substances.",
    },
    {
      title: "Using as Spice",
      content:
        'Rose is a spice plant, and rose oil, the spice extracted from roses, is expensive on the international market; 1 kg of rose oil is equivalent to 1.25 kg of gold, so some people call it "liquid gold. Certain special aromatic species, such as the Chinese rose and the Bulgarian ink red, are harvested specifically for the purpose of refining expensive rose oil or candied for consumption. ',
    },
    {
      title: "How to grow them",
      content:
        "Roses like full sun, hardy, drought-resistant, like well-drained, loose and fertile loam or light loam soil, in clay loam soil grow poorly, poor flowering. It should be planted in a well-ventilated place, far from the wall, to prevent the reflection of sunlight, burning the buds, affecting flowering.",
    },
  ];

  return (
    <div className="about1"  aria-label="Use OF Rose " >
      <h2>Now, how to Use Rose </h2>
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={<div className="about1__item-content">{item.content}</div>}
        />
      ))}
    </div>
  );
}

export default AboutSub1;
