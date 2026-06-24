import "./garden.css";

import gardenbg from "./assets/gardenbg.png";
import gardenasset from "./assets/gardenasset.png";
import homeIcon from "./assets/home.png";

import bluetulip from "./assets/bluetulip.png";
import pinktulip from "./assets/pinktulip.png";
import yellowtulip from "./assets/yellowtulip.png";
import redtulip from "./assets/redtulip.png";

import bluerose from "./assets/bluerose.png";
import pinkrose from "./assets/pinkrose.png";
import redrose from "./assets/redrose.png";

import blueflower from "./assets/blueflower.png";
import pinkflower from "./assets/pinkflower.png";
import yellowflower from "./assets/yellowflower.png";

import bluebigflower from "./assets/bluebigflower.png";
import pinkbigflower from "./assets/pinkbigflower.png";
import yellowbigflower from "./assets/yellowbigflower.png";

import goldenflower from "./assets/goldenflower.png";
import sunflower from "./assets/sunflower.png";

import { useState, useEffect } from "react";

// ── Tweak these 4 values to move the flower spawn area ─────────
const GARDEN_CENTER_X = 670;
const GARDEN_CENTER_Y = 480;
const GARDEN_HALF_W   = 400;
const GARDEN_HALF_H   = 160;
// ───────────────────────────────────────────────────────────────

function isInsideGarden(left, top) {
  const dx = Math.abs(left - GARDEN_CENTER_X) / GARDEN_HALF_W;
  const dy = Math.abs(top  - GARDEN_CENTER_Y) / GARDEN_HALF_H;
  return dx + dy <= 1.0;
}

function getFlowerPosition() {
  let left, top, attempts = 0;
  do {
    left = GARDEN_CENTER_X - GARDEN_HALF_W + Math.random() * GARDEN_HALF_W * 2;
    top  = GARDEN_CENTER_Y - GARDEN_HALF_H + Math.random() * GARDEN_HALF_H * 2;
    attempts++;
  } while (!isInsideGarden(left, top) && attempts < 100);
  return { left, top };
}

