import * as httpRequest from '../httpRequest';

export const getCategories = async () => {
    try {
        const res = await httpRequest.get('products/categories');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
