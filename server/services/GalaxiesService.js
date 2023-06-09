import { BadRequest } from "../utils/Errors.js"
import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxy.find(query)
    return galaxies
  }
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }


}



export const galaxiesService = new GalaxiesService()