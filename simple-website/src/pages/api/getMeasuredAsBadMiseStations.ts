import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getUnityAirEnvrnIdexSnstiveAboveMsrstnList?serviceKey=${process.env.MISE_API_SERVICE_KEY}&returnType=json&numOfRows=10&pageNo=1`);

    const miseData = await response.json();

    return res.status(200).json({miseData});
}