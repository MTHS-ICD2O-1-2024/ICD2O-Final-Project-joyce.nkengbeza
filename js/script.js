// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const TAX_RATE = 0.13

  // amount of cookies selection
  let cookieChoice = ""
  let cookiePrice = 0

  if (document.getElementById("cookienumber1").checked) {
    cookieChoice = "5"
    cookiePrice = 10.0
  } else if (document.getElementById("cookienumber2").checked) {
    cookieChoice = "10"
    cookiePrice = 20.0
  } else if (document.getElementById("cookienumber3").checked) {
    cookieChoice = "20"
    cookiePrice = 30.0
  }

  // flavour selection
  let flavourChoice = ""
  let flavourPrice = 0

  if (document.getElementById("flavour1").checked) {
    flavourChoice = "Chocolate Chip"
    flavourPrice = 0.50
  } else if (document.getElementById("flavour2").checked) {
    flavourChoice = "Oatmeal Raisin"
    flavourPrice = 0.95
  } else if (document.getElementById("flavour3").checked) {
    flavourChoice = "Sugar"
    flavourPrice = 0.50
  }
  //process
  const subtotal = cookiePrice + flavourPrice 
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100
  const total = Math.round((subtotal + tax) * 100) / 100

  // output
  if (cookieChoice !== "" && flavourChoice !== "") {
    document.getElementById("results").innerHTML =
      "<p>Subtotal: $" + subtotal.toFixed(2) +
      "<br>Tax: $" + tax.toFixed(2) +
      "<br>Yout total is  $" + total.toFixed(2) + "</p>"
  } else {
    document.getElementById("results").innerHTML =
      "<p>Please select both the number and flavour of cookies before you can get the total.</p>"
  }
}

