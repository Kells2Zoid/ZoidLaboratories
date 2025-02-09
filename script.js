function submitForm(event){
    event.preventDefault();
    window.location.href = 'about.html';
    return false;
}

document.getElementById('qualificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const qualification = document.getElementById('qualification').value;
    const continent = document.getElementById('continent').value;
    let department = '';

    if (qualification === 'PhD') {
        department = 'Advanced Research Department';
    } else if (qualification === 'Masters') {
        department = 'Applied Science Department';
    } else if (qualification === 'Bachelors') {
        department = 'Undergraduate Science Support Department';
    }

    const result = `You have been assigned to the ${department} in ${continent}.`;
    document.getElementById('result').innerText = result;
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert("Your details have been collected. Move on to the next page of your choice!");
        this.reset(); 
    });
});
    