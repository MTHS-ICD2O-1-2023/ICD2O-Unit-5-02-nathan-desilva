// Copyright (c) 2024 Nathan De Silva. All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"


function myButtonClicked() {
  const positiveButton = document.getElementById("positive").checked

  if (positiveButton == true) {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById("answer").innerHTML =
      "Your number is: " + randomNumber
  } else {
    const randomNegativeNumber = Math.floor(Math.random() * 6 + 1) * -1
    document.getElementById("answer").innerHTML =
      "Your number is: " + randomNegativeNumber
  }
}
