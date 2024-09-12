'use client'

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import apiFilmes from "@/app/apis/apiFilmes";
import Pagina from "@/app/components/Pagina";

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
        const resultado = await apiFilmes.get("/movie/upcoming?language=pt-BR");

        // a resposta da busca vem para cá
        console.log(resultado.data.results);

        // recebe os filmes da api
        const filmesRecebidos = resultado.data.results;
        // joga dentro da variavel esses filmes
        setFilmes(filmesRecebidos);
    }

    return (
        <Pagina titulo="Nos Cinemas">
            <Row md={4}>

                {/* pega cada item da lista e executa uma função */}
                {filmes.map(filmes => {
                    return (
                        // padding up e down
                        <Col className="py-2">
                            {/* ocupa 100% do tamanho possivel */}
                            <Card style={{ height: '100%' }}>
                                <Card.Img src={"https://image.tmdb.org/t/p/w500/" + filmes.poster_path} />
                                <Card.Body>
                                    <Card.Title>{filmes.original_title}</Card.Title>
                                    <p>
                                        <b>Nota:</b>
                                        {filmes.vote_average}  ⭐
                                    </p>
                                </Card.Body>

                                <Card.Footer className="text-end">
                                    <Button href={'/filmes/' + filmes.id}>Detalhes</Button>
                                </Card.Footer>
                            </Card>

                            {/* <p>{filmes.original_title}</p>
                            <p>{filmes.vote_average}</p>
                            <p>{filmes.poster_path}</p> */}
                        </Col>
                    )
                })}

            </Row>

        </Pagina>
    )
}

