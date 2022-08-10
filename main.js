
let arrayOfAddresses;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be addressBook()
window.onload = function() {
    addressBook()

}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfAddresses
const addressBook = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(users => arrayOfAddresses = users)
}


