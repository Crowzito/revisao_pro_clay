'use client'

import apiFilmes from "@/app/apis/apiFilmes";
import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";

// a pagina vai receber as propriedades
export default function page(props) {

    const [filme, setFilme] = useState()

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

        < Pagina titulo="Detalhes do Filme">


            {/* if em jsx */}
            {filme.id && (
                <Row>
                    {/* Imagem do filme */}
                    < Col >
                        <CardImg src={"https://image.tmdb.org/t/p/w500/" + backdrops_path} />
                    </Col>

                    {/* Detalhes do filme */}
                    <Col></Col>

                </Row>
            )
            }




        </ Pagina >
    )
}
