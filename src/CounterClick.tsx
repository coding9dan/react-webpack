import { useState } from 'react'

export const CounterClick = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>Count {count}</button>
    </div>
  )
}
