/* FAQ */
const faq = document.querySelector("#faq");
const faqList = faq.querySelectorAll(".card");

faqList.forEach((item) => initFaqAccordion(item));

function initFaqAccordion(item) {
  const header = item.querySelector("h6");
  const content = item.querySelector(".card_content");

  header.onclick = (e) => toggleFaqItem(header, content);
}

function toggleFaqItem(header, content) {
  if (content.classList.contains("card__collapse")) {
    header.classList.add("card__active");
    content.classList.remove("card__collapse");
    content.style.height = `${content.scrollHeight}px`;
  } else {
    content.classList.add("card__collapse");
    header.classList.remove("card__active");
    content.style = undefined;
  }
}
