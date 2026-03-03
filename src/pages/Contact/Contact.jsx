import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  return (
    <section className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;