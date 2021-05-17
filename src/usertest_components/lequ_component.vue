<template>
  <AMContainer class="pb-36">
    <AMGrid class="text-lequColors-black-light" container>
      <AMGrid md="7" item>
        <div class="relative px-12 py-10 mt-12 rounded-md  md:mr-40 bg-lequColors-yellow">
          <img class="absolute left-0 top-4" src="https://lequ.nl/assets/images/shape_block_left.png" />
          <div class="relative z-1">
            <AMSubtitle class="mb-2" variant="medium" as="h5">Meer kinderen laten lezen in de klas?</AMSubtitle>
            <AMText class="mb-4" variant="text-regular">
              Je kent ze vast wel: leerlingen die telkens naar de boekenkast
              lopen omdat het ze maar niet lukt om een boek te vinden dat bij ze
              past. Voor deze leerlingen is Lequ ideaal! Lequ is geen methode,
              maar je zet het wél heel gemakkelijk in naast iedere methode. Zo
              geef je samenhangend leesonderwijs en zorg je ervoor dat ook de
              heen-en-weer-lopende leerling met plezier leest!
            </AMText>
            <AMButton href="/sjors" variant="primaryWhite" label="Bekijk de abonnementen" />
          </div>
          <img class="absolute -right-20 -bottom-10" src="@/assets/lequ/group_dots.png" />
        </div>
      </AMGrid>
      <AMGrid md="5" item>
        <div class="relative px-12 py-10 rounded-md bg-lequColors-purple">
          <img class="absolute top-0 right-0" src="https://lequ.nl/assets/images/shape_block_right.png" />
          <div class="relative z-1">
            <AMSubtitle class="mb-2" variant="medium" as="h5">Toffe prijzen winnen?</AMSubtitle>
            <AMText class="mb-4" variant="text-regular">
              Wij worden blij van boeken, jij toch ook? Schrijf dan snel in voor
              de nieuwsbrief en blijf op de hoogte van alle acties. Elke maand
              verloten we een boek voor in de klas. En er komen nog meer acties
              aan.
            </AMText>
            <AMButton href="/sjors" variant="primaryWhite" label="Schrijf je in voor de nieuwsbrief" />
          </div>
          <img class="absolute -right-20 -bottom-10" src="@/assets/lequ/group_dots.png" />
        </div>

        <div class="relative w-11/12 px-12 py-10 mt-24 rounded-md  bg-lequColors-light-blue">
          <img class="absolute bottom-0 left-0" src="https://lequ.nl/assets/images/shape-login-block.png" />
          <div class="relative z-1">
            <AMSubtitle class="mb-2" variant="medium" as="h5">Webinar Lequ volgen?</AMSubtitle>
            <AMText class="mb-4" variant="text-regular">
              Nieuwsgierig wat Lequ voor jou kan betekenen?
            </AMText>
            <AMText class="mb-4" variant="text-regular">
              Meld je aan voor het webinar op maandag 22 februari van 16:00 tot
              16:30 of maandag 22 maart van 16:00 uur tot 16:30 of maandag 19
              april van 16:00 uur tot 16:30 en Maurice vertelt je er alles over.
            </AMText>
            <AMButton href="/sjors" variant="primaryWhite" label="Aanmelden" />
          </div>
          <img class="absolute -right-20 -bottom-10" src="@/assets/lequ/group_dots.png" />
        </div>
      </AMGrid>
    </AMGrid>
  </AMContainer>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";
import AMSubtitle from "@/components/cores/Subtitle";
import AMText from "@/components/cores/Text";
import AMButton from "@/components/atoms/Button";

export default {
  name: "lequExample",
  components: {
    AMContainer,
    AMGrid,
    AMSubtitle,
    AMText,
    AMButton,
  },
};
</script>
