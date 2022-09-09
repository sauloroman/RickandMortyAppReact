import { useEffect, useState } from "react"
import { getRandomNumber, getFetch } from "../helpers";

const useLocation = () => {
      const [location, setLocation ] = useState({})
      const [locations, setLocations] = useState([]);
      const [isLoading, setIsLoading] = useState( false );

      const onNewLocation = async (newLocation) => {
            setIsLoading( true );
            const url = `https://rickandmortyapi.com/api/location/?name=${newLocation}`;
            const finalResult = await getFetch( url );

            console.log( finalResult );

            setLocations( finalResult );
            setIsLoading(false);
            
      };

      const getLocations = async () => {
            setIsLoading( true );
            const url = `https://rickandmortyapi.com/api/location`;
            const finalResult = await getFetch( url );
            setLocations( finalResult );
            setIsLoading(false);
      }

      useEffect( () => {
            getLocations();
      }, [] );

      useEffect( () => {
            if ( locations?.length ) {
                  setLocation( locations[ getRandomNumber( locations ) ] );
            }
      }, [ locations ] )

      return {
            location,
            onNewLocation,
            isLoading
      }
}

export default useLocation