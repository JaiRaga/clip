import * as prod from './prod'
import * as dev from './dev'

let obj
if (process.env.NODE_ENV === 'production') {
	obj = prod
} else {
	obj = dev
}

const { mongodb_URI, token_secret, cloud_name, api_key, api_secret } =
	obj.default

export { mongodb_URI, token_secret, cloud_name, api_key, api_secret }
