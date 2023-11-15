'use client'

import React from 'react';

function EmailButton() {

    const sendEmail = () => {
      const email = 'willeli2002@gmail.com';
      const subject = 'ADVENTURE AWAITS!';
      const body = 'You are so cool!';
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    };

    return (<button onClick={sendEmail} className="text-lg">Contact Us</button>)
}

export default EmailButton