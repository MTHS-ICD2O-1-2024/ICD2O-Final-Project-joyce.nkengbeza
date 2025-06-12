// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Joyce Nkengbeza
// Created on: June 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  let type = '';
  let genre = '';
  let length = '';
  let language = '';
  let setting = '';
  let tone = '';
  let story = '';
  let recommendation = null;

  // Entertainment type
  if (document.getElementById('entertainment1').checked) {
    type = 'anime';
  } else if (document.getElementById('entertainment2').checked) {
    type = 'tvshow';
  }

  // Genre
  if (document.getElementById('genre1').checked) {
    genre = 'action';
  } else if (document.getElementById('genre2').checked) {
    genre = 'comedy';
  } else if (document.getElementById('genre3').checked) {
    genre = 'romance';
  } else if (document.getElementById('genre4').checked) {
    genre = 'mystery';
  } else if (document.getElementById('genre5').checked) {
    genre = 'fantasy';
  } else if (document.getElementById('genre6').checked) {
    genre = 'horror';
  }

  // Length
  // FIXED: typo from 'lengh1' to 'length1'
  if (document.getElementById('length1').checked) {
    length = 'short';
  } else if (document.getElementById('length2').checked) {
    length = 'medium';
  } else if (document.getElementById('length3').checked) {
    length = 'long';
  }

  // Language
  if (document.getElementById('language1').checked) {
    language = 'dubbed';
  } else if (document.getElementById('language2').checked) {
    language = 'subtitles';
  } else if (document.getElementById('language3').checked) {
    language = 'either';
  }

  // Setting
  if (document.getElementById('setting1').checked) {
     setting = 'modern';
  } else if (document.getElementById('setting2').checked) {
     setting = 'historical';
  } else if (document.getElementById('setting3').checked) {
     setting = 'scifi';
  } else if (document.getElementById('setting4').checked) {
     setting = 'supernatural';
  }

  // Tone
  if (document.getElementById('tone1').checked) {
    tone = 'lighthearted';
  } else if (document.getElementById('tone2').checked) {
     tone = 'emotional';
  } else if (document.getElementById('tone3').checked) {
     tone = 'serious';
  }

  // Story Type
  if (document.getElementById('story1').checked) {
    story = 'serialized';
  } else if (document.getElementById('story2').checked) {
     story = 'episodic';
  }

  // Validation
  if (
    type === '' || genre === '' || length === '' || language === '' ||
    setting === '' || tone === '' || story === ''
  ) {
    document.getElementById("results").innerHTML =
      "<p>Please answer all the questions to receive a recommendation!</p>";
    return;
  }

  // Anime Recommendations
  if (type === 'anime') {
    if (setting === 'scifi') {
      recommendation = {
        title: "Steins;Gate",
        image: "./images/steinsgate.jpg",
        description: "Steins;Gate is a Japanese anime television series about a group of friends in Akihabara who discover a method of sending text messages to the past, inadvertently creating time travel. The story follows Rintaro Okabe and his friends as they navigate the consequences of altering the timeline and contend with a secret organization, SERN, that also seeks to control time travel."
      };
    } else if (genre === 'action' && tone === 'lighthearted') {
      recommendation = {
        title: "My Hero Academia",
        image: "./images/MHA.jpeg",
        description: "The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself. He is scouted by the world's greatest hero, All Might, who shares his powers with Izuku after recognizing his value and enrolls him in a prestigious high school for superheroes in training."
      };
    } else if (genre === 'romance' && tone === 'emotional') {
      recommendation = {
        title: "Your Lie in April",
        image: "./images/youelieinapril.jpg",
        description: "Your Lie in April is an anime series about a young musician who finds romance. Former piano prodigy Kousei is living a somewhat uninspired life, until he meets Kaori, a free-spirited multi-instrumentalist. Softball-loving Tsubaki and soccer star Watari are Kousei's best friends who support him through thick and thin."
      };
    } else if (genre === 'mystery' && story === 'serialized') {
      recommendation = {
        title: "Death Note",
        image: "./images/deathnote.jpeg",
        description: "Death Note is a supernatural crime thriller that revolves around a high school student, Light Yagami, who discovers a notebook that allows him to kill anyone whose name is written in it. He uses this power to eliminate criminals, believing he's creating a world cleansed of evil, while an international detective, L, tries to stop him."
      };
    } else if (genre === 'fantasy' && setting === 'supernatural') {
      recommendation = {
        title: "Jujutsu Kaisen",
        image: "./images/jjk.jpg",
        description: "Jujutsu Kaisen is a Japanese anime television series produced by MAPPA, based on Gege Akutami's manga series. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host."
      };
    } else {
      recommendation = {
        title: "Attack On Titan",
        image: "./images/aot.jpg",
        description: "Attack on Titan is a Japanese manga and anime series about a world besieged by giant, man-eating humanoids called Titans. The story follows Eren Yeager, Mikasa Ackerman, and Armin Arlert, who join the Scout Regiment to fight against the Titans after their hometown is destroyed and Eren's mother is killed by a Colossal Titan."
      };
    }
  } else if (type === 'tvshow') {
    if (setting === 'scifi') {
      recommendation = {
        title: "Stranger Things",
        image:"./images/strangerthings.jpeg",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
      };
    } else if (genre === 'comedy' && length === 'short') {
      recommendation = {
        title: "Brooklyn Nine-Nine", 
        image: "./images/brookly.jpeg",
        description: "Brooklyn Nine-Nine is a comedy television series that follows the lives and investigations of a detective squad within the fictional 99th Precinct of the New York City Police Department, located in Brooklyn. The show revolves around the humor, camaraderie, and sometimes surprising personalities of the characters as they navigate their jobs and personal lives."
      };
    } else if (genre === 'action' && tone === 'emotional') {
      recommendation = {
        title: "The Mandalorian",
        image: "./images/mandalorian.jpeg",
        description: "The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic."
      };
    } else if (genre === 'mystery' && story === 'serialized') {
      recommendation = {
        title: "Sherlock",
        image: "./images/sherlock.jpg",
        description:"In this contemporary version of Sir Arthur Conan Doyle's detective stories, Dr. John Watson is a war vet just home from Afghanistan. He meets the brilliant but eccentric Holmes when the latter, who serves as a consultant to Scotland Yard, advertises for a flatmate."
      };
    } else if (genre === 'fantasy' && setting === 'historical') {
      recommendation = {
        title: "Game of Thrones",
        image: "./images/gamethrones.jpeg",
        description: "Game of Thrones describes a long struggle for power between noble families while a threat looms over their kingdoms, an external enemy that destroys everything in its path: the White Walkers. The series takes place on two continents, Westeros to the west, and Essos to the east."
      };
    } else {
      recommendation = {
        title: "The Umbrella Academy",
        image: "./images/umbrella.jpeg",
        description: "The Umbrella Academy is a superhero comedy-drama television series based on the Dark Horse comic series of the same name. Created for television by Steve Blackman and Jeremy Slater, it centers around a dysfunctional family of adopted superhero siblings who are forced to come together to stop various apocalyptic threats while frequently traveling through time."
      };
    }
  }

  // Language Fix
  if (recommendation) {
    if (language === 'dubbed') {
      recommendation.description += " (Available Dubbed in English)";
    } else if (language === 'subtitles') {
      recommendation.description += " (Recommended in Original Japanese)";
    } else if (language === 'either') {
      recommendation.description += " (Recommended in either)";
    }
  } else {
    recommendation = {
      title: "Sorry",
      image: "./images/default.jpeg",
      description: "We couldn't find a perfect match!"
    };
  }

  // Output
  document.getElementById("results").innerHTML = `
  <h2>🎬 We recommend you watch: <strong>${recommendation.title}</strong>!</h2>
  <img src="${recommendation.image}" alt="${recommendation.title}"> 
  <p>${recommendation.description}</p>
  `;
}