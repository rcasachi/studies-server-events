'use client';

import { useState } from "react"

export function ClientComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}