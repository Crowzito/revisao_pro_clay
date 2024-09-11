import { Container } from "react-bootstrap";
import BarraNavegacao from "./BarraNavegacao";

// no parametro, tudo oq vc espera receber neste componente
export default function Pagina({ titulo, children }) {
    return (
        <>
            <BarraNavegacao />
            {/* py cria um espaçamento em cima e embaixo */}
            <div className="bg-secondary text-white text-center py-2">
                <h1>{titulo}</h1>
            </div>

            {/* margin top 2 */}
            <Container className="mt-2">
                {children}
            </Container>
        </>
    )
}
