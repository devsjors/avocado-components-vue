<template>
  <div class="flex">
    <div class="flex-column">
      <p>Breadcrumb</p>
      <div>
        <AMBreadcrumb :breadcrumbs="breadcrumbItems" />
      </div>
    </div>
  </div>
</template>

<script>
import AMBreadcrumb from "@/components/molecules/Breadcrumb";

export default {
  name: "Home",
  components: {
    AMBreadcrumb,
  },
  data() {
    return {
      breadcrumbItems: [
        { label: "Home", href: "/" },
        { label: "Project overview", href: "/" },
        { label: "Project detail", href: "/" },
      ],
    };
  },
};
</script>
