<template>
  <main>
    <div class="bg-primary-navy">
      <AMContainer>
        <AMGrid class="pt-40 pb-64">
          <AMGridItem md="10" lg="8" xl="6">
            <AMTitle class="text-base-white" variant="giant" as="h1">Digitale oplossingen die verbinden</AMTitle>
          </AMGridItem>
          <AMGridItem class="mt-6" xs="12">
            <AMText class="text-primary-slime-light" variant="introduction">
              Hoogstaande websites en online platforms, klaar voor de volgende
              stap
            </AMText>
          </AMGridItem>
          <AMGridItem class="mt-6">
            <AMButton href="/sjors" variant="primary" label="Bekijk ons werk" />
          </AMGridItem>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer class="pb-24">
      <AMGrid>
        <AMGridItem class="w-full ml-auto -mt-64" md="8">
          <div class="bg-base-grey-100" style="padding-bottom: 56%" />
        </AMGridItem>
        <AMGridItem class="ml-auto" md="8">
          <AMTitle class="mt-12 md:max-w-xl text-base-grey-900" variant="epic" as="h2">Wij helpen ondernemingen de volgende stap te zetten</AMTitle>
          <AMText class="mt-6 md:max-w-2xl text-base-grey-900" variant="body-light">
            Wij ontwikkelen online platforms die werk uit handen nemen en jouw
            doelgroep verbindt. Maatwerk oplossingen die klaar zijn voor de
            volgende stap voor opdrachtgevers uit het onderwijs, de cultuur en
            zorg. De ontwikkeling vindt plaats aan de hand van onze vier fasen,
            van concept tot oplevering en doorontwikkeling.
          </AMText>
          <AMButton class="mt-6" href="/sjors" variant="secondary" label="Neem contact op" />
        </AMGridItem>
      </AMGrid>
    </AMContainer>
    <AMContainer maxWidth="xl" class="pb-32">
      <AMGrid class="overflow-hidden rounded-md bg-secondary-mist" :class="[flowOrder(index), spaceBetween(index)]" :key="index" v-for="index in 3">
        <AMGridItem class="p-6 md:p-10" md="6">
          <AMSubtitle class="mb-6 text-primary-slime-light" variant="small" as="h4">CompanyName</AMSubtitle>
          <AMTitle class="mb-4 text-base-grey-900" variant="epic" as="h3">Title {{ index }}</AMTitle>
          <AMText class="mb-4 lg:w-4/5 text-base-grey-900" variant="body-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AMText>
          <AMLink label="Read more about title" href="/" />
        </AMGridItem>
        <AMGridItem md="6" class="flex items-center justify-center bg-base-grey-100" />
      </AMGrid>
      <div class="flex items-center justify-center mt-8">
        <AMButton href="/sjors" variant="secondary" label="Bekijk alle cases" />
      </div>
    </AMContainer>
    <div class="my-24 bg-primary-navy">
      <AMContainer>
        <AMGrid>
          <AMGridItem class="-mt-24" md="6">
            <div class="bg-base-grey-100" style="padding-bottom: 56%" />
          </AMGridItem>
        </AMGrid>
      </AMContainer>
      <AMContainer>
        <AMGrid>
          <AMGridItem class="pt-12 pb-20" md="6">
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
          </AMGridItem>
          <AMGridItem class="relative ml-auto -mt-36" md="4">
            <div class="absolute w-full bg-base-grey-100" style="padding-bottom: 135%" />
          </AMGridItem>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer maxWidth="md" class="py-20 mt-12">
      <AMTitle variant="large" as="h4" class="mb-8">Hoe kunnen wij je helpen?</AMTitle>
      <form @submit.prevent="handleSubmit" novalidate v-if="!loaded">
        <AMGrid spacing="3">
          <AMGridItem class="mb-4" xs="12" md="6">
            <AMInput @error="pushErrors" :validate="trigger" v-model="form.name" type="text" placeholder="Volledige naam" id="form-name" />
          </AMGridItem>
          <AMGridItem class="mb-4" xs="12" md="6">
            <AMInput @error="pushErrors" :validate="trigger" v-model="form.email" type="email" required placeholder="Emailadres" id="form-mail" icon="mail" />
          </AMGridItem>
          <AMGridItem class="mb-4" xs="12">
            <AMInput @error="pushErrors" :validate="trigger" v-model="form.message" type="textarea" required placeholder="Vertel iets over het project" id="form-bericht" />
          </AMGridItem>
          <AMGridItem xs="12" md="12">
            <AMButton type="submit" :loading="loading" variant="primary" label="Verzenden" />
          </AMGridItem>
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
import axios from "axios";

/* eslint-disable vue/no-unused-components */
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";
import AMGridItem from "@/components/cores/GridItem";
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
    AMGridItem,
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
