import React from 'react';
import { GalleryItems } from './imageGallery.styled';

export function ImageGalleryItem(props) {
  return props.dataPics.map(img => {
    console.log(img);
    return (
      <GalleryItems key={img.id}>
        <img src={img.previewURL} alt={img.tags} width="270px" height="200px" />
      </GalleryItems>
    );
  });
}
