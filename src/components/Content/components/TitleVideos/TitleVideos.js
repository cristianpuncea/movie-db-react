import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import classes from "./TitleVideos.module.scss";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TitleVideos({ dataSource }) {
  const [show, setShow] = useState(false);
  const [clickedVideo, setClickedVideo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {dataSource.videos.results.length && (
        <Row className="mt-4 justify-content-center">
          <h5>
            <span>Videos</span>
          </h5>

          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay={false}
            autoPlaySpeed={100000000000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1200,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1200,
                  min: 768,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {dataSource.videos.results.map((video) => {
              return (
                <div key={video.key} className="mx-2 px-1">
                  <div className={`${classes["img-container"]}`}>
                    <img
                      src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                      alt="slide"
                      className={`${classes["carousel-img"]}`}
                      onClick={() => {
                        handleShow();
                        setClickedVideo(video);
                      }}
                    />
                    <div
                      className={`${classes["video-type"]} d-flex flex-row align-items-center`}
                    >
                      <i className="bi bi-play-btn fs-3"></i>
                      <span className="ps-2">{video.type}</span>
                    </div>
                  </div>
                  <div>
                    <h6
                      className={`pb-3 pt-2 px-3 text-center ${classes["text-name"]}`}
                      onClick={() => {
                        handleShow();
                        setClickedVideo(video);
                      }}
                    >
                      {video.name}
                    </h6>
                  </div>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={true}
                    size="xl"
                    className="bg-dark bg-gradient"
                  >
                    <Modal.Header
                      closeButton
                      closeVariant="white"
                      className="bg-dark"
                    >
                      <Modal.Title>{clickedVideo.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark d-flex justify-content-center">
                      <iframe
                        src={`https://www.youtube.com/embed/${clickedVideo.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={classes["video-frame"]}
                      ></iframe>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              );
            })}
          </Carousel>
        </Row>
      )}
    </>
  );
}

export default TitleVideos;
