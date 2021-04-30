<template>
  <component :is="HeaderMenuItemComponent">
    <a :href="href">{{ label }}</a>
  </component>
</template>

<script>
import StyledHeaderMenuItem from "./styles/index";

export default {
  name: "AMHeaderMenuItem",
  components: {},
  props: {
    href: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    HeaderMenuItemComponent() {
      return StyledHeaderMenuItem();
    },
  },
};
</script>
