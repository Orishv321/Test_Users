<template>
  <main class="flex flex-col w-full justify-center items-center">
    <section class="text-xl pb-5">{{ userInfo.first_name }}</section>
    <section class="flex flex-col items-center p-5 border">
      <div class="pb-3">
        <Components_avatar :avatar="userInfo.avatar" />
      </div>
      <div>email: {{ userInfo.email }}</div>
      <div>First Name : {{ userInfo.first_name }}</div>
      <div>Last name: {{ userInfo.last_name }}</div>
    </section>
  </main>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Components_avatar from "@/components/avatar";

export default {
  name: "page_user_details",
  components: { Components_avatar },
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
