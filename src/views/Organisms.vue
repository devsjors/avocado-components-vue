<template>
  <div class="py-20">
    <AMContainer>
      <AMButton variant="leipeButton" label="Label" />
    </AMContainer>
  </div>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import AMButton from "@/components/atoms/Button";

export default {
  name: "Home",
  components: {
    AMContainer,
    AMButton,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
