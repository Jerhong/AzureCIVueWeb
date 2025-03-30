import { AppFullscreen, Dialog, Loading, Notify } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "material-symbols/outlined.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const QPlugins = {
  AppFullscreen,
  Dialog,
  Loading,
  Notify,
};

Notify.registerType("error", {
  timeout: 60000,
  classes: "text-body1 text-bold space-preline",
  color: "red-5",
  icon: "sym_o_error",
  textColor: "white",
  position: "center",
  actions: [{ icon: "close", color: "white", round: true }],
});

Notify.registerType("warning", {
  progress: true,
  timeout: 5000,
  classes: "text-body1 text-bold",
  color: "orange-3",
  icon: "sym_o_warning",
  textColor: "grey-10",
  position: "center",
  actions: [{ icon: "close", color: "grey-10", round: true }],
});

Notify.registerType("success", {
  timeout: 5000,
  classes: "text-body1 text-bold",
  color: "green-3",
  icon: "sym_o_task_alt",
  textColor: "grey-10",
  position: "center",
  actions: [{ icon: "close", color: "grey-10", round: true }],
});

export { QPlugins };
