let btn = document.querySelectorAll('button');
let cat1Div = document.getElementById('cat1');
let cat2Div = document.getElementById('cat2');
let cat3Div = document.getElementById('cat3');

//access the JSON file
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

btn[0].addEventListener('click', function() {
    //promises fetch the resource located at URL (json file)
    fetch(requestURL)
        // response returned from the network
        .then(function(resp) {
            //return the response as structured JSON data
            return resp.json();
        })
        // this function is to handle the json data
        .then(function(json) {
            console.log(json);
            // assign cats array from json data
            let cats = json.cats[0];
            //build HTML elements
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            // set image src
            img.setAttribute('src', cats.photo);
            // set image alternative information
            img.setAttribute('alt', cats.photo);

            // display the data
            h2.innerHTML = 'Name: ' + cats.name;
            p1.innerHTML = 'Species' + cats.species;
            p2.innerHTML = 'Age: ' + cats.age;
            p3.innerHTML = 'favorite Foods: ' + cats.favFoods;

            // append
            cat1Div.appendChild(img);
            cat1Div.appendChild(h2);
            cat1Div.appendChild(p1);
            cat1Div.appendChild(p2);
            cat1Div.appendChild(p3);
        });
});

btn[1].addEventListener('click', function() {
    //promises fetch the resource located at URL (json file)
    fetch(requestURL)
        // response returned from the network
        .then(function(resp) {
            //return the response as structured JSON data
            return resp.json();
        })
        // this function is to handle the json data
        .then(function(json) {
            console.log(json);
            // assign cats array from json data
            let cats = json.cats[1];
            //build HTML elements
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            // set image src
            img.setAttribute('src', cats.photo);
            // set image alternative information
            img.setAttribute('alt', cats.photo);

            // display the data
            h2.innerHTML = 'Name: ' + cats.name;
            p1.innerHTML = 'Species' + cats.species;
            p2.innerHTML = 'Age: ' + cats.age;
            p3.innerHTML = 'favorite Foods: ' + cats.favFoods;

            // append
            cat2Div.appendChild(img);
            cat2Div.appendChild(h2);
            cat2Div.appendChild(p1);
            cat2Div.appendChild(p2);
            cat2Div.appendChild(p3);
        });
});

btn[2].addEventListener('click', function() {
    //promises fetch the resource located at URL (json file)
    fetch(requestURL)
        // response returned from the network
        .then(function(resp) {
            //return the response as structured JSON data
            return resp.json();
        })
        // this function is to handle the json data
        .then(function(json) {
            console.log(json);
            // assign cats array from json data
            let cats = json.cats[2];
            //build HTML elements
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            // set image src
            img.setAttribute('src', cats.photo);
            // set image alternative information
            img.setAttribute('alt', cats.photo);

            // display the data
            h2.innerHTML = 'Name: ' + cats.name;
            p1.innerHTML = 'Species' + cats.species;
            p2.innerHTML = 'Age: ' + cats.age;
            p3.innerHTML = 'favorite Foods: ' + cats.favFoods;

            // append
            cat3Div.appendChild(img);
            cat3Div.appendChild(h2);
            cat3Div.appendChild(p1);
            cat3Div.appendChild(p2);
            cat3Div.appendChild(p3);
        });
});
