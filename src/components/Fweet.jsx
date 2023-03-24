import React from "react";

const Fweet = ({ fweetObj, isOwner }) => {
  return (
    <div>
      <h4>{fweetObj.text}</h4>
      {isOwner && (
        <>
          <button>Delete</button>
          <button>Edit</button>
        </>
      )}
    </div>
  );
};

export default Fweet;
