import { uniqueIdGenerator, isEmailValid } from "../helpers.js";
import Popup from "./Popup.js";

const SubscribeForm = {
  initialize() {
    const popup = new Popup(".popup");

    const form = document.querySelector(".first-section-footer-form");
    const input = form.querySelector(".form-input");

    input.addEventListener(
      "input",
      () =>
        form.classList.contains("invalid-form") &&
        form.classList.remove("invalid-form")
    );

    const requestHandler = async (body) => {
      // This condition is needed so that the user can enter certain data to check the error popup
      if (body.email.includes("error")) {
        throw new Error("Request error!");
      }

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: {
            id: body.id,
            email: body.email,
          },
        }
      );

      if (response.ok) {
        return response;
      }

      throw new Error("Request error!");
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const form = e.target;
      const email = input.value;

      if (!isEmailValid(email)) {
        form.classList.add("invalid-form");
        return;
      }

      const formData = {
        id: uniqueIdGenerator(),
        email: email,
      };

      try {
        await requestHandler(formData);
        popup
          .setMessage(
            "SUCCESS!",
            "You have successfully subscribed to the email newsletter"
          )
          .show();
      } catch (error) {
        popup
          .setMessage(
            "ERROR",
            "You don't subscribed to the email newsletter",
            "ERROR"
          )
          .show();
      }

      e.target.reset();
    });
  },
};

export default SubscribeForm;
