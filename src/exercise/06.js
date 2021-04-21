// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // Extra Credit #1: UseRef Hook
  // Set the ref of the input to 'inputRef'
  // Create an inputRef object via React.useRef to access the value of 'inputRef.current.value'
  const inputRef = React.useRef();
  
  // Extra Credit #2: State Hook (set the state of the component to null, then we'll update later if there's an error)
  // const [error, setError] = React.useState(null);

  // Extra Credit #3: Controlled Inputs
  const [username, setUsername] = React.useState('');

  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    event.preventDefault();
    
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // const value = event.target.elements.usernameInput.value;

    // 🐨 Call `onSubmitUsername` with the value of the input
    // onSubmitUsername(value);

    // Extra Credit #3: Controlled Inputs
    onSubmitUsername(username);
  }

  // Extra Credit #2: State Hook
  // Create a `handleChange` function that accepts the change `event` and uses
  //  `event.target.value` to get the value of the input. Remember this event will
  //  be triggered on the input, not the form.
  function handleChange(event) {
    // event.preventDefault();
    const {value} = event.target;
    
    // Use the value of the input to determine whether there's an error. There's an
    // error if the user typed any upper-case characters.
    // const isValid = value === value.toLowerCase();
    
    // Extra Credit #3: Controlled Inputs
    setUsername(value.toLowerCase());

    // If there's an error, set the error state declared at top of function to `'Username must be lower case'`.
    // setError(isValid ? null : 'Username must be lower case');
  };

  // In the form below:
    // 🐨 add the onSubmit handler to the <form> below

    // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input

    // add a div to display the error message when an error is present in the state

    // Extra credit #2 included this line in the return above the button
    // <div style={{color: 'red'}} role="alert">{error}</div>
    // <button disabled={Boolean(error)} type="submit">Submit</button>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input value={username} onChange={handleChange} id="usernameInput" ref={inputRef} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
