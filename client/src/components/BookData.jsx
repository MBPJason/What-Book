import React from "react";

export default function BookData(props) {
  return (
    <div>
      <li id={props.id} className='list-group-item'>
        <h3>{props.title}</h3>
        <h6>Written by: {props.authors[0]}</h6>
        <p>{props.description}</p>
        <img src={props.thumbnail} alt={props.title} />
        <button className=" btn btn-success btn-text" onClick={() => props.saveBook(props.id)}>Add to Collection</button>
      </li>
    </div>
  );
}
