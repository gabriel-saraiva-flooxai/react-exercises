import React from "react";

export const BoaTarde = props => <h1> Boa Tarde {props.name}! </h1>

export const BoaNoite = props => <h1> Boa Noite {props.name}! </h1>

// export default BoaTarde 
export default { BoaTarde, BoaNoite } // e depois pode colocar o nome que quiser pra importar