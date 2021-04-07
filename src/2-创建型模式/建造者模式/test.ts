import BuilderDirector from './src/BuilderDirector'
import ThinPersonBuilder from './src/ThinPersonBuilder'
import FatPersonBuilder from './src/FatPersonBuilder'

let thin = new ThinPersonBuilder()
let fat = new FatPersonBuilder()

let thinBuilder = new BuilderDirector(thin)
let fatBuilder = new BuilderDirector(fat)

thinBuilder.createPerson()
fatBuilder.createPerson()