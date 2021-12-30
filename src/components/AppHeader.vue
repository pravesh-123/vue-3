<!-- CreatedBy: Pravesh Dwivedi Solace
     
      -->
<!-- template for header-->
<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('openLoginModal')">Login</button>
  </nav>
</template>

<script>
// import firebase for authentication
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utilities/firebase";
export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      list: [
        { title: "DC Heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/modal" },
        { title: "User Crud", to: "/user-crud" },
        { title: "Tensorflow", to: "/tensorflow" },
      ],
    };
  },
  methods: {
    // method for signout user
    logout() {
      signOut(firebaseAuth);
      // .then((res) => {
      //   // Sign-out successful.

      // })
      // .catch((error) => {
      //   // An error happened.
      // });
    },
  },
};
</script>

<style></style>
