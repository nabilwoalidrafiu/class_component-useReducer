import React from 'react';
import { useRef } from 'react';

const ExploreRef = () => {
    const userNameRef = useRef(null) 
    
    const handleSearch = () => {
        userNameRef.current.focus()
        console.log(userNameRef, userNameRef.current)
    }
    return (
        <div>
            <input ref={userNameRef} type="text"/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default ExploreRef;