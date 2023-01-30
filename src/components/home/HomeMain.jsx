{/*  */ }

const HomeMain = ({ heroPokemons }) => {

  return (
    <div className="section hero d-flex a-items-center">
      <div className="container container--hero ">
        <div className="a-items-center">
        
        <table className="tabla d-flex a-items-center " border="1px">
        <caption><h3>Mis alumnos de Programacion Front_End</h3></caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Fotografia</th>
              <th>Primer Nombre</th>
              <th>Segundo Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          {heroPokemons.map((element) => {
            const { primer_nombre, segundo_nombre, avatar, email, id } = element;
            return (
                <tbody >
                  <tr key={element.id}>
                    <td>{id}</td>
                    <td><img className="tabla--avatar" src={`${avatar}`}></img></td>
                    <td>{primer_nombre}</td>
                    <td>{segundo_nombre}</td>
                    <td>{email}</td>
                  </tr>
                </tbody>
            );
          })}
        </table>
        </div>
      </div>
    </div>
  )
}

export default HomeMain