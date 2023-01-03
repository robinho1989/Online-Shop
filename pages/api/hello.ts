import type { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
	if (req.method !== 'POST') {
		res.status(405).setHeader('Access-Control-Allow-Methods', 'POST').end();
	}
	const reqBody = JSON.parse(req.body);
	if (!reqBody.email) {
		res.status(400).json({ error: 'Email not sent' });
	}
	res.status(200).json({ info: 'Done' });
};

export default handler;
