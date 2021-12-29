<!-- CreatedBy: Pravesh Dwivedi Solace
     
      -->
<!-- template to show the list-->
<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center">DC Heros {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        v-model.trim="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="
          border
          rounded
          bg-gradient-to-r
          from-red-700
          to-pink-500
          text-white
        "
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ],
    };
  },
  mounted() {
    this.$refs.newHeroRef.focus();
  },
  computed: {
    // function to get the length of array
    herosCount() {
      return this.dcHeros.length;
    },
  },
  methods: {
    // method to add new item in array
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      // method to remove an item in array
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },
};
</script>

<style>
</style>