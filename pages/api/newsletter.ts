import type { NextApiHandler } from 'next';
import { registerSchema } from '../../schema/schema';
const handler: NextApiHandler = async (req, res) => {
	if (req.method !== 'POST') {
		res.status(405).setHeader('Access-Control-Allow-Methods', 'POST').end();
	}
	const reqBody = JSON.parse(req.body);

	try {
		registerSchema.validateSync({ email: reqBody.email });
		
		// res.status(200).json({ email: 'Email sent' });
	} catch (error) {
		res.status(400).json({ error: 'Email not sent' });
	}

	const response = await fetch(
		'https://connect.mailerlite.com/api/subscribers',
		{
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE}`,
			},
			body: req.body,
		}
	);

	res.status(200).json({ response });
};

export default handler;
