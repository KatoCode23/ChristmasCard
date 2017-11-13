import React from 'react';

export default function Card (props) {
    return (
      <div className="card-container">
        <div className="card">
          <div>Merry Christmas {props.receiver}!</div>
          <small>- From {props.sender}</small>
          <div>{props.message}</div>
        </div>
      </div>
  );
}
