import "./styles/Contact.css";
import { useState } from 'react';

const Contact = () => {

  const [openForm, setOpenForm] = useState(false);
  const buttonHandler = () => setOpenForm(!openForm);

  return (
    <div className="contact" id="contact">
      <p className="contact__title">CONTACT</p>
      <section className="contact__text">
        <p>
        I would love to hear from you! <br />
        I am currently available for a full-time position (full-stack | front-end | back-end) through{" "}
        <a href="https://salt.study/" target="_blank" rel="noreferrer" className="salt-link">(&lt;/salt&gt;)</a>.<br/>
        <br/>
        Contact Salt's sales team at <a href="mailto: consultants@salt.dev" className="contact__email-salt">consultants@salt.dev</a>{" "}
        or click <button className="contact-button" onClick={buttonHandler}>HERE</button> to reach me.
        </p>
      </section>

        {openForm && 
        <form action="https://getform.io/f/a6107296-24d3-428e-a53d-1d557db5f359" method="post">
            <label for="form__name">name:</label><br/>
            <input type="text" id="form__name" name="form__name"/><br/>
            <br/>
            <label for="form__email">email:</label><br/>
            <input type="email" id="form__email" name="form__email"/><br/>
            <br/>
            <label for="form__message">message:</label><br/>
            <input type="text" id="form__message" name="form__message"/><br/>
            <br/>
            <input type="submit" className="form__button" value="SEND"></input>
        </form>}

    </div>
  );
};

export default Contact;
