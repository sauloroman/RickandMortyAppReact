import useCharacter from "../hooks/useCharacter"

const Character = ({ url }) => {

  const { character } = useCharacter( url );

  return (  
    <div className="character__card">

      <div className="character__imgBox">
        <div className="character__status">
          <div className={`${ character.status === 'Alive' ? 'alive' : character.status === 'Dead' ? 'dead' : 'unknown'} character__status-ball`}></div>
          <p>{ character.status }</p>
        </div>
        <img src={ character.image } alt={ character.name } />
      </div>

      <div className="character__info">
        <h3>{ character.name }</h3>

        <div className="character__features">
          <p>Species: <span>{ character.species }</span></p>
          <p>Origin: <span>{ character.origin }</span></p>
          <p>Amount appearance: <span>{ character.amountEpisodes }</span></p>
        </div> 
      </div> 

    </div>
  )
}

export default Character