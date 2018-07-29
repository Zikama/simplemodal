/**
 * Created by mikigv on 6/25/2018.
 */
//import idb from 'idb';
class Controller {

    constructor(){
        this.init();
    }


    init(){
        //initialize the db
        this.openDatabase();
        //intialize both the currency select and the amount
        this.getUserList();
    }

    openDatabase() {
        // If the browser doesn't support service worker,
        // we don't care about having a database
        if (!navigator.serviceWorker) {
            return Promise.resolve();
        }

        return idb.open('Admin', 1, (upgradeDb) => {

            switch(upgradeDb.oldVersion) {
                case 0:
                    const currencyStore = upgradeDb.createObjectStore('user', {
                        keyPath: 'id'
                    });
                    currencyStore.createIndex('id', 'id');
                case 1:
                    let cities = upgradeDb.createObjectStore('City', {
                        keyPath: 'id'
                    });
                    cities.createIndex('city', 'id');
            }
        });
    }

    addUser(user) {
        this.openDatabase().then(db => {
            if (!db) return;

            const tx = db.transaction('user', 'readwrite');
            const store = tx.objectStore('user');
                let user1 = [],
                    userArr ={
                    Names: {firstName:"document",lastName:"Nehemie"},
                    city:"querySelector('#inputUser')"
                }; user1.push(userArr);

            Object.values(user1.results).forEach((usersDetails) => {
                store.put(usersDetails);
            });

        }).catch(error => console.log('Something went wrong: '+ error));
    }

    showUserFromDatabase() {
        //const currencies = data;
        //get the first select component from the UI to populate it with the currency list
        const select = document.getElementById('userDisplayer');

        return this.openDatabase().then( db => {

            if (!db) return;

            let index = db.transaction('user')
                .objectStore('user').index('id');

            return index.getAll().then(usersDetails => {
                for(let usersDetail of usersDetails ){
                    //console.log(cryptoCurrencies[currency]);
                    //create option element dynamically
                    const option = document.createElement('div');
                    const optionTwo = document.createElement('p');
                    //this will add a value to the created option like: USD, GPB, BIR...
                    option.value = usersDetail.Names;
                    optionTwo.value = usersDetail.city;
                    //this will add a full name of the currency to the created option
                    //option.appendChild(document.createTextNode( usersDetail.Names));
                    //optionTwo.appendChild(document.createTextNode(currency.currencyName));
                    //Finally append the created element to the select element
                    select.appendChild(option);
                    select.appendChild(optionTwo);

                    /*Set USD the default currency for the select one
                    select.options[select.selectedIndex].value="USD";
                    selectTwo.options[selectTwo.selectedIndex].value="EUR";
                    select.options[select.selectedIndex].text="United States Dollar";
                    selectTwo.options[selectTwo.selectedIndex].text="Euro";
                    symbolOne.innerText = "USD";
                    symbolTwo.innerText = 'EUR';*/
                }

              //  this.queryAPI("USD", "EUR", "United States Dollar equals", "Euro", 1, "amountOne");

            }).catch( error => {
                console.log('No users Details was found in the database: ');
            });
        });
    }

  
    //get the list of currencies from the API
    getUserList(){
        //fetch the list of currencies
      //  fetch('https://free.currencyconverterapi.com/api/v5/currencies').then(response => {
     //       return response.json();
     //   }).then(response => {
         new Promise(populate()).then(response => {
            return response.json();
        }).then(response => {

            //const currencies = data;
            //get the first select component from the UI to populate it with the currency list
            const select =  document.getElementById('userDisplayer');

            //get the second select component from the UI to populate it with the currency list
            //const selectTwo = document.getElementById('currency-two');

            //Iterate through the returned list
            Object.values(response.results).forEach((usersDetails) => {
                //console.log(cryptoCurrencies[currency]);
                //create option element dynamically
                const option = document.createElement('div');
                const optionTwo = document.createElement('p');
                //this will add a value to the created option like: USD, GPB, BIR...
                option.value = usersDetails.Names;
                optionTwo.value = usersDetails.city;
              
            });

            //initialize the amount text boxes to USD and EUR
           // this.queryAPI("USD", "EUR", "United States Dollar equals", "Euro", 1, "amountOne");

            //add the all the currencies to the db
            this.addUserToDatabase(response);

        }).catch( error => {
            console.log('It looks like your are offline or have a bad network: '+ error);
            // get currencies from db.
            this.showUserFromDatabase();
        });

    }


      populate() {
    let user1 = [],
                    userArr ={
                    Names: {firstName:"document",lastName:"Nehemie"},
                    city:"querySelector('#inputUser')"
                }; user1.push(userArr);
}
    showUpdateUI(message){
        let htmlTemplate = '';

        htmlTemplate += `
                <div class="card update-indicator" style="width: 48rem;">
                   <div class="card-body">
                       <h5 class="card-title">${message}</h5>
                       <button id="btn-refresh" class="btn btn-primary">Refresh</button>
                       <button id="btn-cancel" class="btn btn-primary">Cancel</button>
                   </div>
               </div>
            `;

        const updateMessage = document.querySelector('#update-message');

        updateMessage.innerHTML = htmlTemplate;
    }
}
