<template>
  <main>
    <div style="background: #0a192d">
      <AMContainer>
        <AMGrid style="padding: 120px 0" container>
          <AMGrid item md="10" lg="8" xl="6">
            <AMTitle style="color: white" variant="giant" as="h1">Digitale oplossingen die verbinden</AMTitle>
          </AMGrid>
          <AMGrid style="margin-top: 24px" item xs="12">
            <AMText style="color: #00dcb9" variant="introduction">
              Hoogstaande websites en online platforms, klaar voor de volgende
              stap
            </AMText>
          </AMGrid>
          <AMGrid style="margin-top: 24px" item>
            <AMButton href="/sjors" variant="primary" label="Bekijk ons werk" />
          </AMGrid>
        </AMGrid>
      </AMContainer>
    </div>
    <AMContainer>
      <AMGrid style="" container>
        <AMGrid style="
            margin-top: -110px;
            margin-left: auto;
            height: 450px;
            background: lightgray;
            width: 100%;
          " item md="8" />
        <AMGrid style="margin-left: auto" item md="8">
          <AMTitle style="margin-top: 32px" variant="epic" as="h2">Wij helpen ondernemingen de volgende stap te zetten</AMTitle>
          <AMText style="margin-top: 12px" variant="body-light">
            Wij ontwikkelen online platforms die werk uit handen nemen en jouw
            doelgroep verbindt. Maatwerk oplossingen die klaar zijn voor de
            volgende stap voor opdrachtgevers uit het onderwijs, de cultuur en
            zorg. De ontwikkeling vindt plaats aan de hand van onze vier fasen,
            van concept tot oplevering en doorontwikkeling.
          </AMText>
          <AMButton style="margin-top: 24px" href="/sjors" variant="secondary" label="Neem contact op" />
        </AMGrid>
      </AMGrid>
    </AMContainer>
  </main>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";
import AMTitle from "@/components/cores/Title";
import AMText from "@/components/cores/Text";
import AMButton from "@/components/atoms/Button";

export default {
  name: "App",
  components: {
    AMContainer,
    AMGrid,
    AMTitle,
    AMText,
    AMButton,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
