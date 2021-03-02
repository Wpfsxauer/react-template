import { parseUrlFace } from "../interface";
// 判断数据类型
export function judgeDataType(item: any): string {
	return Object.prototype.toString.call(item).slice(8, -1);
}

// 判断数据是否为空
export function judgeData(item: any): boolean {
	let data = true;
	switch (judgeDataType(item)) {
		case "Object":
			data = JSON.stringify(item) !== "{}";
			break;
		case "Array":
			data = item.length !== 0;
			break;
		case "Number":
			data = item !== 0;
			break;
		case "String":
			data = item.trim() !== "";
			break;
		case "Null":
			data = false;
			break;
		case "Undefined":
			data = false;
			break;
		case "Boolean":
			data = item;
			break;
		default:
			data = true;
	}
	return data;
}

/* url解析 */
export function parseUrl(val: any): parseUrlFace {
	const reg = /([^?&=#]+)=([^?&=#]+)/g;
	const data: any = {};
	val.replace(reg, function () {
		data[arguments[1]] = arguments[2];
	});
	return data;
}
