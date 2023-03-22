import BaseController from "../../../server/utils/BaseController.js";

export class GalaxiesController extends BaseController {

  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
  }
  async getGalaxies(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }


}