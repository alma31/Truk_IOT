import React from 'react';
import './bouton.css';

class Bouton extends Component {
	render() {
		return (
			<div className="Bouton">
     			<a href="tel:+33601648735"><button id="BtnCall">appel</button></a>
     		</div>
     	);
	}
}

export default Bouton;
