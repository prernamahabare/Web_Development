import React from "react";
import books from "../books.json";
import Card from "./Card";
import { useState } from "react";
import "./Searchstyle.css";

export default function Search() {
  const [Search, setSearch] = useState("");
  return (
    <div>
      <div className="Search">
        <input
          className="SearchInput"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search...."
        />
        {books
          .filter((val) => {
            if (Search === "") {
              return val;
            } else if (val.title.toLowerCase().includes(Search.toLowerCase())) {
              return val;
            }
          })
          .map((item) => (
            <Card {...item} key={item.name} />
          ))}
      </div>
    </div>
  );
}
