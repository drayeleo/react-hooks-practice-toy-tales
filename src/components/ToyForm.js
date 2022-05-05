import React, {useState} from "react";

function ToyForm({ handleSubmitToyForm }) {
  const [input, setInput] = useState({name:"", image:""});


  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitToyForm(input);
  }

  function handleChangeInput(event) {
    // console.log(event.target.name, ": ", event.target.value);
    // console.log("Input: ", input)
    setInput({...input, [event.target.name] : event.target.value});
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={input.name}
          onChange={handleChangeInput}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={input.image}
          onChange={handleChangeInput}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
