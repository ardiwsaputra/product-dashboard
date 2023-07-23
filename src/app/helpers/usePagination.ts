// export interface PaginationResult {
//   limit: number;
//   currentPage: number;
//   numberOfPages: number;
//   totalItems: number;
// }

// function usePagination(
//   limit: number,
//   page: number,
// ): PaginationResult{
//   const totalItems = data.length;
//   const numberOfPages = Math.ceil(totalItems / limit);

//   let currentPage = page;
//   if (currentPage < 1) {
//     currentPage = 1;
//   } else if (currentPage > numberOfPages) {
//     currentPage = numberOfPages;
//   }

//   const startIndex = (currentPage - 1) * limit;
//   const endIndex = Math.min(startIndex + limit, totalItems);
//   const paginatedData = data.slice(startIndex, endIndex);

//   return {
//     limit,
//     currentPage,
//     numberOfPages,
//     total: totalItems,
//     data: paginatedData,
//   };
// }

// export default usePagination;
