<template lang="html">
  <div class="wrapper">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <div class="">
        <router-link to="/" class="btn btnPrimary">back to home</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import items from "@/seeders/items.js";
export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    this.item = item;
  },
};
</script>

<style lang="css" scoped></style>
