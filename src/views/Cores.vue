<template>
  <div class="flex">
    <div>
      <AMTitle variant="huge" as="h1">Huge title</AMTitle>
      <AMTitle variant="giant" as="h2">Giant title</AMTitle>
      <AMTitle variant="epic" as="h3">Epic title</AMTitle>
      <AMTitle variant="large" as="h4">Large title</AMTitle>
    </div>

    <div>
      <AMSubtitle variant="medium" as="h3">Medium subtitle</AMSubtitle>
      <AMSubtitle variant="small" as="h4">Small subtitle</AMSubtitle>
      <AMSubtitle variant="tiny" as="h5">Tiny subtitle</AMSubtitle>
    </div>

    <div>
      <AMText variant="introduction">introduction</AMText>
      <AMText variant="highlighted">highlighted</AMText>
      <AMText variant="body-bold">body-bold</AMText>
      <AMText variant="body-regular">body-regular</AMText>
      <AMText variant="body-light">body-light</AMText>
      <AMText variant="caption">caption</AMText>
      <AMText variant="mini">mini</AMText>
    </div>
  </div>
</template>

<script>
import AMText from "@/components/cores/Text";
import AMSubtitle from "@/components/cores/Subtitle";
import AMTitle from "@/components/cores/Title";

export default {
  name: "Home",
  components: {
    AMText,
    AMSubtitle,
    AMTitle,
  },
  data() {
    return {};
  },
};
</script>
