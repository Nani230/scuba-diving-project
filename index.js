window.onscroll=function(){



   if(window.pageYOffset>112){
        document.getElementById('nav-parent').style.position='fixed';
        document.getElementById('nav-parent').style.left=0;
        document.getElementById('nav-parent').style.top=0;
        document.getElementById('nav-parent').style.boxShadow="0 1px 3px #d5d5d5";
        document.getElementById('nav-parent').style.backgroundColor='white';
        document.getElementById('nav').style.width="75%";
        document.getElementById('nav').style.color="black";
        document.getElementById('home').style.color="blue";
   }
   else{
        document.getElementById('nav-parent').style.position='static';
        document.getElementById('nav-parent').style.left=0;
        document.getElementById('nav-parent').style.top=0;
        document.getElementById('nav-parent').style.backgroundColor='transparent';
        document.getElementById('nav-parent').style.boxShadow="none";
        document.getElementById('nav').style.width="100%";
        document.getElementById('nav').style.color="white";
        document.getElementById('home').style.color="#f8ea49";

        
   }

//    navbar box shadow

   if(window.pageYOffset>775){
       document.getElementById('nav-parent').style.boxShadow="0 1px 5px #d5d5d5";

   }
   else{
      document.getElementById('nav-parent').style.boxShadow="none";


   }
    
//    back to top visible 

   if(window.pageYOffset>520){
       document.getElementById('btt').style.transform="translateY(0)";


   }
    else{
        document.getElementById('btt').style.transform="translateY(15vh)";


    }
   

}

// code to go back to top 

let scrollvalue = window.pageYOffset;
function scrollToTop(){
    window.scrollTo(0,scrollvalue);
    if(scrollvalue>0){
        scrollvalue-=150;
    }
    else{
        cancelAnimationFrame(anim)

    }

   let anim=requestAnimationFrame(scrollToTop)
}

 document.getElementById('btt').addEventListener("click",function(){
     scrollvalue=window.pageYOffset
     scrollToTop();
 })

//  js for side navbar


    let Status=false;
   

    function menu(){

        if(Status===false){
            document.getElementById('phone-nav').style.marginLeft="0";
            Status=true;
            document.getElementById('line2').style.opacity="0"
            document.getElementById('line1').style.transform="rotateZ(45deg) translateY(10px) translateX(10.5px)";
            document.getElementById('line3').style.transform="rotateZ(-45deg) translateY(-2px) translateX(2px)";
            document.getElementById('line3').style.fontWeight="blod";




        }
        else{
            document.getElementById('phone-nav').style.marginLeft="-65%";
            Status=false;
            document.getElementById('line2').style.opacity="1"
            document.getElementById('line1').style.transform="rotateZ(0deg)";
            document.getElementById('line3').style.transform="rotateZ(0deg)";



        }
      
        

    }

    // js for dots

    function dots(){
        if(Status===false){
           document.getElementById('dot-text').style.opacity="1";
           document.getElementById('dot-text').style.top="55px";

           Status=true;
        }
        else{
           document.getElementById('dot-text').style.opacity="0";
           document.getElementById('dot-text').style.top="40px";

           Status=false;



        }

        
    }