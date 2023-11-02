import React, { useState } from "react";
import "./App.css";



function Message() {
    const greeting = 'Hello, React.js!';
    const description = 'Welcome to the world of React.js';
  
    return (
      <div>
        <h1>{greeting}</h1>
        <p>{description}</p>
      </div>
    );
  }

  export default Message;