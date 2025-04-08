import CampoTexto from '../login.js'
import './Formulario.css'
import Confirm from '../confirm/confirm.js'

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log("Login feito")
}
const Formulario = () => {
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
             <h2>Preencha os dados abaixo:</h2>
             <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome..."/>
             <CampoTexto obrigatorio={true} label="Email" placeholder="Digite o seu email..."/>
             <CampoTexto obrigatorio={true} label="Senha" placeholder="Digite a sua senha..."/>
             <Confirm>
                Confirmar
             </Confirm>
            </form>
        </section>
    )
}

export default Formulario