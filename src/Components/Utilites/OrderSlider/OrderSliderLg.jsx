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
    const mappedImages = sliders.map((slider) => ({
      original: slider.slider_image,
      thumbnail: slider.thum_image,
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
    const handleResize = () => {
      if (galleryRef.current) {
        const currentIndex = galleryRef.current.getCurrentIndex();
        const currentImage = images[currentIndex];

        if (currentImage) {
          const img = new Image();
          img.src = currentImage.original;

          img.onload = () => {
            const naturalHeight = img.naturalHeight;
            setImageHeight(naturalHeight);
          };
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  useEffect(() => {
    const loadedImages = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
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
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  const renderItem = (item) => {
    return (
      <div
        className={`flex items-center justify-center ${
          isFullscreen
            ? "h-[100vh]"
            : "max-h-[200px] xl:max-h-[500px] 4xl:max-h-[600px] "
        }`}
        style={{
          width: isFullscreen ? "100%" : "100%",
          overflowY: isFullscreen ? "scroll" : "hidden",
        }}
      >
        <div
          style={{
            maxHeight:
              isFullscreen && imageHeight && imageHeight > 900
                ? "1900px"
                : "none",
          }}
        >
          <img
            src={item.original}
            alt=""
            style={{
              width: "1920px",
              height: isFullscreen ? "auto" : "100%",
              objectFit: isFullscreen ? "contain" : "cover",
              objectPosition: "center",
            }}
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
    <div className="block bg-[#F8FAFC] xl:p-3 4xl:p-8 rounded-[10px]">
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
              className="absolute right-[2%] top-[3%] z-[9999]"
              onClick={handleFullscreen}
            >
              {isFullscreen && <IoMdClose className="cross-btn" />}
            </button>
          )}
          renderItem={renderItem}
          onClick={handleImageClick}
          onImageLoad={() => isFullscreen}
        />
      )}
    </div>
  );
};

export default OrderSliderLg;
