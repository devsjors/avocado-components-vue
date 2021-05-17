<template>
  <div class="py-12">
    <AMContainer>
      <AMSubtitle variant="medium" as="h3" class="mb-12">Usertest - Deel 2</AMSubtitle>
    </AMContainer>
    <lequExample />
    <AMContainer>
      <AMText variant="body-light">
        In dit eerste gedeelte van de Usertest ga je het bovenstaande stukje van
        de Avocado pagina bouwen met de Component Library. Hiervoor heb je een
        aantal dingen nodig: In het tweede gedeelte van de Usertest ga je het
        bovenstaande stukje van de Lequ pagina bouwen met de Component Library,
        ook hier heb je een aantal dingen voor nodig.
      </AMText>
      <ol class="mt-6">
        <li>Componenten</li>
        <ol class="ml-6">
          <li>AMContainer</li>
          <li>AMGrid</li>
          <li>AMSubtitle</li>
          <li>AMText</li>
          <li>AMButton</li>
        </ol>
        <li class="mt-2">Assets</li>
        <ol class="ml-6">
          <li>
            <pre class="inline">src="@/assets/lequ/group_dots.png"</pre>
          </li>
          <li>
            <pre class="inline">
https://lequ.nl/assets/images/shape_block_left.png</pre>
          </li>
          <li>
            <pre class="inline">
https://lequ.nl/assets/images/shape_block_right.png</pre>
          </li>
          <li>
            <pre class="inline">
https://lequ.nl/assets/images/shape-login-block.png</pre>
          </li>
        </ol>
      </ol>
      <AMText class="mt-6" variant="body-light">
        Als je denkt meer nodig te hebben kun je deze vinden/toevoegen in de
        tailwind.config.js. Of in het LequTheme kijken, deze kun je vinden in
        <pre class="inline">src/theme/LequTheme</pre>
      </AMText>
    </AMContainer>

    <!-- Bouw het component hier -->
  </div>
</template>

<script>
import lequExample from "@/usertest_components/lequ_component";

import AMContainer from "@/components/cores/Container";
import AMText from "@/components/cores/Text";
import AMSubtitle from "@/components/cores/Subtitle";

export default {
  components: {
    lequExample,
    AMContainer,
    AMText,
    AMSubtitle,
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
