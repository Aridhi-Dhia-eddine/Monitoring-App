import { Serveur } from "./serveur";

export class Logs_file{
    idlogs!:BigInteger;
    lastFile!:string;
    c_date!:string;
    cheminAb!:string;
    type!:number;
    lastLine:number=0;
    flag:number=0;
    dateFlag:string="";
    os!:number;
    serv!:Serveur;
}

/*	int type;
	String cheminAb;
	String LastFile;
	String c_date;
	int lastLine;
	Integer flag;
	String dateFlag;
	Integer os;*/