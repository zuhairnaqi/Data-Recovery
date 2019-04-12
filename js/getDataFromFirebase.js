var userId = localStorage.getItem("userId");

function getPurchasesData() {

    db.collection("Purchase Entry").where("userId", "==" , userId).get()
    .then(function (querySnapshot) {
        console.log(querySnapshot);
        var tbody = document.getElementById("purchases_table_tbody");
        tbody.innerHTML = "";
        
        querySnapshot.forEach(val => {
            console.log(val.data());
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var td7 = document.createElement("td");
            var td8 = document.createElement("td");
            var td9 = document.createElement("td");
            var td10 = document.createElement("td");

            var data = val.data();
            var milliscds = new Date(data.purchasedate) - new Date(data.lastdate);
            var daysLeft = Math.floor(milliscds / (1000*60*60*24));

            td1.innerHTML = data.EntryTx;
            td2.innerHTML = data.purchasedate;
            td3.innerHTML = daysLeft;
            td4.innerHTML = data.type;
            td5.innerHTML = data.grower;
            td6.innerHTML = data.area;
            td7.innerHTML = data.toolrate;
            td8.innerHTML = data.hookaamount;
            td9.innerHTML = data.dalal;
            td10.innerHTML = `<a class="purchase_transaction_popup_open btn" onmousedown="purchase_transaction_popup();" href="#">View</a>`;
            // td10.innerHTML = `<button>View</button>`;

            tr.innerHTML += td1.outerHTML + td2.outerHTML + td3.outerHTML + td4.outerHTML + td5.outerHTML + td6.outerHTML + td7.outerHTML + td8.outerHTML + td9.outerHTML + td10.outerHTML;
            tbody.appendChild(tr);

        });
    })
}

function getInputEntry() {
    db.collection("Input Entry").where("userId", "==" , userId).get()
    .then(function (querySnapshot) {
        var tbody = document.getElementById("daily_weights_tbody");
        tbody.innerHTML = "";
        querySnapshot.forEach(val => {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var td7 = document.createElement("td");

            var data = val.data();
            console.log(data);

            td1.innerHTML = data.EntryTx;
            td2.innerHTML = data.date;
            td3.innerHTML = data.grower;
            td4.innerHTML = data.area;
            td5.innerHTML = data.weight;
            td6.innerHTML = data.crates;
            td7.innerHTML = `<a class="purchase_transaction_popup_open btn" onmousedown="purchase_transaction_popup();" href="#">View</a>`;

            tr.innerHTML += td1.outerHTML + td2.outerHTML + td3.outerHTML + td4.outerHTML + td5.outerHTML + td6.outerHTML + td7.outerHTML;
            tbody.appendChild(tr);

        })
    })


}

function getOutputEntry(){

    db.collection("Output Entry").where("userId", "==" , userId).get()
    .then(function (querySnapshot) {
        var tbody = document.getElementById("outputentrytbody");
        tbody.innerHTML = "";

        querySnapshot.forEach(val => {
            var data = val.data();
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var td7 = document.createElement("td");
            var td8 = document.createElement("td");

            var cases = 0;
            data.Shipment_Details.forEach(value => {
                cases += parseInt(value.unit);
            })

            td1.innerHTML = data.EntryTx;
            td2.innerHTML = data.date;
            td3.innerHTML = cases;
            td4.innerHTML = data.party;
            td5.innerHTML = data.driverNum;
            td6.innerHTML = data.type;
            td7.innerHTML = data.total;
            td8.innerHTML = `<a class="purchase_transaction_popup_open btn" onmousedown="purchase_transaction_popup();" href="#">View</a>`;

            tr.innerHTML += td1.outerHTML + td2.outerHTML + td3.outerHTML + td4.outerHTML + td5.outerHTML + td6.outerHTML + td7.outerHTML + td8.outerHTML;
            tbody.appendChild(tr);
        })
    })
}

function getExpenses(){
    
    db.collection("Expense Entry").where("userId", "==" , userId).get()
    .then(function (querySnapshot) {
        var tbody = document.getElementById("expenseentrytbody");
        tbody.innerHTML = "";

        querySnapshot.forEach(val => {
            var data = val.data();
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            var td7 = document.createElement("td");
            var td8 = document.createElement("td");

            td1.innerHTML = data.EntryTx;
            td2.innerHTML = data.date;
            td3.innerHTML = data.grower;
            td4.innerHTML = data.labour;
            td5.innerHTML = data.party;
            td6.innerHTML = data.ExpenseAmount;
            td7.innerHTML = data.description;
            td8.innerHTML = `<a class="purchase_transaction_popup_open btn" onmousedown="purchase_transaction_popup();" href="#">View</a>`;

            tr.innerHTML += td1.outerHTML + td2.outerHTML + td3.outerHTML + td4.outerHTML + td5.outerHTML + td6.outerHTML + td7.outerHTML + td8.outerHTML;
            tbody.appendChild(tr);
        })
    })
}

function getDashboradData() {
    db.collection("Output Entry").where("userId", "==" , userId).where("type", "==", "On Sale").get()
    .then(function (querySnapshot) {
        var tbody = document.getElementById("balance_plant_table_tbody");
        tbody.innerHTML = "";

        querySnapshot.forEach(val => {
            var data = val.data();
            console.log(data);
            var shipAmount = data.Shipment_Details.forEach(value => {
                if(value.amount == "") {
                    return false;
                }
            })
            if(data.total == "" || shipAmount){
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var td3 = document.createElement("td");
                var td4 = document.createElement("td");
                var td5 = document.createElement("td");
                var td6 = document.createElement("td");
                var td7 = document.createElement("td");

                var cases = 0;
                data.Shipment_Details.forEach(value => {
                    cases += parseInt(value.unit);
                })

    
                td1.innerHTML = data.EntryTx;
                td2.innerHTML = data.date;
                td3.innerHTML = cases;
                td4.innerHTML = data.party;
                td5.innerHTML = data.driverNum;
                td6.innerHTML = `PENDING`;
                td6.style.color = "red";
                td7.innerHTML = `<a class="purchase_transaction_popup_open btn" onmousedown="purchase_transaction_popup();" href="#">View</a>`;
    
                tr.innerHTML += td1.outerHTML + td2.outerHTML + td3.outerHTML + td4.outerHTML + td5.outerHTML + td6.outerHTML + td7.outerHTML;
                tbody.appendChild(tr);
            }
        })
    })
}