<template>
  <div class="home">
    <section1 />
    <section2 />
    <section3 />
    <section4 />
    <section5 />
  </div>
</template>

<script>
// @ is an alias to /src
import section1 from '@/components/section1.vue'
import section2 from '@/components/section2.vue'
import section3 from '@/components/section3.vue'
import section4 from '@/components/section4.vue'
import section5 from '@/components/section5.vue'

export default {
  name: 'HomeView',
  components: {
    section1,
    section2,
    section3,
    section4,
    section5,
  }
}
</script>
