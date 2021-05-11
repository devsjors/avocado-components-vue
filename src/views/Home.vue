<template>
  <AMContainer>
    <AMTitle as="h1" variant="huge">Welcome</AMTitle>
  </AMContainer>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import AMTitle from "@/components/cores/Title";

export default {
  name: "Home",
  components: {
    AMContainer,
    AMTitle,
  },
  data() {
    return {};
  },
};
</script>
