import { SearchLocation, Location, CharacterGrid, Footer, Spinner } from "./components"
import useLocation from "./hooks/useLocation"
import lettering from './assets/img/lettering.png'

const RickAndMortyApp = () => {

      const { location, isLoading, onNewLocation } = useLocation();

      return ( 
            <div>
                  <div className="banner center-item col-items">
                        <img src={lettering} alt="Rick and Morty Lettering" />
                        <SearchLocation
                              onNewLocation = { onNewLocation }
                        />
                  </div>

                  {
                        !isLoading ? (
                              <div className="container">
                                    <Location 
                                          { ...location }
                                    />
                                    
                                    <CharacterGrid 
                                          { ...location }
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