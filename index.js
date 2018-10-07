let questionNum = 0

let score = {
  points: 0,
  rank: function() {
    //returns officer rank, as determined by current points:
    const rankOrder = ["Crewman", "Petty Officer", "Petty Officer", "Chief Petty Officer", "Ensign", "Lt. Junior Grade", "Lieutenant", "Lt. Commander", "Commander", "Captain", "Admiral"]
    return rankOrder[this.points].toUpperCase()
  },
  pipsImg: function() {
    //returns formatted collar pips image, as determined by current points:
    const pips = ["None", "None", "None", "Tng_chief.png", "Tng_ensign.png", "Tng_ltjg.png", "Tng_lt.png", "Tng_ltcmdr.png", "Tng_cmdr.png", "Tng_capt.png", "Tng_adm.png"]
      if (this.points > 2) {
        return `<img src="./img/${pips[this.points]}" alt="Picture of rank collar pips" class="pips-img">`
      } else {
        return "" 
      }
  },
  crewImg: function() {
    //returns formatted rank image for final score, as determined by current points:
    const crew = [
      { scoreValue: 0, rankImg: "UFP_logo.svg", altText: "Logo for the United Federation of Planets." },
      { scoreValue: 1, rankImg: "UFP_logo.svg", altText: "Logo for the United Federation of Planets." },
      { scoreValue: 2, rankImg: "UFP_logo.svg", altText: "Logo for the United Federation of Planets." },
      { scoreValue: 3, rankImg: "obrien-chiefp.jpg", altText: "Chief Petty Officer Miles O'Brien" },
      { scoreValue: 4, rankImg: "ensign.jpg", altText: "A female Starfleet Ensign." },
      { scoreValue: 5, rankImg: "geordi-ltjunior.jpg", altText: "Geordi LaForge, Lt. Junior Grade." },
      { scoreValue: 6, rankImg: "yar-lieutenant.jpg", altText: "Lieutenant Natasha Yar, Chief of Security aboard the Enterprise." },
      { scoreValue: 7, rankImg: "data-ltcommander.jpg", altText: "Lieutenant Commander Data." },
      { scoreValue: 8, rankImg: "beverly-commander.jpg", altText: "Commander Beverly C. Crusher, MD." },
      { scoreValue: 9, rankImg: "picard-captain.jpg", altText: "Captain Jean-Luc Picard." },
      { scoreValue: 10, rankImg: "nakamura-admiral.jpg", altText: "Admiral Tujiro Nakamura." }
    ]
    return `<div class="score-box">
      <div class="sb-bracket lcars-bracket top hollow">
        <div class="sb-content"></div>  
      </div>&nbsp&nbsp
        <div class="sb-bracket lcars-bracket bottom hollow"></div>
    </div>
      <div class="img-box">
        <img src="./img/${crew[this.points].rankImg}" alt="${crew[this.points].altText}" class="image"></div>
    </div>`
  }
}

function formatQuestion() {
  //Returns formatted questions (and answer buttons):
  return `<div class="question-number-answer">
      <h1 class="question-number">QUESTION ${questionNum+1}/10</h1>
    </div>
    <form class="question-box">
      <fieldset>
        <legend class="question">${questions[questionNum].question.toUpperCase()}</legend>
        <div class="lcars-column">
          <button type="button" class="button-answer lcars-element button lcars-u-2-1-dr rounded" value="0">${questions[questionNum].answers[0].toUpperCase()}</button>
          <button type="button" class="button-answer lcars-element button lcars-u-2-1-dr rounded" value="1">${questions[questionNum].answers[1].toUpperCase()}</button>
          <button type="button" class="button-answer lcars-element button lcars-u-2-1-dr rounded" value="2">${questions[questionNum].answers[2].toUpperCase()}</button>
          <button type="button" class="button-answer lcars-element button lcars-u-2-1-dr rounded" value="3">${questions[questionNum].answers[3].toUpperCase()}</button>
        </div>
      </fieldset>
    </form>`
}

function formatAnswer() {
  //Returns formatted answers:
  return `<div class="question-number-answer">
      <h1 class="question-number">QUESTION ${questionNum+1}/10</h1>
      <div class="answer-type"></div>
    </div>
    <p class="answer">${questions[questionNum].answerTxt.toUpperCase()}</p>
    <form class="question-box">
    </form>`
}

function formatImage(which) {
  //Returns formatted image for either a "question" or an "answer", (specified by argument):
  if (which === "question") {
    return `<div class="score-box">
      <div class="sb-bracket lcars-bracket top hollow">
        <div class="sb-content"></div>  
      </div>&nbsp
        <div class="sb-bracket lcars-bracket bottom hollow"></div>
    </div>
      <div class="img-box">
      <img src="./img/${questions[questionNum].questionImg}" alt="${questions[questionNum].questionAlt}" class="image"></div>
    </div>`
  } 
  if (which === "answer") {
    return `<div class="score-box">
      <div class="sb-bracket lcars-bracket top hollow">
        <div class="sb-content"></div>  
      </div>&nbsp&nbsp
        <div class="sb-bracket lcars-bracket bottom hollow"></div>
    </div>
      <div class="img-box">
      <img src="./img/${questions[questionNum].answerImg}" alt="${questions[questionNum].answerAlt}" class="image"></div>
    </div>`
  }
}

