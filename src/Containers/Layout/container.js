import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const Layout = (props) => {
    return ( 
        <Router>
            <div className="App">
            <Header />
            <div className="container-fluid p-4 content">
                {
                  props.children
                }
            </div>
            <Footer />
            </div>
        </Router>
     );
}
 
export default Layout;