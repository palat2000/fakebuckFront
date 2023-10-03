import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";

function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture">
        {(src, onClick) => (
          <div onClick={onClick} className="cursor-pointer">
            <Avatar src={src} className="h-40" />
          </div>
        )}
      </PictureForm>
      <PictureForm title="Cover photo">
        {(src, onClick) => (
          <div
            onClick={onClick}
            className="aspect-[5/1] overflow-hidden rounded-md flex items-center justify-center cursor-pointer"
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}

export default EditProfileForm;
