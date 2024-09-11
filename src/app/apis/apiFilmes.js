import axios from "axios";

// acesso das variaveis de ambiente
console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY)

// criar variavel com nome do arquivo
// usa o axios para criar instancia
const apiFilmes = axios.create({
    // criar uma url base para uso
    baseURL: "https://api.themoviedb.org/3",

    // configurar cabeçalhos
    headers: {
        // criar autorização
        // Bearer é o tipo do token
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_TMDB_API_KEY
    }
})

// exportação padrao da constante
export default apiFilmes;