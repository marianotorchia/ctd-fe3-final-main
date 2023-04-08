
import { ContextGlobal } from '../Components/utils/global.context'
import React, { useState } from 'react'


const Form = () => {
  
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    
    if (!name || !email) {
      setError('Complete los campos')
      return
    }
  
    if ( !email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) || name.length <= 5 ) {
      setError('Por favor, verifique su informacion')
      return
    }

    const user = {
      name: name,
      email: email
    }

    setName('')
    setEmail('')
    setError('')
    setSubmitted(user)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
           <input
             type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
        <label htmlFor='email'>Email</label>
           <input
             type='text'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <hr/>
          <button type="submit">Enviar</button>
        </form>
        {submitted && <p>{`Gracias ${submitted.name}, te contactaremos cuando antes vía mail`}</p>}
        {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Form
