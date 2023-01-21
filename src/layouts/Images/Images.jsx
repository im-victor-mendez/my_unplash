import "./Images.scss";

import React from "react";
import Image from "../../components/Image/Image";
import UseImages from "../../firebase/getImages";
import Loading from "../Loading/Loading";
import Masonry from "react-masonry-css";
import { useSearch } from "../../contexts/searchContext";

function Images() {
  const { search } = useSearch();
  const { images } = UseImages();

  const breakpointCols = { default: 3, 800: 2, 700: 1 };

  return (
    <Masonry
      id="images"
      breakpointCols={breakpointCols}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.length === 0 ? (
        <Loading />
      ) : (
        images
          .filter((image) => {
            if (!search) return image;
            if (!image.label) return;

            const label = image.label.toLowerCase();
            if (label.includes(search.toLowerCase())) return image;
          })
          .map((image) => (
            <Image
              key={image.uid}
              uid={image.uid}
              url={image.url}
              label={image.label}
            />
          ))
      )}
    </Masonry>
  );
}

export default Images;
