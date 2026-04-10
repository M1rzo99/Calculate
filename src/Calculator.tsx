import { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
	const [input, setInput] = useState<string>('')

	const HandleBtnClick = (value: string) => {
		setInput(prevInput => prevInput + value)
	}

	const HandlerClear = () => {
		setInput('')
	}

	const HandleClaculate = () => {
		try {
			setInput(eval(input).toString())
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='container'>
			<h1>Calculate</h1>
			<div className='calculator'>
				<div className='display'>{input} </div>
				<div className='buttons'>
					<button> </button>
					<button onClick={HandlerClear}>AC</button>
					<button onClick={() => HandleBtnClick('%')}>%</button>
					<button onClick={() => HandleBtnClick('/')} className='operator'>
						/
					</button>

					<button onClick={() => HandleBtnClick('9')}>9</button>
					<button onClick={() => HandleBtnClick('8')}>8</button>
					<button onClick={() => HandleBtnClick('7')}>7</button>
					<button onClick={() => HandleBtnClick('*')} className='operator'>
						x
					</button>

					<button onClick={() => HandleBtnClick('6')}>6</button>
					<button onClick={() => HandleBtnClick('5')}>5</button>
					<button onClick={() => HandleBtnClick('4')}>4</button>
					<button onClick={() => HandleBtnClick('-')} className='operator'>
						{' '}
						-{' '}
					</button>

					<button onClick={() => HandleBtnClick('3')}>3</button>
					<button onClick={() => HandleBtnClick('2')}>2</button>
					<button onClick={() => HandleBtnClick('1')}>1</button>
					<button onClick={() => HandleBtnClick('+')} className='operator'>
						{' '}
						+{' '}
					</button>
				</div>

				<div className='bottom'>
					<button className='zero' onClick={() => HandleBtnClick('0')}>
						0
					</button>
					<button onClick={HandleClaculate} className='operator'>
						{' '}
						={' '}
					</button>
					<button className='operator' onClick={() => HandleBtnClick('.')}>
						{' '}
						.{' '}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Calculator
