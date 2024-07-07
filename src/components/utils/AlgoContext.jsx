import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { getInsertionSortAnims } from "./insertionSort";
import { getMergeSortAnims } from "./mergeSort";
const settingInterface = {
  algoType: "merge sort",
  arrayLen: 25,
  delay: 15,
};

const intialItems = {
  items: [],
  setItems: null,
};
export const ItemsContext = createContext(intialItems);
export const SettingsContext = createContext({
  settings: settingInterface,
  sort: () => {},
});

export default function AlgoContext({ children }) {
  const [settings, setSettings] = useState(settingInterface);
  const [items, setItems] = useState([]);

  const animateMerge = (newArr, arr) => {
    arr.forEach(([newHeigh, index], idx) => {
      const div1 = document.getElementById(`${index}`);
      if (!div1) return;
      setTimeout(() => {
        div1.style.backgroundColor = "#b041f0";
        div1.style.height = `${newHeigh / 7}%`;
        setTimeout(() => {
          div1.style.backgroundColor = "#482";
          console.log(newArr);
          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 2);
      }, settings.delay * idx * 2);
    });
  };
  const animateDivs = (newArr, arr) => {
    arr.forEach(([first, second], idx) => {
      const div1 = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);
      if (!div1 || !div2) return;
      setTimeout(() => {
        div1.style.backgroundColor = "#b041f0";
        div2.style.backgroundColor = "#b041f0";
        const div1Height = div1.style.height;
        div1.style.height = div2.style.height;
        div2.style.height = div1Height;
        setTimeout(() => {
          div1.style.backgroundColor = "#482";
          div2.style.backgroundColor = "#482";
          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 5);
      }, settings.delay * idx * 5);
    });
  };

  const sort = (algoType) => {
    switch (algoType) {
      case "insertion sort":
        const [newArr, animArr] = getInsertionSortAnims(items);
        animateDivs(newArr, animArr);
        break;
      case "merge sort":
        const aux = [];
        const nums = [...items];
        const arr = [];
        getMergeSortAnims(nums, aux, arr, 0, items.length - 1);
        // animateDivs(newArrM, animArrM);
        animateMerge(nums, arr);

        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const randNums = [];
    for (let i = 0; i < settings.arrayLen; i++) {
      randNums.push(Math.floor(Math.random() * 540));
      setItems(randNums);
    }
  }, [settings.arrayLen]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <SettingsContext.Provider value={{ sort, settings, setSettings }}>
        {children}
      </SettingsContext.Provider>
    </ItemsContext.Provider>
  );
}
