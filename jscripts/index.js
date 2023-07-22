document.getElementById('more_cat').addEventListener('click', () => {
  location.replace("gallery.html");
});

   
window.addEventListener('load', () => {
  document.getElementById('splash').toggle('close');
}) 


function sendEmail() {
 
  if (String(document.getElementById("FullName").value).trim().length !=0 &&
              String(document.getElementById("EventType").value).trim() !=0 &&
              String(document.getElementById("District").value).trim() !=0 &&
              String(document.getElementById("Pincode").value).trim() !=0 &&
              String(document.getElementById("ContactNumber").value).trim() !=0 ) {

    var optional = "";
    
    if (optional.length != 0) {
      optional = String(document.getElementById("Options").value).trim()+" These are my extra optimizations."
    }

    var text = "Hello Sir,%0dI am "+document.getElementById("FullName").value +
              "  from "+document.getElementById("District")+" District ,"+"Pincode "+document.getElementById("Pincode")+". I am Looking for "+document.getElementById("EventType").value+
              " Event Manager.%0dAnd I found your team interesting. \n"+
              "%0dSo, I would like to make a DEAL for My Event."+optional+" You can contact me via Mobile No: "+document.getElementById("ContactNumber").value+
              " or through Mail. Hopefully Looking forward for a quick reply.%0d%0dThank You.";

    mailWith(text);
    
    document.getElementById("FullName").value = "";
    document.getElementById("EventType").value = "";
	  document.getElementById("District").value = "";
  	document.getElementById("Pincode").value = "";
  	document.getElementById("Options").value = "";
  	document.getElementById("ContactNumber").value = "";

  }else{
    alert("Please fill the (*) mark fields");
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
