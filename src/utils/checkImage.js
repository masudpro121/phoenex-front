const checkImage = (msgid) => {
  return fetch('/api/check-image?id='+msgid)
  .then(res=>res.json())
  .then(res=>{
    console.log(res.data, 'checkImg util');
    if(res.data.status == "completed"){
      return {progress:100, images: res.data.upscaled_urls}
    }else if(res.data.progress > 0){
        return {progress:res.data.progress, progressImage: res.data.url}
    }else{
      return { progress:res.data.progress}
    }
  })
}

export default checkImage