import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import fetchImages from './api/imagesApi';
import ImageGallery from './components/ImageGallery';



class App extends Component {
  state = {
    images: [],
    error: null,
    currentPage: 1,
    query: '',
    isLoading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.currentPage);
    // console.log('updated', this.state);

    console.log('isLoading', this.state.isLoading);

    if (this.state.query === '') {
      return
    }

    if ((prevState.query !== this.state.query) || (prevState.currentPage !== this.state.currentPage)) {

      // console.log('changed');

      fetchImages(this.state.query, this.state.currentPage)
        .then(data => 
          {
          console.log(data);
          this.setState({ 
          images: this.state.images.concat(data.hits),
          isLoading: false}
         )
        }
        
         );
        
        
         
        }

    if (prevState.images.length < this.state.images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleFormSubmit = query => {
    console.log(query);
    this.setState({
      images: [],
      error: null,
      currentPage: 1,
      query: query,
      isLoading: true,
    });
  }

  handleButtonClick = () => {
    this.setState({ 
      currentPage: this.state.currentPage + 1,
      isLoading: true 
    })
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleButtonClick={this.handleButtonClick}
            isLoading={isLoading}
          />)}

        <ToastContainer position="top-center" autoClose={5000} />
      </Container>
    )
  }
}

export default App;
