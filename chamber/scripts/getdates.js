function getDates() {
  var date = new Date();
  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let year = date.getFullYear();
  document.getElementById("currentyear").innerHTML = `&copy;${year}`;
  document.getElementById("lastModified").innerHTML = date.toLocaleDateString(
    "en-US",
    dateOptions
  );
}
getDates();

