import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
const Details = () => {
    const id = useLocation();
    const [user, setUser] = useState([])
    console.log(id.pathname);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users${id.pathname}`);
                setUser(response.data);
                console.log(response.data); // This will log the updated state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  return (
      <Card style={{background:'#ffddff'}}>
          <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Address: {user.address && `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
                  {/* You can add more details as needed */}
              </Card.Text>
          </Card.Body>
      </Card>
  )


}

export default Details