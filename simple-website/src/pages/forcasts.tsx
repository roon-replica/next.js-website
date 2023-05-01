import { useEffect, useState } from "react";

interface ForcastRequestParams {
    returnType: string,
    numOfRows: number,
    pageNo: number,
    searchDate: string,
    InformCode: string
}

// export default function List({ data }: { data: any }) {
export default function forcasts() {
    const [miseData, setMiseData] = useState([]);

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const yesterDay = ('0' + (today.getDate()-1)).slice(-2);
    const dateString = `${year}-${month}-${yesterDay}`;
    console.log('dateString:', dateString);

    const request: ForcastRequestParams = {
        returnType: 'json',
        numOfRows: 10,
        pageNo: 1,
        searchDate: dateString,
        InformCode: 'PM10'
    };

    useEffect(() => {
        async function fetchData() {
            const res = await (await fetch('/api/getMinuDustFrcstDspth',{
                method: 'post',
                body: JSON.stringify(request)
            })).json();

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