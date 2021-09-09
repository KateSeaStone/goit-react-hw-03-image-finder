
const apiKey = '22003167-822d2c3fa2b59190c92d4d864';

const fetchImages = async (query, currentPage) => {
  let result = await fetch(`https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
  return await result.json()
}



export default fetchImages;