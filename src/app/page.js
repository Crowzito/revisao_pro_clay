import Pagina from "./components/Pagina";

export default function page() {
  return (
    <>
      {/* tudo dentro do componente eh children */}
      <Pagina titulo="Página Inicial">
        <p>Home Page</p>
      </Pagina>

    </>
  )
}