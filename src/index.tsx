import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "./theme";

export interface Item {
  id: number,
  name: string,
  age: number,
};

const items: Item[] = [
  { id: 1, name: "John", age: 55 },
  { id: 2, name: "Michael", age: 44 },
  { id: 3, name: "Terry", age: 28 },
];

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App headerText={"Hello"} items={items} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
