import Modal from 'components/Modal/Modal';
import { useState } from "react";

const ImageGalleryItem = ({ Card }) => {

    const [isModalShow, setIsModalShow] = useState(false)

    const toggleModal = () => {
        setIsModalShow(prevState => !prevState);
    }

    const { id, webformatURL, largeImageURL, tags } = Card;

    return (
        <li className='ImageGalleryItem' key={id}>
            <img className='ImageGalleryItem-image'
                src={webformatURL} alt={tags}
                onClick={toggleModal}
            />
            {isModalShow &&
                <Modal URL={largeImageURL} alt={tags} closeModal={toggleModal} />}
        </li>
    );
}

export default ImageGalleryItem;