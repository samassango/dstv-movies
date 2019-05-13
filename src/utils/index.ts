export const sortMovies = (
  valueToOrderBy: string,
  moviesItems: any[]
): any[] => {
  let sortedMoviesItems = [];
  if (valueToOrderBy === "rank") {
    sortedMoviesItems = moviesItems.sort((item1: any, item2: any) => {
      return item1.rank - item2.rank;
    });
  } else {
    if (valueToOrderBy === "releaseDate") {
      sortedMoviesItems = moviesItems.sort((item1: any, item2: any) => {
        return item1.releaseDate - item2.releaseDate;
      });
    }
  }
  return sortedMoviesItems;
};
