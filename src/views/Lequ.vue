<template>
  <main class="pb-32">
    <div class="mb-32 bg-bottom bg-no-repeat bg-cover pb-44" :style="`background-image: url(${require('@/assets/lequ/lequ_header.png')})`">
      <AMContainer>
        <AMGrid container class="pt-20" spacing="6">
          <AMGrid item xl="7">
            <AMTitle class="mb-4 mr-8 text-base-white" variant="giant" as="h1">
              Lequ, een eerste stap naar een actief en inclusief leesbeleid
            </AMTitle>
            <AMText class="mb-10 mr-16 text-base-white" variant="introduction">
              Gemakkelijk in te zetten naast elke methode en sluit aan bij de
              nieuwe kerndoelen van curriculum.nu.
            </AMText>
            <div class="flex items-center gap-0">
              <AMButton href="/sjors" variant="primary" label="Bekijk onze introductieaanbieding" />
              <AMText variant="body-light" class="ml-4 text-base-white">
                of bekijk gratis onze
                <AMLink class="text-base-white" href="/sjors" label="online inkijkexamplaren" />
              </AMText>
            </div>
          </AMGrid>
          <AMGrid item xl="4">
            <div class="relative flex justify-center mr-12">
              <img class="rounded-md" src="@/assets/lequ/lequ_book.png" />
              <AMButton class="absolute bottom-8" href="/sjors" variant="primaryWhite" label="Online inkijkexemplaar" />
            </div>
          </AMGrid>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer class="pb-32">
      <AMGrid container>
        <AMGrid style="min-height: 760px" class="relative flex items-center" item lg="6">
          <div class="absolute w-8/12 h-full rounded-md -left-12 bg-lequColors-dark-blue">
            <div class="relative h-full">
              <img class="absolute top-0 right-0 w-full" src="https://lequ.nl/assets/images/shape_block_right.png" />
              <img class="absolute bottom-0 left-0 w-3/4" src="https://lequ.nl/assets/images/shape-login-block.png" />
            </div>
          </div>
          <div :style="`width: 400px; height: 600px; background-image: url('https://lequ.nl/img/32521dcf-2fe3-48d6-b1b9-a8c914b11f73/rsz-3gorgels-1-jochem-myjer.jpg')`" class="relative ml-auto mr-20 bg-center bg-no-repeat bg-cover rounded-md shadow-xl z-1 bg-base-grey-400" />
        </AMGrid>
        <AMGrid class="my-6 text-lequColors-black-light" item lg="6">
          <AMSubtitle variant="small" as="h4" class="mb-2 text-lequColors-lequ-red">Uitgelicht</AMSubtitle>
          <AMTitle variant="large" as="h3" class="mb-2 uppercase">De Gorgels (deel 1)</AMTitle>
          <AMText variant="body-bold" class="mb-6">Jochem Myjer</AMText>
          <div class="flex flex-wrap gap-0 mb-4 -mx-2">
            <AMText variant="body-bold" class="flex-shrink-0 w-auto px-2 py-1 mx-2 text-center rounded min-w-32 bg-base-grey-100" :key="index" v-for="index in 3">
              Tag
            </AMText>
          </div>
          <AMText variant="body-regular" class="max-w-xl mb-4">
            Midden in de nacht wordt Melle wakker. Er zit een vreemd wezentje op
            de rand van zijn bed. Het lijkt wel een bolletje wol, met armpjes en
            beentjes en twee harige, puntige oren. Maar als Melle het licht
            aandoet, is het wezentje verdwenen… Een heerlijk mysterieus begin
            van een magisch avontuur voor jonge lezers.
          </AMText>
          <AMButton href="/sjors" variant="primaryRed" label="Ontdek boek" />
        </AMGrid>
      </AMGrid>
    </AMContainer>
    <AMContainer class="pb-36">
      <AMGrid class="text-lequColors-black-light" container>
        <AMGrid item>
          <div class="relative w-3/4 px-12 py-10 mt-12 rounded-md bg-lequColors-yellow">
            <img class="absolute left-0 top-4" src="https://lequ.nl/assets/images/shape_block_left.png" />
            <div class="relative z-1">
              <AMSubtitle class="mb-2" variant="medium" as="h5">Meer kinderen laten lezen in de klas?</AMSubtitle>
              <AMText class="mb-4" variant="text-regular">
                Je kent ze vast wel: leerlingen die telkens naar de boekenkast
                lopen omdat het ze maar niet lukt om een boek te vinden dat bij
                ze past. Voor deze leerlingen is Lequ ideaal! Lequ is geen
                methode, maar je zet het wél heel gemakkelijk in naast iedere
                methode. Zo geef je samenhangend leesonderwijs en zorg je ervoor
                dat ook de heen-en-weer-lopende leerling met plezier leest!
              </AMText>
              <AMButton href="/sjors" variant="primaryWhite" label="Bekijk de abonnementen" />
            </div>
            <img class="absolute -right-20 -bottom-10" src="@/assets/lequ/group_dots.png" />
          </div>
        </AMGrid>
        <AMGrid item>
          <div class="relative w-4/5 px-12 py-10 rounded-md bg-lequColors-purple">
            <img class="absolute top-0 right-0" src="https://lequ.nl/assets/images/shape_block_right.png" />
            <div class="relative z-1">
              <AMSubtitle class="mb-2" variant="medium" as="h5">Toffe prijzen winnen?</AMSubtitle>
              <AMText class="mb-4" variant="text-regular">
                Wij worden blij van boeken, jij toch ook? Schrijf dan snel in
                voor de nieuwsbrief en blijf op de hoogte van alle acties. Elke
                maand verloten we een boek voor in de klas. En er komen nog meer
                acties aan.
              </AMText>
              <AMButton href="/sjors" variant="primaryWhite" label="Schrijf je in voor de nieuwsbrief" />
            </div>
            <img class="absolute -right-20 -bottom-10" src="@/assets/lequ/group_dots.png" />
          </div>

          <div class="relative w-2/3 px-12 py-10 mt-24 rounded-md bg-lequColors-light-blue">
            <img class="absolute bottom-0 left-0" src="https://lequ.nl/assets/images/shape-login-block.png" />
            <div class="relative z-1">
              <AMSubtitle class="mb-2" variant="medium" as="h5">Webinar Lequ volgen?</AMSubtitle>
              <AMText class="mb-4" variant="text-regular">
                Nieuwsgierig wat Lequ voor jou kan betekenen?
              </AMText>
              <AMText class="mb-4" variant="text-regular">
                Meld je aan voor het webinar op maandag 22 februari van 16:00
                tot 16:30 of maandag 22 maart van 16:00 uur tot 16:30 of maandag
                19 april van 16:00 uur tot 16:30 en Maurice vertelt je er alles
                over.
              </AMText>
              <AMButton href="/sjors" variant="primaryWhite" label="Aanmelden" />
            </div>
            <img class="absolute -right-20 -bottom-10" src="@/assets/lequ/group_dots.png" />
          </div>
        </AMGrid>
      </AMGrid>
    </AMContainer>
    <AMContainer>
      <AMGrid class="text-lequColors-black-light" container spacing="10">
        <AMGrid item xs="7">
          <div class="relative px-10 py-12 rounded-md bg-lequColors-green">
            <AMSubtitle class="mb-4" variant="medium" as="h5">Stuur ons een bericht</AMSubtitle>
            <form @submit.prevent="handleSubmit" novalidate>
              <AMInput class="mb-4" @error="pushErrors" :validate="trigger" v-model="form.firstname" type="text" placeholder="Voornaam" id="form-firstname" />
              <AMInput class="mb-4" @error="pushErrors" :validate="trigger" v-model="form.surname" type="text" placeholder="Achternaam" id="form-surname" />
              <AMInput class="mb-4" @error="pushErrors" :validate="trigger" v-model="form.email" type="email" required placeholder="Emailadres" id="form-mail" />
              <AMInput class="mb-4" @error="pushErrors" :validate="trigger" v-model="form.message" type="textarea" required placeholder="Type hier je bericht" id="form-bericht" />
              <AMButton type="submit" :loading="loading" variant="primaryBlue" label="Verstuur" />
            </form>
            <img class="absolute bottom-0 left-40" src="https://lequ.nl/assets/images/shape-contact2.png" />
            <img class="absolute top-0 right-32" src="https://lequ.nl/assets/images/shape-contact3.png" />
            <img class="absolute -right-8 -bottom-20" src="@/assets/lequ/group_dots.png" />
          </div>
        </AMGrid>
        <AMGrid item xs="5">
          <div class="relative h-full px-10 py-12 rounded-md bg-lequColors-light-blue">
            <div class="relative z-10">
              <AMSubtitle class="mb-4" variant="medium" as="h5">Vragen?</AMSubtitle>
              <AMText class="mb-4" variant="text-regular">
                Online zijn we altijd dichtbij. Vind hier zelf snel het antwoord
                op je vraag of neem contact met ons op.
              </AMText>
            </div>
            <img class="absolute top-0 right-0" src="https://lequ.nl/assets/images/shape-contact.png" />
            <img class="absolute -right-8 -bottom-20" src="@/assets/lequ/group_dots.png" />
          </div>
        </AMGrid>
      </AMGrid>
    </AMContainer>
  </main>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";
import AMTitle from "@/components/cores/Title";
import AMSubtitle from "@/components/cores/Subtitle";
import AMText from "@/components/cores/Text";
import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";
import AMInput from "@/components/atoms/Input";

export default {
  name: "App",
  components: {
    AMContainer,
    AMGrid,
    AMTitle,
    AMSubtitle,
    AMText,
    AMButton,
    AMLink,
    AMInput,
  },
  data() {
    return {
      loading: false,
      loaded: false,
      form: {
        firstname: "",
        surname: "",
        email: "",
        message: "",
      },
      errors: [],
      trigger: 0,
    };
  },
  methods: {
    pushErrors(error) {
      error && this.errors.push(error);
    },
    async handleSubmit() {
      this.errors = [];
      this.trigger++;
      const errors = await this.errors;

      if (!errors.length) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.loaded = true;
        }, 2000);
      }
    },
  },
};
</script>
