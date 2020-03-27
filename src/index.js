import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';

/*     Render recibe dos parametros
    Ruta de salida de la aplicación, se añade ruta y hacia donde se va a mostrar
 */

ReactDom.render(<App />, document.getElementById('app'));

