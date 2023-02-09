// define variable
var siteNameInput = document.getElementById(`siteName`);
var siteLinkInput = document.getElementById(`siteLink`);
var siteNameArr = [];
// define variable


// Check on local storage
(function () {
  if (localStorage.getItem(`web`) != null) {
    siteNameArr = JSON.parse(localStorage.getItem(`web`));
    displayWebSite(siteNameArr);
  }
})();
// Check on local storage


// Add website
function addWebsite() {
  var webSite = {
    namee: siteNameInput.value,
    url: siteLinkInput.value,
  };
  siteNameArr.push(webSite);
  localStorage.setItem(`web`, JSON.stringify(siteNameArr));
  displayWebSite(siteNameArr);
  clearInput();
}
document.getElementById(`submit`).onclick = function () { addWebsite() };
// Add website


// Desplay website
function displayWebSite(siteNameArr) {
  var box = ``;
  for (var i = 0; i < siteNameArr.length; i++) {
    box += `<tr>
    <td>${i + 1}</td>
    <td>${siteNameArr[i].namee}</td>
    <td><a href="http://${siteNameArr[i].url}" target="_blank" class="btn btn-primary" >Visit</a></td>
    <td><button class="btn btn-danger" onclick="deleteWeb(${i})">Delete</button></td>
  </tr>`
  }
  document.getElementById(`tBody`).innerHTML = box;
}
// Desplay website


// Delete website
function deleteWeb(index) {
  siteNameArr.splice(index, 1);
  localStorage.setItem(`web`, JSON.stringify(siteNameArr));
  displayWebSite(siteNameArr);
}
// Delete website


// Clear inputs
function clearInput() {
  siteNameInput.value = ``;
  siteLinkInput.value = ``;
}
  // Clear inputs
