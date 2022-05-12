import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import generatePagination from "../../../../functions/generatePagination/generatePagination";
import classes from "./TitlePagination.module.scss";

function TitlePagination({ currentPage, totalPages, linkedPath }) {
  const paginationArray = generatePagination(7, currentPage, totalPages);

  return (
    <Pagination
      className={`justify-content-md-center mt-3 ${classes.pagination}`}
    >
      {currentPage !== 1 && (
        <>
          <li className="page-item">
            <Link
              to={`${linkedPath}/1`}
              className="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              to={`${linkedPath}/${currentPage - 1}`}
              className="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">&lsaquo;</span>
            </Link>
          </li>
        </>
      )}

      {paginationArray.map((elem, idx) => {
        if (elem !== currentPage) {
          return (
            <li className="page-item" key={idx}>
              <Link to={`${linkedPath}/${elem}`} className="page-link">
                {elem}
              </Link>
            </li>
          );
        } else {
          return (
            <li
              className={`page-item ${classes.active}`}
              aria-current="page"
              key={idx}
            >
              <Link to={`${linkedPath}/${currentPage}`} className="page-link">
                {currentPage}
              </Link>
            </li>
          );
        }
      })}

      {currentPage !== totalPages && (
        <>
          <li className="page-item">
            <Link
              to={`${linkedPath}/${currentPage + 1}`}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&rsaquo;</span>
            </Link>
          </li>
          <li className="page-item">
            <Link
              to={`${linkedPath}/${totalPages}`}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </>
      )}
    </Pagination>
  );
}

export default TitlePagination;
