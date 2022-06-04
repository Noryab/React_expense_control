import React from 'react'
import Expend from './Expend'


const ListExpends = ({expends}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{expends.length ? 'Expends' : 'There isn\'t expends yet'}</h2>
        {expends.map( expend => (
          <Expend 
            key={expend.id}
            expend={expend}
          />
        )

        )}
    </div>
  )
}

export default ListExpends