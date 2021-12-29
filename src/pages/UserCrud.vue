<!-- CreatedBy: Pravesh Dwivedi Solace
     createdAt: 28/12/2021
     purpose: to declare some common function  for user crud  app -->
<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <!-- button to open modal-->
        <button
          class="px-2 py-1 border rounded my-4"
          @click="isModalOpen = true"
        >
          Add User
        </button>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">First Name</th>
              <th class="px-4 py-2 border">Last Name</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <!-- button for pagination-->
          <button
            class="px-3 py-2 border rounded"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-400' : 'hover:shadow'"
          >
            Prev
          </button>
          <button
            class="px-3 py-2 border rounded"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-400'
                : 'hover:shadow'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- include reuseable modal-->
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label>Name</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Name"
              v-model="state.form.name"
            />
          </div>
          <div class="p-2">
            <label>Email</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="User Email"
              type="email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label>Avatar</label>
            <input
              class="w-full p-2 rounded border"
              placeholder="Avatar Url"
              type="text"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-gray-300"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import axios from "../plugins/axios";
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      users: {},
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });
    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
    function submit() {}
    return { state, next, prev, isModalOpen, submit };
  },
};
</script>

<style></style>
