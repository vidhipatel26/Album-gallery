/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAppSelector from '../../Redux/hooks'
import useAlbumListDispatch from "../../Redux/albumLists/albumsListAction";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageLimit = useAppSelector((state) => state.albumList.pageLimit)
  const  { updatePageLimit } = useAlbumListDispatch()
  const totalPages = Math.ceil(props.totalRecords / pageLimit)
  const [pages, setPages] = useState([])
  const [paginationData, setPaginationData] = useState({
    currentPage,
    totalPages: totalPages,
    pageLimit: pageLimit,
    totalRecords: props.totalRecords
  })

  useEffect(() => {
    gotoPage(1)
    fetchPageNumbers(pageLimit);
  }, [])

  const gotoPage = (page) => {
    const totalPages =  Math.ceil(props.totalRecords / pageLimit)
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const paginationDataUpdate = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: props.totalRecords
    };

    setPaginationData(paginationDataUpdate)
    setCurrentPage(currentPage)
  };

  useEffect(() => {
    props.onPageChanged(paginationData)
    gotoPage(currentPage)
    fetchPageNumbers(pageLimit);
  }, [currentPage])

  const handlePageLimitData = (e) => {
    const totalPages =  Math.ceil(props.totalRecords / pageLimit)
    updatePageLimit(Number(e.target.value))
    const paginationDetail = {
      currentPage,
      totalPages: totalPages,
      pageLimit: Number(e.target.value),
      totalRecords: props.totalRecords
    }
    setPaginationData(paginationDetail)
    props.onPageChanged(paginationDetail)
    gotoPage(currentPage)
    fetchPageNumbers(Number(e.target.value));
  }

  const handleClick = (page, evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage - props.pageNeighbours);
  };

  const handleMoveRight = (evt) => {
    evt.preventDefault();
    gotoPage(currentPage + props.pageNeighbours);
  };

  const fetchPageNumbers = (pageLimit) => {
    const totalNumbers = props.pageNeighbours * 2 + 3 / pageLimit;
    const totalPages =  Math.ceil(props.totalRecords / pageLimit)
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - props.pageNeighbours;
      const rightBound = currentPage + props.pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return setPages([1, ...pages, totalPages])
    }

    return setPages(range(1, totalPages))
  };

  if (!props.totalRecords) return null;


  return (
    <div className="container">
      <select
        value={pageLimit}
        onChange={e => {
          handlePageLimitData(e)
        }}
        className="dropBox"
      >
        {[20, 30, 50].map(pageLimit => (
          <option key={pageLimit} value={pageLimit}>
            Show {pageLimit}
          </option>
        ))}
      </select>
      <div className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={index} className="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={handleMoveLeft}
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index} className="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={handleMoveRight}
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            );

          return (
            <li
              key={index}
              className={`page-item${currentPage === page ? " active" : ""
                }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => handleClick(page, e)}
              >
                {page}
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}


Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
