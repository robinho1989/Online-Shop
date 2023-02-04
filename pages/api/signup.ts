import type { NextApiHandler } from 'next';
import * as bcrypt from 'bcrypt';
const handler: NextApiHandler = async (req, res) => {
	if (req.method !== 'POST') {
		res.status(405).setHeader('Access-Control-Allow-Methods', 'POST').end();
	}
	const { email, password } = JSON.parse(req.body) as {
		email: string;
		password: string;
	};
	const hashedPassword = await bcrypt.hash(password, 12);


	
};

export default handler;
