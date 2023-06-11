const Accordion = {
    initialize() {
      const accordion = document.querySelector(".accordion");
  
      accordion.addEventListener("click", (e) => {
        if (!e.target.closest(".accordion-title")) {
          return;
        }
  
        const accordionTitle = e.target.closest(".accordion-title");
        const accordionContent = accordionTitle.nextElementSibling;
  
        if (accordionTitle.classList.contains("active")) {
          return;
        }
  
        const activeAccordionItem = accordion.querySelector(
          ".accordion-title.active"
        );
  
        if (activeAccordionItem) {
          activeAccordionItem.classList.remove("active");
          activeAccordionItem.nextElementSibling.classList.remove("active");
        }
  
        accordionTitle.classList.add("active");
        accordionContent.classList.add("active");
      });
    },
  };
  
  export default Accordion;
  