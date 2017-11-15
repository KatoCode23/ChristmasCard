import React from 'react';

export default function Card (props) {
    return (
      <div className="card-container">
        <div className="card">
          <p className="merry-christmas">Merry Christmas {props.receiver}!</p>
          <p className="message">{props.message}</p>
          <div className="from"><p>- From {props.sender}</p></div>
        </div>
      </div>
  );
}
