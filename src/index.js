import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <HookSwitcher/>
    </div>
  )
}

const HookSwitcher = () => {

	const [color, setColor] = useState('gray');
	const [size, setSize] = useState(14);

	return(
		<div style = {{
			backgroundColor: color, 
			padding: '10px',
			fontSize: `${size}px` }}>
				Hello
			<button 
				onClick = {() => setColor('gray')}>
			Dark
			</button>
			
			<button 
				onClick = {() => setColor('white')}>
			Light
			</button>

			<button
				onClick = {() => setSize((s) => s + 2)}>
				+
			</button>
		</div>
	)
}
ReactDOM.render(<App/>, document.getElementById('root'));