function handleUserNav() {
  // When user clicks START or RESTART button:
  $('.exam-container').on('click', '.button-start, .button-restart', function(event) {
    questionNum = 0
    score.points = 0
    renderNewQuestion()  
  })
  // When user clicks NEXT button:
  $('.exam-container').on('click', '.button-next', function(event) {
    questionNum++
    renderNewQuestion()  
  })
  // When user clicks RESULTS button:
  $('.exam-container').on('click', '.button-results', function(event) {
    renderFinalScore()  
  })
}

function handleUserAnswers() {
  //When user clicks on answer-button inside .exam-container:
  $('.exam-container').on('click', '.button-answer', function(event) {
    if ($(this).val() === questions[questionNum].correctAnswerIndex) {
      score.points++
      renderAnswer("correct")
    } else {
      renderAnswer("incorrect")
    }
  })   
}

function renderNewQuestion() {
  //Render new question and answer-form to .exam-container:
  $('.exam-container').html(formatQuestion())
  //Render new image to .image-container:
  $('.image-container').html(formatImage("question"))
  //Render current score, rank, and pips to .sb-content:
  $('.sb-content').html(`<p class="score">SCORE ${score.points}/10</p><p class="rank">\xa0 RANK: ${score.rank()}</p><p class="score-pips">${score.pipsImg()}</p>`) 
}

function renderAnswer(answer) {
  //Render correct answer to .exam-container:
  $('.exam-container').html(formatAnswer())
  //Render new image to .image-container:
  $('.image-container').html(formatImage("answer"))
  //Render current score, rank, and pips to .sb-content:
  $('.sb-content').html(`<p class="score">SCORE ${score.points}/10</p><p class="rank">\xa0 RANK: ${score.rank()}</p><p class="score-pips">${score.pipsImg()}</p>`)
  //Render CORRECT or INCORRECT message:
  if (answer === "correct") {
    $('.answer-type').html('<h2 class="correct fade_in" style="display:none">CORRECT</h2>')
    fadeIn()
  } else {
    $('.answer-type').html('<h2 class="incorrect blink_me" style="display:none">INCORRECT</h2>')
    blink()
  }
  //Render NEXT button if more questions available, else render RESULTS button:
  if (questionNum < 9) {
    $('.question-box').html('<button type="button" class="button-next lcars-element button rounded">NEXT</button>')
  } else {
    $('.question-box').html('<button type="button" class="button-results lcars-element button rounded">RESULTS</button>')
  }
}

function renderFinalScore() {
  //Render RESTART button and congratulatory message:
  if (score.points <= 2) {
    $('.exam-container').html(`<h2 class="congrats">YOU SCORED ${score.points} OUT OF 10 POINTS<br><br>
      YOU HAVE ATTAINED THE RANK OF STARFLEET ${score.rank()}</h2>
      <form class="question-box">
      <button type="button" class="button-restart lcars-element button rounded">RESTART</button>
      </form>`)
  } else {
    $('.exam-container').html(`<h2 class="congrats">CONGRATULATIONS!<br>
      YOU SCORED ${score.points} OUT OF 10 POINTS<br><br>
      YOU HAVE ATTAINED THE RANK OF STARFLEET ${score.rank()}</h2>
      <form class="question-box">
      <button type="button" class="button-restart lcars-element button rounded">RESTART</button>
      </form>`)
  }
  // Render new image to .image-container
  $('.image-container').html(`${score.crewImg()}`)
  //Render current score, rank, and pips to .sb-content:
  $('.sb-content').html(`<p class"score"=>SCORE ${score.points}/10</p><p class="rank">\xa0 RANK: ${score.rank()}</p><p class="score-pips">${score.pipsImg()}</p>`)
}


function blink() { 
  //Blinks any text with the .blink-me element. Please note: jQuery
  //doesn't recognize dynamically-generated elements in the DOM.
  //You must call this function AFTER the target element has been 
  //generated.  
  $('.blink_me').fadeIn(600).fadeOut(600, blink)
}

function fadeIn() {
  //Fades in an element whose initial style="display:none". Please note:
  //jQuery doesn't recognize dynamically-generated elements in the DOM.
  //You must call this function AFTER the target element has been 
  //generated.  
  $('.fade_in').fadeIn(1400)
}


$(function() {
  handleUserNav()
  handleUserAnswers()  
})

