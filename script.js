const gameBoard = (function () {
  const entryFieldsArray = Array.from(
    document.getElementsByClassName("entry_field")
  );
  entryFieldsArray.forEach((entry) => {
    entry.addEventListener("click", () => {});
  });
})();
