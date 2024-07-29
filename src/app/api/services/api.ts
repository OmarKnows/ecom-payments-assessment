import envConfigKeys from '@app/config/envConfig';
import { ELocalStorageKeys } from '@constants/keys';
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

const getLocalAccessToken = (): string | null => localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN);

const instance: AxiosInstance = axios.create({
	baseURL: envConfigKeys.base_url,
	headers: {
		Authorization: `Bearer ${getLocalAccessToken()}`,
		'Content-Type': 'application/json',
		'x-api-version': 1,
	},
});

instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig<unknown>) => {
		const accessToken = getLocalAccessToken();
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
