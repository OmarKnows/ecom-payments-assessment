import api from './api';
import * as Yup from 'yup';
import { IDummy } from '@servicesTypes/dummy.types';
import { EAPI } from '@constants/endpoitns';

class ProductsService {
	public async list(): Promise<IDummy[]> {
		const { data } = await api.get(EAPI.DUMMY);
		return data;
	}

	public async get(id: string): Promise<IDummy> {
		const { data } = await api.get(`${EAPI.DUMMY}/${id}`);
		return data;
	}

	public async create(payload: object): Promise<IDummy> {
		const { data } = await api.post(EAPI.DUMMY, {
			payload,
		});
		return data;
	}

	public async update(payload: object, id: string): Promise<IDummy> {
		const { data } = await api.patch(`${EAPI.DUMMY}/${id}`, {
			payload,
		});
		return data;
	}

	public async delete(id: string): Promise<IDummy> {
		const { data } = await api.delete(`${EAPI.DUMMY}/${id}`);
		return data;
	}

	public dummySchema = Yup.object().shape({
		name: Yup.string().required('name is required'),
	});
}

export default Object.freeze(new ProductsService());
