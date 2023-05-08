import { REST_ICON_URL } from "../utils/constants";

const RestCard = ({ restInfo }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    restInfo.data;
  return (
    <div className="rest-card">
      <img
        className="rest-image"
        alt="restcard"
        src={REST_ICON_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}⭐️</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestCard;
