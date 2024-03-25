import checkImage from "./checkImage";

export default function readyGenerateImage(
  prompt,
  setProgress,
  setProgressImage,
  setGeneratedImages,
  setStatus
) {
  console.log(prompt, 'api called prompt');
  try{
    return fetch("/api/generate-image", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((res) => {
        
        console.log(res);
        const msgId = res?.data?.id;
        setProgress(0);
        if (msgId) {
          setTimeout(() => {
            console.log("inside t");
            let myInterval = setInterval(() => {
              console.log("inside interval");
              checkImage(msgId).then((checkRes) => {
                console.log(checkRes);
                setProgress(checkRes.progress);
                if (checkRes.progress == 100) {
                  clearInterval(myInterval);
                }
                if (checkRes.images) {
                  setGeneratedImages(checkRes.images);
                }
                if (checkRes.progressImage) {
                  setProgressImage(checkRes.progressImage);
                }
              });
            }, 10000);
          }, 20000);
        }
      });

  }catch(err){
    setStatus("done")
    return 'wrong'
  }
}
