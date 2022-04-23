
const getImages = async () => {
  try{
    const apikey = '8okWbAQil3pDpLXw7rUwSj24nSPa5V1w'
    const url = 'https://api.giphy.com/v1/gifs/random'
    const res = await fetch(`${url}?api_key=${apikey}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    })
    const {data} = await res.json();
    console.log(data.images.original.url)
    const {url: urlImage} = data.images.original
    const img = document.createElement('img')
    console.log(urlImage);
    img.src = urlImage
    document.body.appendChild(img)
    return urlImage
  }catch(err){
    console.warn(err)
  }
};

getImages().then(res => {
  console.log(res)
  });
