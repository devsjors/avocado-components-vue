<template>
  <main>
    <div class="bg-primary-navy">
      <AMContainer>
        <AMGrid container class="pt-40 pb-64">
          <AMGrid item md="10" lg="8" xl="6">
            <AMTitle class="text-base-white" variant="giant" as="h1">Digitale oplossingen die verbinden</AMTitle>
          </AMGrid>
          <AMGrid item class="mt-6" xs="12">
            <AMText class="text-primary-slime-light" variant="introduction">
              Hoogstaande websites en online platforms, klaar voor de volgende
              stap
            </AMText>
          </AMGrid>
          <AMGrid item class="mt-6">
            <AMButton href="/sjors" variant="primary" label="Bekijk ons werk" />
          </AMGrid>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer class="pb-24">
      <AMGrid container>
        <AMGrid item class="w-full ml-auto -mt-64" md="8">
          <div class="bg-center bg-no-repeat bg-cover bg-base-grey-100" style="
              padding-bottom: 56%;
              background-image: url(https://picsum.photos/2000/3000);
            " />
        </AMGrid>
        <AMGrid item class="ml-auto" md="8">
          <AMTitle class="mt-12 md:max-w-xl text-base-grey-900" variant="epic" as="h2">Wij helpen ondernemingen de volgende stap te zetten</AMTitle>
          <AMText class="mt-6 md:max-w-2xl text-base-grey-900" variant="body-light">
            Wij ontwikkelen online platforms die werk uit handen nemen en jouw
            doelgroep verbindt. Maatwerk oplossingen die klaar zijn voor de
            volgende stap voor opdrachtgevers uit het onderwijs, de cultuur en
            zorg. De ontwikkeling vindt plaats aan de hand van onze vier fasen,
            van concept tot oplevering en doorontwikkeling.
          </AMText>
          <AMButton class="mt-6" href="/sjors" variant="secondary" label="Neem contact op" />
        </AMGrid>
      </AMGrid>
    </AMContainer>
    <AMContainer maxWidth="xl" class="pb-32">
      <AMGrid container class="overflow-hidden rounded-md bg-secondary-mist" :class="[flowOrder(index), spaceBetween(index)]" :key="index" v-for="index in 3">
        <AMGrid item class="p-6 md:p-10" md="6">
          <AMSubtitle class="mb-6 text-primary-slime-light" variant="small" as="h4">CompanyName</AMSubtitle>
          <AMTitle class="mb-4 text-base-grey-900" variant="epic" as="h3">Title {{ index }}</AMTitle>
          <AMText class="mb-4 lg:w-4/5 text-base-grey-900" variant="body-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AMText>
          <AMLink label="Read more about title" href="/" />
        </AMGrid>
        <AMGrid item md="6">
          <div class="flex h-full bg-center bg-no-repeat bg-base-grey-100" style="background-image: url(https://picsum.photos/1000/800)" />
        </AMGrid>
      </AMGrid>
      <div class="flex items-center justify-center mt-8">
        <AMButton href="/sjors" variant="secondary" label="Bekijk alle cases" />
      </div>
    </AMContainer>
    <div class="my-24 bg-primary-navy">
      <AMContainer>
        <AMGrid container>
          <AMGrid item class="-mt-24" md="6">
            <div class="bg-center bg-no-repeat bg-cover bg-base-grey-100" style="
                padding-bottom: 56%;
                background-image: url(https://picsum.photos/720/420);
              " />
          </AMGrid>
        </AMGrid>
      </AMContainer>
      <AMContainer>
        <AMGrid container>
          <AMGrid item class="pt-12 pb-20" md="6">
            <AMTitle class="mt-8 text-primary-slime-light" variant="epic" as="h2">Specialist in online platforms</AMTitle>
            <AMText class="mt-3 text-base-white lg:mr-20" variant="body-light">
              Aan de basis van ieder project staat een centraal vraagstuk. Een
              uitdaging die vraagt om een oplossing. De ontwikkeling van een
              online platform kan in veel gevallen uitkomst bieden. Wij bundelen
              jouw expertise met onze kennis om de gestelde doelen te behalen.
              Wij zijn flexibel door het tijdig inspelen op veranderingen en
              sturen waar nodig bij. Benieuwd hoe een online platform jouw
              business kan helpen?
            </AMText>
            <AMButton class="mt-6" href="/sjors" variant="primary" label="Meer over online platforms" />
          </AMGrid>
          <AMGrid item class="relative ml-auto -mt-36" md="4">
            <div class="absolute w-full bg-center bg-no-repeat bg-cover bg-base-grey-100" style="
                padding-bottom: 135%;
                background-image: url(https://picsum.photos/480/650);
              " />
          </AMGrid>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer maxWidth="md" class="py-20 mt-12">
      <AMTitle variant="large" as="h4" class="mb-8">Hoe kunnen wij je helpen?</AMTitle>
      <form @submit.prevent="handleSubmit" novalidate v-if="!loaded">
        <AMGrid container spacing="3">
          <AMGrid item class="mb-4" xs="12" md="6">
            <AMInput @error="pushErrors" :validate="trigger" :errorMessages="errorMessages" v-model="form.name" type="text" placeholder="Volledige naam" id="form-name" />
          </AMGrid>
          <AMGrid item class="mb-4" xs="12" md="6">
            <AMInput @error="pushErrors" :validate="trigger" :errorMessages="errorMessages" v-model="form.email" type="email" required placeholder="Emailadres" id="form-mail" icon="mail" />
          </AMGrid>
          <AMGrid item class="mb-4" xs="12">
            <AMInput @error="pushErrors" :validate="trigger" :errorMessages="errorMessages" v-model="form.message" type="textarea" required placeholder="Vertel iets over het project" id="form-bericht" />
          </AMGrid>
          <AMGrid item xs="12" md="12">
            <AMButton type="submit" :loading="loading" variant="primary" label="Verzenden" />
          </AMGrid>
        </AMGrid>
      </form>
      <AMSubtitle v-if="loaded" variant="small" as="p">
        Bedankt voor het invullen! Wij nemen zo spoedig mogelijk contact met je
        op.
      </AMSubtitle>
    </AMContainer>
  </main>
</template>

<script>
/* eslint-disable vue/no-unused-components */
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
        name: "",
        email: "",
        message: "",
      },
      errors: [],
      trigger: 0,
      errorMessages: {
        required: "Dit veld is moet worden ingevuld",
        email: "Dit emailadres is ongeldig",
        tel: "Dit telefoonnummer is ongeldig",
      },
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
    flowOrder(index) {
      return index % 2 !== 1 && "flex-row-reverse";
    },
    spaceBetween(index) {
      return index !== 1 && "mt-12";
    },
  },
};
</script>
