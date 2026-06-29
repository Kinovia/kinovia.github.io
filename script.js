const destinationEmail = "registration@kinovia.io";

document.querySelector(".interest-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.querySelector("#email");
  const visitorEmail = input.value.trim();

  if (!visitorEmail) {
    input.focus();
    return;
  }

  const subject = encodeURIComponent("Kinovia early access interest");
  const body = encodeURIComponent(
`Hello Kinovia team,

I would like to register my interest for Kinovia early access.

My email address is: ${visitorEmail}

Please keep me updated about the launch.

Best regards`
  );

  window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
});
