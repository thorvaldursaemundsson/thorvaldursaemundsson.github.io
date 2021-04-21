import { PerkTemplate } from "../general/Perks";

const Mentalist = new PerkTemplate({
    name: 'mentalist',
    skill: 'empathy',
    level: 1,
    description: 'You are highly skilled at reading the facial expressions and body language of a person, you can attempt to understand them just by looking at them and gain a +3 to do so.'
}, {
    applyTo: 'detectmotives',
    amount: 3
});

const EmpathicListener = new PerkTemplate({
    name: 'empathic listener',
    skill: 'empathy',
    level: 1,
    description: 'You are easy to talk to and listen well to others. People are more likely to trust you and when you speak to someone you always gain some true information even if the target is being deliberately secretive.',
})

const LieDetector = new PerkTemplate({
    name: 'Lie detector',
    skill: 'empathy',
    level: 1,
    description: 'Your character is harder to lie to and can pick up on small signs that someone is not truthful, you gain +3 vs lies and can always tell if someone is a constant liar.'
}, {
    applyTo: 'detectlies',
    amount: 3
});

const ExpertTeamwork = new PerkTemplate({
    name: 'expert teamwork',
    skill: 'empathy',
    level: 1,
    description: 'When you and up to 5 other work together everyone benefits from the highest skill rank from the team. Whether only one or all are actually doing the task, they are all occupied for the duration of the task.'
});

export const EmpathyPerks = [Mentalist, LieDetector, EmpathicListener, ExpertTeamwork];