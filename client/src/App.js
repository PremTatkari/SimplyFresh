import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./cara.css";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router";
import globalVar from "./components/globalVar";
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [farms, setFarm] = useState([]);

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
      <Navbar className="fixed inset-x-0 top-0" log={log} handleLogOut={handleLogOut} />


      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carousel
          show={2}
        >
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://images.unsplash.com/photo-1581177094826-3b9a100bf887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGZhcm1lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="placeholder" style={{ width: '100%', borderRadius: '5%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://images.unsplash.com/photo-1623211270083-5743da6c67ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZmFybWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="placeholder" style={{ width: '100%', borderRadius: '5%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://images.unsplash.com/photo-1623211268529-69c56e303312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGZhcm1lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="placeholder" style={{ width: '100%', borderRadius: '5%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://images.unsplash.com/photo-1609252509027-3928a66302fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZmFybWVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="placeholder" style={{ width: '100%', borderRadius: '5%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://media.istockphoto.com/id/1334164272/photo/african-worker-is-gathering-coffee-beans-on-plantation-in-bushy-wood.jpg?b=1&s=170667a&w=0&k=20&c=fidELnpRNSJyVRjGCRZBSYtdb_yzID4c8Drf_Nf1svw=" alt="placeholder" style={{ width: '100%', borderRadius: '5%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://media.istockphoto.com/id/1320570548/photo/peanuts-plantation-in-countryside-thailand-near-mountain.jpg?b=1&s=170667a&w=0&k=20&c=vz1Fg8a24u4rS1qxPgMRnqBNTQSFTGLuG5BFrrZcoYA=" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://images.unsplash.com/photo-1481555716071-8830d3e254ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGZhcm1lcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>

        </Carousel>
      </div>
      <div class="p-4 mb-4 grid grid-cols-4 gap-4">
        {farmList}
      </div>
      <div class="fixed inset-x-0 bottom-0"><Footer /> </div>

    </div>
  );
}

export default App;
