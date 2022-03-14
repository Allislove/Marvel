import FetchComics from "../components/comicsFetch";


function Comics() {
    console.log("Hello")
    

    return(
        <div>
            <h1>All Comics Here!</h1>
            <FetchComics />
        </div>
    );
}

export default Comics;
