import { useEffect, useState } from "react";

interface BadStationsRequest{
    returnType: string,
    numOfRows: number,
    pageNo: number
}

// export default function List({ data }: { data: any }) {
export default function measuredAsBadStations() {
    const [miseData, setMiseData] = useState([]);

    const request: BadStationsRequest ={
        returnType: 'json',
        numOfRows: 10,
        pageNo: 1
    }

    useEffect(() => {
        async function fetchData() {
            const res = await (await fetch(
                '/api/getMeasuredAsBadMiseStations',{
                    method: 'post',
                    body: JSON.stringify(request)
                })).json();
            
            console.log(res);
            setMiseData(res.miseData.response.body.items);
        }

        fetchData();
    }, []);

    return (
        <ul>
            {miseData.map((item,index) => (
                <li key={index}>{item.addr} {item.stationName}</li>
            ))}
        </ul>
    )
}