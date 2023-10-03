import defaultImage from "../assets/blank.png";

function Avatar({ className = "h-10", src }) {
  return (
    <img
      src={src || defaultImage}
      alt="user"
      className={`${className} rounded-full aspect-square`}
    />
  );
}

export default Avatar;
