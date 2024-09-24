const scriptProperties = PropertiesService.getScriptProperties();

const server = scriptProperties.getProperty('cred_server');
const port = parseInt(scriptProperties.getProperty('cred_port'), 10);
const dbName = scriptProperties.getProperty('cred_dbName');
const username = scriptProperties.getProperty('cred_username');
const password = scriptProperties.getProperty('cred_password');
const url = `jdbc:mysql://${server}:${port}/${dbName}`;
const apidomain = scriptProperties.getProperty('cred_apidomain');
const apiusername = scriptProperties.getProperty('cred_apiusername');
const apipassword = scriptProperties.getProperty('cred_apipassword');

function readAllData() {

reportCurrentMembership();
reportParthianAttendeesReport();


}

