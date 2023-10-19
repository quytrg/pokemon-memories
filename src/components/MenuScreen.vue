<template>
  <div class="menu-screen">
    <div class="menu">
      <div class="menu-header">
        <h1>POKEMON MEMORIES</h1>
        <h3>Select mode to start game</h3>
      </div>
      <div class="menu-main">
        <div class="menu-main__option" @click="handleSelect(16)">
          <button>
            <span>4x4</span>
            <span>Easy</span>
          </button>
        </div>
        <div class="menu-main__option" @click="handleSelect(36)">
          <button>
            <span>6x6</span>
            <span>Normal</span>
          </button>
        </div>
        <div class="menu-main__option" @click="handleSelect(64)">
          <button>
            <span>8x8</span>
            <span>Hard</span>
          </button>
        </div>
        <div class="menu-main__option" @click="handleSelect(100)">
          <button>
            <span>10x10</span>
            <span>Legend</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MenuScreen",
    methods: {
      handleSelect(totalCards) {
        this.$emit("select", { totalCards })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .menu-screen {
    height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .menu {
    display: flex;
    flex-direction: column;

    &-header {
      h1 {
        font-size: 68px;
      }
      h3 {
        margin: 0.25rem auto;
        font-size: 32px;
      }

      margin-bottom: 2rem;
    }

    &-main {
      width: 100%;
      display: flex;
      justify-content: space-around;

      &__option {
        width: 60px;
        height: 60px;
        
        button {
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
    }
  }
</style>