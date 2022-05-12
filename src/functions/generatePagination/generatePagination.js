function generatePagination(paginationLength, currentPageId, totalPages) {
  const totalPagesArray = [];

  for (let i = 1; i <= totalPages; i++) {
    totalPagesArray.push(i);
  }

  const leftIdx = currentPageId - Math.round(paginationLength / 2);
  const rightIdx = currentPageId + Math.floor(paginationLength / 2);

  if (leftIdx < 0) {
    return totalPagesArray.slice(0, paginationLength);
  } else if (rightIdx > totalPages) {
    return totalPagesArray.slice(totalPages - paginationLength, totalPages);
  } else {
    return totalPagesArray.slice(leftIdx, rightIdx);
  }
}

export default generatePagination;