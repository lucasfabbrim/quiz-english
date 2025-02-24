export interface QuizItem {
  id: number
  difficulty: string
  verb: string
  phrase: string
  options: string[]
  correctAnswer: string
  correction: string
}

export const quizData = {
  TO_BE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_BE",
      phrase: "I ____ happy to see you.",
      options: ["am", "are", "is"],
      correctAnswer: "am",
      correction: "I <u>am</u> happy to see you.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_BE",
      phrase: "You ____ a student at this school.",
      options: ["am", "are", "is"],
      correctAnswer: "are",
      correction: "You <u>are</u> a student at this school.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_BE",
      phrase: "He ____ from Brazil.",
      options: ["am", "are", "is"],
      correctAnswer: "is",
      correction: "He <u>is</u> from Brazil.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_BE",
      phrase: "We ____ very excited about the trip.",
      options: ["am", "are", "is"],
      correctAnswer: "are",
      correction: "We <u>are</u> very excited about the trip.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_BE",
      phrase: "They ____ my best friends.",
      options: ["am", "are", "is"],
      correctAnswer: "are",
      correction: "They <u>are</u> my best friends.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_BE",
      phrase: "This ____ my favorite book.",
      options: ["am", "are", "is"],
      correctAnswer: "is",
      correction: "This <u>is</u> my favorite book.",
    },
  ] as QuizItem[],

  TO_HAVE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_HAVE",
      phrase: "I ____ two dogs and a cat.",
      options: ["have", "has", "had"],
      correctAnswer: "have",
      correction: "I <u>have</u> two dogs and a cat.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_HAVE",
      phrase: "He ____ a big house in the countryside.",
      options: ["have", "has", "had"],
      correctAnswer: "has",
      correction: "He <u>has</u> a big house in the countryside.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_HAVE",
      phrase: "We ____ enough time to finish this project.",
      options: ["have", "has", "had"],
      correctAnswer: "have",
      correction: "We <u>have</u> enough time to finish this project.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_HAVE",
      phrase: "She ____ a meeting at 3 p.m.",
      options: ["have", "has", "had"],
      correctAnswer: "has",
      correction: "She <u>has</u> a meeting at 3 p.m.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_HAVE",
      phrase: "They ____ a new car.",
      options: ["have", "has", "had"],
      correctAnswer: "have",
      correction: "They <u>have</u> a new car.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_HAVE",
      phrase: "I ____ a question for you.",
      options: ["have", "has", "had"],
      correctAnswer: "have",
      correction: "I <u>have</u> a question for you.",
    },
  ] as QuizItem[],

  TO_BE_ABLE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_BE_ABLE",
      phrase: "I ____ to speak three languages.",
      options: ["am able", "are able", "can"],
      correctAnswer: "am able",
      correction: "I <u>am able</u> to speak three languages.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_BE_ABLE",
      phrase: "She ____ to finish the report on time.",
      options: ["am able", "is able", "are able"],
      correctAnswer: "is able",
      correction: "She <u>is able</u> to finish the report on time.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_BE_ABLE",
      phrase: "We ____ to solve the puzzle quickly.",
      options: ["is able", "are able", "am able"],
      correctAnswer: "are able",
      correction: "We <u>are able</u> to solve the puzzle quickly.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_BE_ABLE",
      phrase: "They ____ to travel abroad next year.",
      options: ["will be able", "are able", "was able"],
      correctAnswer: "will be able",
      correction: "They <u>will be able</u> to travel abroad next year.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_BE_ABLE",
      phrase: "He ____ to come to the party after all.",
      options: ["was able", "is able", "will be able"],
      correctAnswer: "was able",
      correction: "He <u>was able</u> to come to the party after all.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_BE_ABLE",
      phrase: "I hope I ____ to help you soon.",
      options: ["am able", "are able", "is able"],
      correctAnswer: "am able",
      correction: "I hope I <u>am able</u> to help you soon.",
    },
  ] as QuizItem[],

  TO_COME: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_COME",
      phrase: "I always ____ home late on Fridays.",
      options: ["come", "comes", "came"],
      correctAnswer: "come",
      correction: "I always <u>come</u> home late on Fridays.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_COME",
      phrase: "She ____ to visit us every summer.",
      options: ["come", "comes", "came"],
      correctAnswer: "comes",
      correction: "She <u>comes</u> to visit us every summer.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_COME",
      phrase: "They ____ by train from the city.",
      options: ["come", "comes", "came"],
      correctAnswer: "come",
      correction: "They <u>come</u> by train from the city.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_COME",
      phrase: "We ____ here to learn English.",
      options: ["come", "comes", "came"],
      correctAnswer: "come",
      correction: "We <u>come</u> here to learn English.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_COME",
      phrase: "He ____ to class early every day.",
      options: ["come", "comes", "came"],
      correctAnswer: "comes",
      correction: "He <u>comes</u> to class early every day.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_COME",
      phrase: "We ____ to an agreement after a long debate.",
      options: ["come", "comes", "came"],
      correctAnswer: "came",
      correction: "We <u>came</u> to an agreement after a long debate.",
    },
  ] as QuizItem[],

  TO_GO: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_GO",
      phrase: "I ____ to the gym every morning.",
      options: ["go", "goes", "went"],
      correctAnswer: "go",
      correction: "I <u>go</u> to the gym every morning.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_GO",
      phrase: "She ____ to work by bus.",
      options: ["go", "goes", "went"],
      correctAnswer: "goes",
      correction: "She <u>goes</u> to work by bus.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_GO",
      phrase: "We ____ to that restaurant often.",
      options: ["go", "goes", "went"],
      correctAnswer: "go",
      correction: "We <u>go</u> to that restaurant often.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_GO",
      phrase: "They ____ on vacation twice a year.",
      options: ["go", "goes", "went"],
      correctAnswer: "go",
      correction: "They <u>go</u> on vacation twice a year.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_GO",
      phrase: "He ____ to bed very late.",
      options: ["go", "goes", "went"],
      correctAnswer: "goes",
      correction: "He <u>goes</u> to bed very late.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_GO",
      phrase: "I ____ to the supermarket yesterday.",
      options: ["go", "goes", "went"],
      correctAnswer: "went",
      correction: "I <u>went</u> to the supermarket yesterday.",
    },
  ] as QuizItem[],

  TO_KNOW: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_KNOW",
      phrase: "I ____ the answer to that question.",
      options: ["know", "knows", "knew"],
      correctAnswer: "know",
      correction: "I <u>know</u> the answer to that question.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_KNOW",
      phrase: "She ____ a lot about art history.",
      options: ["know", "knows", "knew"],
      correctAnswer: "knows",
      correction: "She <u>knows</u> a lot about art history.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_KNOW",
      phrase: "We ____ how to fix this machine.",
      options: ["know", "knows", "knew"],
      correctAnswer: "know",
      correction: "We <u>know</u> how to fix this machine.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_KNOW",
      phrase: "They ____ the best way to get there.",
      options: ["know", "knows", "knew"],
      correctAnswer: "know",
      correction: "They <u>know</u> the best way to get there.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_KNOW",
      phrase: "He ____ your cousin from college.",
      options: ["know", "knows", "knew"],
      correctAnswer: "knows",
      correction: "He <u>knows</u> your cousin from college.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_KNOW",
      phrase: "I ____ him since we were kids.",
      options: ["have known", "know", "knew"],
      correctAnswer: "have known",
      correction: "I <u>have known</u> him since we were kids.",
    },
  ] as QuizItem[],

  TO_TAKE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_TAKE",
      phrase: "I always ____ a shower in the morning.",
      options: ["take", "takes", "took"],
      correctAnswer: "take",
      correction: "I always <u>take</u> a shower in the morning.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_TAKE",
      phrase: "She ____ the bus to work.",
      options: ["take", "takes", "took"],
      correctAnswer: "takes",
      correction: "She <u>takes</u> the bus to work.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_TAKE",
      phrase: "We ____ turns driving on road trips.",
      options: ["take", "takes", "took"],
      correctAnswer: "take",
      correction: "We <u>take</u> turns driving on road trips.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_TAKE",
      phrase: "They ____ a break every two hours.",
      options: ["take", "takes", "took"],
      correctAnswer: "take",
      correction: "They <u>take</u> a break every two hours.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_TAKE",
      phrase: "He ____ a deep breath before speaking.",
      options: ["take", "takes", "took"],
      correctAnswer: "takes",
      correction: "He <u>takes</u> a deep breath before speaking.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_TAKE",
      phrase: "I ____ my phone with me everywhere.",
      options: ["take", "takes", "took"],
      correctAnswer: "take",
      correction: "I <u>take</u> my phone with me everywhere.",
    },
  ] as QuizItem[],

  TO_WANT: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_WANT",
      phrase: "I ____ to learn Spanish.",
      options: ["want", "wants", "wanted"],
      correctAnswer: "want",
      correction: "I <u>want</u> to learn Spanish.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_WANT",
      phrase: "She ____ a new laptop for her birthday.",
      options: ["want", "wants", "wanted"],
      correctAnswer: "wants",
      correction: "She <u>wants</u> a new laptop for her birthday.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_WANT",
      phrase: "We ____ to travel the world someday.",
      options: ["want", "wants", "wanted"],
      correctAnswer: "want",
      correction: "We <u>want</u> to travel the world someday.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_WANT",
      phrase: "They ____ more free time.",
      options: ["want", "wants", "wanted"],
      correctAnswer: "want",
      correction: "They <u>want</u> more free time.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_WANT",
      phrase: "He ____ to start his own business.",
      options: ["want", "wants", "wanted"],
      correctAnswer: "wants",
      correction: "He <u>wants</u> to start his own business.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_WANT",
      phrase: "I ____ to eat pizza tonight.",
      options: ["want", "wants", "wanted"],
      correctAnswer: "want",
      correction: "I <u>want</u> to eat pizza tonight.",
    },
  ] as QuizItem[],

  TO_SAY_OR_TELL: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_SAY_OR_TELL",
      phrase: "I always ____ “thank you” when someone helps me.",
      options: ["say", "told", "said"],
      correctAnswer: "say",
      correction: "I always <u>say</u> “thank you” when someone helps me.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_SAY_OR_TELL",
      phrase: "She ____ me a secret yesterday.",
      options: ["tell", "told", "says"],
      correctAnswer: "told",
      correction: "She <u>told</u> me a secret yesterday.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_SAY_OR_TELL",
      phrase: "We ____ hello to our neighbors every morning.",
      options: ["say", "says", "told"],
      correctAnswer: "say",
      correction: "We <u>say</u> hello to our neighbors every morning.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_SAY_OR_TELL",
      phrase: "They ____ us about their vacation plans.",
      options: ["told", "said", "tell"],
      correctAnswer: "told",
      correction: "They <u>told</u> us about their vacation plans.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_SAY_OR_TELL",
      phrase: "He ____ that he would be late.",
      options: ["say", "said", "tell"],
      correctAnswer: "said",
      correction: "He <u>said</u> that he would be late.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_SAY_OR_TELL",
      phrase: "I ____ sorry for being late.",
      options: ["say", "told", "said"],
      correctAnswer: "said",
      correction: "I <u>said</u> sorry for being late.",
    },
  ] as QuizItem[],

  TO_DO_OR_MAKE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_DO_OR_MAKE",
      phrase: "I always ____ my bed in the morning.",
      options: ["make", "do", "made"],
      correctAnswer: "make",
      correction: "I always <u>make</u> my bed in the morning.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_DO_OR_MAKE",
      phrase: "She ____ her homework before dinner.",
      options: ["do", "does", "did"],
      correctAnswer: "does",
      correction: "She <u>does</u> her homework before dinner.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_DO_OR_MAKE",
      phrase: "We ____ the dishes every evening.",
      options: ["do", "does", "did"],
      correctAnswer: "do",
      correction: "We <u>do</u> the dishes every evening.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_DO_OR_MAKE",
      phrase: "They ____ plans for the weekend.",
      options: ["make", "do", "made"],
      correctAnswer: "make",
      correction: "They <u>make</u> plans for the weekend.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_DO_OR_MAKE",
      phrase: "He ____ a lot of mistakes on the test.",
      options: ["made", "did", "does"],
      correctAnswer: "made",
      correction: "He <u>made</u> a lot of mistakes on the test.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_DO_OR_MAKE",
      phrase: "I ____ exercise three times a week.",
      options: ["do", "make", "did"],
      correctAnswer: "do",
      correction: "I <u>do</u> exercise three times a week.",
    },
  ] as QuizItem[],

  TO_SEE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_SEE",
      phrase: "I ____ a shooting star last night.",
      options: ["see", "saw", "seen"],
      correctAnswer: "saw",
      correction: "I <u>saw</u> a shooting star last night.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_SEE",
      phrase: "She ____ her old friend at the supermarket.",
      options: ["see", "saw", "seen"],
      correctAnswer: "saw",
      correction: "She <u>saw</u> her old friend at the supermarket.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_SEE",
      phrase: "We ____ a movie at the theater.",
      options: ["see", "saw", "seen"],
      correctAnswer: "saw",
      correction: "We <u>saw</u> a movie at the theater.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_SEE",
      phrase: "They ____ the results of the test.",
      options: ["see", "saw", "seen"],
      correctAnswer: "saw",
      correction: "They <u>saw</u> the results of the test.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_SEE",
      phrase: "He ____ a doctor every six months.",
      options: ["see", "sees", "saw"],
      correctAnswer: "sees",
      correction: "He <u>sees</u> a doctor every six months.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_SEE",
      phrase: "I ____ the difference between these two colors.",
      options: ["see", "sees", "saw"],
      correctAnswer: "see",
      correction: "I <u>see</u> the difference between these two colors.",
    },
  ] as QuizItem[],

  TO_GIVE: [
    {
      id: 1,
      difficulty: "EASY",
      verb: "TO_GIVE",
      phrase: "I ____ a gift to my friend on her birthday.",
      options: ["gave", "give", "given"],
      correctAnswer: "gave",
      correction: "I <u>gave</u> a gift to my friend on her birthday.",
    },
    {
      id: 2,
      difficulty: "EASY",
      verb: "TO_GIVE",
      phrase: "She ____ me a ride to work.",
      options: ["gave", "give", "given"],
      correctAnswer: "gave",
      correction: "She <u>gave</u> me a ride to work.",
    },
    {
      id: 3,
      difficulty: "EASY",
      verb: "TO_GIVE",
      phrase: "We ____ our time to volunteer.",
      options: ["give", "gave", "given"],
      correctAnswer: "give",
      correction: "We <u>give</u> our time to volunteer.",
    },
    {
      id: 4,
      difficulty: "EASY",
      verb: "TO_GIVE",
      phrase: "They ____ us permission to enter.",
      options: ["gave", "give", "given"],
      correctAnswer: "gave",
      correction: "They <u>gave</u> us permission to enter.",
    },
    {
      id: 5,
      difficulty: "EASY",
      verb: "TO_GIVE",
      phrase: "He ____ a speech at the conference.",
      options: ["gave", "give", "given"],
      correctAnswer: "gave",
      correction: "He <u>gave</u> a speech at the conference.",
    },
    {
      id: 6,
      difficulty: "EASY",
      verb: "TO_GIVE",
      phrase: "She ____ him a second chance.",
      options: ["gave", "give", "given"],
      correctAnswer: "gave",
      correction: "She <u>gave</u> him a second chance.",
    },
  ] as QuizItem[],
}
