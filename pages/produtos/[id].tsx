import {useRouter} from 'next/router';
import React from 'react';

export async function getServerSideProps(context) {
    const id = context.query.id

    return {
        props:{
            id:id
        }
    }
}


function Produtos(props) {
    return <div>ID do produto: {props.id}</div>
}

export default Produtos