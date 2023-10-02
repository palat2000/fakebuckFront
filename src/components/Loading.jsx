import { LoaderIcon } from "../icon";

function Loading() {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-5 backdrop-blur-[1px] flex items-center justify-center">
      {/* <div className="border-4 border-t-transparent border-blue-500 w-10 h-10 rounded-full animate-spin"></div> */}
      <LoaderIcon className="fill-blue-600 animate-spin" />
    </div>
  );
}

export default Loading;
