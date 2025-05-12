import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}! </h1>,
    <h2 key='h2'>você já está com {props.idade} anos, certo? </h2>
]

// export default props => {
//     return (
//         <React.Fragment> ou <div> ou <>
//             <h1>Bom dia {props.nome}! </h1>
//             <h2>você já está com {props.idade} anos, certo? </h2>
//         </React.Fragment> ou </div> ou </>
//     )
// }