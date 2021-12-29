import logo from'logo.png'
import {saludoClass, SaludoFunction} from './components'
import 'App.css'

functiom App() {
return (
	<div className="App">
	<header className = "App-header">
	<img src= {logo} className= "App-logo" alt="logo" />
	<SaludoClass 
	nombre="Ana"
	saludoText="Pronto!"
	children= <p>Soy un hijo</p>
	/>
	<SaludoFunction nombre="Ana" saludoText="Hi" />
	<p> Soy un hijo</p>
	</<SaludoFunction>
	</header>
	</div>


import '/App.css'
import { NavBar, ItemListenerContainer} from './components'
import { Fragment } from 'react'

function App (){
 return(
 	<Fragment>
 	<NavBar/>
 	<ItemListContaine/>
 	</Fragment>

 )
 }

 export deafult App

 	)
}
	 )
}
export deafult App


