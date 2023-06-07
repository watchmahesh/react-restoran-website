import Layout from "../components/Layout/Layout";
import Service from "../components/Service/Service";
import {Link} from 'react-router-dom'

const ServicePage =()=>{
    return(
        
       <Layout>
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                        <Link className="breadcrumb-item" to="/">Home</Link>
                            <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                        </ol>
                    </nav>
                </div>
            </div>
        <Service />
       </Layout>
    )


}
export default ServicePage;