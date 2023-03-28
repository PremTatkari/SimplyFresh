import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./cara.css";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router";
import globalVar from "./components/globalVar";

function App() {
  const navigate = useNavigate();
  const [farms, setFarm] = useState([]);
  if (!globalVar.value) {
    navigate("/login");
  }
  const handleLogOut = () => (globalVar.value = false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/farmer")
      .then((res) => {
        setFarm(res.data.farmers);
        res.data.Logged ? navigate("/") : navigate("/login");
      })
      .catch((err) => {
        console.log("Error");
      });
  }, []);

  const farmList =
    farms.length === 0
      ? "No farms"
      : farms.map((farm, key) => (
          <Cards
            title={farm.farm_name}
            price={5}
            class={farm.farm_address}
            key={key}
            email={farm.email}
          />
        ));
  const log = globalVar.value ? "Logout" : "Login";

  return (
    <div>
      <Navbar log={log} handleLogOut={handleLogOut} />
      <Carousel />
      <div class="grid grid-cols-4 gap-4">{farmList}</div>
    </div>
  );
}

export default App;
