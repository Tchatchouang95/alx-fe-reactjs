import './StyleApp.css'
import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div className='size ' 
            style={{
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center'
            }}>
         <h1 style={{fontSize: '60px', textAlign: 'center'}}>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ 
                width: '100%',
                margin: '15px 0',
                borderRadius: '10px',
                padding: '10px',
                border: '1px solid grey'
            }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{
                width: '100%',
                margin: '15px 0',
                borderRadius: '10px',
                padding: '10px',
                border: '1px solid grey'
            }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{
                width: '100%',
                margin: '15px 0',
                borderRadius: '10px',
                padding: '10px',
                border: '1px solid grey',
                height: '100px'
            }}
           />
           <button 
             type="submit" 
             style={{
               padding: '15px 30px',
               borderRadius: '10px',
               border: 'none',
               backgroundColor: 'black',
               color: 'white',
               margin: '10px'
               }}
               >
                Send Message
            </button>
         </form>
       </div>
     );
   }

   export default Contact;