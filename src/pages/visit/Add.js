import React, {useState} from 'react';
import axios from 'axios';

function Add(){
  const [date , setDate] = useState('');
  const [note , setNote] = useState('');
  const [client , setClient] = useState('');

  const handleDateChange =(e)=>{
    setDate(e.target.value);
  }
  const handleNoteChange =(e)=>{
    setNote(e.target.value);
  }
  const handleClientChange =(e)=>{
    setClient(e.target.value);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      const body = {
        date: date,
        note: note,
        client: client,
      };
      console.log(body);
      let config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      
      axios.post("http://localhost:8080/visit/add", body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

return (
  <form onSubmit={(e) => {handleSubmit(e)}}>
  <h2> Nowa wizyta </h2>
    <label>
        Klient:
      </label><br/>
      <input name='client' type="client" value={client} required onChange={(e) => {handleClientChange(e)}} /><br/>
      <label >
        Data:
      </label><br/>
      <input name='date' type="date" value={date} required onChange={(e) => {handleDateChange(e)}} /><br/>
      <label >
        Notatka:
      </label><br/>
      <input name='note' type="text" value={note} required onChange={(e) => {handleNoteChange(e)}} /><br/>
      <input type="submit" value="Potwierdź"/>
    </form>
);
}       

export default Add;