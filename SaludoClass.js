import { Compnent} from 'react'

export class saludoClass extends Component {
	render() {
		const children = this.props.children

		return(
			<p>
			{this.propos.saludoText} {this.props.nombre}
			{children}
			</p>
			)
	}
}}