import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ResultList(props) {
  console.log("From ResultList", props);
  return (
    <ul className="list-group">
      {props.results.map(result => (
        // <li className="list-group-item" key={result.id.value}>
        //   <img alt={result.name.first}  className="img-fluid" src={result.picture.medium} />
        //   <p>{result.name.first}</p>
        // </li>
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={result.picture.large} />
          <Card.Body>
            <Card.Title>{result.name.first} {result.name.last}</Card.Title>
            <Card.Text>
              Located in {result.location.city} {result.location.state}, {result.location.state}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}

export default ResultList;