import cors from 'cors'

const corsMiddleware = () => {
	return cors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	})
}

export default corsMiddleware