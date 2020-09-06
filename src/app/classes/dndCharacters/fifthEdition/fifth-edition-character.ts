import {Character} from '../../character'

export class FifthEditionCharacter extends Character {
    
    //Details
    alignment:string;
    background:string;

    //Scores
    strengthScore:number;
    dexterityScore:number;
    constitutionScore:number;
    intelligenceScore:number;
    wisdomScore:number;
    charismaScore:number;

    //Stats
    hitPointsMax:number;
    hitPointsCurrent:number;
    temporaryHitPoints:number;
    armorClass:number;
    proficiencyBonus:number;
    initiativeBonus:number;
    speed:number;

    //Saves
    strengthSaveProficient:boolean;
    dexteritySaveProficient:boolean;
    constitutionSaveProficient:boolean;
    intelligenceSaveProficient:boolean;
    wisdomSaveProficient:boolean;
    charismaSaveProficient:boolean;

    //Skills
    acrobaticsProficient:boolean;
    animalHandlingProficient:boolean;
    arcanaProficient:boolean;
    athleticsProficient:boolean;
    deceptionProficient:boolean;
    historyProficient:boolean;
    insightProficient:boolean;
    intimidationProficient:boolean;
    investigationProficient:boolean;
    medicineProficient:boolean;
    natureProficient:boolean;
    perceptionProficient:boolean;
    performanceProficient:boolean;
    persuasionProficient:boolean;
    religionProficient:boolean;
    sleightOfHandProficient:boolean;
    stealthProficient:boolean;
    survivalProficient:boolean;

}
