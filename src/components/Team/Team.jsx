/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

const Team = () => {
    const [data, setTeam] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await fetch('http://localhost:5000/api/v1/chef')
            const jsonData = await responseData.json();
            const teams = jsonData.data
            setTeam(teams);

        };
        fetchData()
    },[])
    return (
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    {data?data.map((item)=>(
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={item.image} alt="" />
                            </div>
                            <h5 className="mb-0">{item.name}</h5>
                            <small>{item.designation}</small>
                            <div className="d-flex justify-content-center mt-3">
                            <a target='_blank' className="btn btn-square btn-primary mx-1" href={item.facebook_link} rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href={item.facebook_link}><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href={item.facebook_link}><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    )):[]}

                </div>
            </div>
        </div>
    )
}

export default Team
