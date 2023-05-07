import { Mc } from "./mc"

export class Alarme{
    idalarme!:BigInteger
    etat!:number
    date!:String
    ligne!:number
    occurence!:number
    resolutionD!:String
    mc!:Mc
}