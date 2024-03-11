import RenderImage from "@/components/Brandy/RenderImage";
import React from "react";


function ShowGeneratedImages({status,  progress, progressImage, generatedImages, renderCls="" }) {
  return (
    // <div>
    //   <div className="flex flex-wrap gap-5 m-auto justify-center my-5">
    //         {generatedImages && generatedImages.map((img, i) => {
    //           return (
    //             <div  key={img + i}>
    //               <RenderImage src={img} cls={renderCls} />
    //             </div>
    //           );
    //         })}
    //       </div>
    // </div>
    <div>
    {status == 'done' ? (
      <div>
        <div className="flex flex-wrap gap-5 m-auto justify-center my-5">
          {generatedImages && generatedImages.map((img, i) => {
            return (
              <div key={i}>
                <RenderImage src={img} key={img + i} cls={renderCls} />
              </div>
            );
          })}
        </div>
      </div>
    ) : progress > 0 ? (
      <div>
        <div className="m-auto flex flex-wrap justify-center my-10">
          <RenderImage src={progressImage} cls={"h-[400px] w-[400px] "+renderCls} />
        </div>
      </div>
    ) : (
      <div>
        <div className="m-auto flex flex-wrap justify-center my-10">
          <RenderImage  cls={"h-[400px] w-[400px] "+renderCls} />
        </div>
      </div>
    )}
  </div>
  );
}

export default ShowGeneratedImages;
