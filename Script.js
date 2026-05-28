// =====================================
// IMAGE PREVIEW
// =====================================

function setupPreview(inputId, previewId){

  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  input.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";

    }

  });

}

setupPreview("meterImage", "meterPreview");
setupPreview("ampereImage", "amperePreview");
setupPreview("ctImage", "ctPreview");
setupPreview("dtImage", "dtPreview");

// =====================================
// DEFAULT DATE
// =====================================

document.getElementById("surveyDate").valueAsDate = new Date();

// =====================================
// TEMP DUMMY DROPDOWN
// =====================================

const zone = document.getElementById("zone");

["BULANDSHAHAR", "MEERUT", "HAPUR"].forEach(z => {

  const option = document.createElement("option");

  option.value = z;
  option.textContent = z;

  zone.appendChild(option);

});

// =====================================
// FORM SUBMIT
// =====================================

document.getElementById("surveyForm").addEventListener("submit", async function(e){

  e.preventDefault();

  document.getElementById("msg").innerHTML = "Submitting...";

  const data = {

    surveyDate: document.getElementById("surveyDate").value,
    meterNumber: document.getElementById("meterNumber").value,
    zone: document.getElementById("zone").value,
    circle: document.getElementById("circle").value,
    division: document.getElementById("division").value,
    dtCode: document.getElementById("dtCode").value,
    dtName: document.getElementById("dtName").value,
    reason: document.getElementById("reason").value,
    status: document.getElementById("status").value,
    surveyBy: document.getElementById("surveyBy").value,
    resolvedHow: document.getElementById("resolvedHow").value,
    requirement: document.getElementById("requirement").value

  };

  console.log(data);

  document.getElementById("msg").innerHTML =
    "Frontend Working Successfully";

});
