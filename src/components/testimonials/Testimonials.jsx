import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Giraldo Rosales",
      title: "CEO of Nitrogen Labs, Inc",
      img: "assets/giraldo.jpg",
      icon: "assets/linkedin.png",
      desc: "It was an amazing experience to work with Raj during our time at Hitch Works, collaborating on various Project concepts and implementations. I was particularly impressed by Raj’s ability to take ideas to the next level.",
    },
    {
      id: 2,
      name: "Amol Deole",
      title: "Senior Developer",
      img: "assets/amol.jpg",
      icon: "assets/linkedin.png",
      desc: "Raj Kumar did an exceptional job on our projects with him at Tudip Technologies. As I remember, Raj Kumar was a very productive person and is a multi-skilled person with vast knowledge. He is careful, proactive, self motivated and intelligent team player.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d?.id} className="card">
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
