import axios from "axios"

const BASE_URL="https://maps.googleapis.com/maps/api/place"
const API_KEY="AIzaSyBulXEuwynSl7cZ8TdP6GACDT3on4oEs4s"


const nearByPlace=()=>axios.get(BASE_URL+
    "/nearbysearch/json?"+"&location=-37.8670522%2C151.1957362&radius=1500&type=restaurant"+"&key="+API_KEY
)

export default{
    nearByPlace
}