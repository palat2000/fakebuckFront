import { useState } from "react";
import Avatar from "../../components/Avatar";
import useAuth from "../../hooks/use-auth";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import Loading from "../../components/Loading";

function EditProfileForm({ onSuccess }) {
  const [loading, setLoading] = useState(false);
  const {
    authUser: { profileImage, coverImage },
    updateProfile,
  } = useAuth();

  const uploadProfileImage = async (input) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("profileImage", input);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const uploadCoverImage = async (input) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("coverImage", input);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {loading && <Loading />}
      <PictureForm
        title="Profile picture"
        initialSrc={profileImage}
        onSave={uploadProfileImage}
      >
        {(src, onClick) => (
          <div onClick={onClick} className="cursor-pointer">
            <Avatar src={src} className="h-40" />
          </div>
        )}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={coverImage}
        onSave={uploadCoverImage}
      >
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
