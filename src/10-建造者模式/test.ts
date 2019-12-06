import BuilderDirector from './BuilderDirector'
import ThinPersonBuilder from './ThinPersonBuilder'
import FatPersonBuilder from './FatPersonBuilder'

let thin = new ThinPersonBuilder()
let fat = new FatPersonBuilder()

let thinBuilder = new BuilderDirector(thin)
let fatBuilder = new BuilderDirector(fat)

thinBuilder.createPerson()
fatBuilder.createPerson()