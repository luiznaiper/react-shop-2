import {useState, useEffect} from 'react'

const useCharacters = url => {
    const[characters, serCharacters] = useState([])
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => serCharacters(data.results))
    }, [url])
    return characters
}

export {useCharacters}