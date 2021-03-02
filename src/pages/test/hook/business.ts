import { useEffect, useState } from "react";

const useBusiness = () => {
	const [data, setData] = useState<string>("");

	const init = async () => {
		setData(() => "test");
	};

	useEffect(() => {
		init();
	}, []);

	return data;
};

export default useBusiness;
