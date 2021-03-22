import React from 'react';
import ReactDOM from 'react-dom'

//const elemento = <h1>React</h1>

//import Primeiro from './componentes/Primeiro'

//import BomDia from './componentes/BomDia'

import Multi, { BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
, document.getElementById('root'))
