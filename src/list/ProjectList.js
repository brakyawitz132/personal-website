import Beer from "../assets/beernoculars.png";
import Jeopardy from "../assets/jeopardy.png";
import Kanban from "../assets/kanban.png";
import Pokebuilder from "../assets/pokebuilder.png";
import Stillmusic from "../assets/stillmusic.png";

export const ProjectList = [
  {
    name: "Beernoculars",
    image: Beer,
    skills: "JavaScript, HTML, CSS",
    link: "https://github.com/AG-168/brewery-project",
    body: "Utilizes the Open Brewery DB API to find the 5 closest breweries near an inputted location. Able to filter your search by brewery types and additionally returns the distances, website, and phone number of the resulting breweries."
  },
  {
    name: "PokeBuilder",
    image: Pokebuilder,
    skills: "React, JavaScript, HTML, CSS",
    link: "https://github.com/AG-168/pokemon_phase2_project",
    body: "Utilizes the Pokemon TCG API and Userfront to create a personal profile that can build your own Pokemon TCG deck. Able to search up cards containing inputted text and edit the deck by adding or deleting cards from th deck."
  },
  {
    name: "CLI Jeopardy",
    image: Jeopardy,
    skills: "Python, SQLite, SQLAlchemy", 
    link: "https://github.com/funky-dolphin/Jeopardy-CLI-Phase-3",
    body: "Created a functioning Jeopardy game that can be run through the CLI. Created the backend from scratch by making a table of questions, answers, categories, and points."
  },
  {
    name: "TaskMaster",
    image: Kanban,
    skills: "React, JavaScript, Flask, Python, SQLAlchemy, HTML, Tailwind CSS",
    link: "https://github.com/thecandylane/P4-Project-Jack-ChrisC-Jacob-ChrisW",
    body: "Created a mock work ticketeting site with a working backend for individual profiles and a functioning kanban component. Options include sending a ticket, updating the ticket status, and deleting the then finished ticket as well as marking a calendar."
  },
  {
    name: "StillMusic",
    image: Stillmusic,
    skills: "React, JavaScript, Flask, Python, SQLAlchemy, HTML, Tailwind CSS",
    link: "https://github.com/brakyawitz132/StillMusic",
    body: "Created a web application that would convert a picture into a sequence of notes that could be then used to create music. Utilized a music AI called Magenta to create the note sequence based off the pixels of the inputted image."
  },
];