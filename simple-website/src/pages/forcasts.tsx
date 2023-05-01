import { useEffect, useState } from "react";

// export default function List({ data }: { data: any }) {
export default function forcasts() {
    const [miseData, setMiseData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await (await fetch('/api/getMinuDustFrcstDspth')).json();
            console.log(res.miseData.response.body.items);

            setMiseData(res.miseData.response.body.items);
        }

        fetchData();
    }, []);

    return (
        <ul>
            {miseData.map((item) => (
                <li>{item.informOverall} {item.dataTime}</li>
            ))}
        </ul>
    )
}

// export async function getServerSideProps() {
//     // export async function getStaticProps() {
//     const res = await fetch('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'
//         + new URLSearchParams({
//             serviceKey: 
//             returnType: 'xml',
//             numOfRows: '10',
//             pageNo: '1',
//             sidoName: '서울',
//             ver: '1.0'
//         })
//         , {
//             method: 'get',
//             headers: {

//             }
//         });

//     const json = await res.json();

//     return {
//         props: {
//             data: json
//         }
//     }
// }