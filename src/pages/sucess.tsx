import Link from "next/link";
import { ImageContainer } from "../styles/pages/sucess";
import { SucessContainer } from "../styles/pages/sucess";

export default function Sucess() {
    return (
        <SucessContainer>
            <h1>Compra efetuada</h1>

            <ImageContainer>
                {/* <Image /> */}
            </ImageContainer>

            <p>
                Uuuul <strong>Guilherme Alexandre Braun</strong>, sua <strong>Camiseta</strong> já está a caminho da sua casa.
            </p>

            <Link href={"/"}>
                Voltar ao catálogo
            </Link>
        </SucessContainer>
    )
}