// Select the elements that will display the result
const output = document.querySelector("#resultMessage");
const resultNote = document.querySelector("#resultNote");
const resultImage = document.querySelector("#resultImage");

// Create variables for the result message and image details
let outputMessage = "";
let imgAlt = "";
let imgSrc = "";

// Store image URLs for each mood
const imageUrls = {
  Happy: "images/facehappy.png",
  Sad: "images/sad.png",
  Calm: "images/calm.png"
};

// select  first element and set each class with a new variable for lines 19-24"
const moodForm = document.querySelector("#moodForm");
const resultSection = document.querySelector("#result");
const resetBtn = document.querySelector("#resetBtn");
const container = document.querySelector("#container");
const moodSelect = document.querySelector("#mood");
const noteInput = document.querySelector("#note");

// Run this code when the user submits the form that fires the event to happen
moodForm.addEventListener("submit", function (event) {
  // stop the page from refreshing after form submission
  event.preventDefault();

  // sets or you can say declares the form values in an object 
  const formData = {
    mood: moodSelect.value,
    note: noteInput.value
  };

  // display submitted data in the  console
  console.log("Form Data:", formData);
  console.log("Mood:", formData.mood);
  console.log("Note:", formData.note);

  // Store the mood and note in separate variables using dot notation 
  const userMood = formData.mood;
  const userNote = formData.note;

  // Remove any previous mood background class
  container.classList.remove("happy", "sad", "calm");

  // Set the result based on the selected mood using if/else condition
  if (userMood === "Happy") {
    outputMessage = "❤️You are feeling happy! Ok!!! I see you !!!Your just over there building a life you dont need a vacation from and thats priceless. This is precious keep smiling and loven life its the best feeling.❤️";
    imgAlt = "Happy emoji";
    imgSrc = imageUrls.Happy;

    // Apply the happy container background style
    container.classList.add("happy");

  } else if (userMood === "Sad") {
    outputMessage = "💗Its ok that you are feeling sad. It is normal to feel this way sometimes. Todays nothing tomorrow cant fix promise. Dont forget when you focus on the good, the good gets better💕";
    imgAlt = "Sad emoji";
    imgSrc = imageUrls.Sad;

    // Apply the sad container background style
    container.classList.add("sad");

  } else if (userMood === "Calm") {
    outputMessage = "🧘 You are feeling calm. Peace is beautiful. Enjoy this tranquility remember nowhere can someone find a quieter or more untroubled feeling than with in our own soul. 🧘";
    imgAlt = "Calm emoji";
    imgSrc = imageUrls.Calm;

    // Apply the calm container background style
    container.classList.add("calm");

  } else {
    // Use a default message when no mood is selected
    outputMessage = "Talk to me tell me tell me how you feel. I'm here for you";
    imgAlt = "";
    imgSrc = "";
  }

  // Update the result section with the selected mood information
  output.textContent = outputMessage;
  resultNote.textContent = userNote 
  resultImage.src = imgSrc;
  resultImage.alt = imgAlt;

  // Show the result section
  resultSection.classList.add("message");
});

// Run this code when the Reset button is clicked
resetBtn.addEventListener("click", function () {
  // Clear the form inputs
  moodSelect.value = "";
  noteInput.value = "";

  // clear the displayed result content
  output.textContent = "";
  resultNote.textContent = "";
  resultImage.src = "";
  resultImage.alt = "";

  // hisde the result section
  resultSection.classList.remove("message");

  // remove the mood background from the container
  container.classList.remove("happy", "sad", "calm");

//  reset console
  console.log("Mood form reset.");
});