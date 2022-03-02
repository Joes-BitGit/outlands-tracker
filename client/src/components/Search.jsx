import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [gamertag, setGamertag] = useState("");
  const [platform, setPlatform] = useState("psn");

  // react router
  let navigate = useNavigate();

  const handleSubmit = (Event) => {
    // dont want html to refresh browser so
    // a controlled component is necessary
    Event.preventDefault();
    if (!gamertag) {
      toast.error("Please enter a gamertag");
    } else {
      navigate(`/profile/${platform}/${gamertag}`);
    }
  };

  const handlePlatform = (Event) => {
    setPlatform(Event.target.value);
  };

  const handleGamertag = (Event) => {
    setGamertag(Event.target.value);
  };

  useEffect(() => {
    document.body.className = "body-bg-image";
  });

  return (
    <section className="search">
      <h1>Track Player Stats</h1>
      <form
        onSubmit={(Event) => {
          handleSubmit(Event);
        }}
      >
        <div className="form-group">
          <label htmlFor="platform">
            Platform:
            <select
              name="platform"
              id="platform"
              value={platform}
              onChange={(Event) => handlePlatform(Event)}
            >
              <option value="psn">Playstation</option>
              <option value="xbl">Xbox</option>
              <option value="Origin">Origin</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="gamertag">
            Gamertag:
            <input
              id="gamertag"
              type="text"
              value={gamertag}
              onChange={(Event) => handleGamertag(Event)}
              placeholder="Origin ID, Xbox Live gamertag, PSN ID."
            />
          </label>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Search;
