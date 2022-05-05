import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  //console.log(toys);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setToys(data));
  }, [])

  const url = "http://localhost:3001/toys/";

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleSubmitToyForm(input) {
    // console.log("submitted! Input: ", input);

    input = { ...input, likes: 0 };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setToys([...toys, data])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleDelete(id) {
    // console.log("Deleted!");

    fetch(url + id, {
      method: 'DELETE',
    })
      .then(res => res.text())
      .then(res => console.log(res))
      .catch((error) => {
        console.error('Error:', error);
      });

    setToys(toys.filter(toy => toy.id !== id));
  }

  function handleAddLike(id, obj) {
    // console.log("Liked!");

    fetch(url + id, {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setToys(toys.map(toy => {
          if(toy.id === id) {
            return {...toy, likes: toy.likes + 1}
          } else {
            return toy;
          }
        }));
        console.log(json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmitToyForm={handleSubmitToyForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleAddLike={handleAddLike} />
    </>
  );
}

export default App;

/* 
App
  Header
  ToyForm
  ToyContainer
    ToyCard(s)
*/
