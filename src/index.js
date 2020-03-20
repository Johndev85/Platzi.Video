import React from 'react'
import ReactDom from 'react-dom'
import HelloWorld from './components/HelloWorld'

   /*  Render recibe dos parametros 
       Ruta de salida de la aplicación, se añade ruta y hacia donde se va a mostrar 
   */
ReactDom.render(<HelloWorld />, document.getElementById('app'));

