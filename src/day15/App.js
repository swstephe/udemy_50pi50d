import Counter from './Counter'
import counts from './counts.json'

function App() {
  return counts.map((counter, idx) => (
      <Counter key={idx} icon={counter.icon} target={counter.count}>
        {counter.label}
      </Counter>
    )
  )
}
export default App
