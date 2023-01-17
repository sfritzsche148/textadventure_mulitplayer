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
            text: {
                toforward1: {
                    answer: 'You see a big lake',
                    options: {
                        forward2: 'Go Forward',
                        inspect1: 'Inspect'
                    }
                },
                tobackward1: {
                    answer: 'You see a clif',
                    options: {
                        forward2: 'Go forward',
                        inspect1: 'Inspect'
                    }
                }
            }
        },

        'question3': {
            title: 'Chapter 1',
            text: {

            }

        }

    }

    content.innerHTML = `
    <p>${player.hp}</p>
    <img
    src="./coin.png"
    alt="" 
    />
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
        <p>${story.question2.text.toforward1.answer}</p>
        <button>${story.question2.text.toforward1.options.forward2} </button>
        <button>${story.question2.text.toforward1.options.inspect1} </button>
        `

        
    })

    BackBtn.addEventListener('click', function() {
        content.innerHTML = `
        <h2>${story.question2.title}</h2>
        <p>${story.question2.text.tobackward.answer}</p>
        <button>${story.question2.text.tobackward1.options.forward2} </button>
        <button>${story.question2.text.tobackward1.options.inspect1} </button>
        `
    })

    function Checkpoint1() {
        content.innerHTML = `
        <p>Checkpoint</p>        
        `
    }
})
