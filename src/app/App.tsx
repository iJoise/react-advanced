import './index.scss'
import classes from './app.module.scss'

export const App = () => {

	return (
		<div className='app'>
			<div>Hello REACT</div>
			<button className={classes.button}>click</button>
		</div>
	)
}

