import React, {useState, useEffect} from 'react';

export const AppNew = () => {
  const [nome, setNome] = useState(undefined);

  useEffect(
    () => {
      if (nome === undefined) {
        setNome(sessionStorage.getItem('nome') || '');
      }
      else {
        sessionStorage.setItem('nome', nome);
      }
    }, [nome]
  );
  
  return (
    <>
      Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
      <br />
      <p>Olá, {nome}</p>
    </>
  )
}