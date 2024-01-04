import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                console.log(response.data); // This will log the updated state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  return (
    <div >
    <h2>UserList</h2>
     { users.map ((el) => (
         <div key={el.id} style={{ display: 'inline-block', flexWrap: 'wrap', marginRight:50}}>
       
     <Card style = {{width:500, marginBottom:50}}>
      <Card.Header>{el.name}</Card.Header>
      <Card.Body>
        <Card.Title>{el.phone}</Card.Title>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button onClick= {() => navigate(`/${el.id}`)} variant="primary" >Show Details</Button>
      </Card.Body>
    </Card>
    </div>
)) }
      </div>
  )
}

export default UserList