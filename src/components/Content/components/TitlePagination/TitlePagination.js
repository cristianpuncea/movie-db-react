import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import classes from "./TitlePagination.module.scss";

function TitlePagination({ currentPage, totalPages}) {

  const generatePagination = (desiredLength) => {
    const totalPagesArray = [];

    for (let i = 1; i <= totalPages; i++) {
      totalPagesArray.push(i);
    }

    const leftIdx = currentPage - Math.round(desiredLength / 2);
    const rightIdx = currentPage + Math.floor(desiredLength / 2);

    if (leftIdx < 0) {
      return totalPagesArray.slice(0, desiredLength);
    } else if (rightIdx > totalPages) {
      return totalPagesArray.slice(totalPages - desiredLength, totalPages);
    } else {
      return totalPagesArray.slice(leftIdx, rightIdx);
    }
  };

  const paginationArray = generatePagination(9);

  return (
    <Pagination className={`justify-content-md-center mt-3 ${classes.pagination}`}>
      {currentPage !== 1 && (
        <>
          <li className="page-item">
            <Link to="/movies/top/1" className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link to={`/movies/top/${currentPage - 1}`} className="page-link" aria-label="Previous">
              <span aria-hidden="true">&lsaquo;</span>
            </Link>
          </li>
        </>
      )}

      {paginationArray.map((elem, idx) => {
        if (elem !== currentPage) {
          return (
            <li className="page-item" key={idx}>
              <Link to={`/movies/top/${elem}`} className="page-link">
                {elem}
              </Link>
            </li>
          );
        } else {
          return (
            <li className={`page-item ${classes.active}`} aria-current="page" key={idx}>
              <Link to={`/movies/top/${currentPage}`} className="page-link">
                {currentPage}
              </Link>
            </li>
          );
        }
      })}

      {currentPage !== totalPages && (
        <>
        <li className="page-item">
            <Link to={`/movies/top/${currentPage + 1}`} className="page-link" aria-label="Next">
              <span aria-hidden="true">&rsaquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link to={`/movies/top/${totalPages}`} className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </>
      )}
    </Pagination>
  );
}

export default TitlePagination;
