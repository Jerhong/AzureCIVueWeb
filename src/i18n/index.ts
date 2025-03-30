import resources from "@/i18n/resources/Global.json";

import { createI18n } from "vue-i18n";

const culture = import.meta.env.VITE_Default_Culture;

const i18n = createI18n({
  locale: culture,
  globalInjection: true,
  legacy: false,
  messages: resources,
});

export default i18n;
