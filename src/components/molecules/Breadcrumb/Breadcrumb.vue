<template>
  <component :is="BreadcrumbsComponent">
    <li v-for="(BreadcrumbItem, index) in BreadcrumbItems" :key="index" :class="index !== BreadcrumbItems.length - 1 ? 'ja' : ''">
      <AMLink v-if="index !== BreadcrumbItems.length - 1" :label="BreadcrumbItem.label" :href="BreadcrumbItem.href" />
      <span v-else>{{ BreadcrumbItem.label }}</span>
    </li>
  </component>
</template>

<script>
import StyledBreadcrumb from "./styles/index";
import AMLink from "../../atoms/Link";

export default {
  name: "AMBreadcrumbs",
  components: {
    AMLink,
  },
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      BreadcrumbItems: this.data,
    };
  },
  methods: {},
  computed: {
    BreadcrumbsComponent() {
      return StyledBreadcrumb();
    },
  },
};
</script>
