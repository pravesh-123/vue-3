<!-- CreatedBy: Pravesh Dwivedi Solace
     
      -->
<template>
  <AppHeader :isLoggedIn="isLoggedIn" @openLoginModal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @closeLogin="isLoginOpen = false" />
  </teleport>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utilities/firebase";
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
  components: { AppHeader, LoginModal },
};
</script>

<style>
</style>