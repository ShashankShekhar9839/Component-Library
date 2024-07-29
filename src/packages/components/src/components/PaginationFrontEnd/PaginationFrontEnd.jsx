import React, { useState } from "react";

const PaginationFrontEnd = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, limit } = props;
  
  const renderData = (data,limit, pageNumber) => {
    const startIndex = (pageNumber -   1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = data.data.products.slice(startIndex, endIndex);
    return paginatedData.map((item) => {
        return <div>{item?.title}</div>
    })
  }

  const handlePaginationClick = (index) => {
    setCurrentPage(index + 1);
  }

  const renderPagination = (data, limit) => {
    const pageCount = Math.ceil(data?.data?.products.length / limit);
    const paginationNumbers = new Array(pageCount).fill(0);
    return (
      <div>
        {paginationNumbers.map((item, index) => (
          <span key={index} className="p-2" onClick={() => handlePaginationClick(index)}>{index + 1}</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h3>Pagination Component with limit of {limit} per page</h3>
      {renderData(data, limit, currentPage)}
      <div>{renderPagination(data, limit)}</div>
    </div>
  );
};

export default PaginationFrontEnd;
