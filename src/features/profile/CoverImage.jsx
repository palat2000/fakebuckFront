import defaultImage from "../../assets/cover.jpg";

function CoverImage({ src }) {
  return <img src={src || defaultImage} alt="cover-image" />;
}

export default CoverImage;
