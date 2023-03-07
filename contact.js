const contactUsForm = document.getElementById("contactUsForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const textmessage = document.getElementById("textmessage");
const contactUsFormAlert = document.getElementById("contactUsFormAlert");

contactUsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

function sendMessage() {
  if (checkContents() == true) {
    const timeSent = new Date();
    console.log(`Time Sent: ${timeSent}
First Name: ${fName.value}
Last Name: ${lName.value}
Email: ${email.value}
Subject: ${subject.value}
Message: ${textmessage.value}`);
    formAlert("success", "Your message was sent successfully");
    fName.value = "";
    lName.value = "";
    email.value = "";
    subject.value = "";
    textmessage.value = "";
  } else {
    formAlert("danger", "Some fields are not filled!");
  }
}

function checkContents() {
  if (
    !fName.value ||
    !lName.value ||
    !email.value ||
    !subject.value ||
    !textmessage.value
  ) {
    return false;
  } else {
    return true;
  }
}

function formAlert(state, text) {
  contactUsFormAlert.classList = `alert alert-${state}`;
  contactUsFormAlert.textContent = text;
  setTimeout(() => {
    contactUsFormAlert.classList = "displayNone";
    contactUsFormAlert.textContent = "";
  }, 10000);
}
