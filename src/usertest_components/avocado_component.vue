<template>
  <div class="mt-24 mb-36 bg-primary-navy">
    <AMContainer>
      <AMGrid container>
        <AMGrid item class="-mt-24" md="6">
          <div class="bg-center bg-no-repeat bg-cover bg-base-grey-100" :style="`padding-bottom: 56%; background-image: url('https://avocado.media/static/be10eafbe8f0ecc901308d74aef6c52b/5e32d/intro-image.jpg')`" />
        </AMGrid>
      </AMGrid>
    </AMContainer>
    <AMContainer>
      <AMGrid container>
        <AMGrid item class="pt-12 pb-20" md="7">
          <AMTitle class="mt-8 text-primary-slime-light" variant="epic" as="h2">Specialist in online platforms</AMTitle>
          <AMText class="mt-3 text-base-white xl:mr-20" variant="body-light">
            Aan de basis van ieder project staat een centraal vraagstuk. Een
            uitdaging die vraagt om een oplossing. De ontwikkeling van een
            online platform kan in veel gevallen uitkomst bieden. Wij bundelen
            jouw expertise met onze kennis om de gestelde doelen te behalen. Wij
            zijn flexibel door het tijdig inspelen op veranderingen en sturen
            waar nodig bij. Benieuwd hoe een online platform jouw business kan
            helpen?
          </AMText>
          <AMButton class="mt-6" href="/sjors" variant="primary" label="Meer over online platforms" />
        </AMGrid>
        <AMGrid item class="relative ml-auto xl:-mt-36 lg:mt-24" md="4">
          <div class="absolute w-full bg-center bg-no-repeat bg-cover  bg-base-grey-100" :style="`padding-bottom: 135%; background-image: url('https://avocado.media/static/4f7ad40442ab00a50748b395e8535eff/eeaba/services-marvin-matthijs.jpg')`" />
        </AMGrid>
      </AMGrid>
    </AMContainer>
  </div>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";
import AMTitle from "@/components/cores/Title";
import AMText from "@/components/cores/Text";
import AMButton from "@/components/atoms/Button";

export default {
  name: "avocadoExample",
  components: {
    AMContainer,
    AMGrid,
    AMTitle,
    AMText,
    AMButton,
  },
};
</script>
