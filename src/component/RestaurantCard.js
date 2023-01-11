import React from 'react'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

function RestaurantCard({item}) {
  return (
    <Link to={`/details/${item.id}`}  >
      <div>
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.photograph} />
                  <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                          {item.neighborhood}
                      </Card.Text>
                      <Card.Text>
                          <p>Cuisine:{item.cuisine_type}</p>
                      </Card.Text>
                  </Card.Body>
              </Card>
      </div>
    </Link>
  )
}

export default RestaurantCard