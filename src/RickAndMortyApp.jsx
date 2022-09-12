import { SearchLocation, Location, CharacterGrid, Footer, Spinner, Pagination } from "./components"
import useLocation from "./hooks/useLocation"
import lettering from './assets/img/lettering.png'
import { useEffect } from "react";
import { createPagination } from "./helpers";
import { useState } from "react";

const RickAndMortyApp = () => {

      const { location, isLoading, onNewLocation } = useLocation();
      const [pages, setPages] = useState([]);
      const [selectedPage, setSelectedPage] = useState(0);

      useEffect( () => {
            setPages ( createPagination( location?.residents ) );
      }, [ location ] )


      return ( 
            <div>
                  <div className="banner center-item col-items">
                        <img src={lettering} alt="Rick and Morty Lettering" />
                        <SearchLocation
                              setSelectedPage = { setSelectedPage }
                              onNewLocation = { onNewLocation }
                        />
                  </div>

                  {
                        !isLoading ? (
                              <div className="container">
                                    <Location 
                                          {...location}
                                    />
                                    
                                    <CharacterGrid 
                                          selectedPage = { pages[ selectedPage ] }
                                    />

                                    <Pagination 
                                          pages = { pages }
                                          setSelectedPage = { setSelectedPage }
                                    />
                              </div>
                        ) : 
                        (
                              <Spinner />
                        )
                  }

                  <Footer />
            </div>
      )
}

export default RickAndMortyApp