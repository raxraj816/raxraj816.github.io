import { Person, Mail } from "@material-ui/icons";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="itemContainer">
          <Person className="icon" />
          <span>+91-7387679566</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon" />
          <span>raxraj816@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
