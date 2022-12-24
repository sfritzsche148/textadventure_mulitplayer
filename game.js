let btn = document.getElementById('btn');


btn.addEventListener('click', function() {
    let input = document.getElementById('inp');
    let content = document.getElementById('content');

    let inp1 = input.value;

    let playername = inp1;

    class Player {
        constructor(name, hp, inventory) {
            this.name = name;
            this.hp = hp;
            this.inventory = inventory;  
        }
    }

    let playerinventory = [];
    let playerhp = 100

    let player = new Player(playername, playerhp, playerinventory); 

    let story = {
        'question1': {
            title: 'Chapter 1',
            options: {
                forward: 'Go Forward',
                backward: 'Go Backward'
            }
        },

        'question2': {
            title: 'Chapter 1',
            answers: {
                'toforward': 'You see a lake.',
                'tobackward': 'You see a clif'
            },
        }
    }


    content.innerHTML = `
    <p>${player.hp}</p>
    <p>Hello ${player.name}</p>
    <h2>${story.question1.title}</h2>
    <button id='Forwardbutton'>${story.question1.options.forward}</button>
    <button id='Backwardbutton'>${story.question1.options.backward}</button>
    `

    let ForwardBtn = document.querySelector('#Forwardbutton');
    let BackBtn = document.querySelector('#Backwardbutton');

    ForwardBtn.addEventListener('click', function() {
        content.innerHTML = `
        <h2>${story.question2.title}</h2>
        <p>${story.question2.answers.toforward}</p>
        `
    })

    BackBtn.addEventListener('click', function() {
        content.innerHTML = `
        <h2>${story.question2.title}</h2>
        <p>${story.question2.answers.tobackward}</p>
        `
    })

    let pickbtn = document.querySelector('#pickupbutton');

    function Checkpoint1() {
        content.innerHTML = `
        <p>You see big tres</p>
        `

    }


})
