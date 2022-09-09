import { useEffect, useState } from "react";
import { getFetch } from "../helpers";

const useSearchLocation = ( callback ) => {
      const [inputValue, setInputValue] = useState('')
      const [suggests, setSuggests] = useState([]);
      const [selectedLocation, setSelectedLocation] = useState('');

      const onShowSuggest = ({target}) => {
            setInputValue( target.value );
            
            if ( target.value ) {
                  document.querySelector('.search').classList.add('open');
            } else {
                  document.querySelector('.search').classList.remove('open');
            }

      }

      const getSuggest = async() => {
            const url = `https://rickandmortyapi.com/api/location?name=${inputValue}`;
            const finalResult = await getFetch( url );
            setSuggests( finalResult )
      }

      useEffect( () => {
            getSuggest();
      }, [ inputValue ])

      useEffect( () => {
            setInputValue('');
            document.querySelector('.search').classList.remove('open');
            callback( selectedLocation );
      }, [ selectedLocation ])


      return {
            inputValue,
            suggests,
            setSelectedLocation,
            onShowSuggest
      }
}

export default useSearchLocation