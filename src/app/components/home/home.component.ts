import { Component, OnInit, Pipe,PipeTransform } from '@angular/core';
import { FifthEditionCharacter } from '../../classes/dndCharacters/fifthEdition/fifth-edition-character'
import { toTypeScript } from '@angular/compiler';
import {StatModifierPipe} from '../../pipes/dnd/fifthEdition/stat-modifier.pipe'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: FifthEditionCharacter[];
  displayedColumns: string[] = ['name','player','hp', 'str','dex','con','int','wis','cha'];
  constructor() { }
  ngOnInit(): void {
    this.characters = new Array<FifthEditionCharacter>(0);
    let testCharacter = HomeComponent.getTestCharacter();
    this.characters.push(testCharacter);
  }

  static getTestCharacter(): FifthEditionCharacter {
    let testChar = new FifthEditionCharacter();
    testChar.name = "Illuminara";
    testChar.player = "Alex";

    testChar.alignment = "CG";
    testChar.background = "Disgraced Student";

    testChar.strengthScore = 10;
    testChar.dexterityScore = 14;
    testChar.constitutionScore = 10;
    testChar.intelligenceScore = 14;
    testChar.wisdomScore = 14;
    testChar.charismaScore = 12;

    testChar.hitPointsMax = 33;
    testChar.hitPointsCurrent = 33;
    testChar.temporaryHitPoints = 0;
    testChar.armorClass = 12;
    testChar.proficiencyBonus = 3;
    testChar.initiativeBonus = 4;
    testChar.speed = 30;

    testChar.strengthSaveProficient = false;
    testChar.dexteritySaveProficient = false;
    testChar.constitutionSaveProficient = false;
    testChar.intelligenceSaveProficient = false;
    testChar.wisdomSaveProficient = false;
    testChar.charismaSaveProficient = false;

    testChar.acrobaticsProficient = false;
    testChar.animalHandlingProficient = false;
    testChar.arcanaProficient = true;
    testChar.athleticsProficient = false;
    testChar.deceptionProficient = false;
    testChar.historyProficient = true;
    testChar.insightProficient = true;
    testChar.intimidationProficient = false;
    testChar.investigationProficient = true;
    testChar.medicineProficient = true;
    testChar.natureProficient = false;
    testChar.perceptionProficient = true;
    testChar.performanceProficient = false;
    testChar.persuasionProficient = false;
    testChar.religionProficient = false;
    testChar.sleightOfHandProficient = false;
    testChar.stealthProficient = false;
    testChar.survivalProficient = false;

    return testChar;
  }
}
