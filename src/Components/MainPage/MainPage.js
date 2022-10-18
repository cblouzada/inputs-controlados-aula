import React, {useState} from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [Nome, setNome] = useState("")
  const [Idade, setIdade] = useState("")
  const [Email, setEmail] = useState("")

  const onChangeName = (event) =>{
    // console.log("Mudei o input nome")
    // console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeIdade = (event) =>{
    // console.log("Mudei o input Idade")
    // console.log(event.target.value)
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) =>{
    // console.log("Mudei o input Email")
    // console.log(event.target.value)
    setEmail(event.target.value)
  }

  const enviarDados = () =>{

     ("Nome, Idade, Email");

  setNome("")
  setIdade("")
  setEmail("")
}


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={onChangeName} type="text" placeholder='Digite seu nome' value={Nome} />
        </label>
        <label>
          Idade:
          <Input onChange={onChangeIdade} type='number' placeholder='Digite sua idade' value={Idade}/>
        </label>
        <label>
          E-mail:
          <Input onChange={onChangeEmail} type="email" placeholder='Digite seu email' value={Email}/>
        </label>
      <button onClick={enviarDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage