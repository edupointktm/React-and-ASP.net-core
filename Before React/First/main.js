// document.getElementById('root')

import header from './header.js'
import section from './section.js'
import footer from './footer.js'

document.querySelector('#root').innerHTML= 
` 
    <h1>
        ${header}
    </h1>
    <h3>
        ${section()}
    </h3>
    <h1>
        ${footer("Welcome to footer section")}
    </h1>
`