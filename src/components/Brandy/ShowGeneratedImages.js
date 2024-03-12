import React from "react";
import RenderImage from "./RenderImage";

function ShowGeneratedImages({ progress, progressImage, generatedImages, headline=true, renderCls="" }) {
  return (
    <div>
      {progress == 100 ? (
        <div>
         {
          headline &&  <div className="text-center mt-20 text-3xl font-bold text-gray-700">
          Our Generated Images
        </div>
         }
          <div className="flex flex-wrap gap-5 m-auto justify-center my-5">
            {generatedImages.map((img, i) => {
              return (
                <div >
                  <RenderImage src={img} key={img + i} cls={renderCls} />
                </div>
              );
            })}
          </div>
        </div>
      ) : progress > 0 ? (
        <div>
          {
            headline && <div className="text-center mt-20 text-3xl font-bold text-gray-700">
            Progress {progress}%
          </div>
          }
          <div className="m-auto flex flex-wrap justify-center my-10">
            <RenderImage src={progressImage} cls={"h-[400px] w-[400px] "+renderCls} />
          </div>
        </div>
      ) : (
        <div>
          {
            headline && <div className="text-center mt-20 text-3xl font-bold text-gray-700">
            Progress {progress}%
          </div>
          }
          <div className="m-auto flex flex-wrap justify-center my-10">
            <RenderImage  cls={"h-[400px] w-[400px] "+renderCls} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowGeneratedImages;
