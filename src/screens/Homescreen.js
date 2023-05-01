import React from "react";
import messes from "../data";
import Mess from "../components/Mess"; //mess pass as pros to child
import "./Homescreen.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Homescreen() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="homeContainer">
      <Navbar />

      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div>
        {/* {
          messes.filter((mess))
        } */}
        <div className="row">

          {
           messes
           .filter((mess) => {
             if(searchTerm == ""){
               return mess;
             }else if(mess.name.toLowerCase().includes(searchTerm.toLowerCase())){
               return mess;
             }
           })
          .map((mess) => {
            return (
              <div className="col-md-4 p-3">
                <div>
                  <Mess mess={mess} />
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}
