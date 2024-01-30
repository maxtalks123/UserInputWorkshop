const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventdefault();
  console.log("form submitted");

  const formData = newFormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
