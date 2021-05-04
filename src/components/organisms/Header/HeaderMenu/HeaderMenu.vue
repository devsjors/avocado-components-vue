<template>
  <component :is="HeaderMenuComponent" @click="toggleHandler" @mouseleave="menuOpen = false">
    <a>
      <span>{{ label }}</span>
      <IconBase class="chevron" name="chevron_down" width="20" height="20" />
    </a>
    <ul>
      <slot />
    </ul>
  </component>
</template>

<script>
import StyledHeaderMenu from "./styles/index";
import IconBase from "@/icons/IconBase";

export default {
  name: "AMHeaderMenu",
  components: {
    IconBase,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleHandler() {
      this.menuOpen = !this.menuOpen;
    },
  },
  computed: {
    HeaderMenuComponent() {
      const data = {
        menuOpen: this.menuOpen,
      };
      return StyledHeaderMenu(data);
    },
  },
};
</script>
