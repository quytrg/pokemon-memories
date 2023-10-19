<template>
  <div class="card">
    <div 
      class="card__inner" 
      :class="{'is-flipped': isFlipped, 'disable-flip': isDisabled}" 
      @click="handleFlip"
      :style="{ 
        height: `${(720 - 16 * 4) / sizeMatrix - 16}px`,
        width: `${((720 - 16 * 4) / sizeMatrix - 16) * 3 / 4}px`
      }"
    >
      <div class="card__face card__face--front" :style="{borderRadius: `${40 / sizeMatrix}px`}">
        <div class="card__content"></div>
      </div>
      <div class="card__face card__face--back" :style="{borderRadius: `${40 / sizeMatrix}px`}">
        <div class="card__content" :style="{ backgroundImage: `url(` + backFaceImgUrl +`)` }">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      backFaceImgUrl: {
        type: String,
        require: true,
      },
      sizeMatrix: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        isFlipped: false,
        isDisabled: false,  
      }
    },
    methods: {
      handleFlip() {
        if (this.isDisabled) return false;
        this.isFlipped = !this.isFlipped;
      },
      handleFlipBack() {
        if (this.isDisabled) return false;
        this.isFlipped = false;
      },
      handleDisableFlip() {
        this.isDisabled = true;
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    display: inline-block;
    margin: 0.5rem;
    // width: 90px;
    // height: 120px;

    &__inner {
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      transition: transform 0.5s;
      transform-style: preserve-3d;

      &.is-flipped {
        transform: rotateY(-180deg);
      }

      &.disable-flip {
        cursor: default;
      }
    }

    &__face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.3);
      // border-radius: 10px;
      overflow: hidden;

      &--front {
        .card__content {
          background: url('../assets/images/icon_back.png') center no-repeat;
          background-size: 70%;
          width: 100%;
          height: 100%;
        }
      }

      &--back {
        transform: rotateY(-180deg);
        .card__content {
          width: 100%;
          height: 100%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          // background-color: var(--light);
        }
      }
    }

    

  }

</style>