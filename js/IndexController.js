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

