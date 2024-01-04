import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
    <div>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Details