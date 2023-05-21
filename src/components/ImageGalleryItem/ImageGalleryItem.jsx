import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

// import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
    state = {
    isModalShow: false
  }

    toggleModal = () => {
        this.setState(prevState => ({ isModalShow: !prevState.isModalShow }));
        console.log(this.state.isModalShow)
    }

    render() {
        const { id, webformatURL, largeImageURL, tags } = this.props.Card;
        return (
            <li className='ImageGalleryItem' key={id}>
                <img className='ImageGalleryItem-image'
                    src={webformatURL} alt={tags}
                    onClick={this.toggleModal}
                />
                {this.state.isModalShow &&
                    <Modal URL={largeImageURL} alt={tags} closeModal={this.toggleModal} />}
            </li>
        );
    }
}
