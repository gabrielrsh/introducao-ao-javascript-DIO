// https://thatcopy.pw/catapi/rest/
const BASE_URL = "https://random.imagecdn.app/500/150";
const picBtn = document.getElementById("change-pic");
const pic = document.getElementById("pic");


const getPics = async () => {
    //Sem try catch
    const data = await fetch(BASE_URL)
    .catch( (e) => console.log(e.message) );
    
    /* Transforma os dados em JSON 
    .then( (result) => result.json() )
    .catch( (e) => console.log(e.message) ); */

    return data.url;

    /*TRY CATCH
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }
    catch(e) {
        console.log(e.message);
    }
    */
};

const loadImg = async () => {
    pic.src = await getPics();
};

picBtn.addEventListener("click", loadImg);

loadImg();

