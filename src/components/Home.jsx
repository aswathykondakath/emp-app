import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import LoadingScreen from './LoadingScreen';


const Home = () => {
    var [empData,setData]=useState([])
    var [isLoading,setLoad]=useState(true)
    useEffect(
        ()=>{
            fetchDataFromApi();
        },[]
    )

        const fetchDataFromApi=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
                setLoad(false)
            }
        )
        .catch(
            (error)=>{
                alert("Something Went Wrong"+error)
            }
        )
    }


    return (
        <div>
            <Navbar/>
            {isLoading==true?(<LoadingScreen/>):(
                <div classname="container">
                <div classname="row">
                    <div classname="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

                        <div classname="row g-3">
                            <div classname="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <h2><center>EMPLOYEE DETAILS</center></h2>
                                <table class="table table-dark table-bordered style w-100 p-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {empData.map((data) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{data.id}</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.email}</td>

                                                </tr>
 )
})}
                                
                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            


        </div>
    );

}
export default Home