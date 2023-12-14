import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Ecommerce.css";
import HeadNavbar from "../Header/Navbar";

function Ecommerce() {
  const url = "https://fakestoreapi.com/products";
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setUserdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HeadNavbar />
      <div className="images"><img src="istockphoto-967697210-612x612.jpg" alt="" /></div>


      
      <div className="containerBody">
        {userdata.map((item) => (
          <Card style={{ width: "16rem" }} className="CardBody">
            <Card.Img variant="top" className="ImageBody" src={item.image} />
            <Card.Body>
              <Card.Title className="Title">
                <b>{item.title}</b>
              </Card.Title>
              <Card.Text>
                <h5>{item.rating.rate}</h5>
                <h5>{item.category}</h5>
                <h4>${item.price}</h4>
              </Card.Text>
              <Button variant="danger">Book Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Ecommerce;
