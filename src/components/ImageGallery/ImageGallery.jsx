import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React from 'react';

// import PropTypes from 'prop-types';

function ImageGallery({ Images, loadMoreHandler }) {
    return (
    <>
        <ul className="ImageGallery">
        {Images.map(card => (
            <ImageGalleryItem key={card.id} Card={card} />
        ))}
        </ul>
        {(Images.length!==0)&&<Button loadMoreHandler={loadMoreHandler} />}
    </>
  );
}

export default ImageGallery;