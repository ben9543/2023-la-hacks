import React, { useState } from "react";
import axios from "axios";
import {getCohereResponse} from "@/pages/api/cohere/cohere-api";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
  collectionGroup,
  updateDoc,
} from "firebase/firestore";


import { app } from "@/firebase";
import Link from "next/link";
import Footer from "../../components/Footer";

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

interface CuisineProps {
  name: string;
  selectedChoices: string[];
  alreadySelected: boolean;
  category: number;
}

const selectedChoicesArray: string[][] = [[], [], [], [], []];

const Cuisine: React.FC<CuisineProps> = (props) => {
  const [selected, setSelected] = useState(props.alreadySelected);


  const handleClick = () => {
    setSelected(!selected);
    if (!selected) {
      if (!selectedChoicesArray[props.category]) {
        selectedChoicesArray[props.category] = [];
      }
      selectedChoicesArray[props.category].push(props.name);
      console.log("added ", props.name, selectedChoicesArray);
    } else {
      if (selectedChoicesArray[props.category]) {
        for (let i = 0; i < selectedChoicesArray[props.category].length; i++) {
          if (selectedChoicesArray[props.category][i] === props.name) {
            selectedChoicesArray[props.category].splice(i, 1);
            console.log("removed ", props.name, selectedChoicesArray);
          }
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

  
  function alreadySelected(name: string, category: number) {
    return selectedChoicesArray[category].includes(name);
  }

  const [step, setStep] = useState(1);
  const [id, setId] = useState(null);

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
                  alreadySelected={alreadySelected(n, 0)}
                  category={0}
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
                  alreadySelected={alreadySelected(n, 1)}
                  category={1}
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
                  alreadySelected={alreadySelected(n, 2)}
                  category={2}
                />
              ))}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <a className="text-4xl font-bold">Any special accommodations?</a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {accommodations.map((n) => (
                <Cuisine
                  selectedChoices={[]}
                  key={n}
                  name={n}
                  alreadySelected={alreadySelected(n, 3)}
                  category={3}
                />
              ))}
            </div>
          </>
        );
      case 5: {
        (() => {
          addDoc(collection(getFirestore(app), "data"), {
            meals: selectedChoicesArray[0],
            cuisines: selectedChoicesArray[1],
            budgets: selectedChoicesArray[2],
            accommodations: selectedChoicesArray[3],
          }).then((res) => {
            setId(res.id);
          });

        })();
        }
        return (
          <>
            <a className="text-4xl font-bold">What&apos;s your location?</a>
            <div className="flex flex-wrap gap-4 w-96 m-20 justify-center">
              {cuisines.map((n) => (
                <Cuisine selectedChoices={[]} key={n} name={n} />
              ))}
            </div>

          </>
        );
      case 6: {
        return (
          <>
            <a className="text-4xl font-bold mb-10">All complete!</a>
          </>
        );
      }
      default: {
        return <div>Invalid step</div>;
      }
    }
  };

  return (
    <div>
      <div className="bg-base-100 flex flex-1 flex-col items-center">
        <div className="navbar bg-base-200 rounded-3xl w-3/5">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Foodle
          </a>
        </div>
        <div className="flex flex-1 justify-center p-20 h-fit">
          <ul className="steps">
            <li className={`step${step >= 1 ? " step-primary" : ""}`}>Meals</li>
            <li className={`step${step >= 2 ? " step-primary" : ""}`}>
              Cuisine
            </li>
            <li className={`step${step >= 3 ? " step-primary" : ""}`}>
              Budget
            </li>
            <li className={`step${step >= 4 ? " step-primary" : ""}`}>
              Accomodations
            </li>
            <li className={`step${step >= 5 ? " step-primary" : ""}`}>
              Location
            </li>
            <li className={`step${step >= 6 ? " step-primary" : ""}`}>
              Result
            </li>
          </ul>
        </div>
        {renderPage()}
        {step === 6 && (
          <Link href={`/result?id=${id}`}>
            <button className="btn w-40">Finish</button>
          </Link>
        )}
        {step !== 6 && (
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
        )}
      </div>
    </div>
  );
}
