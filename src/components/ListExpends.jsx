import React from 'react'
import Expend from './Expend'


const ListExpends = ({expends, setEditExpend, deleteExpend, filter, filterExpends}) => {
  return (
    <div className='listado-gastos contenedor'>
        
        { filter ? (        
            <>
              <h2>{filterExpends.length ? 'Expends' : 'There isn\'t expends in this category yet'}</h2>        
              {filterExpends.map( expend => (
                <Expend 
                  key={expend.id}
                  expend={expend}
                  setEditExpend = {setEditExpend}
                  deleteExpend ={deleteExpend}
                />
              ))}
          </>
          ):(       
            <>
              <h2>{expends.length ? 'Expends' : 'There isn\'t expends yet'}</h2>        
              {expends.map( expend => (
                          <Expend 
                            key={expend.id}
                            expend={expend}
                            setEditExpend = {setEditExpend}
                            deleteExpend ={deleteExpend}
                          />
              ))}
            </>
          )
        }
    </div>
  )
}

export default ListExpends