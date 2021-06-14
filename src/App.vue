<template>
  <v-app>
      <Navbar/>
      <Spinner/>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'
export default {
  name: 'App',
  components: {
  Navbar,
  Spinner

  },
  data: () => ({
    //
  }),
};
</script>