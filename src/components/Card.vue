<template>
  <div class="flex flex-col items-center rounded border p-5">
    <div class="pb-3">
      <Components_avatar
        :avatar="user.avatar"
        @click="getUserDetails(user.id)"
      />
    </div>
    <div>{{ user.first_name }} {{ user.last_name }}</div>
    <div>{{ user.email }}</div>
  </div>
</template>

<script>
import Components_avatar from "@/components/avatar";

export default {
  name: "components_card",
  components: { Components_avatar },
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    async getUserDetails(id) {
      this.$store.dispatch("getUserDetails", id);
      this.$router.push("/detail/" + id);
    },
  },
};
</script>

<style scoped></style>
