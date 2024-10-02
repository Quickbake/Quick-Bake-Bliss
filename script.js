function recipe1() {
  var recipe1 = document.getElementById("recipe1");
  recipe1.style.display = (recipe1.style.display !== 'block') ? 'block' : 'none';
}

function recipe2() {
  var recipe2 = document.getElementById("recipe2");
  recipe2.style.display = (recipe2.style.display !== 'block') ? 'block' : 'none';
}

function recipe3() {
  var recipe3 = document.getElementById("recipe3");
  recipe3.style.display = (recipe3.style.display !== 'block') ? 'block' : 'none';
}

function recipe4() {
  var recipe4 = document.getElementById("recipe4");
  recipe4.style.display = (recipe4.style.display !== 'block') ? 'block' : 'none';
}

function recipe5() {
  var recipe5 = document.getElementById("recipe5");
  recipe5.style.display = (recipe5.style.display !== 'block') ? 'block' : 'none';
}

function recipe6() {
  var recipe6 = document.getElementById("recipe6");
  recipe6.style.display = (recipe6.style.display !== 'block') ? 'block' : 'none';
}

function recipe7() {
  var recipe7 = document.getElementById("recipe7");
  recipe7.style.display = (recipe7.style.display !== 'block') ? 'block' : 'none';
}

function recipe8() {
  var recipe8 = document.getElementById("recipe8");
  recipe8.style.display = (recipe8.style.display !== 'block') ? 'block' : 'none';
}

function recipe9() {
  var recipe9 = document.getElementById("recipe9");
  recipe9.style.display = (recipe9.style.display !== 'block') ? 'block' : 'none';
}

function recipe10() {
  var recipe10 = document.getElementById("recipe10");
  recipe10.style.display = (recipe10.style.display !== 'block') ? 'block' : 'none';
}

function recipe11() {
  var recipe11 = document.getElementById("recipe11");
  recipe11.style.display = (recipe11.style.display !== 'block') ? 'block' : 'none';
}

function recipe12() {
  var recipe12 = document.getElementById("recipe12");
  recipe12.style.display = (recipe12.style.display !== 'block') ? 'block' : 'none';
}

function showTips() {
  var tipsContainer = document.getElementById("tips-container");
  tipsContainer.style.display = (tipsContainer.style.display !== 'block') ? 'block' : 'none';
}

function printRecipe1() {
  var printContent = document.getElementById("recipe1");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe2() {
  var printContent = document.getElementById("recipe2");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe3() {
  var printContent = document.getElementById("recipe3");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe4() {
  var printContent = document.getElementById("recipe4");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe5() {
  var printContent = document.getElementById("recipe5");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe6() {
  var printContent = document.getElementById("recipe6");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe7() {
  var printContent = document.getElementById("recipe7");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe8() {
  var printContent = document.getElementById("recipe8");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe9() {
  var printContent = document.getElementById("recipe9");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe10() {
  var printContent = document.getElementById("recipe10");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe11() {
  var printContent = document.getElementById("recipe11");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}
function printRecipe12() {
  var printContent = document.getElementById("recipe12");
  var originalBodyContent = document.body.innerHTML;

  document.body.innerHTML = printContent.outerHTML;
  window.print();

  document.body.innerHTML = originalBodyContent;
}


function printall() {
  var recipes = document.querySelectorAll('.recipe');
  var printContent = '';

  recipes.forEach(function(recipe) {
      recipe.style.display = 'block';  
      printContent += recipe.outerHTML;
  });

  var originalBodyContent = document.body.innerHTML;
  document.body.innerHTML = printContent;
  window.print();

  document.body.innerHTML = originalBodyContent;

  closeAllRecipes();  
}

function closeAllRecipes() {
  var recipes = document.querySelectorAll('.recipe');
  recipes.forEach(function(recipe) {
      recipe.style.display = 'none';
  });
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

