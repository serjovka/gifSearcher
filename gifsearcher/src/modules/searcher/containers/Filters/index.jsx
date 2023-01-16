import { type } from "../../constants";
import "./styles.css"
import { useRef } from "react";

export default function Filters({changeType}){
    const gifRef = useRef(null);
    const stickerRef = useRef(null);
    
    const activateFilter = (e, selectedType) => {
        changeType(selectedType);
        if(e.target === gifRef.current){
            gifRef.current.className = "filter activeFilter";
            stickerRef.current.className = "filter inactiveFilter";
        }
        if(e.target === stickerRef.current){
            gifRef.current.className = "filter inactiveFilter";
            stickerRef.current.className = "filter activeFilter";
        }
    };
    
    return(
        <div className="filters">
            <button onClick={ (e) =>  activateFilter(e, type.gifs)} className="filter activeFilter" ref={gifRef}>Gif</button>
            <button onClick={ (e) => activateFilter(e, type.stickers) } className="filter inactiveFilter" ref={stickerRef}>Sticker</button>
        </div>
    );
}