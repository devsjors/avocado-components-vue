<template>
  <component :is="BreadcrumbComponent">
    <li v-for="(BreadcrumbItem, index) in BreadcrumbItems" :key="index">
      <AMLink v-if="index !== BreadcrumbItems.length - 1" :label="BreadcrumbItem.label" :href="BreadcrumbItem.href" />
      <span v-else>{{ BreadcrumbItem.label }}</span>
      <span v-if="index !== BreadcrumbItems.length - 1" class="separator">/</span>
    </li>
  </component>
</template>

<script>
import StyledBreadcrumb from "./styles/index";
import AMLink from "../../atoms/Link";

export default {
  name: "AMBreadcrumb",
  components: {
    AMLink,
  },
  props: {
    breadcrumbs: {
      type: Array,
    },
  },
  data() {
    return {
      BreadcrumbItems: this.breadcrumbs,
    };
  },
  computed: {
    BreadcrumbComponent() {
      return StyledBreadcrumb();
    },
  },
};
</script>
