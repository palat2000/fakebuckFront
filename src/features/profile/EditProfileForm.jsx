import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";

function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture">
        {(src) => <Avatar src={src} className="h-40" />}
      </PictureForm>
      <PictureForm title="Cover photo">
        {(src) => (
          <div className="aspect-[5/1] overflow-hidden rounded-md flex items-center justify-center">
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}

export default EditProfileForm;
