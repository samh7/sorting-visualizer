import React from "react";
import { useContext } from "react";
import { SettingsContext } from "./utils/AlgoContext";

export default function Nav() {
  const onDelayChange = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, delay: +e.target.value }));
  };
  const onArrayLenChange = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, arrayLen: +e.target.value * 5 }));
  };

  const onAlgoChange = (e, type) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, algoType: type }));
  };
  const { sort, settings, setSettings } = useContext(SettingsContext);
  return (
    // <>
    <div className="w-screen grid grid-flow-row bg-gray-400">
      <div className="flex items-center justify-center w-full my-2 gap-4">
        <div>
          <button
            onClick={(e) => onAlgoChange(e, "merge sort")}
            className={`
                ${settings.algoType === "merge sort" && "text-purple-500"}
                border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95`}
          >
            Merge Sort
          </button>
          <button
            onClick={(e) => onAlgoChange(e, "insertion sort")}
            className={`
                ${settings.algoType === "insertion sort" && "text-purple-500"}
                border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95`}
          >
            Insertion Sort
          </button>
        </div>

        <button onClick={() => sort(settings.algoType)} className="underline">
          Sort
        </button>
      </div>
      <div className="flex flex-col items-center w-full">
        <label htmlFor="items_amount">Array Length: {settings.arrayLen}</label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full pb-3"
          defaultValue={25}
          min={1}
          onChange={onArrayLenChange}
        />
        <label htmlFor="delay">Delay: {settings.delay}</label>

        <input
          type="range"
          name="delay"
          id="items_delay"
          className="w-full pb-3"
          min={3}
          defaultValue={15}
          onChange={onDelayChange}
        />
      </div>
    </div>
    // </>
  );
}
