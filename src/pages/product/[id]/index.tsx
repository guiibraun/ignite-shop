import { useRouter } from "next/router"

export default function Teste(){
    const { query } = useRouter()

    return (
        <div>{query.id}</div>
    )
}