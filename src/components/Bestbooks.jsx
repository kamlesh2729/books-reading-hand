// import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Bestbooks = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h6 className=" text-primary">Trending Books</h6>
          <h2>Best Books</h2>
          <p className=" container-fluid text-center text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis delectus architecto error nesciunt.
          </p>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bestbooks