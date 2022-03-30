import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

function TitleVideos({ dataSource }) {
  return (
    <Row>
      <h5>Videos</h5>
      <Carousel interval={null} className="pt-5 w-75">
        {dataSource.videos.results.map((video, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-50"
                src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                alt="slide"
              />
              <Carousel.Caption>
                <p>{video.name}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Row>
  );
}

export default TitleVideos;
