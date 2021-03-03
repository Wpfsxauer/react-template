import "lib-flexible";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={App}></Route>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
