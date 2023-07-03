'use client';

import { FormEvent } from "react"

export default function TestingCreatePage() {
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    await fetch('http://localhost:3000/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // @ts-expect-error
        name: event.target['name']?.value
      })
    })
  }

  return (
    <div>
      <h1>Create Tests Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name"/>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}