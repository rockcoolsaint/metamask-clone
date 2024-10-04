document.addEventListener("DOMContentLoaded", function(){
  // IN THAT WE GOING TO TARGET THE ELEMENT
  document
    .getElementById("accountList")
    .addEventListener("click", changeAccount);
  
  document.getElementById("userAddress").addEventListener("click", copyAddress);

  document.getElementById("transferFund").addEventListener("click", handler);

  document.getElementById("header_network").addEventListener("click", getOpenNetwork);

  document.getElementById("network_item").addEventListener("click", getSelectedNetwork);

  document.getElementById("add_network").addEventListener("click", setNetwork);

  document.getElementById("loginAccount").addEventListener("click", loginUser);

  document.getElementById("accountCreate").addEventListener("click", createUser);

  document.getElementById("openCreate").addEventListener("click", openCreate);

  document.getElementById("sign_up").addEventListener("click", signUp);

  document.getElementById("login_up").addEventListener("click", login);

  document.getElementById("logout").addEventListener("click", logout);

  document.getElementById("open_transfer").addEventListener("click", openTransfer);

  document.getElementById("goBack").addEventListener("click", goBack);

  document.getElementById("openImport").addEventListener("click", openImport);

  document.getElementById("open_activity").addEventListener("click", openActivity);

  document.getElementById("goHomePage").addEventListener("click", goHomePage);

  document.getElementById("openAccountImport").addEventListener("click", openImportModel);

  document.getElementById("close_import_account").addEventListener("click", closeImportModel);

  document.getElementById("add_new_token").addEventListener("click", addToken);
  
  document.getElementById("add_new_account").addEventListener("click", addAccount);
})

// STATE VARIABLE
let providerURL = 'https://shape-sepolia.g.alchemy.com/v2/SyfDzrjp_igUQ-lhN3_jpksTLA48Feik';

let provider;
let privateKey;
let address;

// FUNCTIONS
function handler(){
  document.getElementById("transfer_cernter").style.display = "flex";

  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;
};

function checkbalance(){};

function getOpenNetwork(){};

function getSelectedNetwork(){};

function setNetwork(){};

function loginUser() {};

function createUser() {};

function openCreate(){};

function signUp() {};

function login(){};

function logout(){};

function openTransfer(){};

function goBack(){};

function openImport(){};

function importGoBack(){};

function openActivity(){};

function goHomePage(){};

function openImportModel(){};

function closeImportModel(){};

function addToken(){};

function addAccount(){};

function myFunction(){};

function copyAddress(){};

function changeAccount(){};