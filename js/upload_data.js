// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBn3jTXC7W6shgDKxHD3bk_yJ4XDJql9k",
    authDomain: "datarecoder1.firebaseapp.com",
    databaseURL: "https://datarecoder1.firebaseio.com",
    projectId: "datarecoder1",
    storageBucket: "datarecoder1.appspot.com",
    messagingSenderId: "457026247460"
};
firebase.initializeApp(config);

var db = firebase.firestore();
var userId = localStorage.getItem("userId");


/*************************   Image host to firebase storage    ********************************* */

async function FileHandler(file) {
    if (!file) {
        console.log("No Image Found");
        return "";
    }
    var storageRef = firebase.storage().ref();
    var imagesRef = storageRef.child('images/ads_' + Math.random().toString().substring(2, 6));
    return await imagesRef.put(file)
        .then(async function (snapshot) {
            return await imagesRef.getDownloadURL()
                .then(function (downloadURL) {
                    console.log(downloadURL);
                    return downloadURL;
                })
                .catch((error) => {
                    reject(erroe);
                })
        })
        .catch((e) => {
            console.log("File isn't correct", e)
        });
}


/*************************   Purchase Entry Data UPLOAD TO FIREBASE    ********************************* */

async function newinput() {
    var EntryTx = document.getElementById("nentrytx").value
    var type = $('#ntype').find(":selected").text();
    var area = $('#narea').find(":selected").text();
    var grower = document.getElementById('ngrower').value
    var purchasedate = document.getElementById("npdate").value
    var lastdate = document.getElementById('nldate').value
    var dalal = document.getElementById('nagent').value
    var village = document.getElementById('nvillage').value
    var hookaamount = document.getElementById('nhamount').value
    var toolrate = document.getElementById('ntool').value
    var adpaid = document.getElementById('napaid').value
    var estw = document.getElementById('neweight').value
    var file = document.getElementById("upload").files[0];
    var negotiationAttachment = await FileHandler(file);
    var data = {
        userId, EntryTx, purchasedate, grower, area, village, dalal, type, toolrate, hookaamount, estw, lastdate, adpaid, negotiationAttachment
    }
    console.log(data);

    db.collection("Purchase Entry").add(data)
        .then(function (resp) {
            alert("Data Added Successfully");
            $("#popup_new_account").css("display", "none");
            $("#overlay").css("display", "none");
            getPurchasesData();
        })
        .catch((error) => {
            alert("Error!", "" + error.message + "", "error");
        })

}



/*************************  Input Entry  Data UPLOAD TO FIREBASE    ********************************* */

async function inputentry() {
    var EntryTx = document.getElementById("ientrytx").value;
    var date = document.getElementById("idate").value;
    var grower = document.getElementById('igrower').value;
    var area = document.getElementById('iarea').value;
    var crates = document.getElementById('icrate').value;
    var weight = document.getElementById('ientryweight').value;
    var file = document.getElementById("input-attachment-upload").files[0];
    var AttachWeightReceipt = await FileHandler(file);

    db.collection("Input Entry").add({ EntryTx, date, grower, area, crates, weight, AttachWeightReceipt, userId })
        .then(function (resp) {
            alert("Input Data Added Successfully");
            $("#input_popup").css("display", "none");
            $("#overlay").css("display", "none");
            getInputEntry();
        })
        .catch((error) => {
            alert("Error!", "" + error.message + "", "error");
        })

}

////////////////  INPUT ENTRY END  ////////////////////

/*************************  Output Entry  Data UPLOAD TO FIREBASE    ********************************* */

var typeoptions = ['M GRADE CRATE','A GRADE CRATE','B GRADE CRATE','C GRADE CRATES','A GRADE BOXES','B GRADE BOXES','LOOSE'];

function oselect() {
    var selected = []
        	for(var i=1;i<8;i++)
        	{
        		var temp = $('#oselect'+i).find(":selected").text();
        		if(temp!='--Select--')
        		{
        			selected.push(temp);
        		}
        	}
        	var html = "<option>--Select--</option>"
        	for(var i=0;i<typeoptions.length;i++)
        	{
        		if(selected.indexOf(typeoptions[i])==-1)
        		{
        			html += "<option>" + typeoptions[i] + "</option>"
        		}
        	}
        	for(var i=1;i<8;i++)
        	{
        		var temp = $('#oselect'+i).find(":selected").text();
        		if(temp=='--Select--')
        		{
        			$('#oselect'+i).html(html)
        		}
        		else
        		{
        			$('#oselect'+i).html("<option>"+temp+"</option>"+html)
        		}
        	}
}

