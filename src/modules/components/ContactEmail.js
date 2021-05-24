import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function ContactUs(props) {

  function sendEmail(e) {
    emailjs.init("user_YUA1db7jgxQAdA13IE9sC");
    e.preventDefault();
    console.log(emailjs);
    emailjs.sendForm('service_b8yqh3m', 'template_prlzb3x', e.target, 'user_YUA1db7jgxQAdA13IE9sC')
      .then((result) => {
          console.log(result.text);
          props.handlePop();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div class="form-group">
        <TextField
           autoFocus
           required
           margin="dense"
           id="name"
           label="First Name"
           type="text"
           name="first_name"
           style={{width:'50%', paddingRight:'10px'}}
        />
        <TextField
           required
           margin="dense"
           id="name"
           label="Last Name"
           type="text"
           name="last_name"
           style={{width:'50%'}}
        />
        <TextField
           required
           margin="dense"
           id="name"
           label="Company Name"
           type="text"
           name="business_name"
           fullWidth
        />
        <TextField
           required
           margin="dense"
           id="name"
           label="Phone Number"
           type="tel"
           name="contact_number"
           fullWidth
         />
         <TextField
            required
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            name="user_email"
          /> 
        {/*<label>Message</label>
        <textarea name="message" />*/}
        <div style={{display:'flex', flexDirection:'row', padding: '15px 0 15px 0', justifyContent:'flex-end'}}>
          <Button onClick={props.handlePop} color="primary.dark">
            Cancel
          </Button>
          <Button type="submit" color="secondary">
            Send
          </Button>
        </div>
        {/*<input type="submit" class="btn btn-primary mv-btn" value="Send" />*/}
      </div>
    </form>
  );
}