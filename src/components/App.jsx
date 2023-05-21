import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { getImages } from "API/getSearchImages";
import ImageGallery from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    galleryItems: [],
    query: ''
  }

  searchHandler = (e) => {
    e.preventDefault();
    const { input } = e.target.elements
    this.setState({ query: input.value })
    getImages(input.value, 1)
      .then(({ hits }) => {
        this.setState({ galleryItems: hits });
    })
    .catch(er => console.log(er));
  }

  loadMoreHandler = () => {
    getImages(this.state.query, this.state.galleryItems.length / 12 + 1)
      .then(({ hits }) => {
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...hits]
        }));
      })
    .catch(er => console.log(er));
  }

  render()  {
    return (
      <div>
        <Searchbar onSubmit={this.searchHandler} />
        <ImageGallery Images={this.state.galleryItems} loadMoreHandler={this.loadMoreHandler} />
      </div>
    );
  }
};