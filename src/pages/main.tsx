import React, { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { app } from "@/firebase";

interface CuisineProps {
  name: string;
  selectedChoices: string[];
  alreadySelected: boolean;
}

const selectedChoicesArray: string[] = [];

const Cuisine: React.FC<CuisineProps> = (props) => {
  const [selected, setSelected] = useState(false || props.alreadySelected);

  const handleClick = () => {
    setSelected(!selected);
    if (!selected) {
      selectedChoicesArray.push(props.name);
      console.log("added ", props.name, selectedChoicesArray);
    } else {
      for (var i = 0; i < selectedChoicesArray.length; i++) {
        if (selectedChoicesArray[i] === props.name) {
          selectedChoicesArray.splice(i, 1);
          console.log("removed ", props.name, selectedChoicesArray);
        }
      }
    }
  };

  console.log("selectedChoices", selectedChoicesArray);

  return (
    <button
      className={`px-4 py-2 rounded-lg ${
        selected ? "bg-purple-500 text-white" : "bg-gray-300 text-gray-700"
      }`}
      onClick={handleClick}
    >
      {props.name}
    </button>
  );
};

export default function Main() {
  function alreadySelected(name: string) {
    return selectedChoicesArray.includes(name);
  }

  const meals: string[] = ["🍳 Breakfast", "🍔 Lunch", "🍲 Dinner", "🍪 Snack"];

  const cuisines: string[] = [
    "🇮🇹 Italian",
    "🇲🇽 Mexican",
    "🇨🇳 Chinese",
    "🇯🇵 Japanese",
    "🇹🇭 Thai",
    "🇮🇳 Indian",
    "🇬🇷 Greek",
    "🇫🇷 French",
    "🇺🇸 American",
    "🇻🇳 Vietnamese",
    "🇰🇷 Korean",
    "🇪🇸 Spanish",
  ];
  const budgets: string[] = [
    "💰 Cheap eats",
    "💸 Moderate budget",
    "💵 High-end dining",
    "💳 Splurge-worthy",
  ];

  const accommodations: string[] = [
    "🅿️ Valet parking",
    "🚗 Parking lot",
    "📶 Free Wi-Fi",
    "👥 Private dining",
    "👶 Family-friendly",
    "♿ Wheelchair accessible",
    "🐶 Dog-friendly",
    "🌱 Vegan options",
    "🍾 Full bar",
    "🍷 Extensive wine list",
    "🍺 Craft beer selection",
    "🎂 Birthday specials",
    "🎶 Live music",
    "🎭 Dinner theater",
  ];

  const [step, setStep] = useState(1);

  const renderPage = () => {
    switch (step) {
      case 1:
        return (
          <>
            <a className="text-4xl font-bold">When would you like to eat?</a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {meals.map((n) => (
                <Cuisine
                  selectedChoices={[]}
                  key={n}
                  name={n}
                  alreadySelected={alreadySelected(n)}
                />
              ))}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <a className="text-4xl font-bold">
              What type of cuisines are you feeling?
            </a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {cuisines.map((n) => (
                <Cuisine
                  selectedChoices={[]}
                  key={n}
                  name={n}
                  alreadySelected={alreadySelected(n)}
                />
              ))}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <a className="text-4xl font-bold">
              How much are you willing to spend?
            </a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {budgets.map((n) => (
                <Cuisine
                  selectedChoices={[]}
                  key={n}
                  name={n}
                  alreadySelected={alreadySelected(n)}
                />
              ))}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <a className="text-4xl font-bold">Any special accomodations?</a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {accommodations.map((n) => (
                <Cuisine
                  selectedChoices={[]}
                  key={n}
                  name={n}
                  alreadySelected={alreadySelected(n)}
                />
              ))}
            </div>
          </>
        );
      case 5: {
        addDoc(collection(getFirestore(app), "data"), {
          selectedChoicesArray,
        });
        return (
          <>
            <a className="text-4xl font-bold">What's your location?</a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {cuisines.map((n) => (
                <Cuisine
                  selectedChoices={[]}
                  key={n}
                  name={n}
                  alreadySelected={alreadySelected(n)}
                />
              ))}
            </div>
          </>
        );
      }

      default: {
        return <div>Invalid step</div>;
      }
    }
  };

  return (
    <div className="bg-base-100 flex flex-1 flex-col items-center">
      <div className="flex flex-1 justify-center p-20">
        <ul className="steps">
          <li className={`step${step >= 1 ? " step-primary" : ""}`}>Meals</li>
          <li className={`step${step >= 2 ? " step-primary" : ""}`}>Cuisine</li>
          <li className={`step${step >= 3 ? " step-primary" : ""}`}>Budget</li>
          <li className={`step${step >= 4 ? " step-primary" : ""}`}>
            Accomodations
          </li>
          <li className={`step${step >= 5 ? " step-primary" : ""}`}>
            Location
          </li>
          <li className={`step${step >= 6 ? " step-primary" : ""}`}>Result</li>
        </ul>
      </div>
      {renderPage()}
      <div className="flex flex-1 flex-row w-40 justify-evenly">
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="btn">
            Back
          </button>
        )}
        <button onClick={() => setStep(step + 1)} className="btn">
          Next
        </button>
      </div>
    </div>
  );
}
