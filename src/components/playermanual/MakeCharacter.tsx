import Section from "./Section";
import React, { useState } from "react";
import { Button } from "@material-ui/core";

const MakeCharacter: React.FC =() => {
    return <Section title='How to make a character'>

        <Section title='Attribute roller'><AttributeRoller /></Section>

        <h3>Step 1 - concept</h3>
        <h4>Roll attributes</h4>
        <p>The absolute first step is to roll your base attributes, strength, agility, endurance, perception, intelligence, willpower</p>
        <i>When you see something like "2d8" the first number indicates the number of dice, in this case 2, the latter number indicates the number of sides, in this case two 8 sided dice, the result added up</i>
        <p>Depending on your final age and species you will have different dice roll (see world and lore -> your species -> playing as your species for precise information)</p>
        <p>Roll the dice for each attribute in 3 sets, you may pick one of these three complete sets</p>
        <p>You may choose to make the dice "safe" by going down 2 size and then add a flat +1 to the final number (1d10 -> 1d8), the average is the same but distance is lower</p>
        <p>The first step is conceptual and mostly abstract, but will feed into the next steps. Begin by answering at least all of these questions.</p>
        <h4>Where was my character born?</h4>
        <h4>How old is my character currently?</h4>
        <h4>What kind of upbringing did my character have?</h4>
        <h4>How does my character's upbringing bias my character's point of view?</h4>
        <h4>What major events happened in my characters life?</h4>
        <h4>How did those events shape my characters personality?</h4>
        <h4>What lessons and skills did my character learn from that?</h4>
        <p>There may be more questions you want to ask depending on your answers.</p>
        <h3>Step 2 - outlining your character</h3>
        <p>Based on the answer in step 1...</p>
        <h4>Adjust your age</h4>
        <p>The older you start at the more character points (applicable experience) you start with.</p>
        <p>Finally the younger you are the bigger your multiplier, whenever you gain character points in game you multiply them by this.</p>
        
        <h4>Select between 2 and 4 "main skills" and as many additional secondary skills as you need.</h4>
        <p>You'll want to put points into your main skills, note that the cost increases rapidly.
            The cost for each step is what you have + 1
    Save some character points for perks</p>
        <p>Also notice that your attributes play a part in your skill total,
            for example pilot is a perception skill,
    when you roll for pilot you roll 2d10 + pilot + perception</p>
        <h3>Step 3 - choose your perks</h3>
        <p>Perks are specializations, they either grant new capabilities under a skill or make a specific skill usage more powerful/likely to succeed (skills have multiple uses)</p>
        <p>Note that perks often come with skill requirements, and for skills that you don't put points into are often not worth taking.</p>

    </Section>;
}

const AttributeRoller: React.FC = () => {
    const [dices, setDices] = useState<number[]>([]);
    const [diceSize, setDiceSize] = useState(8);

    const rollDice = (size:number) => {
        return Math.floor((Math.random() * size))+1;
    }

    const reroll = ()=>{
        let d:number[] = [];
        for (let i = 0; i < 10; i++){
            d.push(rollDice(diceSize));
        }
        d = d.sort((a,b) => b - a);
        setDices(d);
    };

    const setDiceSizeAndReset = (ds:number) => {
        setDiceSize(ds);
        setDices([]);
    }

    let diceBonus = 0;
    switch (diceSize) {
        case 10: diceBonus = 0; break;
        case 8: diceBonus = 1; break;
        case 6: diceBonus = 2; break;
        case 4: diceBonus = 3; break;
        default: break;
    }
    const ignore = {color: 'red'};
    const normal = {};
    return (<div>
        <p>Choose between extreme or average or tame, 10 sided dice, 8 sided bonus 1, 6 sided bonus 2</p>
        <p>Roll 10 times, discard the two highest and two lowest, assign attribute freely</p>
        <p>You may reroll once if the game master agrees. Rolls are only valid if the game master supervises rolls. This tool lets you roll on the screen</p>
        <Button onClick={() => reroll()}>Roll</Button><br/>
        <Button variant='contained' size='small' onClick={() => setDiceSizeAndReset(6)}>1d6+2</Button>
        <Button variant='contained' size='small' onClick={() => setDiceSizeAndReset(8)}>1d8+1</Button>
        <Button variant='contained' size='small' onClick={() => setDiceSizeAndReset(10)}>1d10</Button>
        <br/>
        {dices.map((dice,index, array) => {
            return <span style={(index >= dices.length-2 || index <= 1) ? ignore : normal}>1d{diceSize} ({dice}) + {diceBonus} = {dice+diceBonus}<br/></span>
        })}
    </div>);
}


export default MakeCharacter;