import React from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
   


    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    console.log("total page:",totalPages)
    console.log("current page:",currentPage)
    return (
    <ul className="cs_pagination cs_fs_21 cs_semibold cs_mp0">
      {/* Render previous page arrow if currentPage is not the first page */}
      {currentPage > 1 && (
        <li className="cs_page_item">
          <a
            className="cs_page_link"
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <i className="fa-solid fa-arrow-left" />
          </a>
        </li>
      )}

      {/* Render each page number */}
      {pages.map((page) => (
        <li
          key={page}
          className={`cs_page_item ${currentPage === page ? "active" : ""}`}
        >
          <a
            className="cs_page_link"
            href="#"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      {/* Render next page arrow if currentPage is not the last page */}
      {currentPage < totalPages && (
        <li className="cs_page_item">
          <a
            className="cs_page_link"
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <i className="fa-solid fa-arrow-right" />
          </a>
        </li>
      )}
    </ul>
  );
}
