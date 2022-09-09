const getFetch = async (url) => {
      try {
            const res = await fetch( url );
            const { results } = await res.json();
            return results;
      } catch ( err ){
            return undefined;
      }
}

export default getFetch;