import * as stock from '../../database/stock.json';

export default class ItemController {
  static getAll = async (request: any, response: any) => {
    response.status(200);
    response.json(stock);
  }

  static getManyById = async (request: any, response: any) => {
    const {items} = request.body;

    console.log(items);

    response.status(201);
    response.json({
      products: stock.products.filter(item => items.findIndex((i: any) => i.id === item.id) !== -1)
    });
  }
}