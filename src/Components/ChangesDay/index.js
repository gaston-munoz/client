import React from 'react';

const ChangesDay = ({ products, day }) => {
    return ( 
        <div className="card">
            <div className="card-header text-center text-white bg-dark">
                <h4>
                    Día { day } 
                </h4>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Días para vender</th>
                        <th scope="col">Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((pr, i) => (
                        <tr key={i}>
                            <td>{ pr.name }</td>
                            <td>{ pr.sellIn }</td>
                            <td>{ pr.price }</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default ChangesDay;