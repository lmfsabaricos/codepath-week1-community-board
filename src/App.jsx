import React from "react";
import Card from "./Card";
import "./App.css";

const events = [
  { title: "React Workshop", description: "Learn the basics of React.", link: "https://react.dev" },
  { title: "Community Clean-up", description: "Help clean the local park.", link: "#" },
  { title: "Food Truck Friday", description: "Support local food trucks!", link: "#" },
  { title: "Coding Bootcamp", description: "Free intro to coding.", link: "#" },
  { title: "Yoga in the Park", description: "Morning wellness session.", link: "#" },
  { title: "Basketball Game", description: "Join our local sports team.", link: "#" },
  { title: "Art Festival", description: "Celebrate local artists.", link: "#" },
  { title: "Career Fair", description: "Meet employers and recruiters.", link: "#" },
  { title: "Book Club", description: "Discuss this month’s pick.", link: "#" },
  { title: "Hackathon", description: "24-hour coding challenge.", link: "#" }
];

function App() {
  return (
    <div className="app">
      <h1 className="header">🌟 Community Board 🌟</h1>
      <div className="card-grid">
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
