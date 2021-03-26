import React from 'react';
import ReactDOM from 'react-dom'

// const elemento = <h1>React</h1>

// import Primeiro from './componentes/Primeiro'

// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite } from './componentes/Multiplos'

// import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome="Silva">
            <Filho nome="Pedro"/>
            {/* <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/> */}
        </Pai>
    </div>
, document.getElementById('root'))
