import React, { useCallback } from "react";
import classnames from "classnames";
import "./style.css";

const Pagination = ({ currentPage, size, coursesCount, changePage }) => {
  const pagesCount = Math.ceil(coursesCount / size);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const onPrevPage = useCallback(() => {
    changePage(currentPage - 1);
    window.scrollTo(0, 0);
  }, [changePage, currentPage]);
  const onNextPage = useCallback(() => {
    changePage(currentPage + 1);
    window.scrollTo(0, 0);
  }, [changePage, currentPage]);

  const handleChangePage = useCallback(
    (page) => () => {
      window.scrollTo(0, 0);
      changePage(page);
    },
    [changePage]
  );

  const prevClass = classnames("pagination__link-arrow", {
    disabled: currentPage === 1,
  });

  const nextClass = classnames("pagination__link-arrow", {
    disabled: currentPage === pagesCount,
  });

  const renderPaginationElements = pages.map((page) => {
    const paginationClass = classnames("pagination__link", {
      "pagination__link_is-active": page === currentPage,
    });

    return (
      <li
        key={page}
        className="pagination__item"
        onClick={handleChangePage(page)}
      >
        <span className={paginationClass}>{page}</span>
      </li>
    );
  });

  if (coursesCount > size) {
    return (
      <ul className="pagination">
        <span className={prevClass} onClick={onPrevPage}>
          «
        </span>
        <div className="pagination__list">{renderPaginationElements}</div>
        <span className={nextClass} onClick={onNextPage}>
          »
        </span>
      </ul>
    );
  } else {
    return null;
  }
};

export default Pagination;
