"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // מערך האותיות
    const audioFiles = {
      'א': new Audio("../צלילים/א.mp3"),
      'ב': new Audio("../צלילים/ב.mp3"),
      'ג': new Audio("../צלילים/ג.mp3"),
      'ד': new Audio("../צלילים/ד.mp3"),
      'ה': new Audio("../צלילים/ה.mp3"),
      'ו': new Audio("../צלילים/ו.mp3"),
      'ז': new Audio("../צלילים/ז.mp3"),
      'ח': new Audio("../צלילים/ח.mp3"),
      'ט': new Audio("../צלילים/ט.mp3"),
      'י': new Audio("../צלילים/י.mp3"),
      'כ': new Audio("../צלילים/כ.mp3"),
      'ך': new Audio("../צלילים/ך.mp3"),
      'ל': new Audio("../צלילים/ל.mp3"),
      'מ': new Audio("../צלילים/מ.mp3"),
      'ם': new Audio("../צלילים/ם.mp3"),
      'נ': new Audio("../צלילים/נ.mp3"),
      'ן': new Audio("../צלילים/ן.mp3"),
      'ס': new Audio("../צלילים/ס.mp3"),
      'ע': new Audio("../צלילים/ע.mp3"),
      'פ': new Audio("../צלילים/פ.mp3"),
      'ף': new Audio("../צלילים/ף.mp3"),
      'צ': new Audio("../צלילים/צ.mp3"),
      'ץ': new Audio("../צלילים/ץ.mp3"),
      'ק': new Audio("../צלילים/ק.mp3"),
      'ר': new Audio("../צלילים/ר.mp3"),
      'ש': new Audio("../צלילים/ש.mp3"),
      'ת': new Audio("../צלילים/ת.mp3")
    };
  
    // הוספת אירועי לחיצה לכל אות
    document.querySelectorAll("#gameL p").forEach(p => {
      p.addEventListener("click", function () {
        const letter = this.id;
        if (audioFiles[letter]) {
          audioFiles[letter].play();
        }
      });
    });
  
    // נגן
    const audio = document.getElementById("mySong");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const stopButton = document.getElementById("stopButton");
  
    playButton.addEventListener("click", function () {
      audio.play();
    });
  
    pauseButton.addEventListener("click", function () {
      audio.pause();
    });
  
    stopButton.addEventListener("click", function () {
      audio.pause();
      audio.currentTime = 0;
    });
  });
  