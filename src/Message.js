import React from 'react';



export default function Message (props) {
    return (
  <div className="card-container">
    <div className="message">
      <textarea>{props.message}</textarea>
    </div>
  </div>
    );
  }
