import React from "react";
import SmallCards from "./Components/SmallCards/SmallCards";
import {useSelector} from "react-redux";

export default function Home(){

    const friends = useSelector(state => state.users);
    return (
      <div className="wrapper">
          {friends.map(user => <SmallCards name={user.name} avatar={user.avatar}/>)}
      </div>
    );
}