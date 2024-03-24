import { saveAs } from "file-saver";
import { useState } from "react";

const ImageDownloader = () => {
  const [imgUrl, setImgUrl] = useState(null);

  const downloadImg = () => {
    if (imgUrl) {
      saveAs(imgUrl, "downloaded image");
    }
  };

  return (
    <div className="h-screen bg-black text-white w-full flex justify-center items-center">
      <div className="border-2 p-10 w-full max-w-3xl flex flex-col gap-5">
        <div className="text-center font-bold">
          <h2 className="text-2xl">Image Downloader </h2>
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            className="py-2 px-5 w-full text-black border-none focus:border-none"
            type="url"
            placeholder="paste your image url"
            required
          />
        </div>
        <button onClick={downloadImg} className="bg-blue-500 py-2 text-white">
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageDownloader;
