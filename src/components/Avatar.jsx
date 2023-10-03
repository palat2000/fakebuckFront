import defaultImage from "../assets/blank.png";

function Avatar({ className = "h-10", profile }) {
  return (
    <img
      src={profile || defaultImage}
      alt="user"
      className={`${className} rounded-full aspect-square`}
    />
  );
}

export default Avatar;
