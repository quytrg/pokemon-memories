<template>
  <div class="result-screen">
    <h1>✨ Congratulations ✨</h1>
    <p>{{ timer }} seconds</p>
    <button @click="handleNewGame">New Game</button>
  </div>
  
</template>

<script>
  export default {
    name: "ResultScreen",
    props: {
      timer: {
        type: Number,
        default: "0",
      }
    },
    methods: {
      handleNewGame() {
        this.$emit('newGame')
      }
    }
  }
</script>

<style scoped lang="scss">
  .result-screen {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 68px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    button {
      width: 100px;
      height: 100px;
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      // justify-content: center;
      font-size: 24px;
      font-family: var(--font);
      background-color: white;
      cursor: pointer;
      border-radius: 10px;
      transition: all .3s ease-in-out;
    }

    button:hover {
      background-color: var(--dark);
      color: var(--light);
      transition: all .3s ease-in-out;
    }
  }
</style>