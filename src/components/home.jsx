import React, { useState, useEffect } from "react";
import http from "../services/http";
import MediaCard from "./../common/card";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

function Home(props) {
  const [catsFact, setFacts] = useState([]);

  useEffect(() => {
    async function getFacts() {
      const result = await http.get("https://catfact.ninja/facts");
      setFacts(result.data);
    }

    getFacts();
  }, []);

  return (
    <div>
      <div className="container">
        <div>
          <h2>Facts Of The Day</h2>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Home;