function outputentry() {

    var date = document.getElementById('oedate').value;
    var EntryTx = document.getElementById('oentrytx').value;
    var party = document.getElementById('oparty').value;
    var truckNum = document.getElementById('otruckno').value;
    var driverNum = document.getElementById('odphone').value;
    var type = document.getElementById('otype').value;
    
    document.getElementById("oentrytx").value = '';
    document.getElementById("oparty").value = '';
    document.getElementById('otruckno').value = '';
    document.getElementById('odphone').value = '';
    document.getElementById('otype').value = ''

    var Shipment_Details = [];
    for (var j = 1; j < 8; j++) {
        var temp = $('#oselect' + j).find(":selected").text();
        console.log(temp);
        // if (temp == typeoptions[i]) {
        if (temp !== "--Select--") {
            var obj = {
                quality : temp,
                unit : $('#ounit' + j).val(),
                ppk : $('#oppk' + j).val(),
                kg : $('#okg' + j).val(),
                weight : $('#oweight' + j).val(),
                amount : $('#oamount' + j).val()
            }
            Shipment_Details.push(obj);
            // break;
        }
        $("#oselect" + j).val('--Select--').change();
        $('#ounit' + j).val(0)
        $('#oppk' + j).val(0)
        $('#okg' + j).val(0)
        $('#oweight' + j).val(0)
        $('#oamount' + j).val(0)
    }

    var gtotal1 = document.getElementById('ototal1').value;
    var gtotal2 = document.getElementById('ototal2').value;
    var freight = document.getElementById('ofreight').value;
    var material = document.getElementById('omaterial').value;
    var crate = document.getElementById('ocrate').value;
    var driverAdvance = document.getElementById('odad').value;
    var prepaid = document.getElementById('oaprepaid').value;
    var total = document.getElementById('ototal').value;
    var note = document.getElementById('onotes').value;

    document.getElementById('ototal1').value = '';
    document.getElementById('ototal2').value = '';
    document.getElementById('ofreight').value = '';
    document.getElementById('omaterial').value = '';
    document.getElementById('ocrate').value = '';
    document.getElementById('odad').value = '';
    document.getElementById('oaprepaid').value = '';
    document.getElementById('ototal').value = '';
    document.getElementById('onotes').value = '';


    console.log(Shipment_Details);
    var data = {
        EntryTx, date, truckNum, party, driverNum, type, Shipment_Details,
        gtotal1, gtotal2, freight, material, crate, driverAdvance, prepaid, total, note, userId
    }

    db.collection("Output Entry").add(data)
        .then(function (resp) {
            alert("Output Data Added Successfully");
            $("#output_popup").css("display","none");
            $("#overlay").css("display","none");
            getOutputEntry();
        })
        .catch((error) => {
            alert("Error!", "" + error.message + "", "error");
        })

}

////////////////  OUTPUT ENTRY END  ////////////////////


/*************************  BILL Entry  Data UPLOAD TO FIREBASE    ********************************* */

async function billentry() {
    var EntryTx = document.getElementById("bentrytx").value;
    var date = document.getElementById("bdate").value;
    var grower = document.getElementById("bgrower").value;
    var ExpenseAmount = document.getElementById("bexpenseamount").value;
    var party = document.getElementById("bparty").value;
    var labour = document.getElementById("blabour").value;
    var description = document.getElementById("bdescription").value;
    var file = document.getElementById("bill-reciept-upload").files[0];
    var BillReceipt = await FileHandler(file);

    var billData = {
        EntryTx, date, grower, ExpenseAmount, party, labour, description, BillReceipt,userId
    }
    console.log(billData);
    db.collection("Expense Entry").add(billData)
        .then(function (resp) {
            alert("Entry Data Added Successfully");
            $("#bill_popup").css("display","none");
            $("#overlay").css("display","none");
            getExpenses();
        })
        .catch((error) => {
            alert("Error!", "" + error.message + "", "error");
        })
}

////////////////  BILL ENTRY END  ////////////////////






