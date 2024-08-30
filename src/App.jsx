import { useState } from 'react'
import './App.css'

function App() {
  const [disabled, setDisabled] = useState(false)
  const [buttonColor, setButtonColor] = useState('red')
  const nextColor = buttonColor === 'red' ? 'blue' : 'red'
  const buttonClass = disabled ? 'gray' : buttonColor

  return (
    <div>
      <button disabled={disabled} className={buttonClass} onClick={() => setButtonColor(nextColor)}>
        Change to {nextColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  )
}

export default App
