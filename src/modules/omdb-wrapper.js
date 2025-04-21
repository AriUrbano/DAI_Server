import axios from "axios";

const APIKEY = "TU_API_KEY"; // Reemplaza con tu API key real

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };

    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`);
        if (response.data.Response === "True") {
            returnObject.respuesta = true;
            returnObject.cantidadTotal = parseInt(response.data.totalResults);
            returnObject.datos = response.data.Search;
        }
    } catch (error) {
        console.error("Error en OMDBSearchByPage:", error);
    }

    return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };

    try {
        const firstPage = await OMDBSearchByPage(searchText, 1);
        if (firstPage.respuesta) {
            returnObject = firstPage;
            const totalPages = Math.ceil(firstPage.cantidadTotal / 10);
            for (let page = 2; page <= totalPages; page++) {
                const nextPage = await OMDBSearchByPage(searchText, page);
                if (nextPage.respuesta) {
                    returnObject.datos = returnObject.datos.concat(nextPage.datos);
                }
            }
        }
    } catch (error) {
        console.error("Error en OMDBSearchComplete:", error);
    }

    return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: {}
    };

    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`);
        if (response.data.Response === "True") {
            returnObject.respuesta = true;
            returnObject.cantidadTotal = 1;
            returnObject.datos = response.data;
        }
    } catch (error) {
        console.error("Error en OMDBGetByImdbID:", error);
    }

    return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };