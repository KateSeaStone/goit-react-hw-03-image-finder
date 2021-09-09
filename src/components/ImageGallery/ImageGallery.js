import { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: '',   
  }

  openModal = (imageUrl) => {
    this.setState({
      showModal: true,
      largeImageURL: imageUrl,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { images, isLoading } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              preview={image.webformatURL}
              original={image.largeImageURL}
              showModal={this.openModal}
            />
          ))}
        </ul >

        {isLoading && <Loader/>}

        {!isLoading && <Button handleClick={this.props.handleButtonClick} />}

        {this.state.showModal && <Modal largeImageURL={this.state.largeImageURL} onClose={this.closeModal} />}
      </>
    )
  }
}


ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};





