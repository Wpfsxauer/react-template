import test from "../pages/test";
import { routerParam } from "../interface";

export const routers: Array<routerParam> = [
	{
		path: "/test",
		component: test,
		name: "test",
	},
];
