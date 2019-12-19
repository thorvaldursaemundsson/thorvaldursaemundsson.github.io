import React, { useState } from 'react';
import { CharacterSheet } from './components/CharacterSheet';
import './App.css';
import { Character, ICharacter } from './components/Character';
import { Button, DialogTitle } from '@material-ui/core';
import PlayerManual from './components/PlayerManual';
import SkillPerkManual from './components/SkillPerkManual';
import GameMaster from './components/WorldAndLore';
import WorldAndLore from './components/WorldAndLore';

const App: React.FC = () => {
  const main = 'main';
  const [viewMode, setViewMode] = useState(main);
  const [character, setCharacter ] = useState(new Character());//new Character();
  const characterSheet = 'View Character Sheet';
  const playerManual = 'Player Manual';
  const gameMaster = 'Game Master';
  const worldAndLore = 'World and Lore';
  const skillsAndPerks = 'Skills and Perks';
  const about = 'About';
  let options = [characterSheet,
    playerManual,
    gameMaster,
    worldAndLore,
    skillsAndPerks,
    about
  ];
  const MainButton = () => <Button onClick={() => setViewMode('main')}>EXIT</Button>;

  const loadCharacter = () => {
    try {
      console.info('attempting to load character');
      const charData = prompt('paste character string here');
      if (charData !== null)
      {
        const c = JSON.parse(charData) as ICharacter;
        setCharacter(new Character({...c}));
        setViewMode(characterSheet);
        console.log('character was successfully loaded:', {...c});
      } else console.log('no character info was pasted');
    }
    catch(error) {
      console.error({error});
    }
  };


  return (
    <div className="App">
      <Conditional shouldView={viewMode === main}>
        <DialogTitle>Infinite Darkness</DialogTitle>
        <Menu callback={(option) => setViewMode(option)} options={options} />
        <Button onClick={() => loadCharacter()}>Load Character</Button>
      </Conditional>
      <Conditional shouldView={viewMode === characterSheet}>
        <CharacterSheet characterCallback={(c) => { setCharacter(c); setViewMode('main'); }} initialCharacter={character} />
      </Conditional>
      <Conditional shouldView={viewMode === playerManual}>
        <MainButton />
        <DialogTitle>Player manual</DialogTitle>
        <PlayerManual />
      </Conditional>
      <Conditional shouldView={viewMode === gameMaster}>
        <MainButton />
        <GameMaster></GameMaster>
      </Conditional>
      <Conditional shouldView={viewMode === worldAndLore}>
        <MainButton />
        <WorldAndLore></WorldAndLore>
      </Conditional>
      <Conditional shouldView={viewMode === skillsAndPerks}>
        <MainButton />
        <DialogTitle>About</DialogTitle>
        <SkillPerkManual />
      </Conditional>
      <Conditional shouldView={viewMode === about}>
        <MainButton />
        <h2>About</h2>
        <h3>This is a work in progress</h3>
        <p>Author: Thorvaldur Saemundsson</p>
        <p>Technology: ReactJS, github pages</p>
        <p>Project: Infinite Darkness, a sci-fi and fantasy game</p>
        <p>Please formulate any complaints and suggestions in the form of a pull request ;)</p>
        <span style={{ float: 'right', fontSize: '11px' }}>Copyright Thorvaldur Saemundsson</span>
      </Conditional>
    </div>
  );
}
interface ItemProp {
  shouldView: boolean;
}

const Conditional: React.FC<ItemProp> = ({ shouldView, children }) => {
  if (shouldView) return <div style={{ textAlign: 'left', padding: '15px' }}>{children}</div>;
  else return null;
}

interface MenuProps {
  callback: (option: string) => void;
  options: string[];
}

const Menu: React.FC<MenuProps> = (props) => {
  return <div>{props.options.map(option => <Button onClick={() => props.callback(option)}>{option}</Button>)}</div>;
}

export default App;
