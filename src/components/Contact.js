import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sucessmsg, setsucessmsg] = useState("");
  async function SubmitHandler(event) {
    event.preventDefault();
    const contact = { name, email, number };
    try {
      await fetch(
        "https://ecommrece-it-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setsucessmsg("Response has been recored");
      setName("");
      setEmail("");
      setNumber("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email"> E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="number">Phone No:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {sucessmsg && <p>{sucessmsg}</p>}
    </div>
  );
};
export default Contact;
