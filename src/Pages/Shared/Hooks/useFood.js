import { useEffect, useState } from "react";

const useFood = (url) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    return [foods, setFoods];
};

export default useFood;
