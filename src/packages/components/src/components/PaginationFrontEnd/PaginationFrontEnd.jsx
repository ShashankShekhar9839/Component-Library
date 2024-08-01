import React, { useState } from "react";

const PaginationFrontEnd = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, limit } = props;

  const renderData = (data, limit, pageNumber) => {
    const startIndex = (pageNumber - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = data.data.products.slice(startIndex, endIndex);
    return paginatedData.map((item) => {
      return (
        <div
          className="p-4 m-2"
          style={{
            textAlign: "left",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          {item?.title}
        </div>
      );
    });
  };

  const handlePaginationClick = (index) => {
    setCurrentPage(index + 1);
  };

  const renderPagination = (data, limit) => {
    const pageCount = Math.ceil(data?.data?.products.length / limit);
    const paginationNumbers = new Array(pageCount).fill(0);
    return (
      <div>
        {paginationNumbers.map((item, index) => (
          <span
            key={index}
            className="p-2 m-4"
            onClick={() => handlePaginationClick(index)}
            style={{
              cursor: "pointer",
              border: currentPage === index + 1 ? "1px solid black" : "none",
            }}
          >
            {index + 1}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className="flex flex-direction-column gap c"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <h3>Pagination Component with limit of {limit} per page</h3>
      {renderData(data, limit, currentPage)}
      <div className="mt-4">{renderPagination(data, limit)}</div>
    </div>
  );
};

export default PaginationFrontEnd;
