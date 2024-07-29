import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ELocalStorageKeys } from '@constants/keys';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getLocalStorageItem(key: ELocalStorageKeys): any {
	try {
		const _item = localStorage.getItem(key);
		if (_item !== null) {
			try {
				const parsedItem = JSON.parse(_item);
				return parsedItem;
			} catch (parseError) {
				return _item;
			}
		}
		return null;
	} catch (storageError) {
		localStorage.removeItem(key);
		// eslint-disable-next-line no-console
		console.error(`Error accessing local storage for key '${key}':`, storageError);
		return null;
	}
}
