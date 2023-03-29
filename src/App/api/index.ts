import axios, { AxiosResponse } from 'axios'
import { TGetPresets } from '../services/presets.services'

class Api {
	private readonly BASE_URL = 'https://c88f-176-52-78-142.ngrok.io'
	private readonly instanceApi = axios.create({
		baseURL: this.BASE_URL,
		timeout: 30000,
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		}
	})

	private responseBody(response: AxiosResponse) {
		return response.data
	}

	public async getPresets(endPoint: string): Promise<TGetPresets> {
		return this.instanceApi
			.get<Promise<TGetPresets>>(endPoint)
			.then(this.responseBody)
	}
}

export default new Api()
