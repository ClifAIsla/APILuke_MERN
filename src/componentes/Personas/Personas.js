function Personas(props){
    console.log(props,"persona COMPONENTE PERSONAS")
    return(
        <div>
            {
                ( props.persona === undefined ) ?

                <p>Estos no son los droides que está buscando</p> : 
                <div>
                    <h1> {props.persona.name} </h1>
                    <p> Height: {props.persona.height} </p>
                    <p> Hair color: {props.persona.hair_color} </p>
                    <p> Birth day: {props.persona.birth_year} </p>
                    <p> Homeworld: {props.persona.homeworld} </p>
                </div>

            }

        </div>
    );
}
export default Personas;