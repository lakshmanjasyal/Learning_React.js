import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}

export default App;
