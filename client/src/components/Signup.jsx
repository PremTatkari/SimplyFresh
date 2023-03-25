import React, { useState } from 'react'

export default function  App() {
  const [firstName, setFirstName] = useState('');
  const [Password,setPassword]=useState('');
  
  
  return (
    <div>
    <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
    <input value={Password}   name="password" onChange={e => setPassword(e.target.value)} />
    </div>
  );
}

