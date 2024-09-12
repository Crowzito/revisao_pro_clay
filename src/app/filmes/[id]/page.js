'use client'

import apiFilmes from "@/app/apis/apiFilmes";
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";

// a pagina vai receber as propriedades
export default function page(props) {

    const [filme, setFilme] = useState({})

    // ao acessar a pagina, chama o use effect e busca o filme da função assincrona
    useEffect(() => {
        buscarFilme()
    }, [])

    async function buscarFilme() {
        const resultado = await apiFilmes.get("/movie/" + props.params.id + "?language=pt-BR")

        const filmeRecebido = resultado.data

        console.log(resultado.data);
        setFilme(filmeRecebido)
    }

    // vai receber como parametro o numero do filme
    // console.log(props.params.id)
    return (

        < Pagina titulo={filme.title}>


            {/* if em jsx */}
            {filme.id && (
                <div className="py-4">

                    <Row>

                        {/* Imagem do filme */}
                        < Col md={3}>
                            <CardImg src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} />
                        </Col>

                        {/* Detalhes do filme */}
                        <Col md={9}>
                            <p><b>Data de Lançamento: </b>{filme.release_date}</p>
                            <p><b>Duração: </b>{filme.runtime}</p>
                            <p><b>Orçamento: </b>{filme.revenue}</p>
                            <p><b>Nota: </b>{filme.vote_average}⭐</p>
                            <p><b>Sinopse: </b>{filme.overview}</p>
                            <p><b>Gêneros: </b></p>
                            <ul>
                                {/* mapeia cada item e torna em outra coisa */}
                                {filme.genres.map(item => {
                                    return (
                                        <li>{item.name}</li>
                                    )
                                })}
                            </ul>

                        </Col>

                    </Row>
                </div>
            )
            }




        </ Pagina >
    )
}
