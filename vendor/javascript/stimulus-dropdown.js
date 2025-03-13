// stimulus-dropdown@2.1.0 downloaded from https://unpkg.com/stimulus-dropdown@2.1.0/dist/stimulus-dropdown.mjs

import { Controller as e } from "@hotwired/stimulus";
import { useTransition as s } from "stimulus-use";
class i extends e {
  connect() {
    s(this, {
      element: this.menuTarget
    });
  }
  toggle() {
    this.toggleTransition();
  }
  hide(t) {
    !this.element.contains(t.target) && !this.menuTarget.classList.contains("hidden") && this.leave();
  }
}
i.targets = ["menu"];
export {
  i as default
};
