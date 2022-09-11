import { Character } from "./"

import image404 from '../assets/img/404.png'

const CharacterGrid = ({ selectedPage }) => {

  const chooseGrid = () => {
    
    if ( selectedPage?.length && selectedPage?.[0] ) {

      return ( 
        <div className="characters-grid">
          {
            selectedPage?.map( resident => {

              if ( resident ) {
                return (<Character 
                  key={ resident }
                  url = { resident }
                />)
              }

            }) 
            
          }
        </div>
      )

    } else {

      return (
        <div className="characters-no center-item">
          <img src={image404} className="image__no" alt="Rick and Morty disappointed" />
          <p className="alert-residents">
            There is anyone here 🙁 <br />
            Please try to look for any other location!.
          </p>
        </div>
      )
      
    }

  }

  return ( 
    <>
      { chooseGrid() }
    </>
  )
}

export default CharacterGrid