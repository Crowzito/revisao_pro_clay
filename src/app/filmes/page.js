'use client'

import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import apiFilmes from "../apis/apiFilmes";
import Pagina from "../components/Pagina";

export default function page() {
    // uso de estado na tela, apenas quando alcançar
    // devolve uma variavel e uma função dessa variavel
    // const [variavel, setVariavel] = useState()
    // assim que buscar os filmes, vai devolver o array do resultado na variavel
    const [filmes, setFilmes] = useState([])

    // função de uso colateral do react
    // faz assim q reenderiza o componente
    useEffect(() => {
        // buscar os filmes
        buscarFilmes()

    }, [])

    // toda requisição deve ser async
    async function buscarFilmes() {
        const resultado = await apiFilmes.get("/movie/popular?language=pt-BR");

        // a resposta da busca vem para cá
        console.log(resultado.data.results);

        // recebe os filmes da api
        const filmesRecebidos = resultado.data.results;
        // joga dentro da variavel esses filmes
        setFilmes(filmesRecebidos);
    }

    return (
        <Pagina titulo="Filmes">
            <Row>

                {/* pega cada item da lista e executa uma função */}
                {filmes.map(filmes => {
                    return (
                        <Col>
                            <p>{filmes.original_title}</p>
                        </Col>
                    )
                })}

            </Row>

        </Pagina>
    )
}

