/* +++++++++++++++++++++ custom cursor +++++++++++++++++++++ */
const sitebody = document.documentElement;
sitebody.addEventListener("mousedown", () => {
  sitebody.classList.add("clc");
});
sitebody.addEventListener("mouseup", () => {
  sitebody.classList.remove("clc");
});
/* +++++++++++++++++ end of custom cursor +++++++++++++++++ */
