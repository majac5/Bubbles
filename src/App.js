import { useState } from "react";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);

  const array = [
    { name: "Darko", surname: "Horvat", email: "ajmemeni@gmail.com", id: "1" },
    { name: "Ana", surname: "Yeye", email: "anabanana@gmail.com", id: "2" },
    { name: "Antonio", surname: "Banderas", email: "zoro@gmail.com", id: "3" },
    {
      name: "Jenny",
      surname: "Block",
      email: "jennyfromtheblock@gmail.com",
      id: "4",
    },
    { name: "Jett", surname: "Viper", email: "jettviper@gmail.com", id: "5" },
    { name: "Soho", surname: "Lou", email: "soholou@gmail.com", id: "6" },
  ];

  const list = array.map((item) => (
    <>
      <br />
      <li>{item.name}</li>
      <li>{item.surname}</li>
      <li>{item.email}</li>
    </>
  ));

  const howMany = array.length;

  // const handleClick = () => {
  //   howMany >+ 2 ? setShow(true) : setShow(list)
  // }

  return (
    <>
      <h1>Wow</h1>
      <div>HOW MANY?</div>
      <div>{howMany}</div>
      <button onClick={() => setShow(true)}>click</button>
      {(show && howMany >+ 2) ? (
        <>
          <div className="wrapper">
            <ul className="lista">{list}</ul>
          </div>
        </>
      ) : null}
      {howMany === 3 ? <>{list}</> : howMany}
      {howMany > 3 ? <>{list} + {howMany - 3}</> : howMany}
    </>
  );
};

export default App;
