import { useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { getImages } from "API/getSearchImages";
import ImageGallery from "./ImageGallery/ImageGallery";


export const App = () => {

  const [galleryItems, setGalleryItems] = useState([])
  const [query, setQuery] = useState('')

  const searchHandler = (e) => {
    e.preventDefault();
    const { input } = e.target.elements
    setQuery(input.value )
    getImages(input.value, 1)
      .then(({ hits }) => {
        setGalleryItems( hits );
    })
    .catch(er => console.log(er));
  }

  const loadMoreHandler = () => {
    getImages(query, galleryItems.length / 12 + 1)
      .then(({ hits }) => {
        setGalleryItems(prevState => [...prevState, ...hits])
      })
    .catch(er => console.log(er));
  }

  return (
    <div>
      <Searchbar onSubmit={searchHandler} />
      <ImageGallery Images={galleryItems} loadMoreHandler={loadMoreHandler} />
    </div>
  );
};