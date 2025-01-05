import React from 'react'
import '../Contact page/Contact.css'
export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ee9d6e36-73de-44e6-ba02-fa5d4caf36ea");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (


      <div className='contact' id='inputs'>
        <h1 className='C-1'>Contact</h1>
        <br />
        <br />
        <form onSubmit={onSubmit}>
          <input type="text" name="name" required className='i-name' placeholder='Enter Your Name'/>
          <input type="number" name="number" required className='i-num' placeholder='Enter Your Phone Number'/>
          <textarea name="message" required className='i-comm' placeholder='Commit Your Feedback' rows={5} cols={21}></textarea>
          <button type="submit" className='btn'>Submit Form</button>
        </form>
        <span>{result}</span>
  
      </div>
    );
  }
  