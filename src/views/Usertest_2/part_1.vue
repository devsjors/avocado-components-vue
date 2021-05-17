<template>
  <div class="pt-12 pb-32">
    <AMContainer class="mb-36">
      <AMSubtitle variant="medium" as="h3" class="mb-12">Usertest - Deel 1</AMSubtitle>
    </AMContainer>
    <avocadoExample />
    <AMContainer>
      <AMText variant="body-light">
        In dit eerste gedeelte van de Usertest ga je het bovenstaande stukje van
        de Avocado pagina bouwen met de Component Library. Hiervoor heb je een
        aantal dingen nodig:
      </AMText>
      <ol class="mt-6">
        <li>Componenten</li>
        <ol class="ml-6">
          <li>AMContainer</li>
          <li>AMGrid</li>
          <li>AMTitle</li>
          <li>AMText</li>
          <li>AMButton</li>
        </ol>
        <li class="mt-2">Assets</li>
        <ol class="ml-6">
          <li>
            https://avocado.media/static/be10eafbe8f0ecc901308d74aef6c52b/5e32d/intro-image.jpg
          </li>
          <li>
            https://avocado.media/static/4f7ad40442ab00a50748b395e8535eff/eeaba/services-marvin-matthijs.jpg
          </li>
        </ol>
      </ol>
      <AMText class="mt-6" variant="body-light">
        Als je denkt meer nodig te hebben kun je deze vinden/toevoegen in de
        tailwind.config.js. Of in het DefaultTheme kijken, deze kun je vinden in
        <pre class="inline">src/theme/DefaultTheme</pre>
      </AMText>
    </AMContainer>

    <!-- Bouw het component hier -->
  </div>
</template>

<script>
import avocadoExample from "@/usertest_components/avocado_component";

import AMContainer from "@/components/cores/Container";
import AMSubtitle from "@/components/cores/Subtitle";
import AMText from "@/components/cores/Text";
export default {
  components: {
    avocadoExample,
    AMContainer,
    AMSubtitle,
    AMText,
  },
};
</script>

<style scoped>
ul,
ol {
  list-style: square !important;
  list-style-position: inside !important;
}
</style>
