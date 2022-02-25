<style lang="scss">
</style>

<template>
  <LayoutContainer>
    <Tip asset="pic-error">
    </Tip>
  </LayoutContainer>
</template>

<script>
export default {
  layout: 'error',
  data() {
    return {
      state: {}
    }
  },
  mounted() {
  },
  methods: {},
  head() {
    return {
      title: '遇到错误了',
      meta: [
        {hid: 'index', name: 'description', content: this.$getSeoInfo('description', '访问遇到错误了')}
      ]
    }
  }
}
</script>
