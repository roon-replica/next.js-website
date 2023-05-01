import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const requestBody=JSON.parse(req.body);

    const response = await fetch(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getUnityAirEnvrnIdexSnstiveAboveMsrstnList?serviceKey=${process.env.MISE_API_SERVICE_KEY}&returnType=${requestBody.returnType}&numOfRows=${requestBody.numOfRows}&pageNo=${requestBody.pageNo}`);

    const miseData = await response.json();

    return res.status(200).json({ miseData });
}