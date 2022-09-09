import { Character } from "./"

import image404 from '../assets/img/404.png'

const CharacterGrid = ({ residents }) => {

  const chooseGrid = () => {
    
    if ( residents?.length ) {
      return ( 
        <div className="characters-grid">
          {residents?.map( resident => (
            <Character 
              key={ resident }
              url = { resident }
            />
          ))}
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