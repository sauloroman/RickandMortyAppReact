const getFetch = async (url) => {

            const res = await fetch( url );
            const { results } = await res.json();
            return results;

}

export default getFetch;