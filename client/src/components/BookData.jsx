import React from "react";

export default function BookData(props) {
  return (
    <div>
      <li id={props.id} className='list-group-item'>
        <h3>{props.title}</h3>
        <h6>Written by: {props.authors}</h6>
        <p>{props.description}</p>
        <img src={props.thumbnail} alt={props.title} />
        <div>
        <button className="btn btn-primary btn-text" onClick={() => props.viewBook(props.link)}>View</button>
          {props.onSearch ? (
            <button
              className=' btn btn-success btn-text'
              onClick={() => props.saveBook(props.id)}
            >
              Add
            </button>
          ) : (
            <button
              className='btn btn-danger btn-text'
              onClick={() => props.deleteBook(props.id)}
            >
              Delete
            </button>
          )}
        </div>
      </li>
    </div>
  );
}
