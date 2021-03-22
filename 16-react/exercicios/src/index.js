import React from 'react';
import ReactDOM from 'react-dom'

// const elemento = <h1>React</h1>

// import Primeiro from './componentes/Primeiro'

// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite } from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Boa dia" nome="João" />
    </div>
, document.getElementById('root'))
