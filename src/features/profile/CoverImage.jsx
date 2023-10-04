import defaultImage from "../../assets/cover.jpg";

function CoverImage({ src }) {
  return (
    <img
      className="w-full h-full"
      src={src || defaultImage}
      alt="cover-image"
    />
  );
}

export default CoverImage;
