import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Character, ICharacter } from './Character';
import { CharacterSheet } from './CharacterSheet';
import { GetSkillList } from './Skills';
import Step0 from './Wizard/Step0';
import Step1 from './Wizard/Step1';
import Step2 from './Wizard/Step2';
import Step3 from './Wizard/Step3';
import Step4 from './Wizard/Step4';
import Step5 from './Wizard/Step5';
import Step6 from './Wizard/Step6';
import Step7 from './Wizard/Step7';
import Step8 from './Wizard/Step8';
import Step9 from './Wizard/Step9';

const Wizard: React.FC = () => {
    const [viewStep, setViewStep] = useState(0);
    const [character, setCharacter] = useState(new Character({
        name: '',
        species: '',
        gender: '',
        age: 1,
        strength: 1,
        agility: 1,
        endurance: 1,
        intelligence: 1,
        perception: 1,
        willpower: 1,
        skills: GetSkillList()
    } as ICharacter));
    const [viewSheet, setViewSheet] = useState(false);
    const setData = (n: number, c: Character) => {
        setViewStep(n);
        setCharacter(c);
        setViewSheet(false);
    };
    return <div>
        <h2>Character Creator Wizard</h2>
        <p>Answering these questions will produce a template of a character with a set of abilities and matching backstory that makes some kind of sense.
            <br/>
            But you are expected to modify and correct it.
        </p>
        <hr />
        <Step0 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step0>
        <Step1 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step1>
        <Step2 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step2>
        <Step3 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step3>
        <Step4 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step4>
        <Step5 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step5>
        <Step6 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step6>
        <Step7 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step7>
        <Step8 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step8>
        <Step9 character={character} currentNumber={viewStep} callback={(n, c) => setData(n, c)}></Step9>
        <hr />
        <Button key='toggle_sheet' onClick={() => setViewSheet(!viewSheet)}>Toggle character sheet</Button>
        {viewSheet === true ? <CharacterSheet initialCharacter={character} characterCallback={(c) => setCharacter(c)} ></CharacterSheet> : null}
    </div>;
}


export default Wizard;