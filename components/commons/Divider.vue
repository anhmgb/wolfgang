<template>
  <hr :style="dividerStyle">
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '1px'
    },

    width: {
      type: String,
      default: '100%'
    },

    backgroundColor: {
      type: String,
      default: 'black'
    },
  },

  computed: {
    dividerStyle() {
      return {
        height: this.height,
        width: this.width,
        'background-color': this.backgroundColor,
      };
    }
  }
};
</script>
