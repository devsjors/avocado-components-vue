<template>
  <component :is="HeaderNameComponent" :href="href">
    <slot />
  </component>
</template>

<script>
import StyledHeaderName from "./styles/index";

export default {
  name: "AMHeaderName",
  components: {},
  props: {
    href: {
      type: String,
      default: "/",
      required: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    HeaderNameComponent() {
      return StyledHeaderName();
    },
  },
};
</script>
