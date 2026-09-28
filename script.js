document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.getElementById("bookingForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var vehicle = document.getElementById("vehicle").value.trim();
      var package_ = form.querySelector('input[name="package"]:checked');
      var location = document.getElementById("location").value;
      var date = document.getElementById("date").value;
      var notes = document.getElementById("notes").value.trim();

      var submitBtn = form.querySelector('button[type="submit"]');

      if (typeof supabaseClient === "undefined" || !supabaseClient) {
        status.textContent = "Booking system isn't connected yet — please call or text us at (415) 361-3549 to book directly.";
        status.classList.add("show", "ok");
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      supabaseClient.from("bookings").insert([{
        name: name,
        phone: phone,
        vehicle: vehicle,
        package: package_ ? package_.value : null,
        location: location,
        preferred_date: date,
        notes: notes || null
      }]).then(function (result) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Booking Request";

        if (result.error) {
          status.textContent = "Something went wrong submitting your request. Please call or text us at (415) 361-3549 instead.";
          status.classList.add("show");
        } else {
          form.reset();
          status.textContent = "Thanks! Your booking request was submitted. We'll text or call you shortly to confirm.";
          status.classList.add("show", "ok");
        }
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
