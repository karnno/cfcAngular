import {CfcCardType} from './cfc-card-type';

export class LeftPlayer {

    private energy: number = 20;
    private motivation: number = 20;
    private credibility: number = 20;


    constructor (private userName : string) {}

    
    private deck : any =[
        {
            name:"admin attack",
            picture:"pics/admin_attack.png",
            type : CfcCardType.OFFENSE, 
            energy:-6,
            motivation:10,
            credibility:-10		
        }
    ,
        {
            name:"sneak attack",
            picture:"pics/sneak_attack.png",
            type : CfcCardType.OFFENSE,
            energy:0,
            motivation:10,
            credibility:-5
        }
    ,
        {
            name:"panicked wife",
            picture:"pics/panicked_wife.png",
            type : CfcCardType.OFFENSE,
            energy:0,
            motivation:10,
            credibility:-5
        }
    ,
        {
            name:"resignation letter",
            picture:"pics/resignation_letter.png",
            type : CfcCardType.OFFENSE,
            energy:5,
            motivation:10,
            credibility:-5
        }
    ,
        {
            name:"angry developpers pack",
            picture:"pics/angry_devs_pack.png",
            type : CfcCardType.OFFENSE,
            energy:-2,
            motivation:-6,
            credibility:-2
        }
    ,
        {
            name:"Smoke break",
            picture:"pics/smoke_break.jpg",
            type : CfcCardType.HEAL,
            energy:4,
            motivation:0,
            credibility:0
        }
        ,
    {
            name:"focus mode",
            picture:"pics/focus_mode.jpg",
            type : CfcCardType.DEFENSE,
            energy:3,
            motivation:5,
            credibility:0
        }
    ];


    public getDeck() : any {
        return this.deck;
    }
}