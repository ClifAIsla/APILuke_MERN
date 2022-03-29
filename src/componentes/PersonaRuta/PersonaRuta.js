function PersonaRuta(props){
    console.log(props,"personaruta")
    const atraparId = props.match.params.id
    const selecionarPorId = props.allPersonas[atraparId]

    console.log(selecionarPorId,"selecionarPorId")
    return(
        <div>
            <p>HOLA MUNDO</p>
        </div>
    )
}
export default PersonaRuta;