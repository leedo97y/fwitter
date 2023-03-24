import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot, getDocs } from "firebase/firestore";
import { dbService } from "fbase";
import Fweet from "components/Fweet";

const Home = ({ userObj }) => {
  const [fweet, setFweet] = useState("");
  const [fweets, setfweets] = useState([]);

  const getfweets = async () => {
    const fweetsData = await getDocs(collection(dbService, "fweets"));

    fweetsData.forEach((doc) => {
      const docObj = {
        ...doc.data(),
        id: doc.id,
      };

      setfweets((prev) => [docObj, ...prev]);
    });
  };

  useEffect(() => {
    // getfweets();
    const collections = collection(dbService, "fweets");
    onSnapshot(collections, (snapshot) => {
      const docs = snapshot.docs;
      const arrayFweet = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setfweets(arrayFweet);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(dbService, "fweets"), {
      text: fweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setFweet("");
  };

  function onChange(e) {
    const value = e.target.value;
    setFweet(value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={fweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Fweet" />
      </form>
      <div>
        {fweets.map((data) => (
          <Fweet
            key={data.id}
            fweetObj={data}
            isOwner={data.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
