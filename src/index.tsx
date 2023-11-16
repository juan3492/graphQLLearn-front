import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloProvider,
} from "@apollo/client";
import { pokemonClient, localClient } from "./servers";
import './index.css'
import {NextUIProvider} from "@nextui-org/react";




const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <NextUIProvider>
    <ApolloProvider client={localClient}>
      <ApolloProvider client={pokemonClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApolloProvider>
    </ApolloProvider>
  </NextUIProvider>
);

reportWebVitals();
