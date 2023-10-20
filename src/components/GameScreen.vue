<template>
  <div class="game-screen">
    <div 
      class="game-screen__inner"
      :style="{ width: `${(((720 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3 / 4 + 16) * Math.sqrt(cardsContext.length)}px`}"
    >
      <Card
        v-for="(card, index) in cardsContext" 
        :key="index" 
        :backFaceImgUrl="`/images/${card}.png`"
        :sizeMatrix="Math.sqrt(cardsContext.length)"
        :ref="`card-${index}`"
        @click="handleCheckRule(card, index)"
      />
    </div>
  </div>
</template>

<script>
  import Card from './Card.vue';

  export default {
    name: "GameScreen",
    props: {
      cardsContext: {
        type: Array,
        default: []
      }
    },
    components: {
      Card,
    },
    data() {
      return {
        rules: [],
        cardFlipped: Array(65).fill(false),
      }
    },
    methods: {
      handleCheckRule(card, index) {
        if (this.rules.length === 1) {
          this.rules.push({card, index})
          
          if (this.rules[0].card === this.rules[1].card && this.rules[0].index !== this.rules[1].index) {
            this.$refs[`card-${this.rules[0].index}`][0].handleDisableFlip();
            this.$refs[`card-${this.rules[1].index}`][0].handleDisableFlip();

            if (this.isCompleted(this.rules[0].card)) {
              setTimeout(() => {
                this.$emit('completed');
              }, 1000)
            }

            this.rules = [];
          }
          else {
            setTimeout(() => {
              // this.$refs[`card-${this.rules[0].index}`][0].handleFlipBack();
              // this.$refs[`card-${this.rules[1].index}`][0].handleFlipBack();
              this.rules.forEach((_, index) => {
                this.$refs[`card-${this.rules[index].index}`][0].handleFlipBack();
              })

              this.rules = [];
            }, 500)
          }
        } else {
          this.rules.push({card, index})
        }
      },
      isCompleted(value) {
        this.cardFlipped[value] = true;
        return this.cardFlipped.filter(Boolean).length == this.cardsContext.length / 2;
      }

    }
  }
</script>

<style lang="scss" scoped>
  .game-screen {
    width: 100%;
    height: 92vh;
    // background-color: var(--dark);
    // color: var(--light);

    &__inner {
      // width: 600px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1rem auto;
    }
  }
</style>