import React from "react";
import SmallCards from "./Components/SmallCards/SmallCards";
import {useSelector} from "react-redux";

export default function Home(){

    const friends = useSelector(state => state.users);

    const displayCards = (friends) => {
      if(friends.length === 0)
          return (
              <h2>No Friends to display</h2>
          );
      return (
          friends.map(user => <SmallCards name={user.name} avatar={user.avatar}/>)
      );
    };
    return (
      <div className="wrapper">
          {displayCards(friends)}
      </div>
    );
}