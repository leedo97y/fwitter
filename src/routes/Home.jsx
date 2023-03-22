import React, { useState } from "react";

const Home = () => {
  const [Fweet, setFweet] = useState("");

  function onSubmit(e) {
    e.preventDefault();
  }

  function onChange(e) {
    const value = e.target.value;
    setFweet(value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={Fweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Fweet" />
      </form>
    </div>
  );
};

export default Home;
