import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
} from "@apollo/client";
import { pokemonClient, localClient } from "./servers";




const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={localClient}>
    <ApolloProvider client={pokemonClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </ApolloProvider>
);

reportWebVitals();
