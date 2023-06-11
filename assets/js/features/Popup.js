class Popup {
    /**
     *
     * @param {string|HTMLElement} popup
     */
    constructor(popup) {
      this.popup =
        typeof popup === "string" ? document.querySelector(popup) : popup;
      this.hide = this.hide.bind(this);
      this.popup.addEventListener("click", (e) => this.hide(e));
    }
  
    hide(e = null) {
      if (!e) {
        this.popup.classList.remove("active");
      }
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("close-popup-btn")
      ) {
        this.popup.classList.remove("active");
        document.body.classList.remove("freeze");
      }
    }
  
    show() {
      this.popup.classList.add("active");
      document.body.classList.add("freeze");
    }
  
    setMessage(title, message, type = "SUCCESS") {
      switch (type) {
        case "SUCCESS": {
          this.popup.querySelector(".popup-result-message").textContent = title;
          this.popup.querySelector(".popup-text").textContent = message;
          break;
        }
        case "ERROR":
        default: {
          this.popup.querySelector(".popup-result-message").textContent = title;
          this.popup.querySelector(".popup-text").textContent = message;
        }
      }
      return this;
    }
  }
  
  export default Popup;
  