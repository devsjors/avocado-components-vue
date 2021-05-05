<template>
  <main>
    <div style="background: #0a192d">
      <AMContainer>
        <AMGrid style="padding: 180px 0 240px 0" container>
          <AMGrid item md="10" lg="8" xl="6">
            <AMTitle class="text-white" variant="giant" as="h1">Digitale oplossingen die verbinden</AMTitle>
          </AMGrid>
          <AMGrid class="mt-6" item xs="12">
            <AMText style="color: #00dcb9" variant="introduction">
              Hoogstaande websites en online platforms, klaar voor de volgende
              stap
            </AMText>
          </AMGrid>
          <AMGrid class="mt-6" item>
            <AMButton href="/sjors" variant="primary" label="Bekijk ons werk" />
          </AMGrid>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer class="pb-24">
      <AMGrid container>
        <AMGrid class="ml-auto w-full bg-gray-200" style="margin-top: -220px; height: 500px" item md="8" />
        <AMGrid class="ml-auto" item lg="8">
          <AMTitle class="mt-12 md:max-w-xl" variant="epic" as="h2">Wij helpen ondernemingen de volgende stap te zetten</AMTitle>
          <AMText class="mt-6 md:max-w-2xl" variant="body-light">
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
    <AMContainer class="pb-32">
      <AMGrid class="bg-gray-200 rounded-md" :class="index !== 1 && 'mt-12'" :key="index" v-for="index in 3" container>
        <AMGrid class="p-4 md:p-8" item md="6">
          <AMSubtitle class="mb-6" variant="small" as="h4">CompanyName</AMSubtitle>
          <AMTitle class="mb-4" variant="epic" as="h3">Title</AMTitle>
          <AMText class="lg:w-3/4 mb-4" variant="body-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AMText>
          <AMLink label="Read more about title" href="/" />
        </AMGrid>
        <AMGrid item md="6" class="flex justify-center items-center">image</AMGrid>
      </AMGrid>
      <div class="flex justify-center mt-8 items-center">
        <AMButton href="/sjors" variant="secondary" label="Bekijk alle cases" />
      </div>
    </AMContainer>
    <AMContainer class="pb-32">
      <AMGrid container>
        <AMGrid md="6" item>
          <div class="bg-gray-200" style="padding-bottom: 56%"></div>
        </AMGrid>
      </AMGrid>
      <AMGrid class="mt-32" container>
        <AMGrid md="6" item>
          <AMTitle class="mt-8" variant="epic" as="h2">Specialist in online platforms</AMTitle>
          <AMText class="mt-3 lg:mr-20" variant="body-light">
            Aan de basis van ieder project staat een centraal vraagstuk. Een
            uitdaging die vraagt om een oplossing. De ontwikkeling van een
            online platform kan in veel gevallen uitkomst bieden. Wij bundelen
            jouw expertise met onze kennis om de gestelde doelen te behalen. Wij
            zijn flexibel door het tijdig inspelen op veranderingen en sturen
            waar nodig bij. Benieuwd hoe een online platform jouw business kan
            helpen?
          </AMText>
          <AMButton class="mt-6" href="/sjors" variant="secondary" label="Meer over online platforms" />
        </AMGrid>
        <AMGrid class="ml-auto" style="margin-top: -240px" md="4" item>
          <div class="bg-gray-200" style="padding-bottom: 68%"></div>
        </AMGrid>
      </AMGrid>
    </AMContainer>
    <div class="mb-20">
      <!-- <div style="background: #0a192d" class="mb-20"> -->
      <AMContainer class="py-20">
        <div class="max-w-4xl mx-auto">
          <form @submit.prevent="handleSubmit" novalidate>
            <AMGrid container>
              <AMGrid xs="12" md="6" item>
                <AMInput @error="pushErrors" :validate="trigger" v-model="form.name" type="text" placeholder="Naam" id="form-name" label="Naam" />
              </AMGrid>
              <AMGrid xs="12" md="6" item>
                <AMInput @error="pushErrors" :validate="trigger" v-model="form.email" type="email" required placeholder="Email" id="form-mail" icon="mail" label="Emailadres" />
              </AMGrid>
              <AMGrid xs="12" md="12" item>
                <AMInput @error="pushErrors" :validate="trigger" v-model="form.message" type="textarea" label="Bericht" required placeholder="Bericht" id="form-bericht" />
              </AMGrid>
              <AMButton type="submit" variant="primary" label="Verzenden" />
            </AMGrid>
          </form>
        </div>
      </AMContainer>
    </div>
  </main>
</template>

<script>
import axios from "axios";

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
      form: {
        name: "",
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

      console.log("error", this.form);

      if (!errors.length) {
        axios
          .post("/atoms", this.form)
          .then(() => {
            console.log("success", this.form);

            // Write action
          })
          .catch(() => {
            // Write fallback
          });
      }
    },
  },
  computed: {},
};
</script>
