import axios from "axios";
import qs from "qs";
import JSONP from "jsonp";

import { getRequestFace, postRequestFace, jsonpRequestFace, requestConfigFace, promiseErr } from "../interface";

const request = axios.create({
	timeout: 1000 * 3,
});

const err: promiseErr = (error) => Promise.reject(error);

request.interceptors.response.use((response) => {
	return response.data;
}, err);

const requestHeaders = (data: requestConfigFace, cookieFlag: boolean = false) => {
	request.interceptors.request.use((config) => {
		if (JSON.stringify(data) !== "{}") {
			Object.keys(data).forEach((item) => {
				config.headers[item] = data[item];
			});
		}
		if (cookieFlag) config.withCredentials = true;
		return config;
	}, err);
};

// withCredentials: true,
export const httpGet: getRequestFace = (url, params = {}, config = {}) => {
	requestHeaders(config, true);
	return request({
		url,
		method: "get",
		params,
	});
};

export const httpPost: postRequestFace = (url, data, config = {}) => {
	requestHeaders(config, true);
	return request({
		url,
		method: "post",
		data,
	});
};

export const httpJsonp: jsonpRequestFace = (url, data = {}) => {
	const param = url + "?" + qs.stringify(data);
	return new Promise((resolve, reject) => JSONP(param, (err, response) => (err ? reject(err) : resolve(response))));
};
