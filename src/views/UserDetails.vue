<template>
  <main>
    <section>User details</section>
    <section>
      <div>
        <img :src="userInfo.avatar" />
      </div>
      <div>email: {{ userInfo.email }}</div>
      <div>first Name : {{ userInfo.first_name }}</div>
      <div>last name: {{ userInfo.last_name }}</div>
    </section>
  </main>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "page_user_details",
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    ...mapState(["userDetails"]),
    routerId() {
      return this.$route.params.id;
    },
  },
  watch: {
    userDetails: {
      immediate: true,
      handler: "checkUserDetails",
    },
  },
  // created() {
  //   this.checkUserDetails();
  // },
  methods: {
    ...mapActions(["getUserDetails"]),
    async checkUserDetails(val) {
      try {
        if (!val.id && this.routerId !== val?.id) {
          await this.getUserDetails(this.routerId);
        } else {
          this.userInfo = val;
        }
      } catch (e) {
        console.error("Could not get User details", e);
      }
    },
  },
};
</script>

<style></style>
