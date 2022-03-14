import { useEffect, useState } from 'react';
import api from '../config/axios.config';

const fetchingComics = `/comics`

function FetchComics() {
    const [ comics, setComics ] = useState([]);
   // console.log(comics)
    const getComics = () => {
        try {
            api.get(fetchingComics).then((response) => {
                const comics = response.data.data.results;
                console.log(comics)
                setComics(comics);
            })
        }catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getComics();
    }, []);

    return(
        <div>
            Hello comics
            {comics.map((comic, index) => {
               <p> {comic.title}</p>
            })}
        </div>
    );
}

export default FetchComics;