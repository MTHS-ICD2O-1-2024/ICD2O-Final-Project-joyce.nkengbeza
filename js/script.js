// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Joyce Nkengbeza
// Created on: June 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  let type = ''
  let genre = ''
  let length = ''
  let language = ''
  let setting = ''
  let tone = ''
  let story = ''
  let recommendation = {}

  // Entertainment type
  if (document.getElementById('anime').checked) {
    type = 'anime'
  } else if (document.getElementById('tvshow').checked) {
    type = 'tvshow'
  }

  // Genre
  if (document.getElementById('action').checked) {
    genre = 'action'
  } else if (document.getElementById('comedy').checked) {
    genre = 'comedy'
  } else if (document.getElementById('romance').checked) {
    genre = 'romance'
  } else if (document.getElementById('mystery').checked) {
    genre = 'mystery'
  } else if (document.getElementById('fantasy').checked) {
    genre = 'fantasy'
  } else if (document.getElementById('horror').checked) {
    genre = 'horror'
  }

  // Length
  if (document.getElementById('short').checked) {
    length = 'short'
  } else if (document.getElementById('medium').checked) {
    length = 'medium'
  } else if (document.getElementById('long').checked) {
    length = 'long'
  }

  // Language
  if (document.getElementById('dubbed').checked) {
    language = 'dubbed'
  } else if (document.getElementById('subtitles').checked) {
    language = 'subtitles'
  } else if (document.getElementById('either').checked) {
    language = 'either'
  }

  // Setting
  if (document.getElementById('modern').checked) {
    setting = 'modern'
  } else if (document.getElementById('historical').checked) {
    setting = 'historical'
  } else if (document.getElementById('scifi').checked) {
    setting = 'scifi'
  } else if (document.getElementById('supernatural').checked) {
    setting = 'supernatural'
  }

  // Tone
  if (document.getElementById('lighthearted').checked) {
    tone = 'lighthearted'
  } else if (document.getElementById('emotional').checked) {
    tone = 'emotional'
  } else if (document.getElementById('serious').checked) {
    tone = 'serious'
  }

  // Story Type
  if (document.getElementById('serialized').checked) {
    story = 'serialized'
  } else if (document.getElementById('episodic').checked) {
    story = 'episodic'
  }

  // Validation
  if (
    type === '' || genre === '' || length === '' || language === '' ||
    setting === '' || tone === '' || story === ''
  ) {
    document.getElementById("results").innerHTML =
      "<p>Please answer all the questions to receive a recommendation!</p>"
    return
  }

  // Anime Recommendations
  if (type === 'anime') {
    if (setting === 'scifi') {
      recommendation = {
        title: "Steins;Gate",
        image: "./images/steinsgate.jpg",
        description: "Steins;Gate is a Japanese anime television series about a group of friends in Akihabara who discover a method of sending text messages to the past, inadvertently creating time travel. The story follows Rintaro Okabe and his friends as they navigate the consequences of altering the timeline and contend with a secret organization, SERN, that also seeks to control time travel."
      }
    } else if (genre === "action" && tone === "lighthearted") {
      recommendation = {
        title: "My Hero Academia",
        image: "./images/MHA.jpeg",
        description: "The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself. He is scouted by the world's greatest hero, All Might, who shares his powers with Izuku after recognizing his value and enrolls him in a prestigious high school for superheroes in training."
      }
    } else if (genre === "romance" && tone === "emotional") {
      recommendation = {
        title: "Your Lie in April",
        image: "./images/yourlieinapril.jpg",
        description: "Your Lie in April is an anime series about a young musician who finds romance. Former piano prodigy Kousei is living a somewhat uninspired life, until he meets Kaori, a free-spirited multi-instrumentalist. Softball-loving Tsubaki and soccer star Watari are Kousei's best friends who support him through thick and thin."
      }
    } else if (genre === "mystery" && story === "serialized") {
      recommendation = {
        title: "Death Note",
        image: "./images/deathnote.jpeg",
        description: "Death Note is a supernatural crime thriller that revolves around a high school student, Light Yagami, who discovers a notebook that allows him to kill anyone whose name is written in it. He uses this power to eliminate criminals, believing he's creating a world cleansed of evil, while an international detective, L, tries to stop him."
      }
    } else if (genre === "fantasy" && setting === "supernatural") {
      recommendation = {
        title: "Jujutsu Kaisen",
        image: "./images/jjk.jpg",
        description: "Jujutsu Kaisen is a Japanese anime television series produced by MAPPA, based on Gege Akutami's manga series. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host."
      }
    } else {
      recommendation = {
        title: "Attack On Titan",
        image: "./images/aot.jpg",
        description: "Attack on Titan is a Japanese manga and anime series about a world besieged by giant, man-eating humanoids called Titans. The story follows Eren Yeager, Mikasa Ackerman, and Armin Arlert, who join the Scout Regiment to fight against the Titans after their hometown is destroyed and Eren's mother is killed by a Colossal Titan."
      }
    }
  }
