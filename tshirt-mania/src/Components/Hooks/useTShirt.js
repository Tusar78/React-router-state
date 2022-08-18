import { useEffect, useState } from "react";

const useTShirt = () => {
  const [tShirts, setTShirts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/tshirt-mania-module-54/main/public/tshirts.json"
    )
      .then((res) => res.json())
      .then((data) => setTShirts(data));
  }, []);

  return [tShirts, setTShirts];
};

export default useTShirt;
