const Location = ({ name, type, dimension, residents }) => {

    return (
        <> 
            <div className="location">
                <div className="location__info">
                    <h3>Name: </h3>
                    <p>{ name }</p>
                </div>
                <div className="location__info">
                    <h3>Type: </h3>
                    <p>{ type }</p>
                </div>
                <div className="location__info">
                    <h3>Dimension: </h3>
                    <p>{ dimension }</p>
                </div>
                <div className="location__info">
                    <h3>Residents: </h3>
                    <p>{ residents?.length }</p>
                </div>
            </div>

            <h2 className="location__title">🚩 { name ? name: 'No location' }</h2>

        </>
    )
}

export default Location