const createPagination = array => {
      let pages = [];
      const amountPages = Math.round( array?.length / 9 );
      let upperBound = 9;
      let lowerBound = upperBound - 9;

      for ( let i = 0; i <= amountPages; i++ ) {
            
            let page = [];

            for ( let j = lowerBound; j < upperBound; j++ ) {
                  page = [ ...page, array[ j ] ];
            }

            pages = [...pages, page ];
            upperBound += 9;
            lowerBound = upperBound - 9

      }

      return pages;
}

export default createPagination