import React from "react";
import { useContext } from "react";
import { ItemsContext, SettingsContext } from "./utils/AlgoContext";

export default function Main() {
  const { items, setItems } = useContext(ItemsContext);
  const { settings } = useContext(SettingsContext);
  return (
    <section className="row-span-5">
      <div className="flex w-full h-full">
        {items.map((item, idx) => {
          return (
            <div
              key={`${item}-${settings.arrayLen}-${idx}`}
              className="flex-1"
              style={{
                backgroundColor: "#482",
                height: `${item / 14}%`,
              }}
            
              id={`${idx}`}
            >
              {/* {idx} */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
