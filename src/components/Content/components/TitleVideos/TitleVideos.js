import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import classes from "./TitleVideos.module.scss";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TitleVideos({ dataSource }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="mt-4 justify-content-center">
      <h5>
        <Link to="videos" className={classes["more-link"]}>
          <span>Videos</span>
          <i className="bi bi-caret-right-fill ps-2"></i>
        </Link>
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
        {dataSource.videos.results.map((video, idx) => {
          return (
            <div key={idx} className="mx-2 px-1">
              <div className={`${classes["img-container"]}`}>
                <img
                  src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                  alt="slide"
                  className={`${classes["carousel-img"]}`}
                  onClick={handleShow}
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
                <Modal.Header closeButton closeVariant="white" className="bg-dark">
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                Video to embed via Youtube API.
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

      {/* <Carousel interval={null} className="w-50">
        {dataSource.videos.results.map((video, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                alt="slide"
              />
              <Carousel.Caption>
                <p>{video.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel> */}
    </Row>
  );
}

export default TitleVideos;
