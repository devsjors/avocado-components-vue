<template>
  <component :is="HeaderNavigationComponent">
    <ul>
      <slot />
    </ul>
  </component>
</template>

<script>
import StyledHeaderNavigation from "./styles/index";

export default {
  name: "AMHeaderNavigation",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    HeaderNavigationComponent() {
      return StyledHeaderNavigation();
    },
  },
};
</script>
