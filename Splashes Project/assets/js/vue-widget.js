/* Splashes Project - Vue widget (simple component) */
(function () {
  // Contact page widget (only runs if #contactVue exists)
  const el = document.getElementById("contactVue");
  if (!el) return;

  // eslint-disable-next-line no-undef
  new Vue({
    el: "#contactVue",
    data: {
      topic: "New Customer Inquiries",
      email: "",
      message: ""
    },
    computed: {
      mailtoHref() {
        const subject = encodeURIComponent("Splashes Inquiry: " + this.topic);
        const body = encodeURIComponent(this.message || "");
        // You can replace this with a real contact email if your class allows.
        return `mailto:info@splashes.com?subject=${subject}&body=${body}`;
      }
    }
  });
})();