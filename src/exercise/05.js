// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>

// Extra credit 1
// function Box({className = '', size, style, ...otherProps}) {
//   return <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps}></div>;
// };

// Extra credit 2
function Box({className = '', size, style, ...otherProps}) {
  let sizeClassName = size ? `box--${size}` : '';
  return (
    <div className={`box ${className} ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps}></div>
  );
};


// function sizeSpecific() {
//   let size;
//   let classes;
//   let text;
//   let bgColor;

//   if (size === "small") {
//     classes="box--small";
//     text="EC small lightblue box";
//     bgColor="lightblue";
//   } else if (size === "medium") {
//     classes="box--medium";
//     text="EC medium pink box";
//     bgColor="pink";
//   } else if (size === "large") {
//     classes="box--large";
//     text="EC large orange box";
//     bgColor="orange";
//   } else {
//     text="EC new box without a size or color";
//   }
// }

function App() {
  // sizeSpecific(); 
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
