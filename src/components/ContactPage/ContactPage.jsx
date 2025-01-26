import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <div className="Contact__page">
        <div className="Contact__page-div">
          <h1 className="contact-text">CONTACT</h1>
          <h1 className="contact-h1">Want to chat?</h1>
        </div>
        <div className="Contact__mail__number">
          <div className="contact__mail">owner@email.com</div>
          <div className="contact__number">478-334-8505</div>
        </div>
        <div className="Contact__blog">
          <p className="contact__p">You can send me an email, but why not call? People don't call anymore... Call me!</p>
          <input className="contact__name" type="name" placeholder="enter your name" />
          <input className="contact__email" type="email" placeholder="enter your email" />
          <textarea className="contact__message" placeholder="enter your message" name="" id=""></textarea>
          <button className="contact__btn"><h2>Submit message</h2></button>
        </div>
      </div>
    </>
  );
}