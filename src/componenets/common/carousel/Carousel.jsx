import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import "./Carousel.css";

export default function Carousel({ images }) {
  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      gap: 10,
      autoplay: 3000,
    });

    glide.mount();
    glideRef.current = glide;

    return () => {
      glide.destroy();
    };
  }, []);

  // Function to handle previous slide
  const goPrev = () => {
    glideRef.current.go("<");
  };

  // Function to handle next slide
  const goNext = () => {
    glideRef.current.go(">");
  };

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {images.map((image, index) => (
            <li className="glide__slide" key={index}>
              <img src={image} alt={`slide-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      {/*  Left Arrow  */}
      <button className="glide__arrow glide__arrow--left" onClick={goPrev}>
        &#9664;
      </button>

      {/* Right Arrow */}
      <button className="glide__arrow glide__arrow--right" onClick={goNext}>
        &#9654;
      </button>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};