import axios from "axios";
import { API_KEY } from "../constants";
import { type } from "../constants";

const API_GIF_URL = "https://api.giphy.com/v1/gifs/search"; 
const API_STICKERS_URL = "https://api.giphy.com/v1/stickers/search";

class ApiService {
    async searchGifs(q, apiType, limit = 10, offset = 0, rating = "r", lang = "en"){
        let URL = "";
        if(apiType === type.gifs)
            URL = API_GIF_URL;
        else
            URL = API_STICKERS_URL;
        
        const response = await axios
            .get(URL, {
                params:{
                    api_key: API_KEY,
                    q,
                    limit,
                    offset,
                    rating,
                    lang,
                }
            });
        return response.data;
    }

}

export default new ApiService();