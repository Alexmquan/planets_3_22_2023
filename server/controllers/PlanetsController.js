import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanets)
  }

  // async getPlanets(req, res, next) {
  //   try {
  //     const query = req.query
  //     const planetData = await planetsService.getPlanets(query)
  //     res.send(planetData)
  //   } catch (error) {
  //     next(error)
  //   }
  // }





}
