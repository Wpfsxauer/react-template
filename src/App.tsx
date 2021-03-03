import React from "react";
import { routers } from "./router";
import { Switch, Route } from "react-router-dom";

function App() {
	const routersList = routers.map((item) => (
		<Route path={item.path} component={item.component} key={item.name}></Route>
	));
	return <Switch>{routersList}</Switch>;
}

export default App;
