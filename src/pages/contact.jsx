import { useState } from "react";
import "./contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleForm() {
    console.log("Saving");
    console.log(name);
    console.log(email);
    console.log(message);

    setName("");
    setEmail("");
    setMessage("");
  }

  function handleChange(e) {
    let text = e.target.value;
    setName(text);
  }

  function handleEmail(e) {
    let text = e.target.value;
    setEmail(text);
  }
  function handleMessage(e) {
    let text = e.target.value;
    setMessage(text);
  }

  return (
    <div className="form">
      <h4 className="h4">Tell u show we are doing??</h4>

      <div>
        <label className="form-label">Name</label>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div>
        <label className="form-label">Email</label>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div>
        <label className="form-label">Message</label>
        <textarea
          onChange={handleMessage}
          value={message}
          rows="3"
          className="form-control"
        ></textarea>
      </div>

      <div>
        <button onClick={handleForm} className="btn btn-primary">
          Send message
        </button>
      </div>
    </div>
  );
}

export default Contact;
