var phone = "sdgsd012adg3456sdg789sdg11111";
formatPhone(phone)
function formatPhone(phoneInput) {

    //     pNumber = phoneInput.replace(/\D/g, "");
    //     if (pNumber.length > 10) {
    //         trimNumber = pNumber.length - 10;
    //         var frontNum = pNumber.substring(0, trimNumber);
    //     }

    //     splitPhone = phoneInput.split("");
    //     revPhone = splitPhone.reverse();
    //     revPhone = revPhone.toString();


    //     cleanPhone = phoneInput.replace(/\D/g, "");

    //     var sectPhone = cleanPhone.match(regex);
    //     var sectPhone = cleanPhone.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
       
    pNumber = phoneInput.replace(/\D/g, "");
    trimNumber = pNumber.length - 10;
    regex = new RegExp("\^(\\d{" + trimNumber + "})(\\d{3})(\\d{3})(\\d{4})$");
    cleanPhone = pNumber.replace(/\D/g, "");
    var cleanPhone = cleanPhone.match(regex);
    formattedPhone = (cleanPhone[1].length > 0) ? '-' : ''; 
    formattedPhone = cleanPhone[1] + formattedPhone + cleanPhone[2] + '-' + cleanPhone[3] + '-' + cleanPhone[4];
    return formattedPhone
}






 //formats the phone number to follow xxx-xxx-xxxx format with 0-5 x prior for international
 pNumber = company.phone.replace(/\D/g, "");
 if(pNumber.length > 9){
   
   trimNumber = pNumber.length - 10;
   regex = new RegExp("\^(\\d{" + trimNumber + "})(\\d{3})(\\d{3})(\\d{4})$");
   cleanPhone = pNumber.replace(/\D/g, "");
   cleanPhone = cleanPhone.match(regex);
   console.log(i);
   console.log(distributor.name);
   formattedPhone = (cleanPhone[1].length > 0) ? '-' : ''; 
   company.phone = cleanPhone[1] + formattedPhone + cleanPhone[2] + '-' + cleanPhone[3] + '-' + cleanPhone[4];
   }



  //formats the phone number to follow xxx-xxx-xxxx format with 0-5 x prior for international
  pNumber = distributor.phone.replace(/\D/g, "");
  if (pNumber.length > 9) {

      trimNumber = pNumber.length - 10;
      regex = new RegExp("\^(\\d{" + trimNumber + "})(\\d{3})(\\d{3})(\\d{4})$");
      cleanPhone = pNumber.replace(/\D/g, "");
      cleanPhone = cleanPhone.match(regex);
      formattedPhone = (cleanPhone[1].length > 0) ? '-' : '';
      distributor.phone = cleanPhone[1] + formattedPhone + cleanPhone[2] + '-' + cleanPhone[3] + '-' + cleanPhone[4];
  }