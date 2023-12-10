


function calc(){
   var confirmation = confirm("Are you sure you want to proceed?")
    if (confirmation == true) {
        if (studentName.value == "" || biology.value == "" ||
        english.value=="" ||math.value=="" || studentID.value=="" 
        ||geo.value==""||chemistry.value==""||physics.value=="") {
            error.style.display ="block";
       }
       else{
          


            if (studentName.value >100 || biology.value>100 ||
            english.value>100 || math.value>100 || geo.value>100 || chemistry.value>100 ||physics.value>100 ) {


                document.getElementById("msgPara3").style.display="none"; 
                document.getElementById("msgHeader").innerHTML= "A field exceed 100 scores";
                document.getElementById("msgPara1").style.display ="none"
               
            }
            else{
         
          
            error.style.display="none";
            var sum = (Number(biology.value)) + (Number(english.value)) + (Number(math.value)) + (Number(geo.value))
            + (Number(chemistry.value)) + (Number(physics.value));
            var cumu = (sum/600*100).toFixed(2);

        if (cumu >=0 && cumu<50) {
           
            document.getElementById("msgHeader").innerHTML= "Welcome " + studentName.value;
           document.getElementById("msgPara1").innerHTML= "This is a great semester with it's own challenges, below shows how well you perform this semester";
           document.getElementById("msgPara3").innerHTML= "You performed woefully this semester, your cumulative score for the semester is "+ cumu +"%";
        }
         else if (cumu >=50 && cumu<60) {
          
             document.getElementById("msgHeader").innerHTML= "Welcome " + studentName.value;
           document.getElementById("msgPara1").innerHTML= "This is a great semester with it's own challenges, below shows how well you perform this semester";
            document.getElementById("msgPara3").innerHTML= "You performed well this semester, your cumulative score for the semester is "+ cumu +"%";
           
        }   else if (cumu >50 && cumu<=100) {
           
            document.getElementById("msgHeader").innerHTML= "Welcome " + studentName.value;
          document.getElementById("msgPara1").innerHTML= "This is a great semester with it's own challenges, below shows how well you perform this semester";
           document.getElementById("msgPara3").innerHTML= "You performed excellently well this semester, your cumulative score for the semester is "+ cumu +"%";
           }
          
              
            }

           
       }
       studentID.value="";
       studentName.value = ""; 
       biology.value =""; 
       english.value ="";
       math.value =""; 
       geo.value= "";
       chemistry.value ="";
       physics.value= "";
       
    }
   

    else{
        console.log("You just cancelled it");
        error.style.display="none";
    }
}