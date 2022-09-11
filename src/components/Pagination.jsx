const Pagination = ({ pages, setSelectedPage }) => {

      const onClickPage = (index, e) => {
            setSelectedPage( index );

            document.querySelectorAll('.pagination__item').forEach( pageItem => {
                  pageItem.classList.remove('selected-page');
            })

            e.target.classList.add('selected-page')
      }

      return (
            <ul className="pagination">
                  {
                        pages?.map( (pageItem, index) => {

                              if ( pageItem[0] ) {
                                    return ( 
                                          <li   
                                                onClick={ e => onClickPage( index, e ) }
                                                className="pagination__item" key={ pageItem[0] }>{ index + 1 }</li>
                                    )
                              }

                        })
                  }
            </ul>
      )
}

export default Pagination