import { Application } from "@hotwired/stimulus"
import Dropdown from "stimulus-dropdown"
import "@hotwired/turbo-rails"
import "controllers"
import "lib/flash"

const application = Application.start()
application.register("dropdown", Dropdown)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
