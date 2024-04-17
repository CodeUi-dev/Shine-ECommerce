import { Storage } from '@google-cloud/storage'
import env from '../utils/env'

interface IUploadProductImageParams {
	filename: string
	filepath: string
  productName: string
}

class GoogleStorage {
  private storage: Storage

  constructor() {   
    this.storage = new Storage({
			projectId: env.GCS_PROJECT,
			credentials: {
				client_email: env.GCS_IAM_EMAIL,
				private_key: env.GCS_IAM_KEY.replace(/\\n/g, "\n")
			}
		})
  }

	async uploadProductImage({ filename, filepath, productName }: IUploadProductImageParams) {
		const fs = require('node:fs')
    const stream = require('node:stream')

    const bucket = this.storage.bucket(env.GCS_BUCKET);
    const bucketFile = bucket.file(`products/${filename}`);

    const localFile = await fs.readFileSync(filepath)

    // Create a pass through stream from a string
    const passthroughStream = new stream.PassThrough();
    passthroughStream.write(localFile);
    passthroughStream.end();

    passthroughStream
			.pipe(bucketFile.createWriteStream())
      .on('finish', () => 
        console.log(`Upload of product image "${filename}" finished.`)
      );

    return `https://storage.cloud.google.com/codeui-shine-ecommerce/products/${filename}`
	}
}

export default GoogleStorage