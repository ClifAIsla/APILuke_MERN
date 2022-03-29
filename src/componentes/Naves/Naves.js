function Nave(props){
    console.log(props,"nave")
    return(
        <div>
            {
                ( props.nave === undefined ) ?
                
                <p>Estos no son los droides que está buscando</p> : 
                <div>
                    <h1> {props.nave.name} </h1>
                    <p> manufacturer: {props.nave.manufacturer} </p>
                    <p> Cost credits: color: {props.nave.cost_in_credits} </p>
                    <p> Model: {props.nave.model} </p>
                </div>

            }

        </div>
    );
}
export default Nave;