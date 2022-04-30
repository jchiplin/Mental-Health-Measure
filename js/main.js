//Symptom array
var symptomArray = [];

//Scoring
function scoreQuiz() {
  
  //Depression
  //Q1
  var QOne2Chk = document.getElementById("QOne2").checked;
  var QOne3Chk = document.getElementById("QOne3").checked;
  var QOne4Chk = document.getElementById("QOne4").checked;
  //Q2
  var QTwo2Chk = document.getElementById("QTwo2").checked;
  var QTwo3Chk = document.getElementById("QTwo3").checked;
  var QTwo4Chk = document.getElementById("QTwo4").checked;

  //Anger
  //Q3
  var QThree2Chk = document.getElementById("QThree2").checked;
  var QThree3Chk = document.getElementById("QThree3").checked;
  var QThree4Chk = document.getElementById("QThree4").checked;

  //Mania
  //Q4
  var QFour2Chk = document.getElementById("QFour2").checked;
  var QFour3Chk = document.getElementById("QFour3").checked;
  var QFour4Chk = document.getElementById("QFour4").checked;
  //Q5
  var QFive2Chk = document.getElementById("QFive2").checked;
  var QFive3Chk = document.getElementById("QFive3").checked;
  var QFive4Chk = document.getElementById("QFive4").checked;

  //Anxiety
  //Q6
  var QSix2Chk = document.getElementById("QSix2").checked;
  var QSix3Chk = document.getElementById("QSix3").checked;
  var QSix4Chk = document.getElementById("QSix4").checked;
  //Q7
  var QSeven2Chk = document.getElementById("QSeven2").checked;
  var QSeven3Chk = document.getElementById("QSeven3").checked;
  var QSeven4Chk = document.getElementById("QSeven4").checked;
  //Q8
  var QEight2Chk = document.getElementById("QEight2").checked;
  var QEight3Chk = document.getElementById("QEight3").checked;
  var QEight4Chk = document.getElementById("QEight4").checked;

  //Somatic Symptoms
  //Q9
  var QNine2Chk = document.getElementById("QNine2").checked;
  var QNine3Chk = document.getElementById("QNine3").checked;
  var QNine4Chk = document.getElementById("QNine4").checked;
  //Q10
  var QTen2Chk = document.getElementById("QTen2").checked;
  var QTen3Chk = document.getElementById("QTen3").checked;
  var QTen4Chk = document.getElementById("QTen4").checked;
  
  //Suicidal Ideation
  //Q11
  var QEleven1Chk = document.getElementById("QEleven1").checked;
  var QEleven2Chk = document.getElementById("QEleven2").checked;
  var QEleven3Chk = document.getElementById("QEleven3").checked;
  var QEleven4Chk = document.getElementById("QEleven4").checked;

  //Psychosis
  //Q12
  var QTwelve1Chk = document.getElementById("QTwelve1").checked;
  var QTwelve2Chk = document.getElementById("QTwelve2").checked;
  var QTwelve3Chk = document.getElementById("QTwelve3").checked;
  var QTwelve4Chk = document.getElementById("QTwelve4").checked;
  //Q13
  var QThirteen1Chk = document.getElementById("QThirteen1").checked;
  var QThirteen2Chk = document.getElementById("QThirteen2").checked;
  var QThirteen3Chk = document.getElementById("QThirteen3").checked;
  var QThirteen4Chk = document.getElementById("QThirteen4").checked;

  //Sleep Problems
  //Q14
  var QFourteen2Chk = document.getElementById("QFourteen2").checked;
  var QFourteen3Chk = document.getElementById("QFourteen3").checked;
  var QFourteen4Chk = document.getElementById("QFourteen4").checked;

  //Memory Problems
  //Q15
  var QFifteen2Chk = document.getElementById("QFifteen2").checked;
  var QFifteen3Chk = document.getElementById("QFifteen3").checked;
  var QFifteen4Chk = document.getElementById("QFifteen4").checked;

  //Repetitive Thoughts and Behaviors
  //Q16
  var QSixteen2Chk = document.getElementById("QSixteen2").checked;
  var QSixteen3Chk = document.getElementById("QSixteen3").checked;
  var QSixteen4Chk = document.getElementById("QSixteen4").checked;
  //Q17
  var QSeventeen2Chk = document.getElementById("QSeventeen2").checked;
  var QSeventeen3Chk = document.getElementById("QSeventeen3").checked;
  var QSeventeen4Chk = document.getElementById("QSeventeen4").checked;

  //Dissociation
  //Q18
  var QEighteen2Chk = document.getElementById("QEighteen2").checked;
  var QEighteen3Chk = document.getElementById("QEighteen3").checked;
  var QEighteen4Chk = document.getElementById("QEighteen4").checked;

  //Personality Functioning Problems
  //Q19
  var QNineteen2Chk = document.getElementById("QNineteen2").checked;
  var QNineteen3Chk = document.getElementById("QNineteen3").checked;
  var QNineteen4Chk = document.getElementById("QNineteen4").checked;
  //Q20
  var QTwenty2Chk = document.getElementById("QTwenty2").checked;
  var QTwenty3Chk = document.getElementById("QTwenty3").checked;
  var QTwenty4Chk = document.getElementById("QTwenty4").checked;

  //Substance Use Problems
  //Q21
  var QTwentyOne1Chk = document.getElementById("QTwentyOne1").checked;
  var QTwentyOne2Chk = document.getElementById("QTwentyOne2").checked;
  var QTwentyOne3Chk = document.getElementById("QTwentyOne3").checked;
  var QTwentyOne4Chk = document.getElementById("QTwentyOne4").checked;
  //Q22
  var QTwentyTwo1Chk = document.getElementById("QTwentyTwo1").checked;
  var QTwentyTwo2Chk = document.getElementById("QTwentyTwo2").checked;
  var QTwentyTwo3Chk = document.getElementById("QTwentyTwo3").checked;
  var QTwentyTwo4Chk = document.getElementById("QTwentyTwo4").checked;
  //Q23
  var QTwentyThree1Chk = document.getElementById("QTwentyThree1").checked;
  var QTwentyThree2Chk = document.getElementById("QTwentyThree2").checked;
  var QTwentyThree3Chk = document.getElementById("QTwentyThree3").checked;
  var QTwentyThree4Chk = document.getElementById("QTwentyThree4").checked;

  
  
  //Depression Symptom
  if (QOne2Chk || QOne3Chk || QOne4Chk || QTwo2Chk || QTwo3Chk || QTwo4Chk) {
    symptomArray.push("Depression");
    console.log("Depression");
  }
  //Anger Symptom
  if (QThree2Chk || QThree3Chk || QThree4Chk) {
    symptomArray.push("Anger");
    console.log("Anger");
  }
  //Mania Symptom
  if (QFour2Chk || QFour3Chk || QFour4Chk || QFive2Chk || QFive3Chk || QFive4Chk) {
    symptomArray.push("Mania");
    console.log("Mania");
  }
  //Anxiety Symptom
  if (QSix2Chk || QSix3Chk || QSix4Chk || QSeven2Chk || QSeven3Chk || QSeven4Chk || QEight2Chk || QEight3Chk || QEight4Chk) {
    symptomArray.push("Anxiety");
    console.log("Anxiety");
  }
  //Somatic Symptoms Symptom
  if (QNine2Chk || QNine3Chk || QNine4Chk || QTen2Chk || QTen3Chk || QTen4Chk) {
    symptomArray.push("Somatic Symptoms");
    console.log("Somatic Symptoms");
  }
  //Suicidal Ideation Symptom
  if (QEleven1Chk || QEleven2Chk || QEleven3Chk || QEleven4Chk) {
    symptomArray.push("Suicidal Ideation");
    console.log("Suicidal Ideation");
  }
  //Psychosis Symptom
  if (QTwelve1Chk || QTwelve2Chk || QTwelve3Chk || QTwelve4Chk || QThirteen1Chk || QThirteen2Chk || QThirteen3Chk || QThirteen4Chk) {
    symptomArray.push("Psychosis");
    console.log("Psychosis");
  }
  //Sleep Problems Symptom
  if (QFourteen2Chk || QFourteen3Chk || QFourteen4Chk) {
    symptomArray.push("Sleep Problems");
    console.log("Sleep Problems");
  }
  //Memory Problems Symptom
  if (QFifteen2Chk || QFifteen3Chk || QFifteen4Chk) {
    symptomArray.push("Memory Problems");
    console.log("Memory Problems");
  }
  //Repetitive Thoughts and Behaviors Symptom
  if (QSixteen2Chk || QSixteen3Chk || QSixteen4Chk || QSeventeen2Chk || QSeventeen3Chk || QSeventeen4Chk) {
    symptomArray.push("Repetitive Thoughts and Behaviors");
    console.log("Repetitive Thoughts and Behaviors");
  }
  //Dissociation Symptom
  if (QEighteen2Chk || QEighteen3Chk || QEighteen4Chk) {
    symptomArray.push("Dissociation");
    console.log("Dissociation");
  }
  //Personality Functioning Problems Symptom
  if (QNineteen2Chk || QNineteen3Chk || QNineteen4Chk || QTwenty2Chk || QTwenty3Chk || QTwenty4Chk) {
    symptomArray.push("Personality Functioning Problems");
    console.log("Personality Functioning Problems");
  }
  //Substance Use Problems Symptom
  if (QTwentyOne1Chk || QTwentyOne2Chk || QTwentyOne3Chk || QTwentyOne4Chk || QTwentyTwo1Chk || QTwentyTwo2Chk || QTwentyTwo3Chk || QTwentyTwo4Chk || QTwentyThree1Chk || QTwentyThree2Chk || QTwentyThree3Chk || QTwentyThree4Chk) {
    symptomArray.push("Substance Use Problems");
    console.log("Substance Use Problems");
  }

  
  //printing symptoms
  for (var i = 0; i < symptomArray.length; i++) {
    var prgrph = document.createElement("p");
    var symptom = document.createTextNode(symptomArray[i]);
    prgrph.appendChild(symptom);
    var idToPut = document.getElementById("symptoms");
    idToPut.appendChild(prgrph);
  }
  //if no symptoms
  if (symptomArray.length == 0) {
    var prgrph2 = document.createElement("p");
    var symptom2 = document.createTextNode("No symptoms measured by this questionnaire. If you are concerned with your mental health and want more information, click the resources button to see more.");
    prgrph2.appendChild(symptom2);
    var idToPut2 = document.getElementById("symptoms");
    idToPut2.appendChild(prgrph2);
  }
  //print resources button
  //add a button like the else branch above
  
  var resourcesBtn = document.createElement("button");
  var btnText = document.createTextNode("Resources");
  resourcesBtn.appendChild(btnText);
  resourcesBtn.className = "btn btn-lg btn-secondary";
  var btnToPut = document.getElementById("resourcesButton");
  btnToPut.onclick = function () {
    location.href = "resources.html";
  }
  btnToPut.appendChild(resourcesBtn);
}

/*
Referenced:
https://www.w3schools.com/js/js_htmldom_elements.asp and https://css-tricks.com/why-javascript-is-eating-html/
https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/#:~:text=Use%20document.,otherwise%20check%20the%20next%20statement.
https://www.codegrepper.com/code-examples/javascript/javascript+add+%3Cp%3E+tag+to+a+div
https://stackoverflow.com/questions/45587843/adding-a-p-element-inside-a-div-with-javascript
https://www.codegrepper.com/code-examples/html/how+to+link+button+to+another+page+in+javascript
https://sebhastian.com/javascript-create-button/
https://www.codegrepper.com/code-examples/javascript/javascript+prevent+double+click+on+button
https://stackoverflow.com/questions/16349490/html-css-buttons-that-scroll-down-to-different-div-sections-on-a-webpage
*/
