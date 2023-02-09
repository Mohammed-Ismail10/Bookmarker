// define variable
var siteNameInput = document.getElementById(`siteName`);
var siteLinkInput = document.getElementById(`siteLink`);
var siteNameArr = [];
// define variable


// Check on local storage
(function () {
  if (localStorage.getItem(`web`) != null) {
    siteNameArr = JSON.parse(localStorage.getItem(`web`));
    displayWebsite(siteNameArr);
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
  displayWebsite(siteNameArr);
  clearInput();
}
document.getElementById(`submitBtn`).onclick = function () { addWebsite() };
// Add website


// Desplay website
function displayWebsite(siteNameArr) {
  var box = ``;
  for (var i = 0; i < siteNameArr.length; i++) {
    box += `<tr>
    <td>${i + 1}</td>
    <td class="fs-5">${siteNameArr[i].namee}</td>
    <td><a href="http://${siteNameArr[i].url}" target="_blank" class="btn btn-success" >Visit</a></td>
    <td><button class="btn btn-primary" onclick="updateSite(${i})">Edit</button></td>
    <td><button class="btn btn-danger" onclick="deleteWebsite(${i})">Delete</button></td>
  </tr>`
  }
  document.getElementById(`tBody`).innerHTML = box;
}
// Desplay website


// Delete website
function deleteWebsite(index) {
  siteNameArr.splice(index, 1);
  localStorage.setItem(`web`, JSON.stringify(siteNameArr));
  displayWebsite(siteNameArr);
}
// Delete website


// Clear inputs
function clearInput() {
  siteNameInput.value = ``;
  siteLinkInput.value = ``;
}
// Clear inputs



// Search about site
function searchSite(word) {
  var resultSearch = []
  for (var i = 0; i < siteNameArr.length; i++) {
    if (siteNameArr[i].namee.toLowerCase().includes(word.toLowerCase()) || siteNameArr[i].url.toLowerCase().includes(word.toLowerCase())) {
      resultSearch.push(siteNameArr[i])
    }
  }
  displayWebsite(resultSearch);
}
// Search about site


// Update site
var currentIndex = 0;
function updateSite(i) {
  currentIndex = i;
  siteNameInput.value = siteNameArr[i].namee;
  siteLinkInput.value = siteNameArr[i].url;
  document.getElementById(`submitBtn`).classList.replace(`d-inline-block`, `d-none`);
  document.getElementById(`updateBtn`).classList.replace(`d-none`, `d-inline-block`);
}

function doneUpdate() {
  siteNameArr[currentIndex].namee = siteNameInput.value;
  siteNameArr[currentIndex].url = siteLinkInput.value;
  localStorage.setItem(`web`, JSON.stringify(siteNameArr));
  displayWebsite(siteNameArr);
  document.getElementById(`submitBtn`).classList.replace(`d-none`, `d-inline-block`);
  document.getElementById(`updateBtn`).classList.replace(`d-inline-block`, `d-none`);
  clearInput();
}
document.getElementById(`updateBtn`).onclick = function () { doneUpdate() };
// Update site