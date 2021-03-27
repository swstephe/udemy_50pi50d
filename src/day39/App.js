import { useState } from 'react'

function App() {
  const [blurValue, setBlurValue] = useState(20)

  function handleInput(e) {
    const length = e.target.value.length
    setBlurValue(20 > length*2 ? 20 - length*2 : 0)
  }

  return (
    <>
      <div className="background" id="background"
           style={{filter: `blur(${blurValue}px)`}}
      />
      <div className="bg-white rounded p-10 text-center shadow-md">
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">Change the password to see the effect</p>
        <div className="my-4 text-left">
          <label htmlFor="email" className="text-gray-900">Email</label>
          <input type="email" id="email" className="border block w-full p-2 mt-2 rounded" placeholder="Enter Email" />
        </div>
        <div className="my-4 text-left">
          <label htmlFor="password" className="text-gray-900">Password</label>
          <input type="password" id="password"
                 className="border block w-full p-2 mt-2 rounded"
                 placeholder="Enter Password"
                 onInput={handleInput}
          />
        </div>
        <button className="bg-black text-white py-2 mt-4 inline-block w-full rounded" type="submit">Submit</button>
      </div>
    </>
  )
}

export default App;
