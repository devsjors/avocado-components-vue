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
    return {
      active: false,
    };
  },
  computed: {
    HeaderMenuItemComponent() {
      const data = {
        active: this.active,
      };
      return StyledHeaderMenuItem(data);
    },
  },
  created() {
    this.$data.active = window.location.href.includes(this.$props.href);
  },
};
</script>
