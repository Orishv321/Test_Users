<template>
  <div>
    <div>Users</div>
    <section>
      <div>
        <select v-model="sortBy">
          <option
            v-for="(sort, key) in sortArray"
            :key="key"
            :value="sort.value"
          >
            {{ sort.label }}
          </option>
        </select>
      </div>
      <div>AllUsers</div>
    </section>
    <section>
      <div v-if="!!displayData">
        <div v-for="(user, key) in displayData" :key="key">
          <div>
            <img :src="user.avatar" @click="getUserDetails(user.id)" />
          </div>
          <div>email: {{ user.email }}</div>
          <div>name : {{ user.first_name }} {{ user.last_name }}</div>
        </div>
      </div>
      <div v-else>Lodding ....</div>
    </section>
  </div>
</template>
<script>
export default {
  name: "page_home",
  data() {
    return {
      users: null,
      sortArray: [
        { label: "NONE", value: "none" },
        { label: "First Name", value: "firstName" },
        { label: "Last Name", value: "lastName" },
      ],
      sortBy: "lastName",
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
        let res = await // await fetch("https://reqres.in/api/users?delay=3");
        (await fetch("https://reqres.in/api/users")).json();
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
    async getUserDetails(id) {
      this.$store.dispatch("getUserDetails", id);
      this.$router.push("/detail/" + id);
    },
  },
};
</script>
