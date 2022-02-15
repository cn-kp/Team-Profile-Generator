const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

function generateHTML(data) {
  // for (let i = 0; i < data.length; i++) {

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <title>Team Profile Generator</title>
</head>
    
<body>
    <div style="background-image: linear-gradient(to right, #81D2C7 , yellow);height: 130px">
        <h1 style="text-align: center;line-height:100px">My Team</h1>
    </div>

    ${data}

</body>
</html>
    
  `;
}

var teamCards = [];
function generateHTMLCards(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    switch (data[i].getRole()) {
      case "Engineer":
        const Engineer = new engineer(
          data[i].name,
          data[i].email,
          data[i].id,
          data[i].github
        );
        response = `<div>
                        <div class="card" style="width: 22rem">
                        <div class="card-body">
                            <div style="background-color: rgb(41, 159, 214)">
                            <h5 class="card-title">Engineer</h5>
                            <i class="fa-solid fa-glasses"> ${Engineer.getName()}</i>
                            </div>
                
                            <div class="card" style="width: 19.4rem">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                                <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
                                <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
                            </ul>
                            </div>
                
                        </div>
                        </div>
                    </div>`;
        teamCards.push(response);
        break;
      case "Intern":
        const Intern = new intern(
          data[i].name,
          data[i].email,
          data[i].id,
          data[i].github
        );
        response = `<div>
                        <div class="card" style="width: 22rem">
                        <div class="card-body">
                            <div style="background-color: rgb(41, 159, 214)">
                            <h5 class="card-title">Intern</h5>
                            <i class="fa-solid fa-user-graduate"></i> ${Intern.getName()}</i>
                            </div>
                
                            <div class="card" style="width: 19.4rem">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${Intern.getId()}</li>
                                <li class="list-group-item">Email: ${Intern.getEmail()}</li>
                                <li class="list-group-item">School: ${Intern.getSchool()}</li>
                            </ul>
                            </div>
                
                        </div>
                        </div>
                    </div>`;
        teamCards.push(response);
        break;
      case "Manager":
        const Manager = new manager(
          data[i].name,
          data[i].email,
          data[i].id,
          data[i].office,
        );
        response = `<div>
                        <div class="card" style="width: 22rem">
                        <div class="card-body">
                            <div style="background-color: rgb(41, 159, 214)">
                            <h5 class="card-title">Manager</h5>
                            <i class="fa-solid fa-cup-togo"></i> ${Manager.getName()}</i>
                            </div>
                
                            <div class="card" style="width: 19.4rem">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${Manager.getId()}</li>
                                <li class="list-group-item">Email: ${Manager.getEmail()}</li>
                                <li class="list-group-item">Room No: ${Manager.getOffice()}</li>
                            </ul>
                            </div>
                
                        </div>
                        </div>
                    </div>`;
        teamCards.push(response);
        // generateHTML(teamCards);
        break;
    }
  }
  return generateHTML(teamCards.join(""));
}
module.exports = generateHTMLCards;
