import { useState, useEffect } from 'react'
import Filters from "../Filters";
import GifsGrid from '../GifsGrid';
import ApiService from '../../services/api.service';
import "./styles.css";
import { type } from '../../constants';

export default function Searcher(){
    const [filters, setFilters] = useState({
        request: "dog",
        type: type.gifs,
        number: 10,
    });
    const [gifs, setGifs] = useState([]);

    const changeType = (selectedType) => {
        const newFilters = {
            ...filters,
            type: selectedType,
        };

        setFilters(newFilters);
    };

    const inputChange = (e) => {
        const newFilters = {
            ...filters,
            request: e.target.value,
            number: 10,
        };

        setFilters(newFilters);
    }

    const changeLimit = () => {
        const newFilters = {
            ...filters,
            number: filters.number + 10,
        };

        setFilters(newFilters);
    };

    useEffect(() => {
        ApiService.searchGifs(filters.request, filters.type, filters.number).then(
            (response) => {
                setGifs(response.data);
                return Promise.resolve();
            },
            (error) => {
                const message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log("ERROR: ", message)
                return Promise.reject();
            }
        );
    }, [filters.request, filters.type, filters.number]);  


    return(
        <div className='searcher'>
            <div className="searchPanel">
                <input type="text" onChange={inputChange} className="searchInput" />
            </div>
            <Filters changeType={changeType}/>
            <GifsGrid gifs={gifs} />
            <button onClick={changeLimit} className='moreButton'>More?</button>
        </div>
    );
}