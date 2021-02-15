import {Router} from 'express';

import ItemController from '../controllers/Item/controller';

const routes = Router();

routes.get('/item/all', ItemController.getAll);
routes.post('/item/many', ItemController.getManyById);

export default routes;