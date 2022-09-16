import {useState} from 'react'

function Home() {
    const [contador,setContador] = useState(5);
    function updateContador(){
        setContador(contador+1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={updateContador}>Adicionar Contador</button>
        </div>
    )
    

}
export default Home