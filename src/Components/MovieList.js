import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import Pagination from './Pagination'


const MovieList = ({movies , getPage , pageCount}) => {
  return (
      <Row className='d-flex justify-content-between '>
          {movies.length >= 1 ? (movies.map((mov) => {
              return (
                  <CardMovie key={mov.id} mov={mov} />
              )
          })) : <h2>لا يوجد افلام </h2> }
      {movies.length >= 1 ? (<Pagination getPage={getPage} pageCount={ pageCount} />) :null}
    </Row>
  )
}

export default MovieList
