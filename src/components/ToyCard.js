import React from "react";

function ToyCard( {toy, handleDelete, handleAddLike} ) {
  const {name, image, likes, id} = toy;

  function handleDonate() {
    handleDelete(toy.id);
  }

  function onLike() {
    const obj = {likes: likes + 1}
    handleAddLike(id, obj);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={onLike} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
