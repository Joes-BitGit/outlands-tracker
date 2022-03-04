import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Profile.css";
import PlayerFinder from "../apis/PlayerFinder";

const Profile = () => {
  const [isError, setIsError] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // react router
  let url = useParams();

  useEffect(() => {
    document.body.className = "body-bg-no-image";
    const fetchPlayerData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await PlayerFinder.get(
          `/${url.platform}/${url.gamertag}`
        );
        console.log(response.data.data);
        setProfileData(response.data.data);
      } catch (err) {
        console.log(err.response);
        // setIsError(err.response.data.message);
        console.error(err.response, "error occured in the axios useeffect");
      }
      setIsLoading(false);
    };
    fetchPlayerData();
  }, []);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <section>
        {isError && <h1>{isError}</h1>}
        {isLoading ? (
          <h3>loading...</h3>
        ) : (
          profileData && (
            <div className="container">
              <h1 className="gamertag">
                <img
                  src={profileData.platformInfo.avatarUrl}
                  alt=""
                  className="platform-avatar"
                />
                {profileData.platformInfo.platformUserId}
              </h1>
              <div className="grid">
                <div>
                  <img
                    src={profileData.segments[1].metadata.imageUrl}
                    alt="last legend used"
                  />

                  <img
                    src={
                      profileData.segments[0].stats.rankScore.metadata.iconUrl
                    }
                    alt="br rank icon"
                  />
                  <img
                    src={
                      profileData.segments[0].stats.arenaRankScore.metadata
                        .iconUrl
                    }
                    alt="arena rank icon"
                  />
                </div>
                <div className="">
                  <ul>
                    <li>
                      <h4>Selected Legend</h4>
                      {profileData.metadata && (
                        <p>{profileData.metadata.activeLegendName}</p>
                      )}
                    </li>
                    <li>
                      <h4>Apex Level</h4>
                      {profileData.segments[0].stats && (
                        <p>
                          {profileData.segments[0].stats.level.displayValue}
                          <span>
                            ({profileData.segments[0].stats.level.percentile}%)
                          </span>
                        </p>
                      )}
                    </li>
                    <li>
                      <h4>Lifetime Kills</h4>
                      {profileData.segments[0].stats && (
                        <p>
                          {profileData.segments[0].stats.kills.displayValue}
                          <span>
                            ({profileData.segments[0].stats.kills.percentile}%)
                          </span>
                        </p>
                      )}
                    </li>
                    <li>
                      <h4>Rank Score</h4>
                      {profileData.segments[0].stats && (
                        <p>
                          {profileData.segments[0].stats.rankScore.displayValue}
                          <span>
                            (
                            {profileData.segments[0].stats.rankScore.percentile}
                            %)
                          </span>
                        </p>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Profile;
