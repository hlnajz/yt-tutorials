function Email() {
  let emailsParms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const service_ID = "your_service_id";
  const temp_ID = "your_template_id";

  emailjs
    .send(service_ID, temp_ID, emailsParms)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("message was sent");
    })
    .catch((err) => console.log(err));
}
