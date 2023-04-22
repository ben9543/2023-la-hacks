import React, { useState } from "react";

interface CuisineProps {
  name: string;
}

const Cuisine: React.FC<CuisineProps> = ({ name }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg ${
        selected ? "bg-purple-500 text-white" : "bg-gray-300 text-gray-700"
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default function Main() {
  const meals: string[] = ["🍳 Breakfast", "🍔 Lunch", "🍲 Dinner", "🍪 Snack"];

  return (
    <div className="bg-base-100 flex flex-1 flex-col items-center">
      <div className="flex flex-1 justify-center p-20">
        <ul className="steps">
          <li className="step step-primary">Meals</li>
          <li className="step">Cuisine</li>
          <li className="step">Budget</li>
          <li className="step">Location</li>
          <li className="step">Accomodations</li>
          <li className="step">Result</li>
        </ul>
      </div>
      <a className="text-4xl font-bold">When would you like to eat?</a>
      <div className="flex flex-wrap gap-4 w-3/5 m-20 justify-center">
        {meals.map((meal) => (
          <Cuisine key={meal} name={meal} />
        ))}
      </div>
      <button className="btn">Next</button>
    </div>
  );
}
