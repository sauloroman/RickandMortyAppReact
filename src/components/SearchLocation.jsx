import useSearchLocation from "../hooks/useSearchLocation";

const SearchLocation = ({ onNewLocation }) => {

    const { inputValue, onShowSuggest, suggests, setSelectedLocation } = useSearchLocation( onNewLocation );

    return (
        <form 
            onSubmit={ e => e.preventDefault() }
            className="search center-item">

            <input
                value={ inputValue }
                onChange={ onShowSuggest }
                className="search__input"
                placeholder="Search a location" 
                type="text" 
            />

            <ul className="suggests">
                {
                    suggests?.length 
                    ? 
                        <>
                            {
                                suggests.map( suggest => (
                                    <li 
                                        onClick={ e => setSelectedLocation( e.target.textContent )}
                                        className="suggest__item"
                                        key={suggest.id}>{ suggest.name }</li>
                                ))
                            }
                        </>
                    :
                        <li>No results</li>
                }
            </ul>

        </form>
    )
}

export default SearchLocation