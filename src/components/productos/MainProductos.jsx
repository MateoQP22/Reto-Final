import React from 'react'

const MainProductos = ({heroProducts}) => {
  return (
    <div className="section hero d-flex a-items-center">
      <div className="container container--hero ">
        <div className="a-items-center">
        
        <table className="tabla d-flex a-items-center " border="1px">
        <caption><h3>Mis Productos , Prestese a Revisar</h3></caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Costo</th>
              <th>Description</th>
              <th>Material</th>
            </tr>
          </thead>
          {heroProducts.map((element) => {
            const { nombre, costo, description, avatar, id } = element;
            return (
                <tbody >
                  <tr key={element.id}>
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <td>{costo}</td>
                    <td>{description}</td>
                    <td>{avatar}</td>
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

export default MainProductos