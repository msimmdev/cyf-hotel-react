import React from "react";
import TouristInfoCard from "./TouristInfoCard";
import Glasgow from "./img/pexels-anna-urlapova-3061345.jpg";
import Manchester from "./img/pexels-szymon-shields-7507821.jpg";
import London from "./img/pexels-dominika-gregušová-672532.jpg";

const TouristInfoCards = () => (
  <div className="App-content">
    <div className="container">
      <div className="row justify-content-around">
        <TouristInfoCard
          src={Glasgow}
          title="Glasgow"
          href="https://peoplemakeglasgow.com"
        >
          Discover Glasgow's unique blend of rich history and modern vibrancy,
          featuring stunning architecture, world-class museums, bustling shops,
          and delectable local cuisine, all amidst lush parks and gardens.
        </TouristInfoCard>
        <TouristInfoCard
          src={Manchester}
          title="Manchester"
          href="https://visitmanchester.com"
        >
          Immerse yourself in Manchester's dynamic culture, exploring its
          industrial heritage, iconic football stadiums, modern skyscrapers, and
          vibrant arts scene, complemented by diverse shopping experiences and
          delicious food options.
        </TouristInfoCard>
        <TouristInfoCard
          src={London}
          title="London"
          href="https://visitlondon.com"
        >
          Explore London's enchanting mix of history and cosmopolitan charm,
          from iconic landmarks and world-renowned art galleries to lush green
          parks, diverse culinary delights, and a thriving shopping and theatre
          scene.
        </TouristInfoCard>
      </div>
    </div>
  </div>
);

export default TouristInfoCards;
