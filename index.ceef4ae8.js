var t=document.querySelectorAll(".population"),e=0;t.forEach(function(t){var o=parseInt(t.textContent.replace(/,/g,""));e+=o}),document.querySelector(".total-population").textContent=e.toLocaleString();var o=e/t.length;document.querySelector(".average-population").textContent=o.toLocaleString();
//# sourceMappingURL=index.ceef4ae8.js.map
