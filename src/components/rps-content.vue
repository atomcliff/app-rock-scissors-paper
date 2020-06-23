<template>
    <div class="mainContent">
        <div class="container">
            <div class="cards">
                <div class="enemySide">
                    <div class="card front">
                        <img
                            :src="require(`@/assets/images/backCard.png`)"
                            oncontextmenu="return false;"
                        />
                    </div>
                    <div class="card back" style="transform: rotateY(-180deg);">
                        <img :src="getEnemyCard" oncontextmenu="return false;" />
                    </div>
                </div>

                <div class="mySide">
                    <div
                        v-for="(item, index) in cards"
                        :key="index"
                        class="card my-card"
                        :class="cards[index].value"
                        @click="done ? play(cards[index]) : false"
                    >
                        <img :src="item.src" oncontextmenu="return false;" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    value: "rock",
                    src: require(`@/assets/images/rockCard.png`)
                },
                {
                    value: "paper",
                    src: require(`@/assets/images/paperCard.png`)
                },
                {
                    value: "scissors",
                    src: require(`@/assets/images/scissorsCard.png`)
                }
            ],
            enemyIndex: 0,
            enemy: "",
            done: true
        };
    },
    computed: {
        getEnemyCard() {
            return this.cards[this.enemyIndex].src;
        }
    },
    methods: {
        play(mychoice) {
            this.done = false;
            this.enemyIndex =
                Math.floor(Math.random() * (this.cards.length - 1 - 0 + 1)) + 0;
            this.enemy = this.cards[this.enemyIndex].value;

            if (mychoice.value === "rock") {
                this.rockAnimeCard.restart();
                setTimeout(() => {
                    if (this.enemy === "rock") {
                        this.$store.dispatch("draw");
                    } else if (this.enemy === "paper") {
                        this.$store.dispatch("enemyVictory");
                    } else {
                        this.$store.dispatch("myVictory");
                    }
                }, 1500);
            } else if (mychoice.value === "paper") {
                this.paperAnimeCard.restart();
                setTimeout(() => {
                    if (this.enemy === "rock") {
                        this.$store.dispatch("myVictory");
                    } else if (this.enemy === "paper") {
                        this.$store.dispatch("draw");
                    } else {
                        this.$store.dispatch("enemyVictory");
                    }
                }, 1500);
            } else if (mychoice.value === "scissors") {
                this.scissorsAnimeCard.restart();
                setTimeout(() => {
                    if (this.enemy === "rock") {
                        this.$store.dispatch("enemyVictory");
                    } else if (this.enemy === "paper") {
                        this.$store.dispatch("myVictory");
                    } else {
                        this.$store.dispatch("draw");
                    }
                }, 1500);
            }
        }
    },
    mounted() {
        (this.frontAnimeCard = this.$anime({
            targets: ".front",
            rotateY: [
                {
                    value: "-180deg",
                    duration: 500,
                    delay: 500
                },
                {
                    value: "0deg",
                    duration: 500,
                    delay: 1500
                }
            ],
            easing: "easeInQuad",
            autoplay: false
        })),
            (this.backAnimeCard = this.$anime({
                targets: ".back",
                rotateY: [
                    {
                        value: "0deg",
                        duration: 500,
                        delay: 500
                    },
                    {
                        value: "-180deg",
                        duration: 500,
                        delay: 1500
                    }
                ],
                easing: "easeInQuad",
                autoplay: false,
                complete: () => {
                    setTimeout(() => {
                        this.done = true;
                    }, 500);
                }
            })),
            (this.rockAnimeCard = this.$anime({
                targets: ".rock",
                translateY: [
                    {
                        value: "-100%",
                        duration: 1000,
                        delay: 0
                    },
                    {
                        value: "0",
                        duration: 1000,
                        delay: 500,
                        easing: "easeInElastic"
                    }
                ],
                translateX: [
                    {
                        value: "100%",
                        duration: 1000,
                        delay: 0
                    },
                    {
                        value: "0",
                        duration: 1000,
                        delay: 500,
                        easing: "easeInElastic"
                    }
                ],
                autoplay: false,
                begin: () => {
                    this.frontAnimeCard.restart();
                    this.backAnimeCard.restart();
                }
            })),
            (this.paperAnimeCard = this.$anime({
                targets: ".paper",
                translateY: [
                    {
                        value: "-100%",
                        duration: 1000,
                        delay: 0
                    },
                    {
                        value: "0",
                        duration: 1000,
                        delay: 500,
                        easing: "easeInElastic"
                    }
                ],
                autoplay: false,
                begin: () => {
                    this.frontAnimeCard.restart();
                    this.backAnimeCard.restart();
                }
            })),
            (this.scissorsAnimeCard = this.$anime({
                targets: ".scissors",
                translateY: [
                    {
                        value: "-100%",
                        duration: 1000,
                        delay: 0
                    },
                    {
                        value: "0",
                        duration: 1000,
                        delay: 500,
                        easing: "easeInElastic"
                    }
                ],
                translateX: [
                    {
                        value: "-100%",
                        duration: 1000,
                        delay: 0
                    },
                    {
                        value: "0",
                        duration: 1000,
                        delay: 500,
                        easing: "easeInElastic"
                    }
                ],
                autoplay: false,
                begin: () => {
                    this.frontAnimeCard.restart();
                    this.backAnimeCard.restart();
                }
                //complete: ()=>{
                //	document.querySelector('.front').style.transform = "rotateY(180deg)";
                //	document.querySelector('.back').style.transform = "rotateY(0deg)";
                //}
            }));
    }
};
</script>

<style scoped>
.mainContent {
    height: calc(100% - 100px);
    background-image: url("~@/assets/images/background2.jpg");
}
.cards {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.enemySide {
    position: relative;
    display: flex;
    justify-content: center;
}
.enemySide .front,
.enemySide .back {
    position: absolute;
    backface-visibility: hidden;
}
.card {
    user-select: none;
}
.card img {
    max-width: 160px;
    margin: 10px;
}
.mySide {
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
.my-card img {
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .card img {
        max-width: 100px;
    }
}

@media screen and (max-width: 992px) and (orientation: landscape) {
    .mainContent {
        height: calc(100% - 50px);
    }
    .card img {
        max-width: 65px;
    }
}

@media screen and (max-width: 576px) {
    .card img {
        max-width: 80px;
    }
}
</style>
