import * as React from "react";

interface QA {
  id: number,
  question: string,
  answer: string | React.ReactChild,
}

export const qAndA: Array<QA> = [
  {
    id: 0,
    question: "What do you love most about software development?",
    answer: "The creative blend of freedom and structure. A good piece of code is efficient, elegant, and eminently practical."
  },
  {
    id: 1,
    question: "What was your previous occupation?",
    answer: "I've worked in both fine dining 🥂 and real estate 🏠. Both professions taught me a lot about teamwork and negotiation, but nothing beats the feeling of cracking a tough coding problem!"
  },
  {
    id: 2,
    question: "What are your most important professional values?",
    answer: "Honesty, communication, and a constant drive to learn and improve."
  },
  {
    id: 3,
    question: "What are your top hobbies?",
    answer: "When I'm not coding, I'm probably reading/writing science-fiction 🤖 and fantasy 🐲 stories, or rock climbing at my local gym 💪🏽. I also make a mean stir-fry 🍲!"
  },
  {
    id: 4,
    question: "Favourite Pokémon?",
    answer: "Nidoking!"
  },
  {
    id: 5,
    question: "Okay, seriously...what's with the hexagons??",
    answer: <React.Fragment>
              Because <a href="https://www.youtube.com/watch?v=thOifuHs6eY" 
                target="_blank" 
                rel="noreferrer" 
                style={{color: "rgb(193,141,32"}}
              >
                hexagons are the bestagons
              </a>
              , obviously! I think they evoke both creativity ⎔ and industriousness 🐝—like me!
            </React.Fragment>
  },
]