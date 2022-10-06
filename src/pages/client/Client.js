import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Client(){
    const [client, setClient] = useState([]);
    const {id} = useParams()
    axios
      .get('http://localhost:8080/client/'+id)
      .then((res) => {
        console.log(res);
        setClient(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

    return (
        <div>
     <h2>Karta klienta: {id}</h2>
     <div>{client.firstName} {client.lastName}</div>
     <div>{client.dateOfBirth}</div>
     <div>{client.phoneNumber}</div>
     <h3>Wizyty</h3>
     </div>
    );
  };

export default Client;