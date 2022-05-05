import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
/*
/* says render method no longer supported...
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

*/import { createRoot } from 'react-dom/client';
 

 /*
 createRoot.render(<App  />,document.getElementById('root'););
 */