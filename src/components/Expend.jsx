import React from 'react'

const Expend = ({expend}) => {
    const {category, expendName, amount, id} = expend
  
    return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{expend.category}</p>
                <p className='nombre-gasto'>{expendName}</p>
            </div>

        </div>
    </div>
  )
}

export default Expend