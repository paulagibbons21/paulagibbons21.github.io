/* .js files add interaction to your website */

// fact list for fact generator

var factList = [
  "People of color (underrepresented minorities)  are only earning 24% of the degrees awarded in computing as of 2017 and only 16% of the degrees awarded in engineering. -Vital Signs", //0

  "In 2019, only 4% of fourth-grade students had a teacher who had an undergraduate degree in mathematics. -Vital Signs",  //1

  "In 2019, 31% of eighth-grade students had a teacher who had an undergraduate degree in mathematics. In the same year, 48% had a teacher who had an undergraduate degree in science with those percentages being lower for underrepresented minority students. -Vital Signs",//2

  "According to the Community for Advancing Discovery Research in Education, “the persistent image of STEM learners, majors, and professionals as White males, which often leads to practices in K-12 education that limit participation and are at odds with the goals of diversity and inclusion.”",//3

  "According to the Community for Advancing Discovery Research in Education there are, “policies that separate English learners and students with disabilities from regular classrooms, and that track students into courses that do not prepare them for advanced mathematics or for some K–12 science and engineering courses.”", //4

  "In 2017–2018, women of color earned a small percentage (14.1%) of bachelor’s degrees across all STEM fields with Asian women earning 5.3%,  Black women 2.9%,  Latinas 4.3%, and American Indian/Alaska Native women  0.1%. -Catalyst.org" //5

]

/* variables for the fact text, button, and to track the count*/

var fact = document.getElementById("fact");

var factBtn = document.getElementById("factBtn");

var count = 0;

/*conditional to listen for a click only if the fact button exists. Just in case the DOM didn't load properly*/


if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

//function to display the facts

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }


}
