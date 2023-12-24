const formInputs = document
  .querySelector(".cta-form")
  .querySelectorAll("input");

const handleClick = (e) => {
  const label = e.target.parentNode.querySelector("label");
  console.log(e.target.parentNode);
  console.log(label);

  label.style.transform = "translate(0,-50%)";
  label.style.top = "0";
};

formInputs.forEach((input) => input.addEventListener("click", handleClick));
