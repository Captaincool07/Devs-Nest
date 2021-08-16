import "./App.css";
import Card from "./Component/card";
import { useState } from "react";

function App() {
  const [value, setValue] = useState([
    {
      id: 1,
      title: "Pizza",
      description: "No. of Cals consumed today :",
      val: 56,
 
    },
    {
      id: 2,
      title: "Burger",
      description: "No. of Cals consumed today :",
      val: 100,
     
    },
    {
      id: 3,
      title: "Coke",
      description: "No. of Cals consumed today :",
      val: 206,

    },
    {
      id: 4,
      title: "Fried Rice",
      description: "No. of Cals consumed today :",
      val: 178,
 
    },
  ]);

  const deleteFun = (id) => {
    const newArray = value.filter((a) => a.id !== id);
    setValue(newArray);
  };
  return (
    <div>
      <h1 className="am">Calory Tracker</h1>
      <div className="App">
        {value.map((i) => (
          <Card
            title={i.title}
            description={i.description}
            val={i.val}
            img={i.img}
            id={i.id}
            deleteFun={() => {
              deleteFun(i.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;