import { GetServerSideProps, GetStaticProps } from 'next/types';
import React from 'react';
import {useState, useEffect} from 'react'

export default function Home({repos,date}) {
    const [contador,setContador] = useState(5);
    
    function updateContador(){
        setContador(contador+1);
    }

    const myArray=['apple','banana','orange']
    
    return (
        <>
            <h3>{date}</h3>
            <div> PAGINA INICIAL </div>
            <div>{contador}</div>
            <button onClick={updateContador}>Adicionar Contador</button>
            <div> {myArray.map((item)=><p>{item}</p>)} </div>
            <ul>
                {repos.map((item)=>
                    <li key={item}>{item}</li>
                )}               
            </ul>
        </>
    )  
}

export const getStaticProps: GetStaticProps = async () => {
    
    const response =  await fetch('https://api.github.com/users/hugogontijomachado/repos')

    const data = await response.json();
    const repoNames = data.map((item)=>item.name)
    return {
        props:{
            repos:repoNames,
            date: new Date().toISOString()
        },
        revalidate:5,    
    }
}