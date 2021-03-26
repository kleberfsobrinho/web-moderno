import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho {...props} nome="Carla"/> */}
            {props.children}
            {React.cloneElement(props.children, {...props, ...props.children.props})} {/* clone element espera receber apenas um elemento*/}
        </ul>
    </div>