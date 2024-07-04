"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoMdClose } from "react-icons/io";
import Loading from "../Loading/Loading";

const OrderSliderLg = ({ sliders }) => {
  const galleryRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageHeight, setImageHeight] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Map the slider data to the required format
    const mappedImages = sliders.map((slider) => ({
      original: slider.slider_image,
      thumbnail: slider.thum_image,
    }));
    setImages(mappedImages);
  }, [sliders]); // Update images when sliders prop changes

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
    const handleResize = () => {
      if (galleryRef.current) {
        const currentIndex = galleryRef.current.getCurrentIndex();
        const currentImage = images[currentIndex];

        if (currentImage) {
          // Check if currentImage is defined
          const img = new Image();
          img.src = currentImage.original;

          img.onload = () => {
            const naturalHeight = img.naturalHeight;
            setImageHeight(naturalHeight);
          };
        }
      }
    };

    handleResize(); // Call initially

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  useEffect(() => {
    // Check if all images are loaded
    const loadedImages = images.map((image) => {
      const img = new Image();
      img.src = image.original;
      return new Promise((resolve) => {
        img.onload = resolve;
      });
    });

    Promise.all(loadedImages)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, [images]);

  const handleImageClick = () => {
    if (galleryRef.current) {
      const currentIndex = galleryRef.current.getCurrentIndex();
      const currentImage = images[currentIndex];

      if (currentImage) {
        const img = new Image();
        img.src = currentImage.original;

        img.onload = () => {
          const naturalHeight = img.naturalHeight;

          if (!isFullscreen) {
            setIsFullscreen(true);
            galleryRef.current.fullScreen();
          } else if (naturalHeight <= 900) {
            setIsFullscreen(false);
          }
        };
      }
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
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  const renderItem = (item) => {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          height: isFullscreen ? "100vh" : "600px",
          width: isFullscreen ? "100%" : "100%",
          overflowY: isFullscreen ? "scroll" : "hidden",
        }}
      >
        <div
          style={{
            maxHeight:
              isFullscreen && imageHeight && imageHeight > 900
                ? "900px"
                : "none",
          }}
        >
          <img
            src={item.original}
            alt=""
            style={{
              width: "100%",
              height: isFullscreen ? "auto" : "100%",
              objectFit: isFullscreen ? "contain" : "cover",
              objectPosition: "center",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="hidden md:block bg-[#F8FAFC] md:p-8 rounded-[10px]">
      {isLoading ? (
        <Loading />
      ) : (
        <ReactImageGallery
          ref={galleryRef}
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideDuration={500}
          slideOnThumbnailOver={true}
          thumbnailWidth={100}
          thumbnailHeight={100}
          renderCustomControls={() => (
            <button
              className="absolute right-[1%] top-[1%] z-[9999]"
              onClick={handleFullscreen}
            >
              {isFullscreen && <IoMdClose className="cross-btn" />}
            </button>
          )}
          renderItem={(item) => renderItem(item)} // Use a callback function to pass item
          onClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default OrderSliderLg;
