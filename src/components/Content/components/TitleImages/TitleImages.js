import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import classes from "./TitleImages.module.scss";

function TitleImages({ dataSource }) {
  return (
    <Row className="mt-4 justify-content-center">
      {dataSource.images.backdrops.length && (
        <h5>
          <Link to="images" className={classes["more-link"]}>
            <span className={classes.title}>Images</span>
            <span className={`ps-2 fw-lighter fs-6 ${classes["img-total"]}`}>
              {dataSource.images.backdrops.length +
                dataSource.images.logos.length +
                dataSource.images.posters.length}
            </span>
            <i className="bi bi-caret-right-fill ps-2"></i>
          </Link>
        </h5>
      )}
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        autoPlaySpeed={100000000000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass={classes["carousel-dotList"]}
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass={classes["carousel-img"]}
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
            slidesToSlide: 3,
          },
          mobile: {
            breakpoint: {
              max: 768,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
            slidesToSlide: 1,
          },
          tablet: {
            breakpoint: {
              max: 1200,
              min: 768,
            },
            items: 2,
            partialVisibilityGutter: 30,
            slidesToSlide: 2,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {dataSource.images.backdrops.slice(0, 9).map((image, idx) => {
          return (
            <div key={idx} className="mx-2 px-1">
              <div className={`${classes["img-container"]}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                  alt="slide"
                  className={`${classes["carousel-img"]}`}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </Row>
  );
}

export default TitleImages;
