import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';


const ImageGalleryItem = (props) => {
  const { id, original, preview, showModal } = props;
  return (
    <li
      key={id}
      className="ImageGalleryItem">
      <img
        src={preview}
        alt={preview}
        className="ImageGalleryItem-image"
        onClick={() => showModal(original)} />
    </li>
  )

}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  showModal: PropTypes.func.isRequired,
};


export default ImageGalleryItem;