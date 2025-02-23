import React from 'react';

function Post({info}) {
    return (
        <li>
            <h3>{info.title}</h3>
            <p>{info.body}</p>
        </li>
    );
}

export default Post;
