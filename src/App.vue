<template>
  <main>
    <MenuScreen
      v-if="matchStatus === 'select-mode'"
      @select="handleBeforeStart($event)"
    />
    <GameScreen 
      v-if="matchStatus === 'match'"
      :cardsContext="settings.cardsContext"
      @completed="handleAfterCompletion"
    />
    <ResultScreen 
      v-if="matchStatus === 'result'"
      :timer="timer"
      @newGame="matchStatus = 'select-mode'"
    />
    <Copyright />
  </main>
  <footer>

  </footer>
</template>

<script>
  import MenuScreen from './components/MenuScreen.vue';
  import GameScreen from './components/GameScreen.vue';
  import ResultScreen from './components/ResultScreen.vue';
  import { shuffle } from './utils/array.js'
import Copyright from './components/Copyright.vue';
  
  export default {
    name: "App",   
    components: {
    MenuScreen,
    GameScreen,
    ResultScreen,
    Copyright
},
    data() {
      return {
        settings: {
          totalCards: 0,
          cardsContext: [],
        },
        matchStatus: "select-mode",
        timer: 0,
      }
    },
    methods: {
      handleBeforeStart(config) {
        this.settings.totalCards = config.totalCards;

        const mark = Array(65).fill(false)
        
        const firstCards = Array.from({
          length: this.settings.totalCards / 2
        }, () => {
          let value = Math.floor(Math.random() * 64) + 1;
          while(mark[value]) {
            value = Math.floor(Math.random() * 64) + 1;
          }
          mark[value] = true;
          return value
        })
        const secondCards = [...firstCards]
        const cards = [...firstCards, ...secondCards]
        this.settings.cardsContext = shuffle(shuffle(cards))

        this.settings.startedAt = (new Date()).getTime()

        this.matchStatus = "match"
      },
      handleAfterCompletion() {
        this.timer = (((new Date()).getTime() - this.settings.startedAt) / 1000).toFixed(0);
        
        this.matchStatus = 'result';
      }
    }
  }

</script>

<style>

</style>