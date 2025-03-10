import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Main from "./main"


function History(){
    const authToken = localStorage.getItem("authorization");
    const [Data, setData] = useState([]);
    useEffect(()=> {
        fetch(`${baseUrl}/content/history`, {
            headers: {
                authorization: authToken
            }
        }).then((res)=>res.json()).then((data)=> {
            setData(data)
            //console.log(data)
        })
    }, [])

    return (
        <>
        <Main/>
        {
            Data.length ?
                <table border={1}>
                    <thead>
                        <tr>
                            <th>content name</th>
                            <th> content details</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    Data.map((con,i)=>{
                        return(
                                <tr key={i}>
                                    <td>{con.heading}</td>
                                    <td>{con.context}</td>
                                    <td>{con.date}</td>
                                </tr>
                        )
                        
                    })
                }
                    </tbody>
                </table> :
            <section>
                <div>No history</div>
                <Link to="/create">create one</Link>
            </section>
        }
        </>
           
    )
}

export default History