"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import StaticCounter from "./components/StaticCounter";
import DynamicCounter from "./components/DynamicCounter";
import ConditionsCheckBox from "./components/ConditionsCheckBox";
import Link from "next/link";


export default function Home() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );



    const [isCheckedStatic, setIsCheckedStatic] = useState(false);
    const [isCheckedDynamic, setIsCheckedDynamic] = useState(false);

    return (
        <>
            <div className="main-wrapper">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-4">
                                <div className="card-header">
                                    Conditions Component
                                </div>

                                <ConditionsCheckBox
                                    isCheckedStatic={isCheckedStatic}
                                    setIsCheckedStatic={setIsCheckedStatic}
                                    setIsCheckedDynamic={setIsCheckedDynamic}
                                    isCheckedDynamic={isCheckedDynamic}
                                />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    {isCheckedStatic ?
                                        <>
                                            <StaticCounter />
                                        </>
                                        :
                                        <>
                                            <p>No Selected Static Component </p>
                                        </>
                                    }

                                    {isCheckedDynamic ?
                                        <>
                                            <DynamicCounter />
                                        </>
                                        :
                                        <>
                                            <p>No Selected Dynamic Component </p>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card">
                    <div className="card-header">
                        <div>
                            Title :
                        </div>
                        <div>
                            Count: Total Posts {filteredData.length}
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            /> 
                                {filteredData.map((item, index) => (
                                    <>
                                    
                                        <div key={index} className="p-3" >
                                            <h3>{item.id}. {item.title}</h3>
                                            <p>{item.body}</p> 

                                            <hr/>
                                        </div>
                                    
                                    </>
                                   
                                    
                                ))} 
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

