new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
        },
        attack: function() {
            let damage = this.caculateDamage(10,3);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster damage' + damage,
            });
            if( this.checkWin() ) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function() {
            this.monsterHealth -= this.caculateDamage(20,10);
            if( this.checkWin() ) {
                return;
            }
            this.monsterAttack();
        },
        heal: function() {
            if( this.playerHealth <= 80) {
                this.playerHealth +=20;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttack: function() {
            let damage = this.caculateDamage(12,5);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'monster hits player damage' + damage,
            })
            this.checkWin()
        },
        caculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if( this.monsterHealth <= 0) {
                if( confirm('You Won! New Game?') ) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if ( this.playerHealth <= 0) {
                if( confirm('You Lost! New Game?') ) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})