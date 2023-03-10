let btn = document.getElementById('btn');


btn.addEventListener('click', function() {
    let input = document.getElementById('inp');
    let content = document.getElementById('content');

    let inp1 = input.value;

    // Player Blueprint
    class Player {
        constructor(name, hp, inventory) {
            this.name = name;
            this.hp = hp;
            this.inventory = inventory;  
        }
    }

    // Playername
    let playername = inp1;

    let playerinventory = [];
    let playerhp = 100

    let player = new Player(playername, playerhp, playerinventory);


    let rooms = {
        'room1': {
            text: {
                title: 'Room 1',
                description: 'You are in the First Room.',
                objects: {
                   key: 'You Found the key for the next door'
                },
                options: {
                    inspect: 'Inspect',
                    nextRoom: 'Go to the next Room', 
                }
            }
        }, 
        'room2': {

        },        
    }

    // room1
    content.innerHTML = `
    <h2>${rooms.room1.text.title}</h2>
    <p>${rooms.room1.text.description}</p>
    <button>${rooms.room1.text.options.inspect}</button>
    <button>${rooms.room1.text.options.nextRoom}</button>
    `
})
