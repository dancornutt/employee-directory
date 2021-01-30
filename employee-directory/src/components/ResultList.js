import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id.value}>
          <img alt={result.name.first}  className="img-fluid" src={result.picture.medium} />
          <p>{result.name.first}</p>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;