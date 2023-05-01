import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const response = await fetch('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth'
    //     + new URLSearchParams({
    //         serviceKey: 
    //         returnType: 'json',
    //         numOfRows: '10',
    //         pageNo: '1',
    //         // sidoName: '서울',
    //         // ver: '1.0'
    //         searchDate: '2023-04-14',
    //         InformCode: 'PM10'
    //     })
    //     , {
    //         method: 'get',
    //         headers: {
    //         }
    //     });

    const response = await fetch(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=${process.env.MISE_API_SERVICE_KEY}&returnType=json&numOfRows=10&pageNo=1&searchDate=2023-04-14&InformCode=PM10`);
    const miseData = await response.json();

    return res.status(200).json({miseData});
}

// export async function fetchData(req:any, res:any) {
    // const response = await fetch('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'
    //     + new URLSearchParams({
    //         serviceKey: 
    //         returnType: 'json',
    //         numOfRows: '10',
    //         pageNo: '1',
    //         sidoName: '서울',
    //         ver: '1.0'
    //     })
    //     , {
    //         method: 'get',
    //         headers: {

    //         }
    //     });

    // const json = await res.json();

    // console.log(json);
    // return json;

    // res.status(200).json({message: "hello world"})
// }