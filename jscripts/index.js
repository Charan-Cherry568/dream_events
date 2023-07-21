document.getElementById('more_cat').addEventListener('click', () => {
  location.replace("gallery.html");
});


function sendEmail() {
  if (String(document.getElementsByName("FullName").value).trim().length !=0 &&
              String(document.getElementsByName("EventType").value).trim() !=0 &&
              String(document.getElementsByName("District").value).trim() !=0 &&
              String(document.getElementsByName("Pincode").value).trim() !=0 &&
              String(document.getElementsByName("ContactNumber").value).trim() !=0 ) {

    var optional = String(document.getElementsByName("Options").value).trim();
    
    if (optional.length != 0) {
      optional = optional+" These are my extra optimizations."
     }
    var text = "Hello Sir,\n I am "+document.getElementsByName("FullName").value +
              "  from "+document.getElementsByName("District")+" District ,"+"Pincode "+document.getElementsByName("Pincode")+". I am Looking for "+document.getElementsByName("EventType").value+
              " Event Manager. I am interested in your team. \n"+
              "I would like to make a DEAL."+optional+" you can contact me via Mobile No: "+document.getElementsByName("ContactNumber").value+
              " or Mail. Looking forward for a quick reply. \nThank You.";

    mailWith(text);
    
    document.getElementsByName("FullName").value = "";
    document.getElementsByName("EventType").value = "";
	document.getElementsByName("District").value = "";
  	document.getElementsByName("Pincode").value = "";
  	document.getElementsByName("Options").value = "";
  	document.getElementsByName("ContactNumber").value = "";

  }else{
    alert("Please fill the * mark fields");
  }

}

function mailWith(body){ 
  location.href="mailto:ashokdany713@gmail.com?subject=Request for An Event Management&body="+body; 
  window.setTimeout(function () { alert("You will receive reply to this mail in 24 hours") }, 0); 
} 

function mail(){ 
  location.href="mailto:ashokdany713@gmail.com?subject=Doubt Clarification&body=To, The Team Dream Events,"; 
} 

function openMenu() {
	document.querySelector(".dropdown").classList.toggle('open');
}

function scrollToContact() {
  document.getElementById('contact_footer').scrollIntoView();
}

function scrollToFaq() {
  document.getElementById('faqs_section_redirect').scrollIntoView();
}
