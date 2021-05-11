<template>
  <div class="py-20">
    <AMContainer>
      <AMGrid container spacing="1">
        <AMGrid :key="'a' + index" v-for="index in 12" item xs="1">
          <div class="flex items-center justify-center h-10 bg-base-grey-400">
            {{ index }}
          </div>
        </AMGrid>
        <AMGrid class="mt-8" :key="'b' + index" v-for="index in 6" item xs="2">
          <div class="flex items-center justify-center h-10 bg-base-grey-400">
            {{ index }}
          </div>
        </AMGrid>
        <AMGrid class="mt-8" :key="'c' + index" v-for="index in 4" item xs="3">
          <div class="flex items-center justify-center h-10 bg-base-grey-400">
            {{ index }}
          </div>
        </AMGrid>
        <AMGrid class="mt-8" :key="'d' + index" v-for="index in 3" item xs="4">
          <div class="flex items-center justify-center h-10 bg-base-grey-400">
            {{ index }}
          </div>
        </AMGrid>
        <AMGrid class="mt-8" :key="'e' + index" v-for="index in 2" item xs="6">
          <div class="flex items-center justify-center h-10 bg-base-grey-400">
            {{ index }}
          </div>
        </AMGrid>
      </AMGrid>
      <AMGrid class="mt-24" container spacing="1">
        <AMGrid class="bg-base-grey-400" item xs="12" md="9" lg="12" xl="4">
          <AMTitle variant="giant" as="h1">
            Digitale oplossingen die verbinden
          </AMTitle>
        </AMGrid>
      </AMGrid>
    </AMContainer>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";
import AMTitle from "@/components/cores/Title";

export default {
  name: "Home",
  components: {
    AMContainer,
    AMGrid,
    AMTitle,
  },
};
</script>
