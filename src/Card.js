import React from 'react';

export default function Card (props) {
    return (
       <h1>Merry Christmas {props.receiver}! - From {props.sender}</h1>
  );
}
