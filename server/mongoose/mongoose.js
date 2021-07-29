import mongoose from 'mongoose'
import { mongodb_URI as db } from '../config/keys'

mongoose
	.connect(db, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Connected to mongodb atlas'))
	.catch((err) => {
		console.log(err.message)
		process.exit(1)
	})
