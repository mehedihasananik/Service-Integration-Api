"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoMdClose } from "react-icons/io";
import Loading from "../Loading/Loading";
import Image from "next/image";

const OrderSliderLg = ({ sliders, imgBlurSlider, imgBlurThumb }) => {
  const galleryRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageHeight, setImageHeight] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Map the slider data to the required format
    const mappedImages = sliders.map((slider, index) => ({
      original: slider.slider_image,
      thumbnail: slider.thum_image,
      blurDataURL: imgBlurSlider[index], // Added blurDataURL for each image
    }));
    setImages(mappedImages);
  }, [sliders, imgBlurSlider]); // Update images when sliders or imgBlurSlider prop changes

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
          const img = document.createElement("img");
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
      const img = document.createElement("img");
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
        const img = document.createElement("img");
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
          <Image
            unoptimized={true}
            src={item.original}
            width={500}
            height={500}
            alt=""
            placeholder="blur" // Added placeholder="blur"
            blurDataURL={item.blurDataURL} // Added blurDataURL={item.blurDataURL}
            style={{
              width: "100%",
              height: isFullscreen ? "auto" : "100%",
              objectFit: isFullscreen ? "contain" : "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="hidden md:block bg-[#FCFCFC] md:p-8 rounded-[10px]">
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
    </div>
  );
};

export default OrderSliderLg;
