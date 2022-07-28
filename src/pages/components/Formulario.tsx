import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor= {id}
                />
            ) : false}
            <Entrada
                texto="Nome"
                valor= {nome}
                valorMudou={setNome}
                className='mb-2'

            />
            <Entrada
                texto="Idade"
                tipo='number'
                valor= {idade}
                valorMudou={setIdade}
            />
            <div className="mt-3 flex justify-end">
                <Botao cor="blue"
                onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}