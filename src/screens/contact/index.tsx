'use client';
import { useState } from 'react';

export default function Contact() {
  const [count, setCount] = useState(0);
  return (
    <main className='bg-red-500'>
      Contact us
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </main>
  );
}
