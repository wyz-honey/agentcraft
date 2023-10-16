import type { NextApiRequest, NextApiResponse } from 'next'
import request from '@/util/request';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { agentId } = req.query;
    const result = await request.delete(`/agent/${agentId}`);
    res.status(result.status).json(result.data);
}
