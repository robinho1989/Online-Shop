import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	email: yup.string().email().required(),
	// password: yup.string().min(8).max(64).required(),
});
export const validationSchema = yup
	.object()
	.shape({ amount: yup.number().max(10) });
