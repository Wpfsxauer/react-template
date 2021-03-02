import { httpGet, httpPost } from "../utils/request";

const api = {
	httpGet: "httpGet",
	httpPost: "httpPost",
};

export function textGet(data: any) {
	return httpPost(api.httpGet, data, { "Content-Type": "application/x-www-form-urlencoded" });
}

export function textPost(data: any) {
	return httpGet(api.httpPost, data);
}
