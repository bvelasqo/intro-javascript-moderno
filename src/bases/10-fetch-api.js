const apikey = '8okWbAQil3pDpLXw7rUwSj24nSPa5V1w'

const url = 'https://api.giphy.com/v1/gifs/random'

const peticion = fetch(`${url}?api_key=${apikey}`, {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
})

//Promesas en cadena
peticion
  .then(res => res.json())
  .then(({data}) => {
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.appendChild(img)
    console.log(url)
  })
  .catch(console.warn)