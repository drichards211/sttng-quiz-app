const questions = [
  {
    arrItem: 0, /* The "arrItem" keys aren't actually needed. They're here for human convenience. */
    question: "In \"The Arsenal Of Freedom,\" a newer, better war machine appears every _____ minutes to attack the away team.",
    answers: ["15", "12", "20", "22"], 
    correctAnswerIndex: "1",
    answerTxt: "The machines are released at intervals of precisely <span class='inline-answer'>12</span> minutes. They learn from each encounter and improve themselves; the perfect killing system.",
    questionImg: "arsenal-question.jpg",
    questionAlt: "An EP607 war machine fires its deadly energy weapon.",
    answerImg: "arsenal-answer.jpg",
    answerAlt: "Lt. Yar and Commander Data coordinate their phaser fire against the EP607."
  },
  {
    arrItem: 1,
    question: "In \"Q Who\", newly-arrived Ensign Sonya Gomez spills a cup of _________ on Captain Picard.",
    answers: ["Hot chocolate", "Tellarian tea", "Prune juice", "Papalla juice"],
    correctAnswerIndex: "0",
    answerTxt: "Ensign Gomez is mortified after spilling her cup of <span class='inline-answer'>hot chocolate</span> all over Captain Picard.",
    questionImg: "gomez-question.jpg",
    questionAlt: "Ensign Sonya Gomez talks to Commander Geordi LaForge in Engineering.",
    answerImg: "gomez-answer.jpg",
    answerAlt: "Captain Picard is not amused at being splashed with hot chocolate."
  },
  {
    arrItem: 2,
    question: "What is Dr. Pulaski\'s first name?",
    answers: ["Carol", "Mary", "Katherine", "Claire"],
    correctAnswerIndex: "2",
    answerTxt: "Commander <span class='inline-answer'>Katherine</span> Pulaski, MD, served as Chief Medical Officer aboard the USS Enterprise-D in the year 2365",
    questionImg: "pulaski-question.jpg",
    questionAlt: "Dr. Pulaski stands at the Science Station on the Bridge.",
    answerImg: "pulaski-answer.jpg",
    answerAlt: "A close-up of the smiling Katherine Pulaski."
  },
  {
    arrItem: 3,
    question: "Two characters named One Zero and Zero One are members of the ________ race.",
    answers: ["Antican", "Benzite", "Pacifican", "Bynar"],
    correctAnswerIndex: "3",
    answerTxt: "In 2364, Starfleet employed the <span class='inline-answer'>Bynars</span> to perform computer upgrades to the USS Enterprise-D.",
    questionImg: "bynars-question.jpg",
    questionAlt: "Four members of the Bynar race stand together on the Bridge.",
    answerImg: "bynars-answer.jpg",
    answerAlt: "Two Bynars are working together in Engineering."
  },
  {
    arrItem: 4,
    question: "In which episode does Data say, \"A joke is an antic, a caper, mischief, prank, quip, whitticism...\"?",
    answers: ["Elementary, Dear Data", "The Outrageous Okona", "Eye of the Beholder", "Lessons"],
    correctAnswerIndex: "1",
    answerTxt: "In the episode, <span class='inline-answer'>\"The Outrageous Okona,\"</span> Data employs the help of a holographic comic to learn more about humor.",
    questionImg: "datacomic-question.jpg",
    questionAlt: "Data seeks Guinan's advice in the Ten Forward lounge.",
    answerImg: "datacomic-answer.jpg",
    answerAlt: "Data, holding a cigar, performs a stand-up routine inside the Holodeck."
  },
  {
    arrItem: 5,
    question: "In which episode is Geordi LaForge trapped in a pit with a Romulan on the planet of Galorndan Core?",
    answers: ["The Enemy", "Evolution", "The Vengeance Factor", "The Survivors"],
    correctAnswerIndex: "0",
    answerTxt: "In order to escape fierce electrical storms, LaForge sets aside his natural distrust of Centurion Bochra in the episode, <span class='inline-answer'>\"The Enemy.\"</span>",
    questionImg: "romulan-question.jpg",
    questionAlt: "Geordi Laforge is being held captive by the wounded Centurion Bochra.",
    answerImg: "romulan-answer.jpg",
    answerAlt: "Geordi and Bochra, safely aboard the Enterprise, share a moment of camaraderie."
  },
  {
    arrItem: 6,
    question: "Where does Guinan work?",
    answers: ["Ten Forward", "Starbase 515", "Sickbay", "Ten Backward"],
    correctAnswerIndex: "0",
    answerTxt: "Guinan tends the bar in the <span class='inline-answer'>Ten Forward</span> lounge, located on Deck 10, forward section 1.",
    questionImg: "guinan-question.jpg",
    questionAlt: "A closeup of the enigmatic Guinan; she's wearing a bright, yellow hat.",
    answerImg: "guinan-answer.jpg",
    answerAlt: "Guinan, smiling with a crewmember, tends the bar at the Ten Forward lounge."
  },
  {
    arrItem: 7,
    question: "In \"The Naked Now,\" who carries the infection back to the Enterprise from the away team?",
    answers: ["William Riker", "Data", "Tasha Yar", "Geordi LaForge"],
    correctAnswerIndex: "3",
    answerTxt: "<span class='inline-answer'>Geordi LaForge</span> contracted the infection from a frozen crewmember aboard the SS Tsiolkovsky.",
    questionImg: "infection-question.jpg",
    questionAlt: "The SS Tsiolkovsky is about to be destroyed by a massive star-fragment.",
    answerImg: "infection-answer.jpg",
    answerAlt: "Geordi LaForge is holding the frozen body of one of the Tsiolkovsky's crewmembers."
  },
  {
    arrItem: 8,
    question: "Which episode contains the line: \"Hold where you are, Klag. I have relieved Kargan. I am now your captain!\"?",
    answers: ["Code Of Honor", "A Matter Of Honor", "Heart of Glory", "Measure Of A Man"],
    correctAnswerIndex: "1",
    answerTxt: "In the episode, <span class='inline-answer'>\"A Matter Of Honor,\"</span> While engaging in the \"Officer Exchange Program,\" Commander Riker is forced to relieve Captain Kargan from duty.",
    questionImg: "honor-question.jpg",
    questionAlt: "Commander Riker and Captain Picard engage in some friendly competition at the ship's phaser-range",
    answerImg: "honor-answer.jpg",
    answerAlt: "Commander Riker stands head-to-head against the formidable Captain Kargan."
  },
  {
    arrItem: 9,
    question: "Which actor plays \"Q\" in the series?",
    answers: ["John de Lancie", "Michael Bell", "James Watkins", "Biff Yeager"],
    correctAnswerIndex: "0",
    answerTxt: "<span class='inline-answer'>John de Lancie</span> plays the role of the omnipotent Q, a mischevious entity hailing from a race of godlike beings.",
    questionImg: "q-question.jpg",
    questionAlt: "The Q entity chases the Enterprise at high warp speed.",
    answerImg: "q-answer.jpg",
    answerAlt: "Q assumes human form in order to prosecute and judge the Enterprise crew."
  }
]

