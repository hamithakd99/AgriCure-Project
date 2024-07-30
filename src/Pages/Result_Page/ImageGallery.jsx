import React from "react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
// import './style.scss';

function ImageGallery() {
  const dynamicEl = [
    {
      src: "...",
      responsive: "...",
      thumb: "...",
      subHtml: `...`,
    },
    {
      src: "...",
      responsive: "...",
      subHtml: `...`,
    },
    // Add more placeholder images as needed
  ];

  return (
    <>
      <LightGallery dynamic={true} dynamicEl={dynamicEl} />
    </>
  );
}

export default ImageGallery;
