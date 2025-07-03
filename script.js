function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi").value = bmi;
  } else {
    alert("Please enter valid weight and height");
  }
}

document.getElementById("intakeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted! You can now download or share it.");
});

function shareViaWhatsApp() {
  const name = document.querySelector("input[name='name']").value;
  const goal = document.querySelector("input[name='goal']:checked")?.value || '';
  const bmi = document.getElementById("bmi").value;
  const message = `New Client Intake:\nName: ${name}\nGoal: ${goal}\nBMI: ${bmi}`;
  const phoneNumber = "91XXXXXXXXXX"; // replace with your number
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function downloadPDF() {
  const form = document.getElementById("intakeForm");
  const formData = new FormData(form);
  let content = "";
  for (const [key, value] of formData.entries()) {
    content += `${key}: ${value}\n`;
  }

  const blob = new Blob([content], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "client-intake-form.pdf";
  link.click();
}
