"use client"
 
import { useEffect, useState } from "react";
import StaticCounter from "./components/StaticCounter";
import DynamicCounter from "./components/DynamicCounter";
import ConditionsCheckBox from "./components/ConditionsCheckBox"; 
import Header from "./components/Header";

export default function Home() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState(''); 

    const [dataCount, setDataCount] = useState(() => {
        const storedCount = localStorage.getItem('dataCount');
        return storedCount ? parseInt(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('dataCount', dataCount);
    }, [dataCount]);
 

    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((apiData) => {
            setData(apiData);
            setDataCount(apiData.length);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
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
                    <div className="card">

                        <Header dataCount={dataCount} />
                         
                        <ConditionsCheckBox
                            isCheckedStatic={isCheckedStatic}
                            setIsCheckedStatic={setIsCheckedStatic}
                            setIsCheckedDynamic={setIsCheckedDynamic}
                            isCheckedDynamic={isCheckedDynamic}
                        />


                        <div className="card">
                            <div className="card-body">
                                {isCheckedStatic && 
                                    <StaticCounter dataCount={dataCount} setDataCount={setDataCount}  /> 
                                }

                                {isCheckedDynamic && 
                                    <DynamicCounter dataCount={dataCount} setDataCount={setDataCount} /> 
                                }

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
                                {filteredData.map((item) => (
                                    <div key={item.id} className="p-3" >
                                        <h3>{item.id}. {item.title}</h3>
                                        <p>{item.body}</p>

                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

