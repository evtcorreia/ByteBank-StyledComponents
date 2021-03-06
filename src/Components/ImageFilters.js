import React from 'react';
import alimentacao from './../assets/images/alimentacao.svg'
import outros from './../assets/images/outros.svg'
import saude from './../assets/images/transporte.svg'
import utilidades from './../assets/images/utilidades.svg'
import transporte from './../assets/images/transporte.svg'
import {IconeTema} from './../Components/UI'


export default (type)=>{
  const Image = {
    Restaurante : <IconeTema src={alimentacao} alt ="Restaurante" />, 
    Utilidades : <IconeTema src={utilidades} alt ="Utilidades" />, 
    saude : <IconeTema src={saude} alt ="saude" />, 
    transporte : <IconeTema src={transporte} alt ="transporte" />, 
    default : <IconeTema src={outros} alt ="Outro" />, 
  
  };

  return Image[type] || Image.default;
}
