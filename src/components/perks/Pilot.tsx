import { PerkTemplate } from "../Perks";

export const QualifiedForCar = new PerkTemplate({
    name: 'car qualified',
    skill: 'pilot',
    level: 2,
    description: 'gain +6 to all car driving rolls, is qualified to drive car'
},{
    applyTo: 'car',
    amount: 6
});

export const QualifiedForBoat = new PerkTemplate({
    name: 'boat qualified',
    skill: 'pilot',
    level: 2,
    description: 'gain +6 to all boat sailing rolls, is qualified to drive boat no larger than 10 metric tons'
},{
    applyTo: 'boat',
    amount: 6
});

export const QualifiedForShip = new PerkTemplate({
    name: 'ship qualified',
    skill: 'pilot',
    level: 3,
    description: 'gain +9 to all ship sailing rolls, is qualified to drive ship no smaller than 10 metric tons'
},{
    applyTo: 'ship',
    amount: 9
});

export const QualifiedForSubmarine = new PerkTemplate({
    name: 'submarine qualified',
    skill: 'pilot',
    level: 4,
    description: 'gain +12 to all submarine sailing rolls, is qualified to drive a submarine'
},{
    applyTo: 'submarine',
    amount: 12
});

export const QualifiedForAirplane = new PerkTemplate({
    name: 'airplane qualified',
    skill: 'pilot',
    level: 3,
    description: 'gain +9 to all airplane piloting rolls, is qualified to drive an airplane'
},{
    applyTo: 'airplane',
    amount: 12
});

export const QualifiedForSpaceship = new PerkTemplate({
    name: 'spaceship qualified',
    skill: 'pilot',
    level: 4,
    description: 'gain +12 to all spaceship piloting rolls, is qualified to pilot a spaceship'
},{
    applyTo: 'spaceship',
    amount: 12
});

export const QualifiedForFTL = new PerkTemplate({
    name: 'FTL qualified',
    skill: 'pilot',
    level: 4,
    description: 'gain +12 to all FTL spaceship piloting rolls, is qualified to engage hyperdrive'
},{
    applyTo: 'ftl',
    amount: 12
});