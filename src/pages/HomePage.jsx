import { useState } from "react";
import User from "../component/User";

export default function HomePage() {
  const [counter, setCounter] = useState(1);
  const [darkMood, setDarkMood] = useState("dark");
  //   let products = [
  //     { category: "Home", bg: "red" },
  //     { category: "About", bg: "blue" },
  //     { category: "Login", bg: "green" },
  //     { category: "Products", bg: "violet" },
  //   ];

  return (
    <div className="col-12 HomePage">
      <h1>Home Page</h1>
      <div className=" col-12 d-flex flex-wrap gap-5">
        <h1>{darkMood}</h1>
        <button className="btn btn-primary"
          onClick={() => {
            if (darkMood == "dark") {
              setDarkMood ("light");
            } else {
              setDarkMood("dark") ;
            }
          }}
        ></button>
        <h1>{counter}</h1>
        <button className="btn btn-primary" 
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          {" "}
          +
        </button>
        {/* {products.map((el, index) => {
          return <User key={index}  category={el.category} bg={el.bg} />;
        })} */}
      </div>
    </div>
  );
}
