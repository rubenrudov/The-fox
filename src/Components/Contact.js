import emailjs, { init } from "emailjs-com";
import './contact.css'

function Contact() {
    init("user_dCqzHqWEwMDKo6ezAOSR2");

    function sendEmail(e) {
        e.preventDefault();
        emailjs.send("hazaken_project_id","template_alywu9l", {
            "name": document.getElementById("name").value,
            "email": document.getElementById("email").value,
            "subject": "From: " + document.getElementById("name").value ,
            "message": document.getElementById("message").value
        })
        .then((result) => {
            console.log(result.text + " Successful");
        }, (error) => {
            console.log(error.text + " Failed");
      });
      e.target.reset()
    }

    return (
        <div className="container">
            <h1>Contact us: </h1>
            <form onSubmit={sendEmail}>
                <center>
                <div className="row">
                    <div className="col-25">
                        <label for="name">Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="name" name="name" placeholder="What's your name ?"/>
                    </div> 
                </div>

                <div className="row">
                        <div className="col-25">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="email" name="email" placeholder="Your E-mail goes here"/>
                        </div>
                </div>

                
                <div className="row">
                    <div className="col-25">
                        <label for="message">Message</label>
                    </div>
                    <div className="col-75">
                        <textarea id="message" name="message" placeholder="How may we help you ?"/>
                    </div>
                </div>

                <br/>

                <div className="row">
                    <input type="submit" value="Submit"/>
                </div>
                </center>
            </form>
        </div>
    );
}

export default Contact;