"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoMdClose } from "react-icons/io";
import Loading from "../Loading/Loading";

const OrderSliderSm = ({ sliders }) => {
  const galleryRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageHeights, setImageHeights] = useState({});

  useEffect(() => {
    const mappedImages = sliders.map((slider) => ({
      original: slider.slider_image,
      thumbnail: slider.thum_image,
      alt_text: slider.alt_text,
    }));
    setImages(mappedImages);
  }, [sliders]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const loadedImages = images.map((image, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setImageHeights((prev) => ({ ...prev, [index]: img.naturalHeight }));
          resolve();
        };
        img.onerror = reject;
        img.src = image.original;
      });
    });

    Promise.all(loadedImages)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoading(false);
      });
  }, [images]);

  const handleImageClick = (event) => {
    if (isFullscreen) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (galleryRef.current) {
      setIsFullscreen(true);
      galleryRef.current.fullScreen();
    }
  };

  const handleFullscreen = () => {
    if (!isFullscreen && galleryRef.current) {
      galleryRef.current.fullScreen();
    } else {
      exitFullScreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  const renderItem = (item) => {
    const currentIndex = galleryRef.current
      ? galleryRef.current.getCurrentIndex()
      : 0;
    const currentImageHeight = imageHeights[currentIndex] || 0;

    return (
      <div
        className={`w-full ${
          isFullscreen
            ? "h-screen overflow-y-auto flex items-start justify-center"
            : "max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] flex items-center justify-center overflow-hidden"
        }`}
      >
        <div className={isFullscreen ? "min-h-screen flex items-center" : ""}>
          <img
            src={item.original}
            alt={item.alt_text}
            className={`w-full ${
              isFullscreen
                ? "h-auto max-w-full object-contain"
                : "h-full object-cover"
            }`}
            onClick={(event) => {
              if (isFullscreen) {
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="block md:hidden w-full max-w-screen-xl mx-auto bg-[#F8FAFC] rounded-[10px] overflow-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="block bg-[#F8FAFC] xl:p-3 4xl:p-8 rounded-[10px]">
          <ReactImageGallery
            ref={galleryRef}
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideDuration={500}
            slideOnThumbnailOver={true}
            renderCustomControls={() => (
              <button
                className="absolute right-2 top-2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white"
                onClick={handleFullscreen}
              >
                {isFullscreen && <IoMdClose className="text-xl" />}
              </button>
            )}
            renderItem={renderItem}
            onClick={handleImageClick}
            onImageLoad={() => isFullscreen}
            useSwipeable={true}
            showNav={true}
          />
        </div>
      )}
    </div>
  );
};

export default OrderSliderSm;
