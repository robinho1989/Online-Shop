import type { NextApiHandler } from 'next';
import * as bcrypt from 'bcrypt';
import { authorizedClient } from '../../graphql/apollo-client';
import {
	CreateAccountDocument,
	CreateAccountMutation,
	CreateAccountMutationVariables,
} from '../../generated/graphql';
const handler: NextApiHandler = async (req, res) => {
	if (req.method !== 'POST') {
		res.status(405).setHeader('Access-Control-Allow-Methods', 'POST').end();
	}
	const { email, password } = JSON.parse(req.body) as {
		email: string;
		password: string;
	};
	const hashedPassword = await bcrypt.hash(password, 12);
	const { data } = await authorizedClient.mutate<
		CreateAccountMutation,
		CreateAccountMutationVariables
	>({
		mutation: CreateAccountDocument,
		variables: { email, password: hashedPassword },
	});
	res.status(200).json(data);
};

export default handler;
