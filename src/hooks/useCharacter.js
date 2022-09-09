import { useEffect, useState } from "react";
import { formatData } from "../helpers";

const useCharacter = (url) => {
      const [character, setCharacter] = useState({})

      const getCharacter = async() => {
        const res = await fetch( url );
        const data = await res.json();
        const newData = formatData( data );
        setCharacter( newData );
      }
    
      useEffect( () => {
        getCharacter();
      }, [] );

      return { character }
}

export default useCharacter