<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chatbot Example</title>
  <link rel="icon" href="your-favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
    }

    #chat-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      max-width: 350px;
      width: 100%;
      display: none;
    }

    #chat-window {
      background-color: #ffffff;
      border: 2px solid #e0e0e0;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 15px;
      height: 500px;
      overflow-y: scroll;
      margin-bottom: 10px;
    }

    .chatbot-message {
      border-radius: 45px;
      margin-bottom: 10px;
      overflow-wrap: break-word;
      position: relative;
      display: block;
      /* Force each message to be on a new line */
    }

    .user-message {
      border-radius: 45px;
      margin-bottom: 10px;
      overflow-wrap: break-word;
      position: relative;
      display: block;
      text-align: right;
      /* Force each message to be on a new line */
    }

    .chatbot-message::before,
    .user-message::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px;
    }

    .chatbot-message::before {
      border-color: transparent #add8e6 transparent transparent;
      left: -15px;
      top: 5px;
    }

    .user-message::before {
      border-color: transparent transparent transparent #98fb98;
      right: -15px;
      top: 5px;
    }

    .message-content {
      padding: 15px;
      display: inline-block;
      max-width: 80%;
    }

    .chatbot-message .message-content {
      background-color: #add8e6;
      color: #000;
      border-radius: 10px;
    }

    .user-message .message-content {
      background-color: #98fb98;
      color: #000;
      border-radius: 10px;
    }

    #user-input {
      width: 70%;
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 20px;
      outline: none;
    }

    #send-button {
      padding: 15px;
      border: none;
      border-radius: 15px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      outline: none;
    }

    #toggle-chat-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 15px;
      border: none;
      border-radius: 50%;
      background-color: #007bff;
      color: #fff;
      font-size: 22px;
      cursor: pointer;
      outline: none;
      transition: background-color 0.3s ease;
    }

    #toggle-chat-button:hover {
      background-color: #0056b3;
    }
  </style>
</head>

<body>

  <button id="toggle-chat-button" onclick="toggleChat()">
    <i class="fas fa-comment"></i>
  </button>

  <div id="chat-container">
    <div id="chat-window" class="border">
      <!-- Greeting message based on the time of day -->
      <div class="message chatbot-message" id="greeting-message"></div>
      <!-- Chat history will be displayed here -->
    </div>

    <div class="input-group">
      <input type="text" id="user-input" class="form-control" placeholder="Type your message...">
      <div class="input-group-append">
        <button id="send-button" class="btn btn-primary" onclick="sendMessage()">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      // Display initial greeting message
      displayGreetingMessage();
    });

    function displayGreetingMessage() {
      const greetingMessage = getGreetingMessage();
      const greetingMessageDiv = document.getElementById('greeting-message');
      greetingMessageDiv.innerHTML = greetingMessage;
    }

    function getGreetingMessage() {
      const currentHour = new Date().getHours();

      if (currentHour >= 0 && currentHour < 12) {
        return 'Good Morning! How can I assist you today?';
      } else if (currentHour >= 12 && currentHour < 18) {
        return 'Good Afternoon! How can I help you?';
      } else {
        return 'Good Evening! How can I help you?';
      }
    }

    function sendMessage() {
      const userInput = document.getElementById('user-input').value;

      if (userInput.trim() === '') {
        return; // Do not send empty messages
      }

      // Display user message in the chat window
      appendMessage('You', userInput, 'user-message');

      // Simulate chatbot response based on mock data
      const chatbotResponse = getMockResponse(userInput);

      // Display chatbot's reply in the chat window
      appendMessage('Chatbot', chatbotResponse, 'chatbot-message');

      // Clear the user input field
      document.getElementById('user-input').value = '';
    }

    function appendMessage(sender, message, messageClass) {
      const chatWindow = document.getElementById('chat-window');
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', messageClass);

      const messageContent = document.createElement('div');
      messageContent.classList.add('message-content');
      messageContent.innerHTML = `<strong>${sender}:</strong> ${message}`;

      messageDiv.appendChild(messageContent);
      chatWindow.appendChild(messageDiv);

      // Scroll to the bottom of the chat window to show the latest message
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function toggleChat() {
      const chatContainer = document.getElementById('chat-container');
      const chatToggleBtn = document.getElementById('toggle-chat-button');

      if (chatContainer.style.display === '' || chatContainer.style.display === 'none') {
        // Show chat window with animation
        chatContainer.style.display = 'block';
        chatContainer.classList.add('chat-open');
      } else {
        // Hide chat window with animation
        chatContainer.classList.remove('chat-open');
        setTimeout(() => {
          chatContainer.style.display = 'none';
        }, 500); // Delay hiding to match the animation duration
      }
    }

    function getMockResponse(userInput) {
      // Convert user input to lowercase for case-insensitive matching
      const lowercasedInput = userInput.toLowerCase();

      if (lowercasedInput.includes('hello') || lowercasedInput.includes('hi')) {
        return 'Hi there! How can I assist you with our IT services?';
      } else if (lowercasedInput.includes('services')) {
        return "Certainly! Here are the services we provide:<br>" +
          "1. <strong>Custom Software Development:</strong> Tailored solutions to meet your business needs.<br>" +
          "2. <strong>Website/App Development:</strong> Creating user-friendly online experiences.<br>" +
          "3. <strong>Social Media Marketing:</strong> Boosting brand visibility and engagement.<br>" +
          "4. <strong>Graphics Design:</strong> Creating visually appealing designs for your brand.<br>" +
          "5. <strong>AI/ML Tools:</strong> Providing innovative solutions and insights.<br>" +
          "6. <strong>WhatsApp APIs / Integrations:</strong> Enhancing communication and engagement.<br>" +
          "7. <strong>CyberSecurity:</strong> Ensuring the security of your digital assets.";
      } else if (lowercasedInput.includes('custom software development')) {
        return "Our custom software development services offer tailored solutions to meet your unique business needs.";
      } else if (lowercasedInput.includes('website/app development')) {
        return "We specialize in creating user-friendly websites and applications to enhance your online presence.";
      } else if (lowercasedInput.includes('social media marketing')) {
        return "Our social media marketing services focus on boosting your brand's visibility and engagement across various platforms.";
      } else if (lowercasedInput.includes('graphics design')) {
        return "Our graphics design services aim to create visually appealing designs that enhance your brand identity.";
      } else if (lowercasedInput.includes('ai/ml tools')) {
        return "Explore our AI/ML tools designed to provide innovative solutions and valuable insights for your business.";
      } else if (lowercasedInput.includes('whatsapp apis') || lowercasedInput.includes('integrations')) {
        return "Discover our WhatsApp APIs and integrations to enhance communication and engagement with your audience.";
      } else if (lowercasedInput.includes('cybersecurity')) {
        return "Ensuring the security of your digital assets is our priority. Our cybersecurity services include risk assessments, threat detection, and implementing robust security measures to safeguard your information.";
      } else if (lowercasedInput.includes('contact')) {
        return "You can contact our support team at support@yourcompany.com or call us at +1 (123) 456-7890 for assistance. We're available Monday to Friday, 9 AM to 5 PM.";
      } else {
        return "I'm sorry, I didn't understand that. Can you please provide more details or ask about a specific IT service?";
      }
    }
  </script>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="https://kit.fontawesome.com/your-font-awesome-kit.js"></script>

</body>

</html>