<style lang="scss">
</style>

<template>
  <div class="index">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  layout: 'index',
  async asyncData({$axios, query}) {
  },
  data() {
    return {
      state: {
        currentPage: 1
      }
    }
  },
  computed: {
    ...mapGetters(['moduleList'])
  },
  mounted() {
  },
  methods: {},
  head() {
    return {
      title: '主页',
      meta: [
        {hid: 'index', name: 'description', content: this.$getSeoInfo('description', '我的时间轴')}
      ]
    }
  }
}
</script>
