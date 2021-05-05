<template>
  <component :is="ContainerComponent">
    <slot />
  </component>
</template>

<script>
import StyledContainer from "./styles";

export default {
  name: "AMContainer",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    ContainerComponent() {
      return StyledContainer();
    },
  },
};
</script>
