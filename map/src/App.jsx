import React from 'react'

export const App = () => {
  const arr= ["nodejs","javascript","reactjs","html"]
  return (
    <div>
      {
        arr.map(
          (value,index) => <li>{value}</li>
        )
      }

    </div>
  )
}

export default App;
