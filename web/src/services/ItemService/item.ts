import baseAPI from "..";

export default class ItemService {
  static getAll = async () => {
    return await baseAPI.get('/item/all');
  }

  static getMany = async (itemList: Array<any>) => {
    return await baseAPI.post('/item/many', {
      items: itemList
    });
  }
}