function FormularioAPI( props ){
    return(
        <form onSubmit={ (event) => props.buscarParametroPorId(event) }>
            <div>
                <label>
                    Buscar por:
                </label>
                <select  id="nombreParametro">
                   <option value="films">Films </option>
                   <option value="people">People</option>
                   <option value="planets">Planets</option>
                   <option value="species">Species</option>
                   <option value="starships">Starships</option>
                </select>
            </div>
            <div>
                <label>
                    Id:
                </label>
                <input type="number" id="id" />
            </div>
            <button type="submit">
              Agregar
            </button>
        </form>
    )
}
export default FormularioAPI;