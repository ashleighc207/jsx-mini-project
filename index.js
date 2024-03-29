let root = document.getElementById('root')

function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 1;
}

function reload() {
	return window.location.reload();
}

class Number extends React.Component {
	render() {
		const number = getRandomNumber();
		return (
			<section className="number-card">
				<h3 className="heading-three">Your Number: {number}</h3>
				<p className="text">{(number === 4) ? 'My favorite number!' : 'A random number, for sure. Keep trying, let\'s see if we can get your favorite number!'}</p>
				{number === 4 ? <p className="text">Not that you care.. but still</p> : <p className="text">Did you know that random number generators have been found to be not all that random after all?</p>}
				<button id="newNum" className="button" type="button" onClick={reload}>New Number!</button>
			</section>
		)
	}
}

ReactDOM.render(<Number />, root)