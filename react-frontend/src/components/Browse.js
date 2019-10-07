import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from "./Button";
import {Redirect} from 'react-router-dom';

function Browse() {

    const [shouldFetch, setShouldFetch] = useState(false);
    const [excerptPath, setExcerptPath] = useState('/excerpt/0');

    const enterID = () => {
        const id = document.getElementById('idField').value;
        console.log('ID entered: ' + id);
        setExcerptPath('/excerpt/' + id);
        setShouldFetch(true);
    };

    return shouldFetch ? (<Redirect to={excerptPath}/>) : (
        <div className='browse'>
            <textarea id='idField' rows='10' cols='50' />
            <Button text='Locate' callback={() => enterID()} />
        </div>
        );
}

export default Browse;
