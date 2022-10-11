<template>
  <div class="w-full">
    <div class="flex justify-center pb-5 text-xl">Users</div>
    <section class="flex justify-between content-center pb-5">
      <div class="text-xl">AllUsers</div>
      <div>
        <select
          v-model="sortBy"
          aria-label=".form-select-sm example"
          class="bg-gray-400 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option
            v-for="(sort, key) in sortArray"
            :key="key"
            :value="sort.value"
          >
            {{ sort.label }}
          </option>
        </select>
      </div>
    </section>
    <section>
      <div
        v-if="!!displayData"
        class="flex space-x-5 space-y-5 w-full flex-wrap items-center justify-center"
      >
        <div v-for="(user, key) in displayData" :key="key">
          <Card :user="user" />
        </div>
      </div>
      <div v-else class="flex w-full justify-center items-center">
        <div class="loader">
          <div class="loader-wheel"></div>
          <div class="loader-text"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Card from "@/components/Card";

export default {
  name: "page_home",
  components: { Card },
  data() {
    return {
      users: null,
      sortArray: [
        { label: "NONE", value: "none" },
        { label: "First Name", value: "firstName" },
        { label: "Last Name", value: "lastName" },
      ],
      sortBy: "none",
      displayData: null,
    };
  },
  computed: {},
  watch: {
    sortBy: {
      immediate: true,
      handler: "handleDisplayData",
    },
  },
  methods: {
    async getAllUsers() {
      try {
        let res = await (
          await fetch("https://reqres.in/api/users?delay=3")
        ).json();
        // res = await res.json();
        this.users = res.data;
      } catch (e) {
        console.error("Could not get Users", e);
      }
    },
    async handleDisplayData(val) {
      try {
        if (!this.users) {
          await this.getAllUsers();
        }

        let res = [];
        const users = this.users ? [...this.users] : [];
        switch (val) {
          case "firstName":
            res = users.sort((a, b) => a.first_name > b.first_name, 1);

            break;
          case "lastName":
            res = users.sort((a, b) => a.last_name > b.last_name, 1);
            break;
          case "none":
            res = users;
            break;
          default:
            res = [];
            break;
        }
        this.displayData = res;
      } catch (e) {
        console.error("Could not sort user", e);
      }
    },
  },
};
</script>
<style scoped>
.loader {
  width: 60px;
}

.loader-wheel {
  animation: spin 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
}

.loader-text {
  color: #fff;
  font-family: arial, sans-serif;
}

.loader-text:after {
  content: "Loading";
  animation: load 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes load {
  0% {
    content: "Loading";
  }
  33% {
    content: "Loading.";
  }
  67% {
    content: "Loading..";
  }
  100% {
    content: "Loading...";
  }
}
</style>
