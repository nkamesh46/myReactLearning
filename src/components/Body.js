import RestCard from "./RestCard";
//import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";

const getFilteredList = (filtertext, restaurantList) => {
  var filteredList = restaurantList.filter((x) =>
    x?.data?.name?.toLowerCase().includes(filtertext.toLowerCase())
  );
  return filteredList;
};
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestList, setfilteredRestList] = useState([]);
  const [filtertext, setFilterText] = useState("");

  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.530068685040977&lng=78.3770895425977&page_type=DESKTOP_WEB_LISTING"
    );
    const restData = await data.json();
    setRestaurantList(restData?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestList(restData?.data?.cards[2]?.data?.data?.cards);
  }

  return restaurantList.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
          value={filtertext}
        ></input>
        <button
          onClick={() => {
            let filteredData = getFilteredList(filtertext, restaurantList);
            setfilteredRestList(filteredData);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestList.length > 0 ? (
          filteredRestList.map((restData) => (
            <RestCard key={restData.data.id} restInfo={restData} />
          ))
        ) : (
          <h1>No Restaurants found with this filter</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
