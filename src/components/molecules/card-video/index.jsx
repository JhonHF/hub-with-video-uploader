import React from "react";
import { Image } from "react-bootstrap";

export const CardVideo = ({ title, imgSource }) => {
  return (
    <div className="text-center">
      <Image src={imgSource} />
      <p>{title}</p>
    </div>
  );
};
