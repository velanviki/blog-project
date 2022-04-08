import React from 'react'
import emailjs from 'emailjs-com'
import "./contact.css";

function Contact() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jjpe6ed', 'template_w4ch3or', e.target, 'zroNc2HI29DbchIDy')
      .then((result) => {
        console.log(result.text)
          alert("Mail Sent Successfully!!");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


  return (
    <>
    
    <div class="container contact" id="contact">
        <div class="row">
        <h2>CONTACT</h2>
            <div class="col-md-3" >
            
                <div class="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="mail"/>
                    
                    
                 
                </div>
                <h4 id="quote"> Love to hear from you !</h4>
           
            </div>
            
            <div class="col-md-9">
            <form  onSubmit={sendEmail}>
                <div class="contact-form">
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="fname">FirstName:</label>
                      <div class="col-sm-10">          
                        <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="lname">LastName:</label>
                      <div class="col-sm-10">          
                        <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="email">Email:</label>
                      <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="control-label col-sm-2" for="comment">Message:</label>
                      <div class="col-sm-10">
                        <textarea class="form-control" rows="5" id="comment" placeholder="Your message" name="message"></textarea>
                      </div>
                    </div>
                    <div class="form-group">        
                      <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default" value="Send Message">Submit</button>
                      </div>
                    </div>
                 
                </div>
                </form>
            </div>
          
        </div>
    </div>
    </>
  )
}

export default Contact

