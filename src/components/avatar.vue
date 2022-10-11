<template>
  <img :src="avatar" class="border-solid border-amber-200 rounded-lg w-32" />
</template>

<script>
export default {
  name: "components_avatar",
  props: {
    avatar: {
      type: String,
      default:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    },
  },
};
</script>

<style scoped></style>
