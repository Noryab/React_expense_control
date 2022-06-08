import React from 'react'
import { formattingDate } from '../helpers'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import IconA from '../img/icono_ahorro.svg'
import IconHome from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconExpends from '../img/icono_gastos.svg'
import IconOcio from '../img/icono_ocio.svg'
import IconSalud from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'


const dictIcons={    
    ahorro:IconA,
    food:IconFood,
    home:IconHome,
    ocio:IconOcio,
    expends:IconExpends,
    salud:IconSalud,
    subscriptions:IconSubscriptions
}

const Expend = ({expend, setEditExpend}) => {
    const {category, expendName, amount, id, expendDate} = expend
    const leadingActions = () =>(
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpend(expend) } >
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () =>(
        <TrailingActions>
            <SwipeAction onClick = {() => console.log("delete")}>
            Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
    <SwipeableList>
        <SwipeableListItem 
            leadingActions ={leadingActions()}
            trailingActions ={trailingActions()}>
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img src={dictIcons[category]}/>
                    <div className='descripcion-gasto'>
                        <p className='categoria'>{expend.category}</p>
                        <p className='nombre-gasto'>{expendName}</p>
                        <p className='fecha-gasto'> Add in: 
                            <span>{formattingDate(expendDate)}</span>
                        </p>
                    </div>
                </div>
                <p className='cantidad-gasto'>${amount}</p>
            </div>
    </SwipeableListItem>
    </SwipeableList>        
  )
}

export default Expend