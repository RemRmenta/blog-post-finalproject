* {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
}

body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: 0;
  background-color: #111111;
}

.container {
  max-width: 1800px;
  min-width: 300px;
  margin: 0 auto;
  background: transparent;
  padding: 50px;
  font-size: 18px;
  font-family: Arial, sans-serif;
  border: 5px solid;
  border-radius: 10px;
  animation: borderColorAnimation .3s linear infinite;
}

@keyframes borderColorAnimation {
  0% {
    border-color: #fc72ff;
  }
  25% {
    border-color: #8f68ff;
  }
  50% {
    border-color: #487bff;
  }
  75% {
    border-color: #8f68ff;
  }
  100% {
    border-color: #fc72ff;
  }
}

h1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0px;
  background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animate-gradient .3s linear infinite;
}

@keyframes animate-gradient  {
  to {
    background-position: 200%;
  }
}

.add-post-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.add-post-button-container button {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  gap: 8px;
  width: 150px;
  height: 50px;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  border: 5px solid;
  border-radius: 8px;
  cursor: pointer;
  animation: borderColorAnimation 0.9s linear infinite;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.add-post-button-container button::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 8px;
  background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff);
  background-size: 300% 100%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: gradientBorderAnimation 3s linear infinite;
}

.add-post-button-container button:hover::before {
  opacity: 1;
}

.add-post-button-container button:hover {
  color: #ffffff;
  background-color: #333;
  border: transparent;
  animation: none;
}

@keyframes borderColorAnimation {
  0% {
    border-color: #fc72ff;
  }
  25% {
    border-color: #8f68ff;
  }
  50% {
    border-color: #487bff;
  }
  75% {
    border-color: #8f68ff;
  }
  100% {
    border-color: #fc72ff;
  }
}

/* Gradient animation */
@keyframes gradientBorderAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}

.post {
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 20px;
  margin-bottom: 20px;
  border: 5px solid;
  border-radius: 10px;
  animation: borderColorAnimation 5s linear infinite;
}

@keyframes borderColorAnimation {
  0% {
    border-color: #fc72ff;
  }
  25% {
    border-color: #8f68ff;
  }
  50% {
    border-color: #487bff;
  }
  75% {
    border-color: #8f68ff;
  }
  100% {
    border-color: #fc72ff;
  }
}

.post h2 {
  margin: 0;
  font-size: 25px;
  color: #ffffff;
  animation: jump 1s infinite ease-in-out;
}

@keyframes jump {
  0%, 100% {
    transform: translateY(0); /* Start and end position */
  }
  50% {
    transform: translateY(-3px); /* Move upward */
  }
}

.post p {
  margin: 5px 0 10px;
  font-size: 20px;
  color: #fffcfc;
}

.buttons {
  display: flex;
  gap: 20px;
}

.buttons button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Base styles for buttons */
.buttons .edit-btn, .buttons .delete-btn {
  display: inline-block;
  padding: 5px 5px;
  border: transparent;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Edit Button */
.buttons .edit-btn {
  background: #0d00ff;
}

/* Delete Button */
.buttons .delete-btn {
  background: #ff0000;
}

/* Hover effect for both buttons */
.buttons .edit-btn:hover, .buttons .delete-btn:hover {
  color: #fff;
  background: #333;
  animation: gradientBorder 1.5s linear infinite;
}

.buttons .edit-btn::before, .buttons .delete-btn::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 8px;
  z-index: -1;
  background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff);
  background-size: 300% 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: gradientBorder 3s linear infinite;
}

.buttons .edit-btn:hover::before, .buttons .delete-btn:hover::before {
  opacity: 1;
}

@keyframes gradientBorder {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
}

.modal.active {
  display: flex;
}

.modal-content {
  background-color: #090808f9; /* Set background color to dark */
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  border: 3px solid transparent; /* Initial border color */
  animation: borderColorAnimation 4s infinite; /* Add border animation */
  color: #fff; /* Ensure text is visible on dark background */
}

.modal-content h2 {
  margin: 0 0 10px;
  background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff);
  padding: 5px 5px;
  text-align: center;
  font-size: 25px;
  border-radius: 10px;
  background-size: 300% 300%; /* Increases the background size for smooth transition */
  animation: gradientAnimation 5s ease infinite; /* Adds the animation */
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.modal-content label {
  display: block;
  margin: 10px 0 5px;
  color: #ccc;
  font-size: 20px;
}

.modal-content input {
  align-items: center;
  width: 375px;
  height: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid;
  border-radius: 4px;
  animation: borderColorAnimation .5s infinite; /* Adds the animation */
}

.modal-content textarea {
  align-items: center;
  width: 375px;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  animation: borderColorAnimation .5s infinite;
}

.modal-content button {
  padding: 10px;
  background: #0d00ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20;
  transition: background 0.5s ease; /* Adds a smooth transition for the background color */
}

.modal-content button:hover {
  background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff); /* Gradient on hover */
  background-size: 300% 300%; /* Enlarges the background for smooth transition */
  animation: gradientHoverAnimation 3s ease infinite; /* Animation for the gradient */
}

.modal-content .cancel-btn {
  background: #ff0000;
  color: #fff;
  margin-left: 10px;
}

.modal-content .cancel-btn:hover {
  background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff); /* Gradient on hover for cancel button */
  background-size: 300% 300%;
  animation: gradientHoverAnimation 3s ease infinite; /* Animation for the cancel button */
}

@keyframes gradientHoverAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #fc72ff, #8f68ff, #487bff); /* Initial gradient background */
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: none;
  z-index: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: gradientAnimation 4s infinite alternate; /* Gradient animation */
}

.notification.active {
  display: block;
  animation: fadeIn .1s, fadeOut .1s 1.7s; /* Adjust the fadeIn and fadeOut timing */
}

.notification button {
  margin-top: 10px;
  background: #fff;
  color: #0d00ff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.notification button:hover {
  background: #111111;
  color: #fff; /* White text on hover */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
