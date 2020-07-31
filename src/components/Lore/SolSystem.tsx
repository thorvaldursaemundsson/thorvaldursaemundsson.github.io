import React from 'react';
import StarSystem from './StarSystem';

const SolSystem = () => <StarSystem key='solsystem'
    stars={[
        {
            name: 'Sun',
            mass: 1,
            age: 4.6,
            description: "Obviously nobody lives on the sun...yet, this however is the place of many Hypermatter factories, in close orbit these massive structures siphon energy from the super hot corona and produce Hypermatter, this is transported to Venus where it can be sold at astronomical cost.",
            classification: 'G',
            threed: {
                backgroundColor: 'black',
                sphereColor: '#FFCCCC'
            },
            planetoids: [{
                name: 'Mercury',
                classification: 'rocky',
                description: 'Mercury is the seat of The Coalition of Sol, the governing body of the system of the sun. Situated here because of proximity to the rest of the system. Additionally there are sprawling industry covering most of the planet, much of it automated. Humans mostly live in underground installations and in deep ever-dark craters to protect them from the intense solar radiation',
                age: 4.5,
                mass: 0.055,
                atmosphere: 'none',
                atmosphericPressure: 0,
                hydrosphere: 'none',
                feature: 'tidally locked, settlements, over 9000 inhabitants',
                surfaceGravity: 0.38,
                orbitDistance: '0.37 AU',
                satelites: [],
                temperatureRange: '-173 - 427',

            },
            {
                name: 'Venus',
                classification: 'rocky',
                description: 'Though no living thing exists on this hellscape of a planet there is a low orbital station here whos main purpose is to serve as a refueling base for both fusion and FTL based vessels.',
                age: 4.54,
                mass: 0.815,
                atmosphere: '96.5% CO2, 3.5% nitrogen, trace sulfur dioxide',
                atmosphericPressure: 9200,
                hydrosphere: 'none',
                feature: 'runaway greenhouse effect',
                surfaceGravity: 0.904,
                orbitDistance: '0.723 AU',
                satelites: [],
                temperatureRange: '464',

            },
            {
                name: 'Earth',
                description: 'Almost half of humanity lives here, aproximately 5 billion people, this number used to be much higher but due to mass emigration and lack of Earthly resources billions of people have since left. Earth is still one of the most interesting places, where the super-nations are in constant competition over influence over the rest of the system. Most people here live normal lives as they always had.',
                classification: 'Rocky',
                age: 4.5,
                mass: 1,
                atmosphere: '78% nitrogen, 20.9% oxygen, 0.9% argon, 0.08% CO2',
                atmosphericPressure: 101.35,
                hydrosphere: 'salt water',
                feature: 'birthplace of humanity, 6.2 billion people',
                surfaceGravity: 1,
                orbitDistance: '1 AU',
                satelites: [{
                    name: 'Moon',
                    description: 'The surface bases on the moon originally started out as refueling for space travel. Shortly after mining industry began to take root, over time it grew and as it did so did the population. The population gave rise to a lunatic economy which rapidly became the center of space commerce. Many historians consider the moon to be the initial launchpad of humanitys ascent into the stars.',
                    classification: 'rocky',
                    age: 4.53,
                    mass: 0.012,
                    atmosphere: '',
                    atmosphericPressure: 0,
                    hydrosphere: '',
                    feature: 'settlements, 17 million people',
                    surfaceGravity: 0.16,
                    orbitDistance: '',
                    satelites: [],
                    temperatureRange: '-173 - 116'
                }],
                temperatureRange: '-86 - 59',

            },
            {
                name: 'Mars',
                description: 'Once a desolate wasteland this green jewel is ruled by the Democratic Republic of Mars, humans and merlions make up roughly equal parts of the population',
                classification: 'Rocky',
                age: 4.54,
                mass: 0.107,
                atmosphere: '21% co2, 35% nitrogen, 44% oxygen',
                atmosphericPressure: 21,
                hydrosphere: 'small number of salty lakes',
                feature: 'settlements, 310 million people',
                surfaceGravity: 0.38,
                orbitDistance: '1.523 AU',
                satelites: [],
                temperatureRange: '-103 - 41',

            },
            {
                name: 'The Belt',
                classification: 'Asteroids',
                description: 'The Belt and Ceres are populated mostly by automated robots and a few humans and merlions who operate them, this is the biggest industrial complex spanning the system, most high-end mineral refinement both legal and underground happens here',
                age: 5,
                mass: 0.1,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            },
            {
                name: 'Ceres',
                classification: 'rocky',
                description: 'The Belt and Ceres are populated mostly by automated robots and a few humans and merlions who operate them, this is the biggest industrial complex spanning the system, most high-end mineral refinement both legal and underground happens here',
                age: 0,
                mass: 0,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            },
            {
                name: 'Jupiter',
                classification: 'Gas giant',
                description: 'In addition to some low orbit stations around Jupiter the moons Ganymede, Callisto, Io and Europa have various ground-based stations, these are sparesely populated and mostly not self sufficient',
                age: 0,
                mass: 0,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            },
            {
                name: 'Saturn',
                classification: 'Gas giant',
                description: 'Saturn is not very populated but besides Titan, mostly ice is gathere from the rings of Saturn and sold to the inhabitats outside of Earth',
                age: 0,
                mass: 0,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            },
            {
                name: 'Uranus',
                classification: 'Gas giant',
                description: 'One station orbiting Uranus exists, its very small and not populated. People tend to avoid this place due to the smell',
                age: 0,
                mass: 0,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            },
            {
                name: 'Neptune',
                classification: 'Gas giant',
                description: 'The final real planet of the solar system, a science station orbits here',
                age: 0,
                mass: 0,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            },
            {
                name: 'Oort Cloud',
                classification: 'asteroids/comets',
                description: 'A huge cloud spanning a light year from the sun, though almost completely empty- space after Neptune still have some features, only pirates and monsters roam here. But mostly nothing.',
                age: 0,
                mass: 0,
                atmosphere: '',
                atmosphericPressure: 0,
                hydrosphere: '',
                feature: undefined,
                surfaceGravity: 0,
                orbitDistance: '',
                satelites: [],
                temperatureRange: '',

            }]
        }
    ]}
    roguePlanetoids={[]}
    name='The Sol System'
    description='The Sol System is a richly inhabited system where most of humanity lives, almost half on the birthplace of Humanity- Earth. Almost every planet and moon has some permanent human presence, and Mars has a huge Merlion population'
/>


export default SolSystem;