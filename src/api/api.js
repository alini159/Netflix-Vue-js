import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzE0MzkzYTQxYTAwYjE0MjdhN2E5YzdhNWQzYzgwNCIsInN1YiI6IjYxMjMxM2U0NzE5YWViMDAyZTYyMTFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RaCtLe7-QvWc5Mf0k3jHPCBgla0oyBuOi2RfTSqEtUE";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})
