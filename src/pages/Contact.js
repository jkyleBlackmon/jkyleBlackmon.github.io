import React, {useState, useEffect} from 'react';
import './Contact.css';

const url = "https://script.google.com/macros/s/AKfycbytqDw5bp-6zufFgPyVrhXIJyP5Wev35v3q0uLABdSYHNKum7IPEqGOfRRjOhJ8wVJT/exec";


const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const submitContactRequest = () => {
        const data = {
            name: name,
            email: email,
            message: message
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.error(err));
    };

    const handleNameChange = (event) => {
        const val = event.target.value;
        setName(val);
    };
    const handleEmailChange = (event) => {
        const val = event.target.value;
        setEmail(val);
    };
    const handleMessageChange = (event) => {
        const val = event.target.value;
        setMessage(val);
    }


    useEffect(() => {
        console.log(`Email: ${JSON.stringify(email)}\nName:${JSON.stringify(name)}\nMessage:${JSON.stringify(message)}`);
    },[email, name, message]);

    return(
        <div className='contact-container'>
            <div className='contact-header'>
                <h1>Contact Me</h1>
                <h3>Enter your name and email below and let's chat!</h3>            
            </div>
            <div className='contact-form-body'>
                <form id='contact-form'>
                    <div className='contact-form-name-email'>
                        {/* NAME */}
                        <label for='name'>Name:</label>
                        <input type='text' id='name' name='name' onChange={handleNameChange} required/>
                        {/* EMAIL */}
                        <label for='email'>Email:</label>
                        <input type='email' id='email' name='email' onChange={handleEmailChange} required/>
                    </div>
                    <div className='contact-form-message'>
                        {/* MESSAGE */}
                        <label for='message'>Message:</label>
                        <textarea id='message' name='message' rows='4' cols='100' onChange={handleMessageChange} required/>                        
                    </div>
                </form>
                <button className='submit' onClick={submitContactRequest}>
                    <h3>Submit</h3>
                </button>
            </div>
        </div>
    );
};

export { Contact };