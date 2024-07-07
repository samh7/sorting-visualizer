import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
export default function App() {
  return (
    <>
      <div style={{ height: "100vh" }} className="  overflow-hidden ">
        <Nav />

        <main
          // style={{height: "calc(100vh)"}}
          className="grid grid-rows-6  bg-gray-100 w-screen h-screen"
        >
          <Main />
        </main>
      </div>
      {/* </Main> */}
    </>
  );
}
