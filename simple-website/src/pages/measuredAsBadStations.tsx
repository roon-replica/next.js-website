import { useEffect, useState } from "react";

// export default function List({ data }: { data: any }) {
export default function measuredAsBadStations() {
    const [miseData, setMiseData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await (await fetch('/api/getMeasuredAsBadMiseStations')).json();
            
            console.log(res);
            console.log(res.miseData.response.body.items);

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