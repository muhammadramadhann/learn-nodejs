const Tiger = require('./Tiger');
const Wolf = require('./Wolf');

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        console.log(`Tiger won with ${tiger.strength - wolf.strength} gap`);
        return;
    }

    if (tiger.strength < wolf.strength) {
        wolf.howl();
        console.log(`Wolf won with ${wolf.strength - tiger.strength} gap`);
        return;
    }

    console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);