function Garden() {
  const username = localStorage.getItem("githubUser");

  const [userData, setUserData] = useState(null);
  const [flowerPositions, setFlowerPositions] = useState([]);
  const [showRanks, setShowRanks] = useState(false);
  const [totalCommits, setTotalCommits] = useState(0);

  const tulips      = [bluetulip, pinktulip, yellowtulip, redtulip];
  const roses       = [bluerose, pinkrose, redrose];
  const flowers     = [blueflower, pinkflower, yellowflower];
  const bigFlowers  = [bluebigflower, pinkbigflower, yellowbigflower];
  const sunflowers  = [sunflower];
  const goldenFlowers = [goldenflower];

  let level = 0;
  if (totalCommits >= 10)   level = 1;
  if (totalCommits >= 50)   level = 2;
  if (totalCommits >= 100)  level = 3;
  if (totalCommits >= 500)  level = 4;
  if (totalCommits >= 1000) level = 5;
  if (totalCommits >= 2000) level = 6;

  let title = "Visitor";
  if (totalCommits >= 10)   title = "Seedling";
  if (totalCommits >= 50)   title = "Gardener";
  if (totalCommits >= 100)  title = "Flower Keeper";
  if (totalCommits >= 500)  title = "Rose Cultivator";
  if (totalCommits >= 1000) title = "Master Gardener";
  if (totalCommits >= 2000) title = "Garden Lord";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);

        const contributionResponse = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const contributionData = await contributionResponse.json();

        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const contributions = contributionData.contributions
          .filter((day) => {
            const date = new Date(day.date);
            return date >= oneYearAgo && date <= today;
          })
          .reduce((sum, day) => sum + day.count, 0);

        setTotalCommits(contributions);
        console.log("Last 365 Days:", contributions);

        const repos = contributions;
        const tulipCount        = Math.min(Math.floor(repos / 5),   60);
        const roseCount         = Math.min(Math.floor(repos / 50),  30);
        const flowerCount       = Math.min(Math.floor(repos / 75),  20);
        const sunflowerCount    = Math.min(Math.floor(repos / 100), 15);
        const bigFlowerCount    = Math.min(Math.floor(repos / 350),  8);
        const goldenFlowerCount = Math.min(Math.floor(repos / 500),  5);

        const generatedFlowers = [];

        for (let i = 0; i < tulipCount; i++) {
          const { left, top } = getFlowerPosition();
          generatedFlowers.push({
            id: Math.random(), left, top,
            flower: tulips[Math.floor(Math.random() * tulips.length)],
            size: 18,
          });
        }

        for (let i = 0; i < roseCount; i++) {
          const { left, top } = getFlowerPosition();
          generatedFlowers.push({
            id: Math.random(), left, top,
            flower: roses[Math.floor(Math.random() * roses.length)],
            size: 26,
          });
        }

        for (let i = 0; i < flowerCount; i++) {
          const { left, top } = getFlowerPosition();
          generatedFlowers.push({
            id: Math.random(), left, top,
            flower: flowers[Math.floor(Math.random() * flowers.length)],
            size: 42,
          });
        }

        for (let i = 0; i < bigFlowerCount; i++) {
          const { left, top } = getFlowerPosition();
          generatedFlowers.push({
            id: Math.random(), left, top,
            flower: bigFlowers[Math.floor(Math.random() * bigFlowers.length)],
            size: 38,
          });
        }

        for (let i = 0; i < sunflowerCount; i++) {
          const { left, top } = getFlowerPosition();
          generatedFlowers.push({
            id: Math.random(), left, top,
            flower: sunflowers[Math.floor(Math.random() * sunflowers.length)],
            size: 38,
          });
        }

        for (let i = 0; i < goldenFlowerCount; i++) {
          const { left, top } = getFlowerPosition();
          generatedFlowers.push({
            id: Math.random(), left, top,
            flower: goldenFlowers[Math.floor(Math.random() * goldenFlowers.length)],
            size: 42,
          });
        }

        setFlowerPositions(generatedFlowers);
      } catch (error) {
        console.error(error);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return (
    <div className="garden-page">
      <div className="garden-scene">

        <img src={gardenbg} alt="background" className="background" />
        <img src={gardenasset} alt="garden" className="garden-asset" />

        <div className="avatar-card" onClick={() => setShowRanks(true)}>
          <img src={userData?.avatar_url} alt="" className="avatar" />
          <div className="avatar-info">
            <div className="gardener-title">{title}</div>
            <div className="level-text">Level {level}</div>
          </div>
        </div>

        <button className="home-button" onClick={() => window.location.href = "/"}>
          <img src={homeIcon} alt="Home" className="button-icon" />
        </button>

        {flowerPositions.map((item) => (
          <img
            key={item.id}
            src={item.flower}
            alt=""
            style={{
              position: "absolute",
              left: `${item.left}px`,
              top:  `${item.top}px`,
              width: `${item.size}px`,
              zIndex: 10,
            }}
          />
        ))}

        <div className="username-board">
          <div className="vine vine-left"></div>
          {username}
          <div className="vine vine-right"></div>
        </div>

        {showRanks && (
          <div className="rank-popup">
            <div className="rank-header">
              <span>Gardener Ranks</span>
              <button className="close-btn" onClick={() => setShowRanks(false)}>✕</button>
            </div>
            <div className="rank-list">
              <div className="rank-item">🌱 Seedling — 10+</div>
              <div className="rank-item">🌿 Gardener — 50+</div>
              <div className="rank-item">🌸 Flower Keeper — 100+</div>
              <div className="rank-item">🌹 Rose Cultivator — 500+</div>
              <div className="rank-item">🌳 Master Gardener — 1000+</div>
              <div className="rank-item">👑 Garden Lord — 2000+</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Garden;