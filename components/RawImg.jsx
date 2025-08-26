import React from 'react';

export default function RawImg({ image, altText, $name, css, ...props }) {
  return (
    <img 
      src={image} 
      alt={altText} 
      data-name={$name}
      style={css}
      {...props}
    />
  );
}
