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
  let recommendation = ''
  

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
}
  //Story Type
  if (document.getElementById('serialized').checked) {
    story = 'serialized'
  } else if (document.getElementById('serialized').checked) {
    story = 'episodic'
  }
  //validation

  if (
    type === '' || genre === '' || length === '' || language === '' || setting === '' || tone === '' || story === ''
  ) {
    document.getElementById(results).innerhtml =
    "<p>Answer all the questions to recive reccomendations!!!</p>"
    return
  }

  //Reccomendations Logic
  if (type === 'anime') {
    if (setting === 'scifi') {
        recommendation = { 
          title:"Steins;Gate",
          image:"./images/steinsgate.jpg",
          Description : "Steins;Gate is a Japanese anime television series about a group of friends in Akihabara who discover a method of sending text messages to the past, inadvertently creating time travel. The story follows Rintaro Okabe and his friends as they navigate the consequences of altering the timeline and contend with a secret organization, SERN, that also seeks to control time travel." 

    }
  } else if (genre === "action" && tone === "lighthearted") {
    recommendation = {
        title: "My Hero Academia",
        image:".images/MHA.jpeg",
        Description:"The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself, and is scouted by the world's greatest hero, All Might, who shares his powers with Izuku after recognizing his value and enrolls him in a prestigious high school for superheros in training"

    }  
  }    
