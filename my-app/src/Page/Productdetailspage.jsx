import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Productdetailspage() {
    const { id } = useParams();
    const [mydata, setdatas] = useState({})

    const singledata = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((d) => {
            console.log(d.data);
            setdatas(d.data);
        })
    }

    useEffect(() => {
        singledata();
    }, [id])  

    return (
        <div className="max-w-6xl mx-auto p-4 ">
            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/3 border p-4 rounded-lg shadow bg-blue-200">
                    <img 
                        src={mydata.thumbnail} 
                        alt={mydata.title}
                        className="w-full h-auto object-cover rounded"
                    />
                </div>

                <div className="md:w-2/3 border p-4 rounded-lg shadow bg-gray-100">
                    <h3 className="text-xl font-semibold mb-2">
                        Product: {mydata.category}
                    </h3>
                    <h4 className="text-lg font-bold mb-3">
                        Title: {mydata.title}
                    </h4>
                    <p className="text-gray-600">
                        {mydata.description}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Productdetailspage
