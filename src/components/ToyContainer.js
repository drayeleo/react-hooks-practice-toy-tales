import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleAddLike }) {

  function buildToyCollection() {
    return toys.map(toy => {
      return <ToyCard
        key={toy.id} 
        toy={toy} 
        handleDelete={handleDelete}
        handleAddLike={handleAddLike}
      />
    })
  }

  return (
    <div id="toy-collection">{buildToyCollection()}</div>
  );
}

export default ToyContainer;
