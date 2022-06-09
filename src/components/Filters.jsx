import {useEffect, useState} from 'react'

const Filters = ({filter, setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        Filters
        <form>
            <div className='campo'>
                <label>Expend filter</label>
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}>

                    <option value="">--- All categories ---</option>
                    <option value="ahorro">Saving</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="expends">Expends</option>
                    <option value="salud">Salud</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>

        </form>
        </div>
  )
}

export default Filters