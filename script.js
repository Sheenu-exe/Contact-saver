window.onload = function () {
    let Name = document.getElementById("name");
    let number = document.getElementById("number");
    let profilePicInput = document.getElementById("profilePic");
    let Area = document.getElementById("savingArea");
    let btn = document.getElementById("saver");

    btn.addEventListener("click", () => {
        if (!Name.value || !number.value) {
            alert("Name and number are required");
            return; // Stop the function if either is missing
          }
      // Create a box to hold the profile information
      var box = document.createElement("div");
      box.classList = "box animate__animated animate__fadeIn";

      var deleteButton = document.createElement("button");
        deleteButton.classList = "deleteButton";
        deleteButton.innerText="x"
        deleteButton.addEventListener("click", function() {
          // Remove the box when the delete button is clicked
          Area.removeChild(box);
        });
        
        
      // Create an image box to hold the profile picture
      var imgBox = document.createElement("div");
      imgBox.classList = "imgBox";

      var infoBox = document.createElement("div")
    infoBox.classList="infoBox"

      // Create an image element for the profile picture
      var profilePic = document.createElement("img");
      profilePic.classList = "profilePic";

      // Check if a file is selected
      if (profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
          profilePic.src = e.target.result;
        };

        reader.readAsDataURL(profilePicInput.files[0]);
      } else {
        // Use a default image if no file is selected
        profilePic.src = 'default-profile-pic.jpg';
      }

      // Create an element for the name value
      var nameValue = document.createElement("h2");
      nameValue.classList = "Title";
      nameValue.innerText = "Name: " + (Name.value || "N/A");


      // Create an element for the number value
      var numValue = document.createElement("h3");
      numValue.classList = "numValue";
      numValue.innerText = "Call them on: " + (number.value || "N/A");

      var callButton = document.createElement("button")
      callButton.id="callButton"
      callButton.innerHTML='Make Call'
      // Append the elements to the corresponding containers
      box.appendChild(deleteButton);
      imgBox.appendChild(profilePic);
      box.appendChild(imgBox);
      box.appendChild(infoBox)
      infoBox.appendChild(nameValue);
      infoBox.appendChild(numValue);
      infoBox.appendChild(callButton)
      Name.value=""
      number.value=""
        profilePicInput.value=""
      Area.appendChild(box);
    });
  };
