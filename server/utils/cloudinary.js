import cloudinary from 'cloudinary'
import { cloud_name, api_key, api_secret } from '../config/keys'

let cloudyv2 = cloudinary.v2

cloudyv2.config({
	cloud_name,
	api_key,
	api_secret,
	secure: true,
})

export default cloudyv2
