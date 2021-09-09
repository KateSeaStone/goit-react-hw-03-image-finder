import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }

  clickOnImage = () => this.props.onClose();


  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick} >
        <div className="Modal" >
          <img
            src={this.props.largeImageURL}
            alt={this.props.largeImageURL}
            onClick={this.clickOnImage} />
        </div>
      </ div>, modalRoot)
  }
}

