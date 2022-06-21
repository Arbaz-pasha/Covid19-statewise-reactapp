import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';


const Statewise =()=>{

     const getCovidData = async()=>{
         const res = await fetch('https://data.covid19india.org/data.json');
         const actualData = await res.json();
         console.log(actualData.statewise);
         setData(actualData.statewise);

     }

    useEffect(()=>{
        getCovidData();
    },[]);

    const [data,setData]=useState([]);

    return(
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                  <h1 className=" mb-5 text-center text-decoration-underline"><span className="font-weight-bold  ">INDIA COVID-19 DASHBOARD</span></h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thread-dark text-white bg-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curEle,ind)=>{
                                    return(
                                        <tr key={ind}>
                                        <th>{curEle.state}</th>
                                            <td>{curEle.confirmed}</td>
                                            <td>{curEle.recovered}</td>
                                            <td>{curEle.deaths}</td>
                                            <td>{curEle.active}</td>
                                            <td>{curEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>

            </div>
            <div >

            </div>
        </>
    );
}

export default Statewise