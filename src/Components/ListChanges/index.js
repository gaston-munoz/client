import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChangesDay from '../ChangesDay';


const { REACT_APP_BACK } = process.env;

const ListChanges = () => {
    const [ projections, setProjections ] = useState([]);

    const fetchData = async () => {
        const response = await axios(`${REACT_APP_BACK}/products/projections`);
        setProjections(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return ( 
        <div className="container-sm">
          <h3 className='mt-2 mb-4 text-center'>
              Proyección de la variación del precio por 30 días
          </h3>
        <div className="row">
            {
                projections.map(pr => (
                    <div className="col-col-4 p-1" key={pr.day}>
                        <ChangesDay products={ pr.products } day={ pr.day }/>
                    </div>
                ))
            }
        </div>
        </div>
     );
}
 
export default ListChanges;
