import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Item } from ".";
import "./App.css";
import { User } from "./interfaces";

interface AppProps {
  headerText: string,
  items: Item[],
};

export const App = ({ headerText, items }: AppProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div className="App">
      <p style={{ fontFamily: "var(--chakra-fonts-mono)" }}>This is a test sentence</p>
      <div>{headerText}</div>
      {items.map(item => {
        return (
          <p>{item.name}</p>
        )
      })}
    </div>
  );
};
