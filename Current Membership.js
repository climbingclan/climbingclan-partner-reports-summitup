
function reportCurrentMembership() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 


 // select distinct product_id, order_item_name from wp_wc_order_product_augmented where order_item_name LIKE "%Wednesday%" order by product_id desc;
 //Wednesday
 var spreadsheet = SpreadsheetApp.getActive();
 //var sheet = spreadsheet.getSheetByName('Dashboard');
  //var cell = sheet.getRange('B4').getValues();

// Volunteer Report
//

 //var results = stmt.executeQuery('select distinct  `first_name` "Forenames",`last_name` "Surname", `shipping_postcode` "Postcode",`billing_email` "Email", id "Clan Membership Number" from wp_member_db db JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id where product_id=2118 AND db.cc_member="yes" AND status in ("wc-processing", "wc-completed") AND YEAR(pd.order_created)>YEAR(CURDATE())-1 order by `first_name` ASC;');

var results = stmt.executeQuery('select distinct  `first_name` "Forenames",`last_name` "Surname",(select "02/01/2023" ) "Membership Valid til", `admin-dob` "Dob",  `shipping_postcode` "Postcode", id "Clan Membership Number" from wp_member_db db JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id where product_id=2118 AND db.cc_member="yes" AND status in ("wc-processing", "wc-completed") AND YEAR(pd.order_created)>YEAR(CURDATE())-1 order by `first_name` ASC;');


  //console.log(results);
 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Climbing Clan Current Members List');
 sheet.clearContents();
 var arr=[];
  for (var col = 0; col < numCols; col++) {
   arr.push(metaData.getColumnLabel(col + 1));
 }
 // https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js 
  sheet.appendRow(arr);
 while (results.next()) {
 arr=[];
 for (var col = 0; col < numCols; col++) {
   arr.push(results.getString(col + 1));
 }
 sheet.appendRow(arr);
 }
sheet.autoResizeColumns(1, numCols+1);





//close SQL
results.close();
stmt.close();



//end read data function
} 


//ScriptApp.newTrigger('readData')
//.timeBased()
//.everyMinutes(30)
//.create();
