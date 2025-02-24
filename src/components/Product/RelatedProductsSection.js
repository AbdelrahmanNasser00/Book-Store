import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "../Books/BookCard";

const RelatedProductsSection = ({ relatedProducts }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 525 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 525, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Related Books
      </h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        containerClass="pb-6"
        itemClass="px-2"
        arrows={true}
        renderButtonGroupOutside={true}
      >
        {relatedProducts.map((relatedProduct) => (
          <BookCard book={relatedProduct} key={relatedProduct.bookId} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedProductsSection;
