import React, { useEffect, useState } from 'react';
import Element from './ElementList';

const GetApi = () => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(resp => setPosts(resp))
    }, []);
    
    return(
        <React.Fragment>
            <h1>Captando dados da API</h1>
            {posts.map((p) => (
                <Element key={p.id} {...p} />
            ))}
        </React.Fragment>
    );
}

export default GetApi;