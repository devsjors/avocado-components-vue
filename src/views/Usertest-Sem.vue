<template>
  <div style="margin: 100px">
    <div>
      <p>Hallo Sem,</p>
      <p>
        Tijdens deze User Test wil ik erachter komen of het jou lukt om het
        Thema van een Button te maken en deze Button te renderen.
        <span style="display: block; margin: 12px 0; font-weight: 700">BELANGRIJK! Je mag/moet de Storybook documentatie gebruiken</span>
        <a href="https://storybook-avocado-components-vue.netlify.app/" target="_blank">Component Library / Documentatie</a>
      </p>
      <p>Dit gaan we doen in een aantal stappen:</p>
      <ol>
        <li>Definiëren van de benodigde Cores</li>
        <li>Deze cores toepassen op de Button in het thema</li>
        <li>Deze Button renderen met verschillende props</li>
        <li>
          Bespreken wat er wel en niet goed ging en hoe dat eventueel kan worden
          opgelost
        </li>
      </ol>
    </div>
    <div>
      <p style="margin-bottom: 20px">Het uiteindelijk resultaat:</p>
      <button class="result-button">Button</button>
      <ul>
        <li>Blauw: #b3fffc</li>
        <li>Roze: #fb62f6</li>
        <li>Wit: #ffffff</li>
        <li>Zwart: #000000</li>
        <li>Padding: 12px 24px</li>
        <li>textTransform: uppercase</li>
        <li>fontSize desktop: 14px</li>
        <li>fontSize mobile: 14px</li>
        <li>fontWeight desktop: 700</li>
        <li>fontWeight mobile: 700</li>
        <li>lineHeight desktop: 24px</li>
        <li>lineHeight mobile: 24px</li>
      </ul>
    </div>

    <!-- desktop: {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "24px",
    },
    mobile: {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "24px",
    }, -->

    <div style="margin: 80px 0">
      <p>Stap 1: Definiëren van de benodigde cores</p>
      <ol>
        <li>Colors</li>
        <li>Typography</li>
        <li>Spacings</li>
      </ol>
      <p style="font-weight: 700">
        Ik heb de folder voor het Thema aangemaakt: src / theme / userTestSem
      </p>
    </div>

    <div style="margin: 80px 0">
      <p>Stap 2: Cores toepassen op de Button</p>
    </div>

    <div style="margin: 80px 0">
      <p style="margin-bottom: 24px">
        Stap 3: Drie verschillende buttons renderen
      </p>
      <div style="display: flex; gap: 32px">
        <div>
          <!-- Een primaire button met een mail-icon aan de rechterzijde -->
        </div>
        <div>
          <!-- Een primaire button met een mail-icon aan de linkerzijde die disabled is -->
        </div>
        <div>
          <!-- Een primare button die aan het laden is -->
        </div>
      </div>
    </div>

    <div style="margin: 80px 0">
      <p>
        Stap 4: Wat ging er goed, wat kon beter, waar loop je nog tegen aan?
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import AMButton from "@/components/atoms/Button";

export default {
  name: "Home",
  components: {
    AMButton,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.result-button {
  border: none;
  padding: 12px 24px;
  background: #b3fffc;
  color: black;
  transition: color 0.15s, background 0.15s;
  font-weight: 700;
  text-transform: uppercase;
}
.result-button:hover {
  background: #fb62f6;
  color: white;
}
</style>
