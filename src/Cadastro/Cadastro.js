import React, {useState} from "react";

function Cadastro(){
  const [values, SetValues]= useState();
  console.log(values);
  const handleChangeValues = (value) => {
    //console.log(value.target.value);
    SetValues(prevValue=>({
      ...prevValue,[value.target.name]: value.target.value,
    }))
  };

  const handleClick=()=>{
    console.log(values);
  }
  return <div className="app-container">
    <div className="register--container">
    <h1>Loja</h1>

    <img src="./Imagem/Log.png" alt="Logo" className="Logo" />
      <input type="text" name="name"
       placeholder='Nome' className="register--name"
       onChange={handleChangeValues}></input>

      <input type="text" name="cost" placeholder='Preço'
       className="register--preco" 
       onChange={handleChangeValues}></input> 

       <input type="text" name="category" placeholder='Categoria' 
       className="register--cat"
       onChange={handleChangeValues}></input> 

       <button className='Register--button' 
       onClick={()=> handleClick}
       >Cadastrar</button>
    </div>
    </div>
};

export default Cadastro;