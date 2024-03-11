import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
function RenderImage({ src, cls = "" }) {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <div className="h-80 w-80">
          <Skeleton duration={0.7}  className="h-full w-full" />
          </div>}
      {src && (
        <img
          className={isLoading ? "hidden" : "block" + " h-full w-full rounded-md "}
          src={src}
          onLoad={handleLoaded}
        />
      )}
    </>
  );
}

export default RenderImage;
