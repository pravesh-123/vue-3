<!-- CreatedBy: Pravesh Dwivedi Solace
     
      -->
<!-- template for markdown app -->
<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          ref="markdownTextArea"
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
// import marked for markdown language
import { marked } from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    // method to convert simple text in marked text
    markedText() {
      return marked(this.text);
    },
  },
  // method to convert simple text into marked text after some time
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  // for autofocus 
  mounted() {
    this.$refs.markdownTextArea.focus();
  },
};
</script>

<style>
</style>