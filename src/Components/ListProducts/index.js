import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { REACT_APP_BACK } = process.env;

const ListProducts = () => {
    const [ products, setProducts ] = useState([]);

    const fetchData = async () => {
        const response = await axios(`${REACT_APP_BACK}/products`);
        setProducts(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return ( 
        <>
            <h3 className="mb-3 text-center">
                Lista del estado inicial de los Productos
            </h3>
            <table className="table table-bordered">
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
        </>
     );
}
 
export default ListProducts;