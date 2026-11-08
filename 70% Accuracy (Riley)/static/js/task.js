var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition ;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;

// The current simulation contains Berth 1 and Berth 2 only.
var numberOfBerths = 2;


/*var numbers = [0,1,2,3,4,5,6,7,8];
mycondition = Math.floor(Math.random() * numbers.length);*/


if (mycondition%9 == 0)
{  condition = 0; 
//psiTurk.recordTrialData({'phase':'condition', 'status':'0'});
}

else if (mycondition%9 == 1) 
        { condition = 1;
//psiTurk.recordTrialData({'phase':'condition', 'status':'1'});        
        }
        
        
else if (mycondition%9 == 2) 
        { condition = 2;
        
//psiTurk.recordTrialData({'phase':'condition', 'status':'2'});        
        
        } 
        
else if (mycondition%9 == 3) 
        { condition = 3;
        
//psiTurk.recordTrialData({'phase':'condition', 'status':'3'});        
        
        }        
        
else if (mycondition%9 == 4) 
        { condition = 4;
        
//psiTurk.recordTrialData({'phase':'condition', 'status':'4'});        
        }       

else if (mycondition%9 == 5)
        { condition == 5;
        
//psiTurk.recordTrialData({'phase':'condition', 'status':'5'});        
        }
           
else if (mycondition%9 == 6)
        { condition == 6;
        
//psiTurk.recordTrialData({'phase':'condition', 'status':'6'});        
        }          

else if (mycondition%9 == 7)
        { condition == 7;
//psiTurk.recordTrialData({'phase':'condition', 'status':'7'});        
        }

else (mycondition%9 == 8)
        { condition == 8;
//psiTurk.recordTrialData({'phase':'condition', 'status':'8'});        
        }




var pages = [
     "consent.html",
    "instruct-1.html",
    "NBack0.html",
     "NBack1.html",
      "NBack2.html",
      "View_teammaten0.html",
       "View_teammaten1.html",
        "View_teammaten2.html",
    "Workload_scale.html",
    "Annotation_picture.html",
    "Robot_video.html",
    "SituationalAwareness.html",
    "Questionnaire_page.html",
    "demographics.html",
     "check_video.html",
     "Start_Experiment.html",
     "NBack_video.html",
     "experiment.html",
    "check_question.html",
    "postquestionaire.html"]
    
    
const init = (async () => {
    await psiTurk.preloadPages(pages);
})()



window.resizeTo(screen.width, screen.height);

var instructionPages = [ // add as a list as many pages as you like
    "instruct-1.html"];
    
    
var Nback = function() {
psiTurk.finishInstructions();


var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";



if (condition == 0 || condition == 3 || condition == 6) {
 psiTurk.showPage('NBack0.html');}
 
if (condition == 1 || condition == 4 || condition == 7) {
psiTurk.showPage('NBack1.html');}

if (condition == 2 || condition == 5 || condition == 8) {
psiTurk.showPage('NBack2.html');}
 
 
$("#next").click(function () {
    	    
       currentview = new Workload_scale();
	 
    });

}    


var Workload_scale = function() {


var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";


psiTurk.showPage("Workload_scale.html");



$("#prev").click(function () {
    	    
       currentview = new Nback();
	 
    });

 
$("#next").click(function () {
    	    
       currentview = new Annotation_picture();
	 
    });


} 


var Annotation_picture = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";


psiTurk.showPage("Annotation_picture.html");


$("#prev").click(function () {
    	    
       currentview = new Workload_scale();
	 
    });
 
$("#next").click(function () {
    	    
       currentview = new Robot_video();
	 
    });


}


var Robot_video = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";


psiTurk.showPage("Robot_video.html");

$("#prev").click(function () {
    	    
       currentview = new Annotation_picture();
	 
    });

$("#next").click(function () {
    	    
       currentview = new View_teammate();
	 
    });
}


var View_teammate = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";


if (condition == 0 || condition == 3 || condition == 6) {
psiTurk.showPage("View_teammaten0.html"); }


if (condition == 1 || condition == 4 || condition == 7) {
psiTurk.showPage("View_teammaten1.html"); }


if (condition == 2 || condition == 5 || condition == 8) {
psiTurk.showPage("View_teammaten2.html"); }



$("#prev").click(function () {
    	    
       currentview = new Robot_video();
	 
    });


$("#next").click(function () {
    	    
       currentview = new SituationalAwareness();
	 
    });





}





var SituationalAwareness = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

psiTurk.showPage("SituationalAwareness.html");


$("#prev").click(function () {
    	    
       currentview = new View_teammate();
	 
    });

$("#next").click(function () {
    	    
       currentview = new Questionnaire_page();
	 
    });

}    
    
var Questionnaire_page = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

psiTurk.showPage("Questionnaire_page.html");


$("#prev").click(function () {
    	    
       currentview = new SituationalAwareness();
	 
    });


$("#next").click(function () {
    	    
       currentview = new DemoQuestionnaire();
	 
    });} 



    


var DemoQuestionnaire = function() {

    
    
    var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your demographic information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

    record_responses = function() {

      	    psiTurk.recordTrialData({'phase':'demoquestionnaire', 'status':'submit'});

	    $('input[name=age]').each( function(i, val) {
	       psiTurk.recordUnstructuredData(this.id, this.value);
	     });
	     
	     $('select[name=gender]').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		
		
		$('input[name=prolific_id]').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

       var radio_groups = {}
	     $(":radio").each(function(i, val){
	        radio_groups[this.name] = true;
	      })

	    for(group in radio_groups){
	        psiTurk.recordUnstructuredData(group,$(":radio[name='"+group+"']:checked").val());
	    }

    };

    prompt_resubmit = function() {
	replaceBody(error_message);
	$("#resubmit").click(resubmit);
    };

    resubmit = function() {
	replaceBody("<h1>Trying to resubmit...</h1>");
	reprompt = setTimeout(prompt_resubmit, 10000);

	psiTurk.saveData({
	    success: function() {
		clearInterval(reprompt);

	    },
	    error: prompt_resubmit
	});
    };

   
    psiTurk.showPage('demographics.html');

 psiTurk.recordTrialData({'phase':'condition', 'status':'condition' + condition})   

    psiTurk.recordTrialData({'phase':'demoquestionnaire', 'status':'begin'});

    var r1, r2, r3, r4,r5 = false;

    (function() {
	var empty = true;
	$('#age').keyup(function() {

            empty = false;
            $('#age').each(function() {
		if ($(this).val() == '') {
                    empty = true;
		}
            });

            if (empty) {
		 r1 = false;
		 checkenable();
            } else {
		r1 = true;
		checkenable();
            }
	});
    })()
    
    $("input[name=age]").change(function(){
		if ($('input[name=age]').val()  == '' || $('input[name=age]').val() < 18) {
			r1 = false;
			checkenable();
		} else {
			r1 = true;
			checkenable();
		}
    });

    $("input[name=experience1]").change(function(){
	r2=true;
	checkenable();
    });

    $("input[name=experience2]").change(function(){
	r4=true;
	checkenable();
    });

    $("select[name=gender]").change(function(){
	r3=true;
	checkenable();
    });
    
    
    $("input[name=prolific_id]").change(function(){
	r5=($(this).val().trim() !== "");
	checkenable();
    });

    function checkenable(){
	if (r1 && r2 && r3 && r4 && r5){
	    $('#next').removeAttr('disabled');
	}
	else {
	    $('#next').prop('disabled', true);
	}
    }

    $("#next").click(function () {
    	record_responses();
    	psiTurk.saveData();       
       currentview = new VidCheck();	
	
 
    });
};


var VidCheck = function() {
    
    var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

    var ppcounter = 0;
    var rscounter = 0;

    record_responses = function() {
        psiTurk.recordTrialData({'phase':'vidcheck', 'status':'submit'});	
    };

    prompt_resubmit = function() {
        replaceBody(error_message);
        $("#resubmit").click(resubmit);
    };

    resubmit = function() {
        replaceBody("<h1>Trying to resubmit...</h1>");
        reprompt = setTimeout(prompt_resubmit, 10000);
        psiTurk.saveData({
            success: function() {
                clearInterval(reprompt);
            }, 
            error: prompt_resubmit
        });
    };
    
    // Load the questionnaire snippet 
    psiTurk.showPage('check_video.html');

    psiTurk.recordTrialData({'phase':'vidcheck', 'status':'begin'});

    var r1, r2, r3 = false;
   
    function checkenable(){
        if (r1 && r2 && r3){
            $('#next').removeAttr('disabled');
        }
        else {
            $('#next').prop('disabled', true);
        }
    }

    $("input[name=seeword]").keyup(function(){
        var word = $("input[name=seeword]").val();
        word = word.toLowerCase();
        r1 = false;
        if (word.includes("amazing")) {
            r1=true;
        }
        checkenable();
    });

    $("input[name=hearword]").keyup(function(){
        var word = $("input[name=hearword]").val();
        word = word.toLowerCase();
        r2 = false;
        if (word.includes("forest")) {
            r2 = true;
        }
        checkenable();
    });
    
    $("#video1").on('ended', function() {
        psiTurk.recordTrialData({'phase':'vidcheck', 'status':'video ended'});
        r3 = true;
        checkenable();
    });
    
    $("#ppbutton").click(function () {
        psiTurk.recordTrialData({'phase':'vidcheck', 'status':'play/pause clicked: '+ppcounter});
        ppcounter += 1;
    });
    
    $("#rsbutton").click(function () {
        psiTurk.recordTrialData({'phase':'vidcheck', 'status':'restart clicked: '+rscounter});
        rscounter += 1;
    });

    $("#next").click(function () {
        record_responses();
        currentview = new StartExperiment();
    });
};

/*var Nback = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

 psiTurk.showPage('NBack_video.html');
 
 if (condition == 0 || condition == 3 || condition == 6) {
 $("#N").show()
 $("#N").trigger('play');
  $("#N_1").hide()
   $("#N_2").hide()
 }
 
 if (condition == 1 || condition == 4 || condition == 7) {
 $("#N").hide()
  $("#N_1").show()
   $("#N_1").trigger('play');
   $("#N_2").hide()
 }
  

 if (condition == 2 || condition == 5 || condition == 8) {
 $("#N").hide()
  $("#N_1").hide()
   $("#N_2").show()
    $("#N_2").trigger('play');
 }


$("#next").click(function () {    	    
       currentview = new StartExperiment();
	 
    });} */



var StartExperiment = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

 psiTurk.showPage('Start_Experiment.html');


$("#next").click(function () {
    	    
       currentview = new StroopExperiment();
	 
    });

}


var StroopExperiment = function() {

var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";


 var yes = 1 ;
 var no = 1;
 var invalid =1;
 var valid =1; 


 record_responses = function() {
        psiTurk.recordTrialData({'phase':'Task', 'status':'submit'});	
    };

    prompt_resubmit = function() {
        replaceBody(error_message);
        $("#resubmit").click(resubmit);
    };

    resubmit = function() {
        replaceBody("<h1>Trying to resubmit...</h1>");
        reprompt = setTimeout(prompt_resubmit, 10000);
        psiTurk.saveData({
            success: function() {
                clearInterval(reprompt);
            }, 
            error: prompt_resubmit
        });
    };


 psiTurk.showPage('experiment.html');

// Communication prompts belong to the number-memory task pane. Moving them
// inside #msg1 makes the existing task/teammate toggle hide them with that pane.
$("#id_confrmdiv, #id_block, #id_wh").appendTo("#msg1");

// The template still contains legacy three-berth controls and video elements.
// Remove them so the active task can only offer and display Berths 1 and 2.
$("#id_Berth3, #Berth3, #SA_Berth3, " +
  "#1block_3drop, #2block_3drop, #3block, #3block_1drop, " +
  "#3block_2drop, #bag_berth_3").remove();

// Prompt panels must start hidden. The selected communication strategy will
// reveal only its own panel at the appropriate time.
$("#id_confrmdiv, #id_block, #id_wh, #id_SA, #id_workload").hide();

function setSituationAwarenessScreenActive(isActive) {
    $("body").toggleClass("sa-active", isActive);
    $("#id_SA").toggle(isActive);
}

// Existing response handlers record rewards and start the appropriate videos.
// This delegated handler runs afterward and guarantees that the answered panel
// is dismissed in every question/video branch.
$(document).on(
    "click.communicationPromptCleanup",
    "#id_truebtn, #id_falsebtn, #id_Berth1, #id_Berth2, #Berth1, #Berth2, #SA_Berth1, #SA_Berth2",
    function () {
        if (this.id === "SA_Berth1" || this.id === "SA_Berth2") {
            setSituationAwarenessScreenActive(false);
            $("#SA_Berth1, #SA_Berth2").hide();
            return;
        }

        if (this.id === "id_truebtn" || this.id === "id_falsebtn") {
            $("#id_confrmdiv, #id_truebtn, #id_falsebtn").hide();
            return;
        }

        if (this.id === "id_Berth1" || this.id === "id_Berth2") {
            $("#id_block, #id_Berth1, #id_Berth2").hide();
            return;
        }

        $("#id_wh, #Berth1, #Berth2").hide();
    }
);

// Workload and situation-awareness questions run on independent timers. When
// both overlays have expired, explicitly restore the task pane and synchronize
// the task/teammate toggle so unanswered questions cannot trap the participant
// in an overlay-to-overlay loop.
function restoreTaskPaneWhenQuestionsClear() {
    if ($("#id_workload").is(":visible") || $("#id_SA").is(":visible")) {
        return;
    }

    $(".hidemsg").hide();
    $("#msg1").show();
    $(".js-button").text("View Teammate");

    if (typeof index !== "undefined") {
        index = 2;
    }
}

// Workload Scale -------------------------------------------------------------------------------------------------------------------------------------------------------------

setInterval(workload, 50000);

var question = ['Rate your workload on a scale of 1-3'];

workload_one = 0;
workload_two = 0;
workload_three = 0;
var workloadPromptActive = false;

// While the workload question is open, prevent the number-memory task from
// receiving key presses. Key presses on the workload buttons are still allowed.
$(document).on("keypress.workloadLock", function (event) {
    if (!workloadPromptActive) {
        return;
    }

    event.stopImmediatePropagation();
    if ($(event.target).closest("#id_workload").length === 0) {
        event.preventDefault();
    }
});

function setWorkloadScreenActive(isActive) {
    workloadPromptActive = isActive;
    $("body").toggleClass("workload-active", isActive);
    $(".js-button").prop("disabled", isActive);
    $("#msg1, #msg2, #experiment-controls")
        .prop("inert", isActive)
        .attr("aria-hidden", isActive ? "true" : null);
}

function workload() {
    // Preserve the original timed progression: an unanswered workload prompt
    // expires when the next cycle starts. Release its interaction lock before
    // hiding it so communication buttons cannot be left inert.
    if (workloadPromptActive) {
        setWorkloadScreenActive(false);
    }

    $("#question").html(question);
    $("#id_workload").hide();
    restoreTaskPaneWhenQuestionsClear();

    setTimeout(function () {
        setWorkloadScreenActive(true);
        $("#id_workload").show();
        $("#id_one").show();
        $("#id_two").show();
        $("#id_three").show();
        $("#id_one").trigger("focus");

        $("#id_one").click(function () {
            psiTurk.recordTrialData({'phase': 'Workload', 'status': 'workload_one'});
            $("#id_workload").hide();
            setWorkloadScreenActive(false);
            $("#question").hide();
            $("#id_one").hide();
            $("#id_two").hide();
            $("#id_three").hide();
        });

        $("#id_two").click(function () {
            psiTurk.recordTrialData({'phase': 'Workload', 'status': 'workload_two'});
            $("#id_workload").hide();
            setWorkloadScreenActive(false);
            $("#question").hide();
            $("#id_one").hide();
            $("#id_two").hide();
            $("#id_three").hide();
        });

        $("#id_three").click(function () {
            psiTurk.recordTrialData({'phase': 'Workload', 'status': 'workload_three'});
            $("#id_workload").hide();
            setWorkloadScreenActive(false);
            $("#question").hide();
            $("#id_one").hide();
            $("#id_two").hide();
            $("#id_three").hide();
        });
    }, 25000);
}

workload();
//--------------------------------------------------------------------------------------------------------------------



$("#1block").hide() ;
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide() ;
$("#bag_berth_2").hide() ;
$("#bag_berth_3").hide() ;

// Silent commm---------------------------------------------------------- // introduce malfunction --evn silent can cause malfunction

var silent_questions = ['I think Berth1 is blocked.',
                       'I think Berth2 is blocked.'];
                    
var ne_silent=0;                  

var silentclear;
var random_video;

function silentFunction(){


var randomQuestion_silent = Math.floor(Math.random() * silent_questions.length);

random_video = Math.floor(Math.random()*numberOfBerths);



if ((silent_questions[randomQuestion_silent] == 'I think Berth1 is blocked.') ||(silent_questions[randomQuestion_silent] == 'I think Berth2 is blocked.') ||(silent_questions[randomQuestion_silent] == 'I think Berth3 is blocked.'))   {

psiTurk.recordTrialData({'phase':'SA_silent_question', 'status':silent_questions[randomQuestion_silent]}); // wrong perception in silent strategy
if (random_video == 0) {$("#1block").show() ; // reward assign based on actions 
$("#1block").trigger('play');
psiTurk.recordTrialData({'phase':'SA_video', 'status':'random video 0'});
psiTurk.recordTrialData({'phase':'silent_video_shown', 'status':'Berth 1 blocked'});
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide(); console.log("video0");
}

if (random_video == 1) { // reward assign based on actions
psiTurk.recordTrialData({'phase':'SA_video', 'status':'random video 1'}); 
psiTurk.recordTrialData({'phase':'silent_video_shown', 'status':'Berth 2 blocked'});
$("#2block").show() ;
$("#2block").trigger('play');
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();console.log("video1");
}


if (random_video == 2) { // reward assign based on actions 
psiTurk.recordTrialData({'phase':'silent_video_shown', 'status':'Berth 3 blocked'});psiTurk.recordTrialData({'phase':'SA_video', 'status':'random video 2'});
$("#3block").show() ;
$("#3block").trigger('play');
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#1block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide(); console.log("video2");
}}
ne_silent = silent_questions[randomQuestion_silent];
//$("#random_silent").html(wh_questions[randomQuestion_wh]);
silentclear = setTimeout ( function () {


psiTurk.recordTrialData({'phase':'SA_silent_question', 'status':silent_questions[randomQuestion_silent]});

if ( silent_questions[randomQuestion_silent] == 'I think Berth1 is blocked.') {
         
          
 if (random_video == 0) {         

$("#1block").hide() ; // reward assign based on actions 


$("#1block_2drop").show(); // robot action 
$("#1block_2drop").trigger('play'); psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'});
$("#2block").hide();
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
 $("#1block_3drop").hide() ; $("#bag_berth_1").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});
               
        

}

 if (random_video == 1) {         

$("#2block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'});
$("#2block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_3").hide();$("#2block_3drop").hide() ; $("#bag_berth_2").hide();psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});           
     
   
 }

 if   (random_video == 2) { // action taken by the robot
 
$("#3block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); 
$("#3block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_1").hide();$("#3block_2drop").hide() ; $("#bag_berth_3").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
   
   
 }
 
// tune reward based on user click here robot is silent so no user intervention--- 
 
/*  if (random_video_berth1 ==0) { $("#1block_3drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +50'}); //correct reward high
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#1block_2drop'}); }
  if (random_video_berth1 ==1) { $("#1block_2drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#1block_3drop'}); }
  if (random_video_berth1 ==2) { $("#1block_3drop").hide() ; $("#1block_2drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'}); //incorrect reward large negative
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_1'}); } 
 
 if (random_video_berth2 ==0) { $("#2block_3drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward 50'}); //correct reward high
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#2block_1drop'}); }
if (random_video_berth2 ==1) { $("#2block_1drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#2block_3drop'});}
if (random_video_berth2 ==2) { $("#2block_1drop").hide() ; $("#2block_3drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'});//correct reward large negative
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_2'});}
 
  if (random_video_berth3 ==0) { $("#3block_2drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +50'}); //correct reward high
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#3block_1drop'}); }
  if (random_video_berth3 ==1) { $("#3block_1drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#3block_2drop'}); }
  if (random_video_berth3 ==2) { $("#3block_1drop").hide() ; $("#3block_2drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'}); //correct reward large negative
  psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_3'});}  */

}

if ( silent_questions[randomQuestion_silent] == 'I think Berth2 is blocked.') {
         
          
 if (random_video == 0) {         

$("#1block_2drop").show(); // robot action 
$("#1block_2drop").trigger('play'); psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'});
$("#2block").hide();
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
 $("#1block_3drop").hide() ; $("#bag_berth_1").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});     

}

 if (random_video == 1) {         

$("#2block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'});
$("#2block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_3").hide();$("#2block_3drop").hide() ; $("#bag_berth_2").hide();psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});          
     
   
 }

 if   (random_video == 2) {  
 
$("#3block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); 
$("#3block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_1").hide();$("#3block_2drop").hide() ; $("#bag_berth_3").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
   
 }
 
/*  if (random_video_berth1 ==0) { $("#1block_3drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +50'}); //correct reward high
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#1block_2drop'}); }
  if (random_video_berth1 ==1) { $("#1block_2drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#1block_3drop'}); }
  if (random_video_berth1 ==2) { $("#1block_3drop").hide() ; $("#1block_2drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'}); //incorrect reward large negative
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_1'}); }  
 
 
if (random_video_berth2 ==0) { $("#2block_3drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward 50'}); //correct reward high
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#2block_1drop'}); }
if (random_video_berth2 ==1) { $("#2block_1drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#2block_3drop'});}
if (random_video_berth2 ==2) { $("#2block_1drop").hide() ; $("#2block_3drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'});//correct reward large negative
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_2'});}

 
  if (random_video_berth3 ==0) { $("#3block_2drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +50'}); //correct reward high
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#3block_1drop'}); }
  if (random_video_berth3 ==1) { $("#3block_1drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#3block_2drop'}); }
  if (random_video_berth3 ==2) { $("#3block_1drop").hide() ; $("#3block_2drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'}); //correct reward large negative
  psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_3'});}  */
 

}


if ( silent_questions[randomQuestion_silent] == 'I think Berth3 is blocked.') {
         
          
 if (random_video == 0) {         

$("#1block_2drop").show(); // robot action 
$("#1block_2drop").trigger('play'); psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'});
$("#2block").hide();
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
 $("#1block_3drop").hide() ; $("#bag_berth_1").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});              
        

}

 if (random_video == 1) {         

$("#2block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'});
$("#2block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_3").hide();$("#2block_3drop").hide() ; $("#bag_berth_2").hide();psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});        
     
   
 }

 if   (random_video == 2) {   
 
$("#3block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); 
$("#3block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_1").hide();$("#3block_2drop").hide() ; $("#bag_berth_3").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); 
 }
 
/*if (random_video_berth1 ==0) { $("#1block_3drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +50'}); //correct reward high
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#1block_2drop'}); }
  if (random_video_berth1 ==1) { $("#1block_2drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#1block_3drop'}); }
  if (random_video_berth1 ==2) { $("#1block_3drop").hide() ; $("#1block_2drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'}); //incorrect reward large negative
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_1'}); }  
 
 
if (random_video_berth2 ==0) { $("#2block_3drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward 50'}); //correct reward high
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#2block_1drop'}); }
if (random_video_berth2 ==1) { $("#2block_1drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#2block_3drop'});}
if (random_video_berth2 ==2) { $("#2block_1drop").hide() ; $("#2block_3drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'});//correct reward large negative
psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_2'});}
 
 
 
 
  if (random_video_berth3 ==0) { $("#3block_2drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +50'}); //correct reward high
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#3block_1drop'}); }
  if (random_video_berth3 ==1) { $("#3block_1drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward +30'}); //correct reward medium
 psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#3block_2drop'}); }
  if (random_video_berth3 ==2) { $("#3block_1drop").hide() ; $("#3block_2drop").hide(); psiTurk.recordTrialData({'phase':'SA_silent_reward', 'status':'Reward -100'}); //correct reward large negative
  psiTurk.recordTrialData({'phase':'Silent_put_bag', 'status':'#bag_berth_3'});} */
}

}, 5000);


};                   


var SA_question = ['Which berth is blocked?'];

// Silent SA ----------------------------------------------------------------

function sawareness_silent()


{
 $("#id_SA, #SA_Berth1, #SA_Berth2").hide();
 setSituationAwarenessScreenActive(false);
 restoreTaskPaneWhenQuestionsClear();
 $("#SA_Berth1, #SA_Berth2").off("click");
  
 setTimeout(function(){   
   if (random_video == 0)
    {
    psiTurk.recordTrialData({'phase':'SA_silent_question', 'status':'I think Berth1 is blocked.'});
    
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth1'});
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth2'});
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent',  'status':'SA_Berth3'});
    });    
    
    }
    
    
     
    if (random_video == 1)
    {
    psiTurk.recordTrialData({'phase':'SA_silent_question', 'status':'I think Berth2 is blocked.'});
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth1'});
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth2'});
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth3'});
    });
    
     
    }
     
     if (random_video == 2)
    {
    psiTurk.recordTrialData({'phase':'SA_silent_question', 'status':'I think Berth3 is blocked.'});
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth1'});
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent', 'status':'SA_Berth2'});
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    

psiTurk.recordTrialData({'phase':'SA_silent',  'status':'SA_Berth3'});
    });
    
    }
      }, 45000);
  } 
  
/****************
* Communication Strategy yes no *
****************/ 

$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide() ;
$("#bag_berth_2").hide() ;
$("#bag_berth_3").hide() ;


var questions = ['I think Berth 1 is blocked. Can I put the bag on Berth 2?',
                 'I think Berth 2 is blocked. Can I put the bag on Berth 1?'];
                   
    
var follow_up = ['Then where do you want me to put it?']; 
var myfunctionclear;
var ne = 0;

var random_video;
 
function myFunction(){

$("#id_truebtn, #id_falsebtn, #id_Berth1, #id_Berth2").off("click");

var randomQuestion = Math.floor(Math.random() * questions.length);

psiTurk.recordTrialData({'phase':'yn_question', 'status':'question'+questions[randomQuestion]});

// random_video = Math.floor(Math.random()*numberOfBerths);
// make the robot's assessment correct with 70% probability.
var robotCorrect = Math.random() < 0.70;
if (robotCorrect) {
    random_video = randomQuestion;
} else {
    random_video = 1 - randomQuestion;
}

// record whether the robot's initial assessment was correct.
psiTurk.recordTrialData({
    'phase': 'robot_accuracy',
    'status': robotCorrect ? 'correct' : 'incorrect'
});

psiTurk.recordTrialData({'phase':'yn_question', 'status':'question'+questions[randomQuestion]});

if ((questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 2?') || (questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 3?') ||(questions[randomQuestion] ==  'I think Berth 2 is blocked. Can I put the bag on Berth 1?' )  || (questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 3?' ) ||
(questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 1?' )   || (questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 2?' ) )   
{

if (random_video == 0) {$("#1block").show() ;
$("#1block").trigger('play');
psiTurk.recordTrialData({'phase':'yn_video_shown', 'status':'Berth1 is blocked.'});
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
}

if (random_video == 1) {
psiTurk.recordTrialData({'phase':'yn_video_shown', 'status':'Berth2 is blocked.'});
$("#2block").show() ;
$("#2block").trigger('play');
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
}


if (random_video == 2) {
psiTurk.recordTrialData({'phase':'yn_video_shown', 'status':'Berth3 is blocked.'});
$("#3block").show() ;
$("#3block").trigger('play');
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#1block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
}
}

ne = questions[randomQuestion];

$("#random").html(questions[randomQuestion]);
    
$("#id_confrmdiv").hide();
$("#id_block").hide();


myfunctionclear=setTimeout(function () {

$("#id_confrmdiv").show();
$("#id_truebtn").show();
$("#id_falsebtn").show();

$("#id_truebtn").click(function() {
    
psiTurk.recordTrialData({'phase':'Comm_yes_no', 'status':'yes '});


$("#id_confrmdiv").hide();    
$("#id_truebtn").hide();    
$("#id_falsebtn").hide();    


if ( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 2?') 
    
{

if (random_video == 0)

{
$("#1block_2drop").show(); // robot action 
$("#1block_2drop").trigger('play'); psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'});
$("#2block").hide();
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
 $("#1block_3drop").hide() ; $("#bag_berth_1").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});

}

if ((random_video == 1) ||(random_video == 2)) {console.log("wrong");psiTurk.recordTrialData({'phase':'Invalid', 'status':'invalid action'}); //wrong user action}
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
}
  
//  if (random_video_berth1 ==0) { $("#1block_3drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //correct reward high
// psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'}); }
//  if (random_video_berth1 ==1) { $("#1block_2drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //correct reward medium
 // psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_3drop'}); }
 // if (random_video_berth1 ==2) { $("#1block_3drop").hide() ; $("#1block_2drop").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'}); //correct reward large negative
 // psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_1'}); }

} 

if ( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 3?') 
    
{

if (random_video == 0)

{
 $("#1block_3drop").show() ;  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_3drop'});
$("#1block_3drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_3").hide(); $("#1block_2drop").hide() ; $("#bag_berth_1").hide();psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});
}

if ((random_video == 1) ||(random_video == 2)) {console.log("wrong");psiTurk.recordTrialData({'phase':'Invalid', 'status':'invalid action'});//wrong user action}
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
}
  
//  if (random_video_berth1 ==0) { $("#1block_3drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //correct reward medium
//   psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'}); }
 // if (random_video_berth1 ==1) { $("#1block_2drop").hide() ; $("#bag_berth_1").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});//correct reward high
 //   psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_3drop'}); }
 // if (random_video_berth1 ==2) { $("#1block_3drop").hide() ; $("#1block_2drop").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});//correct reward large negative
  //  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_1'}); }

} 


if ( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 1?') 
    
{

if (random_video == 1)

{
$("#2block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'});
$("#2block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_3").hide();$("#2block_3drop").hide() ; $("#bag_berth_2").hide();psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});
}

if ((random_video == 0) ||(random_video == 2)) {console.log("wrong");psiTurk.recordTrialData({'phase':'Invalid', 'status':'invalid action'});//wrong user action}
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
}
  
//  if (random_video_berth2 ==0) { $("#2block_3drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //correct reward high
//  }
 // if (random_video_berth2 ==1) { $("#2block_1drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'});//correct reward medium
 // }
 // if (random_video_berth2 ==2) { $("#2block_1drop").hide() ; $("#2block_3drop").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});//correct reward large negative
//  }

} 



if ( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 3?') 
    
{

if (random_video == 1)

{
$("#2block_3drop").show(); psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_3drop'});
$("#2block_3drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_3").hide();$("#2block_1drop").hide() ; $("#bag_berth_2").hide();

psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); 
}

if ((random_video == 0) ||(random_video == 2)) {console.log("wrong");psiTurk.recordTrialData({'phase':'Invalid', 'status':'invalid action'});//wrong user action}
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
}
  
 // if (random_video_berth2 ==0) { $("#2block_3drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //correct reward medium
//  }
//  if (random_video_berth2 ==1) { $("#2block_1drop").hide() ; $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //correct reward high
//  }
 // if (random_video_berth2 ==2) { $("#2block_1drop").hide() ; $("#2block_3drop").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'}); //correct reward large negative
//  }

}


if ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 1?') 
    
{

if (random_video == 2)

{
$("#3block_1drop").show();  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); 
$("#3block_1drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_1").hide();$("#3block_2drop").hide() ; $("#bag_berth_3").hide();
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});
}

if ((random_video == 0) ||(random_video == 1)) {console.log("wrong");psiTurk.recordTrialData({'phase':'Invalid', 'status':'invalid action'});//wrong user action}
 psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
}
  
 // if (random_video_berth3 ==0) { $("#3block_2drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //correct reward high
//  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'});  }
 // if (random_video_berth3 ==1) { $("#3block_1drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //correct reward medium
//  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_2drop'});}
//  if (random_video_berth3 ==2) { $("#3block_1drop").hide() ; $("#3block_2drop").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});//correct reward large negative
//  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_3'});}

}



if ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 2?') 
    
{

if (random_video == 2)

{
$("#3block_2drop").show(); psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_2drop'});
$("#3block_2drop").trigger('play');
$("#2block").hide();
$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#bag_berth_2").hide();
$("#bag_berth_1").hide();
$("#3block_1drop").hide() ; $("#bag_berth_3").hide();psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});
}

if ((random_video == 0) ||(random_video == 1)) {console.log("wrong");psiTurk.recordTrialData({'phase':'Invalid', 'status':'invalid action'});//wrong user action}
psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
}
  
//  if (random_video_berth3 ==0) { $("#3block_2drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //correct reward medium
//  psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); }
 // if (random_video_berth3 ==1) { $("#3block_1drop").hide() ; $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //correct reward high
//   psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_2drop'});}
//  if (random_video_berth3 ==2) { $("#3block_1drop").hide() ; $("#3block_2drop").hide(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'}); //correct reward large negative
// psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_3'});  }

}
 
});

$("#id_falsebtn").click(function() {

    psiTurk.recordTrialData({'phase':'Comm_yes_no', 'status':'no '});
    
       
    $("#id_confrmdiv").hide();
    
    $("#id_truebtn").hide();    
    
    $("#id_falsebtn").hide();

  
     
if   (random_video == 0) {
 
  if ( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 2?') {
    
    
         $("#followup").html(follow_up);
         psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'}); // either user or robot can make mistake 
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
              $("#id_Berth1").click(function() {
               psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_1'}); // user incorrect
               psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#1block").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();
                $("#bag_berth_1").show(); //invalid pose large negative reward             
                 psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});
                 $("#bag_berth_1").trigger('play');
                 $("#1block_2drop").hide(); 
                 $("#1block_3drop").hide(); $("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;             
                })
    
        $("#id_Berth2").click(function() {
                           psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'}); // user correct
                                          psiTurk.recordTrialData({'phase':'user', 'status':'valid'});
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#1block").hide();
                $("#id_Berth3").hide();
                $("#1block_2drop").show(); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //high postive reward    
                $("#1block_2drop").trigger('play');
                 $("#1block_3drop").hide();                 
                   $("#bag_berth_1").hide(); $("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;                
                })
    
    
        $("#id_Berth3").click(function() {
       psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_3drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});
       $("#id_block").hide();
       $("#id_Berth1").hide();$("#1block").hide();
       $("#id_Berth2").hide();  
        $("#id_Berth3").hide();
        $("#1block_3drop").show(); $("#1block_3drop").trigger('play'); psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //medium positive reward          

        $("#bag_berth_1").hide();         
        $("#1block_2drop").hide();   $("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;              
        })
        
 
 }   
    

if ( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 3?') {
    
    
         $("#followup").html(follow_up); psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#1block").hide();
                $("#id_Berth3").hide();
                $("#bag_berth_1").show();$("#bag_berth_1").trigger('play');$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_1'});               psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'}); //invalid pose large negative reward             

                 $("#1block_2drop").hide(); 
                 $("#1block_3drop").hide();  $("#bag_berth_2").hide(); $("#bag_berth_3").hide();           
                })
    
        $("#id_Berth2").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#1block").hide();
                $("#id_Berth3").hide();
                $("#1block_2drop").show();$("#1block_2drop").trigger('play');$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;$("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
                 psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //medium postive reward    

                 $("#1block_3drop").hide();                 
                   $("#bag_berth_1").hide();               
                })
    
    
        $("#id_Berth3").click(function() {
   
       $("#id_block").hide();
       $("#id_Berth1").hide();
       $("#id_Berth2").hide();  $("#1block").hide();
        $("#id_Berth3").hide();
        $("#1block_3drop").show();        $("#1block_3drop").trigger('play');  $("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;$("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
        psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_3drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});
        psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //high positive reward          

        $("#bag_berth_1").hide();         
       $("#1block_2drop").hide();               
        })


    
 }
 
 
 if (( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 1?')||( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 3?')||
 ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 1?') || ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 2?')) {
 
     
         $("#followup").html(follow_up); psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#1block").hide();
                $("#id_Berth3").hide();
                $("#bag_berth_1").show(); $("#bag_berth_1").trigger('play');$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_1'});               psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'}); //invalid pose large negative reward             

                 $("#1block_2drop").hide(); 
                 $("#1block_3drop").hide();    $("#bag_berth_2").hide(); $("#bag_berth_3").hide();         
                })
    
        $("#id_Berth2").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#1block").hide();
                $("#id_Berth3").hide();
                $("#1block_2drop").show(); $("#1block_2drop").trigger('play'); $("#2block").hide();$("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;
                 psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_2drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); //large postive reward    

                 $("#1block_3drop").hide();                 
                   $("#bag_berth_1").hide();               
                })
    
    
        $("#id_Berth3").click(function() {
   
       $("#id_block").hide();
       $("#id_Berth1").hide();$("#1block").hide();
       $("#id_Berth2").hide();  
        $("#id_Berth3").hide();$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;$("#bag_berth_2").hide(); $("#bag_berth_3").hide();
$("#3block_2drop").hide() ;
        $("#1block_3drop").show(); 
        psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#1block_3drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});
        psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); //medium positive reward          
       $("#1block_3drop").trigger('play');  
        $("#bag_berth_1").hide();         
       $("#1block_2drop").hide();               
        })


  }
}





 if   (random_video == 1) {
 
  if ( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 1?') {
    
    
         $("#followup").html(follow_up);psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#2block").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;        
   
                $("#2block_1drop").show() ; 
                $("#2block_1drop").trigger('play');
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'});               psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});
                 psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});                    // high positive reward       
                $("#bag_berth_2").hide(); $("#bag_berth_1").hide(); $("#bag_berth_3").hide();
                $("#2block_3drop").hide() ;
                })
    
        $("#id_Berth2").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#2block").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;        
   
                $("#2block_1drop").hide() ;                 psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});
                $("#bag_berth_2").show();   psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});         // large negative reward            
                $("#bag_berth_2").trigger('play'); 
                                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_2'}); 
                $("#2block_3drop").hide() ;
                })
    
    
        $("#id_Berth3").click(function() {
   
       $("#id_block").hide();
       $("#id_Berth1").hide();$("#2block").hide();
       $("#id_Berth2").hide();  
        $("#id_Berth3").hide();$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
          $("#2block_1drop").hide() ;   $("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;        
   
          $("#bag_berth_2").hide(); 
          $("#2block_3drop").show() ;
         $("#2block_3drop").trigger('play'); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});
         psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'});   // medium positive reward  
        psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_3drop'});       
        })
        

 }  
 

if ( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 3?') {
    
    
         $("#followup").html(follow_up); psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
               $("#id_Berth2").hide();  $("#2block").hide();
                $("#id_Berth3").hide();$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ; 
                $("#2block_1drop").show() ; $("#2block_1drop").trigger('play'); 
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});     
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); // medium positive reward       
                $("#bag_berth_2").hide(); 
                $("#2block_3drop").hide() ;
                })
    
        $("#id_Berth2").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
               $("#id_Berth2").hide();  $("#2block").hide();
                $("#id_Berth3").hide();
                $("#2block_1drop").hide() ; $("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
                $("#bag_berth_2").show(); $("#bag_berth_2").trigger('play');   
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});         // large negative reward  
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_2'});                 psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});               

                $("#2block_3drop").hide() ;
                })
    
    
        $("#id_Berth3").click(function() {
   
       $("#id_block").hide();
       $("#id_Berth1").hide();$("#2block").hide();
       $("#id_Berth2").hide();  $("#bag_berth_1").hide(); $("#bag_berth_3").hide();
        $("#id_Berth3").hide();$("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ; 
          $("#2block_1drop").hide() ;   
          $("#bag_berth_2").hide(); 
          $("#2block_3drop").show() ;
         $("#2block_3drop").trigger('play'); 
         psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});   // high positive reward   
        psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_3drop'});                   psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});                  
        })
        
       
   
 }   
 
if (( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 2?')||( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 3?')||
 ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 1?') || ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 2?')) {
    
    
         $("#followup").html(follow_up); psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#2block").hide();
                $("#id_Berth3").hide();
                $("#2block_1drop").show() ; $("#2block_1drop").trigger('play'); $("#1block").hide();

$("#1block_2drop").hide() ;$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ; 
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_1drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});     
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); // medium positive reward       
                $("#bag_berth_2").hide(); 
                $("#2block_3drop").hide() ;
                })
    
        $("#id_Berth2").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  $("#2block").hide();
                $("#id_Berth3").hide();
                $("#2block_1drop").hide() ; $("#1block").hide();

$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
                $("#bag_berth_2").show();  $("#bag_berth_2").trigger('play');   
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});         // large negative reward  
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_2'});                 psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});               

                $("#2block_3drop").hide() ;
                })
    
    
        $("#id_Berth3").click(function() {
   
       $("#id_block").hide();
       $("#id_Berth1").hide();$("#2block").hide();
       $("#id_Berth2").hide();  
        $("#id_Berth3").hide();
          $("#2block_1drop").hide() ;   $("#1block").hide();

$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;$("#bag_berth_1").hide(); $("#bag_berth_3").hide();
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ; 
          $("#bag_berth_2").hide(); 
          $("#2block_3drop").show() ;
         $("#2block_3drop").trigger('play'); 
         psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'});   // medium positive reward   
        psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#2block_3drop'});                   psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});                  
        })
        
       
   
 } 
 
 
 
 
 
 }


 if   (random_video == 2) {
 
  if ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 1?') {
    
    
         $("#followup").html(follow_up);psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#3block").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();
                $("#3block_1drop").show() ; $("#3block_1drop").trigger('play');$("#1block").hide();
$("#2block").hide(); 
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  
                       psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});                     
                 psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'});   // high positive reward       
                $("#bag_berth_3").hide(); 
                $("#3block_2drop").hide() ;$("#bag_berth_1").hide(); $("#bag_berth_2").hide();
                })
    
        $("#id_Berth3").click(function() {
           
               $("#id_block").hide();
               $("#id_Berth1").hide();$("#3block").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();
                $("#3block_1drop").hide() ;  $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  $("#bag_berth_1").hide(); $("#bag_berth_2").hide();
                $("#bag_berth_3").show();                 $("#bag_berth_3").trigger('play');  
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_3'}); psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});                    
                 psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});          // large negative reward            

                $("#3block_2drop").hide() ;
                })
    
    
        $("#id_Berth2").click(function() {
   
       $("#id_block").hide();
       $("#id_Berth1").hide();$("#3block").hide();
       $("#id_Berth2").hide();  
        $("#id_Berth3").hide();
          $("#3block_1drop").hide() ;  $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;   $("#bag_berth_1").hide(); $("#bag_berth_2").hide();
          $("#bag_berth_3").hide(); 
          $("#3block_2drop").show() ;$("#3block_2drop").trigger('play'); 
          psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_2drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});           
          psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'});  // medium positive reward        
        })
        
      
   
 }


 if ( questions[randomQuestion] == 'I think Berth 3 is blocked. Can I put the bag on Berth 2?') {
    
    
         $("#followup").html(follow_up);psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();$("#3block").hide();
               $("#id_Berth1").hide();$("#bag_berth_1").hide(); $("#bag_berth_2").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();$("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  
                $("#3block_1drop").show() ; 
                $("#3block_1drop").trigger('play'); 
                 psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});         
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); // medium positive reward       
                $("#bag_berth_3").hide(); 
                $("#3block_2drop").hide() ;
                })
    
        $("#id_Berth3").click(function() {
           
               $("#id_block").hide();$("#bag_berth_1").hide(); $("#bag_berth_2").hide();
               $("#id_Berth1").hide();$("#3block").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();
                $("#3block_1drop").hide() ;  $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  
                $("#bag_berth_3").show();  $("#bag_berth_3").trigger('play');  
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_3'}); psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});           
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});           // large negative reward            
             
                $("#3block_2drop").hide() ;
                })
    
    
        $("#id_Berth2").click(function() {
   
       $("#id_block").hide();$("#3block").hide();
       $("#id_Berth1").hide();
       $("#id_Berth2").hide();  $("#bag_berth_1").hide(); $("#bag_berth_2").hide();
        $("#id_Berth3").hide();
          $("#3block_1drop").hide() ;   
          $("#bag_berth_3").hide(); $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  
          $("#3block_2drop").show() ;
         $("#3block_2drop").trigger('play');
         psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_2drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});          
         psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); // high positive reward        
        })
        
      
   
 }

if (( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 2?')||( questions[randomQuestion] == 'I think Berth 1 is blocked. Can I put the bag on Berth 3?')||
 ( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 1?') || ( questions[randomQuestion] == 'I think Berth 2 is blocked. Can I put the bag on Berth 3?')) {
 
 
     
         $("#followup").html(follow_up);psiTurk.recordTrialData({'phase':'followup_question', 'status':'follow up'});
          $("#id_block").show();
          $("#id_Berth1").show();
          $("#id_Berth2").show(); 
          $("#id_Berth3").show();
    
     $("#id_Berth1").click(function() {
           
               $("#id_block").hide();$("#3block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();$("#bag_berth_1").hide(); $("#bag_berth_2").hide();
                $("#3block_1drop").show() ;                 $("#3block_1drop").trigger('play'); 
                $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  

                 psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_1drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid action'});         
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +50'}); // high positive reward       
                $("#bag_berth_3").hide(); 
                                 $("#3block_2drop").hide() ;
                })
    
        $("#id_Berth3").click(function() {
           
               $("#id_block").hide();$("#3block").hide();
               $("#id_Berth1").hide();
               $("#id_Berth2").hide();  
                $("#id_Berth3").hide();$("#bag_berth_1").hide(); $("#bag_berth_2").hide();
                $("#3block_1drop").hide() ;  
                $("#bag_berth_3").show();                 $("#bag_berth_3").trigger('play');  
                $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  
                psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#bag_berth_3'}); psiTurk.recordTrialData({'phase':'user', 'status':'invalid action'});           
                psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward -100'});           // large negative reward            

                $("#3block_2drop").hide() ;
                })
    
    
        $("#id_Berth2").click(function() {
   
       $("#id_block").hide();$("#3block").hide();
       $("#id_Berth1").hide();
       $("#id_Berth2").hide();  
        $("#id_Berth3").hide();$("#bag_berth_1").hide(); $("#bag_berth_2").hide();
          $("#3block_1drop").hide() ;   
          $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;  
          $("#bag_berth_3").hide(); 
          $("#3block_2drop").show() ;
         $("#3block_2drop").trigger('play');
         psiTurk.recordTrialData({'phase':'yes_no_put_bag', 'status':'#3block_2drop'}); psiTurk.recordTrialData({'phase':'user', 'status':'valid medium'});          
         psiTurk.recordTrialData({'phase':'Reward_yes_no', 'status':'Reward +30'}); // medium positive reward        
        })
        

 
 }




}






})


}, 5000);

};
    
//SA_yes/no ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var SA_correct = 0;
var SA_incorrect = 0;

var SA_question = ['Which berth is blocked?'];



function sawareness(){

$("#id_SA, #SA_Berth1, #SA_Berth2").hide();
setSituationAwarenessScreenActive(false);
restoreTaskPaneWhenQuestionsClear();
$("#SA_Berth1, #SA_Berth2").off("click");

setTimeout(function(){  
    
   if (random_video == 0)
    {
    psiTurk.recordTrialData({'phase':'SA_yn_block',  'status':'Berth1 is blocked'}); 
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_correct +=1;
           //psiTurk.recordTrialData({'phase':'SA_yes_no', 'status':'SA_correct'+SA_correct});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth1'}); 
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no', 'status':'SA_incorrect'+SA_incorrect});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth2'}); 
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no',  'status':'SA_incorrect'+SA_incorrect});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth3'}); 
    });    
    
    }
    
    
   if (random_video == 1)
    {
        psiTurk.recordTrialData({'phase':'SA_yn_block',  'status':'Berth2 is blocked'}); 
 setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no', 'status':'SA_correct'+SA_correct});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth1'}); 
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_correct +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no', 'status':'SA_incorrect'+SA_incorrect});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth2'}); 
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no',  'status':'SA_incorrect'+SA_incorrect});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth3'}); 
    });
       
    
    }
    
    if (random_video == 2)
    {
        psiTurk.recordTrialData({'phase':'SA_yn_block',  'status':'Berth3 is blocked'}); 
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no', 'status':'SA_incorrect'+SA_incorrect});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth1'}); 
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_correct +=1;
//psiTurk.recordTrialData({'phase':'SA_yes_no', 'status':'SA_correct'+SA_correct});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth2'}); 
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase': 'SA_yes_no',  'status':'SA_incorrect'+SA_incorrect});
           psiTurk.recordTrialData({'phase':'SA_yn',  'status':'Berth3'}); 
    });
    
    
    
    }

   }, 45000);
  } 
  
/****************
* Communication Strategy wh *
****************/ 
var SA_question = ['Which berth is blocked?'];

var wh_questions = ['I think Berth1 is blocked. Where you want me to put this bag?',
                    'I think Berth2 is blocked. Where you want me to put this bag?'];
                    
var ne_wh=0;                  
var whclear;
var random_video;   
function whFunction(){

$("#Berth1, #Berth2").off("click");

var randomQuestion_wh = Math.floor(Math.random() * wh_questions.length);

// Make the robot's assessment correct with 70% probability.
var robotCorrect_wh = Math.random() < 0.70;

// For this two-berth experiment:
// question 0 claims Berth 1 is blocked.
// question 1 claims Berth 2 is blocked.
if (robotCorrect_wh) {
    random_video = randomQuestion_wh;
} else {
    random_video = 1 - randomQuestion_wh;
}

// Record the intended accuracy outcome.
psiTurk.recordTrialData({
    'phase': 'robot_accuracy_wh',
    'status': robotCorrect_wh ? 'correct' : 'incorrect'
});

psiTurk.recordTrialData({'phase':'wh_question', 'status':'question' +wh_questions[randomQuestion_wh]});


if ((wh_questions[randomQuestion_wh] == 'I think Berth1 is blocked. Where you want me to put this bag?')|| (wh_questions[randomQuestion_wh] == 'I think Berth2 is blocked. Where you want me to put this bag?') || (wh_questions[randomQuestion_wh] == 'I think Berth3 is blocked. Where you want me to put this bag?') )
{

if (random_video == 0) {
$("#1block").show() ;
$("#1block").trigger('play'); psiTurk.recordTrialData({'phase':'wh_video_shown',  'status':'Berth1 is blocked'}); 
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
}

if (random_video == 1) {

$("#2block").show() ;psiTurk.recordTrialData({'phase':'wh_video_shown',  'status':'Berth2 is blocked'}); 
$("#2block").trigger('play');
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#1block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
}


if (random_video == 2) {

$("#3block").show(); psiTurk.recordTrialData({'phase':'wh_video_shown',  'status':'Berth3 is blocked'}); 
$("#3block").trigger('play');
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#1block").hide();
$("#3block_2drop").hide() ;
$("#3block_1drop").hide() ;
$("#bag_berth_1").hide();
$("#bag_berth_2").hide();
$("#bag_berth_3").hide();
}
}


ne_wh = wh_questions[randomQuestion_wh];
$("#random_wh").html(wh_questions[randomQuestion_wh]);

    
$("#id_wh").hide(); 

whclear=setTimeout(function () {

if ( wh_questions[randomQuestion_wh] == 'I think Berth1 is blocked. Where you want me to put this bag?') {

 
          $("#id_wh").show();
          $("#Berth2").show();
          $("#Berth3").show();
          $("#Berth1").show();
          
          
          
 if (random_video == 0) {         

$("#Berth1").click(function() {
           
               $("#id_wh").hide();$("#1block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#bag_berth_1").show();
                psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_1'});   psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});          
                psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'}); //invalid pose large negative reward             
                $("#bag_berth_1").trigger('play');
                 $("#1block_2drop").hide(); 
                 $("#1block_3drop").hide();  $("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  $("#bag_berth_2").hide();  $("#bag_berth_3").hide();       
                })
    
        $("#Berth2").click(function() {
           
               $("#id_wh").hide();$("#1block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#1block_2drop").show();
                psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#1block_2drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});            
                 psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'}); //high postive reward    
                $("#1block_2drop").trigger('play');
                 $("#1block_3drop").hide();                 
                   $("#bag_berth_1").hide();  $("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide(); $("#bag_berth_2").hide();  $("#bag_berth_3").hide();   
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;             
                })
    
    
        $("#Berth3").click(function() {
   
       $("#id_wh").hide();$("#1block").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();
        $("#1block_3drop").show(); 
        psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#1block_3drop'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});           
        psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'}); //medium positive reward          
       $("#1block_3drop").trigger('play');  
        $("#bag_berth_1").hide();         
       $("#1block_2drop").hide();  $("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;$("#bag_berth_2").hide();  $("#bag_berth_3").hide();   
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;             
        })


}

 if (random_video == 1) {         

 $("#Berth1").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();$("#2block").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#2block_1drop").show() ; $("#1block").hide();

$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;$("#bag_berth_1").hide();  $("#bag_berth_3").hide();   
$("#3block_2drop").hide() ;  
                $("#2block_1drop").trigger('play'); 
                 psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#2block_1drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});            
                psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'});   // high positive reward       
                $("#bag_berth_2").hide(); 
                $("#2block_3drop").hide() ;
                })
    
        $("#Berth2").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();$("#2block").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#2block_1drop").hide() ;  $("#1block").hide();

$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;$("#bag_berth_1").hide();  $("#bag_berth_3").hide();   
$("#3block_2drop").hide() ;  
                $("#bag_berth_2").show();
                psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_2'});   psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});          
                psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'});  // large negative reward            
                $("#bag_berth_2").trigger('play');  
                $("#2block_3drop").hide() ;
                })
    
    
        $("#Berth3").click(function() {
   
       $("#id_wh").hide();$("#2block").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();
          $("#2block_1drop").hide() ;   $("#1block").hide();

$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();$("#bag_berth_1").hide();  $("#bag_berth_3").hide();   
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
          $("#bag_berth_2").hide(); 
          $("#2block_3drop").show() ;
         $("#2block_3drop").trigger('play');
          psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#2block_3drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});            
          psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'});  // medium positive reward        
        })
        
      
   
 }

 if   (random_video == 2) { 

    
     $("#Berth1").click(function() {
           
               $("#id_wh").hide();$("#3block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#3block_1drop").show() ; 
                $("#3block_1drop").trigger('play');  
                psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#3block_1drop'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});               
                psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'});                   // high positive reward       
                $("#bag_berth_3").hide(); 
                $("#1block").hide(); $("#bag_berth_1").hide();  $("#bag_berth_2").hide();   
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block_2drop").hide() ; 
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;       
                })
    
        $("#Berth3").click(function() {
           
               $("#id_wh").hide();$("#3block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#3block_1drop").hide() ;  
                $("#bag_berth_3").show();   psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'}); 
                psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_3'});                           // large negative reward            
                $("#bag_berth_3").trigger('play');  
            $("#1block").hide();$("#bag_berth_1").hide();  $("#bag_berth_2").hide();  
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block_2drop").hide() ; 
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;       
                })
    
    
        $("#Berth2").click(function() {
   
       $("#id_wh").hide();$("#3block").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();$("#bag_berth_1").hide();  $("#bag_berth_2").hide();  
          $("#3block_1drop").hide() ;   
          $("#bag_berth_3").hide(); 
          $("#3block_2drop").show() ; 
          $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;       
          psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#3block_2drop'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});   
         $("#3block_2drop").trigger('play'); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'}); // medium positive reward        
        })
        
 
   
 }

}


if ( wh_questions[randomQuestion_wh] == 'I think Berth2 is blocked. Where you want me to put this bag?') {

 
          $("#id_wh").show();
          $("#Berth2").show();
          $("#Berth3").show();
          $("#Berth1").show();





if (random_video == 0) {         

$("#Berth1").click(function() {
           
               $("#id_wh").hide();$("#1block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#bag_berth_1").show(); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});  //invalid pose large negative reward             
                $("#bag_berth_1").trigger('play'); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_1'});    
                 $("#1block_2drop").hide(); 
                 $("#1block_3drop").hide();                 
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ; $("#bag_berth_3").hide();  $("#bag_berth_2").hide();  
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;           
                })
    
        $("#Berth2").click(function() {
           
               $("#id_wh").hide();$("#1block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#1block_2drop").show(); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});   
                $("#1block_2drop").trigger('play');psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#1block_2drop'});
                 $("#1block_3drop").hide();                 
                   $("#bag_berth_1").hide();                    
$("#2block").hide();
$("#2block_1drop").hide() ;$("#bag_berth_3").hide();  $("#bag_berth_2").hide(); 
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;              
                })
    
    
        $("#Berth3").click(function() {
   
       $("#id_wh").hide();$("#1block").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  $("#bag_berth_3").hide();  $("#bag_berth_2").hide(); 
        $("#Berth3").hide();
        $("#1block_3drop").show(); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'}); //medium positive reward          
       $("#1block_3drop").trigger('play');  psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#1block_3drop'});psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});  
        $("#bag_berth_1").hide();         
       $("#1block_2drop").hide();         
$("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;            
        })

}


 if (random_video == 1) {         

 $("#Berth1").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();$("#2block").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
                $("#2block_1drop").show() ; 
                $("#2block_1drop").trigger('play'); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'});                  // high positive reward       
                $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#2block_1drop'});psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});  
                $("#2block_3drop").hide() ;$("#bag_berth_3").hide();  $("#bag_berth_1").hide(); 
                })
    
        $("#Berth2").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();$("#2block").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#1block").hide();
$("#1block_2drop").hide() ; $("#bag_berth_3").hide();  $("#bag_berth_1").hide(); 
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
                $("#2block_1drop").hide() ;  
                $("#bag_berth_2").show();  psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'});          // large negative reward            
                $("#bag_berth_2").trigger('play'); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_2'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});  
                $("#2block_3drop").hide() ;
                })
    
    
        $("#Berth3").click(function() {
   
       $("#id_wh").hide();
       $("#Berth1").hide();$("#2block").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();
        $("#1block").hide(); $("#bag_berth_3").hide();  $("#bag_berth_1").hide(); 
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
          $("#2block_1drop").hide() ;   
          $("#bag_berth_2").hide(); 
          $("#2block_3drop").show() ;
         $("#2block_3drop").trigger('play');  psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});  
         psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#2block_3drop'}); 
         // medium positive reward        
        })
        
      
   
 }

 if   (random_video == 2) { 

    
     $("#Berth1").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();$("#3block").hide();
                $("#3block_1drop").show() ; 
                $("#3block_1drop").trigger('play');    psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'});       // high positive reward       
                $("#bag_berth_3").hide();      psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#3block_1drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});  
               $("#3block_2drop").hide() ; 
                $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ; $("#bag_berth_2").hide();  $("#bag_berth_1").hide(); 
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ; 
                })
    
        $("#Berth3").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();$("#3block").hide();
                $("#3block_1drop").hide() ;  
                $("#bag_berth_3").show();  psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'}); // large negative reward            
                $("#bag_berth_3").trigger('play'); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_3'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});  
                $("#3block_2drop").hide();
                $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ; $("#bag_berth_2").hide();  $("#bag_berth_1").hide(); 
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ; 
                })
    
    
        $("#Berth2").click(function() {
   
       $("#id_wh").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();$("#3block").hide();
          $("#3block_1drop").hide() ;   $("#bag_berth_2").hide();  $("#bag_berth_1").hide(); 
          $("#bag_berth_3").hide(); 
          $("#3block_2drop").show() ;
         $("#3block_2drop").trigger('play'); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'});
        psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#3block_2drop'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});  
            // medium positive reward   
            $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;      
        })
        
       
   
 }
}

if ( wh_questions[randomQuestion_wh] == 'I think Berth3 is blocked. Where you want me to put this bag?') {

 
          $("#id_wh").show();
          $("#Berth2").show();
          $("#Berth3").show();
          $("#Berth1").show();





if (random_video == 0) {         

$("#Berth1").click(function() {
           
               $("#id_wh").hide();$("#1block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#bag_berth_1").show(); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'}); //invalid pose large negative reward             
                $("#bag_berth_1").trigger('play');        psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_1'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});      $("#1block_2drop").hide(); 
                 $("#1block_3drop").hide();  
                 $("#2block").hide();
$("#2block_1drop").hide() ; $("#bag_berth_2").hide();  $("#bag_berth_3").hide(); 
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;           
                })
    
        $("#Berth2").click(function() {
           
               $("#id_wh").hide();$("#1block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#1block_2drop").show(); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'}); //high postive reward    
                $("#1block_2drop").trigger('play');psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#1block_2drop'});  psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});  
                 $("#1block_3drop").hide();                 
                   $("#bag_berth_1").hide(); $("#bag_berth_2").hide();  $("#bag_berth_3").hide(); 
                   $("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;              
                })
    
    
        $("#Berth3").click(function() {
   
       $("#id_wh").hide();$("#1block").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide(); $("#bag_berth_2").hide();  $("#bag_berth_3").hide(); 
        $("#1block_3drop").show(); psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'}); //medium positive reward          
       $("#1block_3drop").trigger('play'); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#1block_3drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});  
        $("#bag_berth_1").hide();         
       $("#1block_2drop").hide(); 
       $("#2block").hide();
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;              
        })


}


 if (random_video == 1) {         

 $("#Berth1").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();$("#2block").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#2block_1drop").show() ; 
                $("#2block_1drop").trigger('play');   psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'});                  // high positive reward       
                $("#bag_berth_2").hide(); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#2block_1drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});  
                $("#2block_3drop").hide() ;
                $("#1block").hide(); 
$("#1block_2drop").hide() ; $("#bag_berth_1").hide();  $("#bag_berth_3").hide(); 
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
                })
    
        $("#Berth2").click(function() {
           
               $("#id_wh").hide();
               $("#Berth1").hide();$("#2block").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide(); $("#bag_berth_1").hide();  $("#bag_berth_3").hide(); 
                $("#2block_1drop").hide() ;  
                $("#bag_berth_2").show();     psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'});       // large negative reward            
                $("#bag_berth_2").trigger('play');  psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_2'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'});  
                $("#2block_3drop").hide() ;
                $("#1block").hide();

$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;  
                })
    
    
        $("#Berth3").click(function() {
   
       $("#id_wh").hide();
       $("#Berth1").hide();$("#2block").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();
          $("#2block_1drop").hide() ;  $("#bag_berth_1").hide();  $("#bag_berth_3").hide();  
          $("#bag_berth_2").hide(); 
          $("#2block_3drop").show() ;
         $("#2block_3drop").trigger('play');  
         psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#2block_3drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});  
          psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'}); // medium positive reward  
          $("#1block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#3block").hide();
$("#3block_1drop").hide() ;
$("#3block_2drop").hide() ;        
        })
        
      
   
 }

 if   (random_video == 2) { 

    
     $("#Berth1").click(function() {
           
               $("#id_wh").hide();$("#3block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide();
                $("#3block_1drop").show() ; 
                $("#3block_1drop").trigger('play');   psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +50'});                  // high positive reward       
                $("#bag_berth_3").hide(); psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#3block_1drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid action'});  
                $("#1block").hide();
$("#2block").hide();$("#3block_2drop").hide() ; $("#bag_berth_1").hide();  $("#bag_berth_2").hide(); 
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ; 
                })
    
        $("#Berth3").click(function() {
           
               $("#id_wh").hide();$("#3block").hide();
               $("#Berth1").hide();
               $("#Berth2").hide();  
                $("#Berth3").hide(); $("#bag_berth_1").hide();  $("#bag_berth_2").hide(); 
                $("#3block_1drop").hide() ;  
                $("#bag_berth_3").show();    psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward -100'});        // large negative reward            
                $("#bag_berth_3").trigger('play');   psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#bag_berth_3'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'invalid action'}); $("#3block_2drop").hide() ; 

                $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ; 
                })
    
    
        $("#Berth2").click(function() {
   
       $("#id_wh").hide();$("#3block").hide();
       $("#Berth1").hide();
       $("#Berth2").hide();  
        $("#Berth3").hide();
          $("#3block_1drop").hide() ;   
          $("#bag_berth_3").hide(); $("#bag_berth_1").hide();  $("#bag_berth_2").hide(); 
          $("#3block_2drop").show() ;
         $("#3block_2drop").trigger('play');   psiTurk.recordTrialData({'phase':'Reward_wh', 'status':'Reward +30'}); 
          psiTurk.recordTrialData({'phase':'wh_put_bag', 'status':'#3block_2drop'}); psiTurk.recordTrialData({'phase':'user_wh', 'status':'valid medium'});  
          $("#1block").hide();
$("#2block").hide();
$("#1block_2drop").hide() ;
$("#1block_3drop").hide() ;
$("#2block_1drop").hide() ;
$("#2block_3drop").hide() ; 
         // medium positive reward        
        })
        
       
   
 }
 }
 
},25000)
 
}

// SA_wh -------------------------------------------------------------------------------------------------------------------------------

function sawareness_wh(){

 $("#id_SA, #SA_Berth1, #SA_Berth2").hide();
 setSituationAwarenessScreenActive(false);
 restoreTaskPaneWhenQuestionsClear();
 $("#SA_Berth1, #SA_Berth2").off("click");
  
 setTimeout(function(){   
   if (random_video == 0)
    {
    psiTurk.recordTrialData({'phase':'SA_wh_block',  'status':'Berth1 is blocked'});
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_correct +=1;
//psiTurk.recordTrialData({'phase':'SA_wh', 'status':'SA_correct'+SA_correct});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth1'});
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_wh', 'status':'SA_incorrect'+SA_incorrect});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth2'});
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth3'});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth3'});
    });    
    
    }
    
    
     
    if (random_video == 1)
    {
    psiTurk.recordTrialData({'phase':'SA_wh_block',  'status':'Berth2 is blocked'});
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_wh', 'status':'SA_incorrect'+SA_incorrect});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth1'});
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_correct +=1;
//psiTurk.recordTrialData({'phase':'SA_wh', 'status':'SA_correct'+SA_correct});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth2'});
    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_incorrect'+SA_incorrect});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth3'});

    });
    
    
    
    }
     
     if (random_video == 2)
    {
    psiTurk.recordTrialData({'phase':'SA_wh_block',  'status':'Berth3 is blocked.'});
    setSituationAwarenessScreenActive(true);
    $("#SA_Berth1").show();
    $("#SA_Berth2").show();
    $("#SA_Berth3").show();
    $("#SA").html(SA_question);
    
    $("#SA_Berth1").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_wh', 'status':'SA_incorrect'+SA_incorrect});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth1'});
    }); 
    
   $("#SA_Berth2").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_incorrect +=1;
//psiTurk.recordTrialData({'phase':'SA_wh', 'status':'SA_incorrect'+SA_incorrect});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth2'});

    });
    
   
    $("#SA_Berth3").click(function() {
    
    $("#id_SA").hide();
    $("#SA_Berth1").hide();
    $("#SA_Berth2").hide();
    $("#SA_Berth3").hide();
    
    SA_correct +=1;
//psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_correct'+SA_correct});
psiTurk.recordTrialData({'phase':'SA_wh',  'status':'SA_Berth3'});
    });
    
    }
      }, 45000);
  } 
  
if (condition == 0 || condition == 3 || condition == 6 ) {



var n_zero_number= 0;
var n_zero_rand_no_zero = 0;
var n_zero_text1 = ["Now please press the above number"];
var n_zero_get_code = 0;
var n_zero_get_text= 0;
var n_zero_correct = 0;
var n_zero_incorrect =0;
var n_zero_arraykeycode = new Array;
var n_zero_arraygetcode = new Array;
var n_zero_newkeycode =0;
var n_zero_newgetcode = 0;
var n_zero_incorrectkeycode = 0;


$(document).keypress(function(){

     $("#anykey").hide()
     
     var keycode = event.which || event.keyCode;
     
     

     n_zero_rand_no_zero = Math.floor(Math.random()*10);
     
     
var hexArray = ['lightblue','coral','green', 'yellow', 'blue', 'red', 'lightgreen', 'violet', 'black', 'grey', 'yellowgreen', 'turquoise', 'slateblue', 'saddlebrown', 'orange', 'olive','maroon','hotpink','lime', 'teal', 'indigo','mediumaquamarine','aqua']

var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

     
     $("#n_zero_rand_no_zero").html(n_zero_rand_no_zero);
     $("#n_zero_rand_no_zero").css("color",randomColor);

     $("#n_zero_nback_zero").html(n_zero_text1);
         
    n_zero_number =  "\""+n_zero_rand_no_zero+"\""
    
    n_zero_get_code = n_zero_number.charCodeAt(1) 

    console.log(n_zero_get_code);
   // console.log(keycode);
    n_zero_arraykeycode.push(keycode)
    n_zero_arraygetcode.push(n_zero_get_code);
	  
   for (var i =1; i<n_zero_arraykeycode.length;i++)
     {
     n_zero_newkeycode = n_zero_arraykeycode[i];
    // console.log("array"+arraykeycode[i])
     }
     
     for (var j =0; j<n_zero_arraygetcode.length;j++)
     {
     n_zero_newgetcode = n_zero_arraygetcode[j-1];
    // console.log("array"+arraygetcode[i])
     }
     
    console.log("newkeycode"+n_zero_newkeycode);
     console.log("newgetcode"+n_zero_newgetcode);
     
     n_zero_incorrectkeycode = n_zero_newkeycode
     
     if (n_zero_newgetcode==n_zero_newkeycode)
     {
     
     psiTurk.recordTrialData({'phase':'N_zero', 'status':'correct'});
      console.log("n_zero_correct")
      if (n_zero_newkeycode == 48) {
     $("#n_zero_correct").html("You pressed 0" )
     $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
       if (n_zero_newkeycode == 49) {
     $("#n_zero_correct").html("You pressed 1")
     $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
       if (n_zero_newkeycode == 50) {
     $("#n_zero_correct").html("You pressed 2")
     $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 51) {
     $("#n_zero_correct").html("You pressed 3")
     $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 52) {
     $("#n_zero_correct").html("You pressed 4")
      $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 53) {
     $("#n_zero_correct").html("You pressed 5")
      $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 54) {
     $("#n_zero_correct").html("You pressed 6")
      $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 55) {
     $("#n_zero_correct").html("You pressed 7")
      $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 56) {
     $("#n_zero_correct").html("You pressed 8")
      $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     if (n_zero_newkeycode == 57) {
     $("#n_zero_correct").html("You pressed 9")
      $("#n_zero_correct").show()
     $("#n_zero_incorrect").hide()}
     }
     
     if (n_zero_newgetcode!=n_zero_incorrectkeycode)
     {
     psiTurk.recordTrialData({'phase':'N_zero', 'status':'incorrect'});
     console.log("n_zero_incorrect")
      if (n_zero_incorrectkeycode == 48) {
     $("#n_zero_incorrect").html("You pressed 0" )
      $("#n_zero_incorrect").show()
       $("#n_zero_correct").hide()}
       if (n_zero_incorrectkeycode == 49) {
     $("#n_zero_incorrect").html("You pressed 1")
        $("#n_zero_incorrect").show()
       $("#n_zero_correct").hide()}
       if (n_zero_incorrectkeycode == 50) {
     $("#n_zero_incorrect").html("You pressed 2")
      $("#n_zero_incorrect").show()
       $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 51) {
     $("#n_zero_incorrect").html("You pressed 3")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 52) {
     $("#n_zero_incorrect").html("You pressed 4")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 53) {
     $("#n_zero_incorrect").html("You pressed 5")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 54) {
     $("#n_zero_incorrect").html("You pressed 6")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 55) {
     $("#n_zero_incorrect").html("You pressed 7")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 56) {
     $("#n_zero_incorrect").html("You pressed 8")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()}
     if (n_zero_incorrectkeycode == 57) {
     $("#n_zero_incorrect").html("You pressed 9")
      $("#n_zero_incorrect").show()
     $("#n_zero_correct").hide()} 
     
     
     }     
  });}


if (condition==1 || condition==4 || condition==7)

{


var number_one= 0;
var rand_no_one = 0;
var text1_one = [" Now please press the number shown **1** previously"];
var get_code_one = 0;
var get_text_one= 0;
var correct_one = 0;
var incorrect_one =0;
var arraykeycode_one = new Array;
var arraygetcode_one = new Array;
var newkeycode_one =0;
var newgetcode_one = 0;
var incorrect_onekeycode = 0;
$(document).keypress(function(){

      $("#anykey").hide()
     var keycode = event.which || event.keyCode;
     
     rand_no_one = Math.floor(Math.random()*10);
     
   var hexArray = ['lightblue','coral','green', 'yellow', 'blue', 'red', 'lightgreen', 'violet', 'black', 'grey', 'yellowgreen', 'turquoise', 'slateblue', 'saddlebrown', 'orange', 'olive','maroon','hotpink','lime', 'teal', 'indigo','mediumaquamarine','aqua']

var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

          
         
    number_one =  "\""+rand_no_one+"\""
    
    get_code_one = number_one.charCodeAt(1) 

   // console.log(get_code);
   // console.log(keycode);
    arraykeycode_one.push(keycode)
    arraygetcode_one.push(get_code_one);
    
     for (var i =0; i<1;i++)
     {
    $("#rand_no_one").html(rand_no_one);
    $("#rand_no_one").css("color",randomColor);
  
 
    $("#presenter_one").html("Please press enter to see the next number in the sequence");
     }
    
    
	  
   for (var i =1; i<arraykeycode_one.length;i++)
     {
     newkeycode_one = arraykeycode_one[i];
    // console.log("array"+arraykeycode_one[i])
     }
     
     for (var j =0; j<arraygetcode_one.length;j++)
     {
     newgetcode_one = arraygetcode_one[j-2];
    // console.log("array"+arraygetcode_one[i])
     }
     
     
    for (var i = 1; i<arraykeycode_one.length;i++) {
    $("#rand_no_one").html(rand_no_one);
    $("#rand_no_one").css("color",randomColor);

     $("#nback_one").html(text1_one);
      $("#presenter_one").hide()}
     
     
     console.log("newkeycode_one"+newkeycode_one);
     console.log("newgetcode_one"+newgetcode_one);
     
     incorrect_onekeycode = newkeycode_one
     
     if (newgetcode_one==newkeycode_one)
     {
     
     
     psiTurk.recordTrialData({'phase':'N_one', 'status':'correct'});
      console.log("correct_one")
      if (newkeycode_one == 48) {
     $("#correct_one").html("You pressed 0" )
     $("#correct_one").show()
     $("#incorrect_one").hide()}
       if (newkeycode_one == 49) {
     $("#correct_one").html("You pressed 1")
     $("#correct_one").show()
     $("#incorrect_one").hide()}
       if (newkeycode_one == 50) {
     $("#correct_one").html("You pressed 2")
     $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 51) {
     $("#correct_one").html("You pressed 3")
     $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 52) {
     $("#correct_one").html("You pressed 4")
      $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 53) {
     $("#correct_one").html("You pressed 5")
      $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 54) {
     $("#correct_one").html("You pressed 6")
      $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 55) {
     $("#correct_one").html("You pressed 7")
      $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 56) {
     $("#correct_one").html("You pressed 8")
      $("#correct_one").show()
     $("#incorrect_one").hide()}
     if (newkeycode_one == 57) {
     $("#correct_one").html("You pressed 9")
      $("#correct_one").show()
     $("#incorrect_one").hide()}
     }
     
     if (newgetcode_one!=incorrect_onekeycode)
     {
     
     psiTurk.recordTrialData({'phase':'N_one', 'status':'incorrect'});
     console.log("incorrect_one")
      if (incorrect_onekeycode == 48) {
     $("#incorrect_one").html("You pressed 0" )
      $("#incorrect_one").show()
       $("#correct_one").hide()}
       if (incorrect_onekeycode == 49) {
     $("#incorrect_one").html("You pressed 1")
        $("#incorrect_one").show()
       $("#correct_one").hide()}
       if (incorrect_onekeycode == 50) {
     $("#incorrect_one").html("You pressed 2")
      $("#incorrect_one").show()
       $("#correct_one").hide()}
     if (incorrect_onekeycode == 51) {
     $("#incorrect_one").html("You pressed 3")
      $("#incorrect_one").show()
     $("#correct_one").hide()}
     if (incorrect_onekeycode == 52) {
     $("#incorrect_one").html("You pressed 4")
      $("#incorrect_one").show()
     $("#correct_one").hide()}
     if (incorrect_onekeycode == 53) {
     $("#incorrect_one").html("You pressed 5")
      $("#incorrect_one").show()
     $("#correct_one").hide()}
     if (incorrect_onekeycode == 54) {
     $("#incorrect_one").html("You pressed 6")
      $("#incorrect_one").show()
     $("#correct_one").hide()}
     if (incorrect_onekeycode == 55) {
     $("#incorrect_one").html("You pressed 7")
      $("#incorrect_one").show()
     $("#correct_one").hide()}
     if (incorrect_onekeycode == 56) {
     $("#incorrect_one").html("You pressed 8")
      $("#incorrect_one").show()
     $("#correct_one").hide()}
     if (incorrect_onekeycode == 57) {
     $("#incorrect_one").html("You pressed 9")
      $("#incorrect_one").show()
     $("#correct_one").hide()}    
     
     }
  });




}




if (condition==2 || condition==5 || condition==8)

{ 
var number_two= 0;
var rand_no_two = 0;
var text1_two = [" Now please press the number shown **2** previously"];
var get_code_two = 0;
var get_text_two= 0;
var correct_two = 0;
var incorrect_two =0;
var arraykeycode_two = new Array;
var arraygetcode_two = new Array;
var newkeycode_two =0;
var newgetcode_two = 0;
var incorrect_twokeycode = 0;


$(document).keypress(function(){

      $("#anykey").hide()
     var keycode = event.which || event.keyCode;
     
     rand_no_two = Math.floor(Math.random()*10);
     
   var hexArray = ['lightblue','coral','green', 'yellow', 'blue', 'red', 'lightgreen', 'violet', 'black', 'grey', 'yellowgreen', 'turquoise', 'slateblue', 'saddlebrown', 'orange', 'olive','maroon','hotpink','lime', 'teal', 'indigo','mediumaquamarine','aqua']

var randomColor = hexArray[Math.floor(Math.random() * hexArray.length)];

          
         
    number_two =  "\""+rand_no_two+"\""
    
    get_code_two = number_two.charCodeAt(1) 

   // console.log(get_code);
   // console.log(keycode);
    arraykeycode_two.push(keycode)
    arraygetcode_two.push(get_code_two);
    
     for (var i =0; i<2;i++)
     {
    $("#rand_no_two").html(rand_no_two);
    $("#rand_no_two").css("color",randomColor);
     
    $("#presenter_two").html("Please press enter to see the next number in the sequence");
     }
    
    
	  
   for (var i =1; i<arraykeycode_two.length;i++)
     {
     newkeycode_two = arraykeycode_two[i];
    // console.log("array"+arraykeycode_two[i])
     }
     
     for (var j =0; j<arraygetcode_two.length;j++)
     {
     newgetcode_two = arraygetcode_two[j-3];
    // console.log("array"+arraygetcode_two[i])
     }
     
     
    for (var i = 2; i<arraykeycode_two.length;i++) {
    $("#rand_no_two").html(rand_no_two);
    $("#rand_no_two").css("color",randomColor);
       
     $("#nback_two").html(text1_two);
      $("#presenter_two").hide()}
     
     
     console.log("newkeycode_two"+newkeycode_two);
     console.log("newgetcode_two"+newgetcode_two);
     
     incorrect_twokeycode = newkeycode_two
     
     if (newgetcode_two==newkeycode_two)
     {
     
     psiTurk.recordTrialData({'phase':'N_two', 'status':'correct'});
      console.log("correct_two")
      if (newkeycode_two == 48) {
     $("#correct_two").html("You pressed 0" )
     $("#correct_two").show()
     $("#incorrect_two").hide()}
       if (newkeycode_two == 49) {
     $("#correct_two").html("You pressed 1")
     $("#correct_two").show()
     $("#incorrect_two").hide()}
       if (newkeycode_two == 50) {
     $("#correct_two").html("You pressed 2")
     $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 51) {
     $("#correct_two").html("You pressed 3")
     $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 52) {
     $("#correct_two").html("You pressed 4")
      $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 53) {
     $("#correct_two").html("You pressed 5")
      $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 54) {
     $("#correct_two").html("You pressed 6")
      $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 55) {
     $("#correct_two").html("You pressed 7")
      $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 56) {
     $("#correct_two").html("You pressed 8")
      $("#correct_two").show()
     $("#incorrect_two").hide()}
     if (newkeycode_two == 57) {
     $("#correct_two").html("You pressed 9")
      $("#correct_two").show()
     $("#incorrect_two").hide()}
     }
     
     if (newgetcode_two!=incorrect_twokeycode)
     {
     psiTurk.recordTrialData({'phase':'N_two', 'status':'incorrect'});
     console.log("incorrect_two")
      if (incorrect_twokeycode == 48) {
     $("#incorrect_two").html("You pressed 0" )
      $("#incorrect_two").show()
       $("#correct_two").hide()}
       if (incorrect_twokeycode == 49) {
     $("#incorrect_two").html("You pressed 1")
        $("#incorrect_two").show()
       $("#correct_two").hide()}
       if (incorrect_twokeycode == 50) {
     $("#incorrect_two").html("You pressed 2")
      $("#incorrect_two").show()
       $("#correct_two").hide()}
     if (incorrect_twokeycode == 51) {
     $("#incorrect_two").html("You pressed 3")
      $("#incorrect_two").show()
     $("#correct_two").hide()}
     if (incorrect_twokeycode == 52) {
     $("#incorrect_two").html("You pressed 4")
      $("#incorrect_two").show()
     $("#correct_two").hide()}
     if (incorrect_twokeycode == 53) {
     $("#incorrect_two").html("You pressed 5")
      $("#incorrect_two").show()
     $("#correct_two").hide()}
     if (incorrect_twokeycode == 54) {
     $("#incorrect_two").html("You pressed 6")
      $("#incorrect_two").show()
     $("#correct_two").hide()}
     if (incorrect_twokeycode == 55) {
     $("#incorrect_two").html("You pressed 7")
      $("#incorrect_two").show()
     $("#correct_two").hide()}
     if (incorrect_twokeycode == 56) {
     $("#incorrect_two").html("You pressed 8")
      $("#incorrect_two").show()
     $("#correct_two").hide()}
     if (incorrect_twokeycode == 57) {
     $("#incorrect_two").html("You pressed 9")
      $("#incorrect_two").show()
     $("#correct_two").hide()}    
     
     }
  });


 }



//--- conditions ---------------------------------------------------------

if (condition==0)


{

myFunction();
sawareness();
setInterval(myFunction,80000);
clearTimeout(silentclear); 
clearTimeout(whclear);
setInterval(sawareness, 100000);

}


if (condition==1)


{

myFunction();
sawareness();
setInterval(myFunction,80000);
clearTimeout(silentclear); 
clearTimeout(whclear);
setInterval(sawareness, 100000);
}

if (condition==2)


{

myFunction();
sawareness();
setInterval(myFunction,80000);
clearTimeout(whclear);
clearTimeout(silentclear); 
setInterval(sawareness, 100000);

}


if (condition==3)


{

whFunction();
sawareness_wh();
clearTimeout(myfunctionclear); 
setInterval(whFunction,80000);
clearTimeout(silentclear); 
setInterval(sawareness_wh, 100000);


}


if (condition==4)


{

whFunction();
sawareness_wh();
clearTimeout(myfunctionclear); 
setInterval(whFunction,80000);
clearTimeout(silentclear); 
setInterval(sawareness_wh, 100000);

}

if (condition==5)


{

whFunction();
sawareness_wh();
setInterval(whFunction,80000);
clearTimeout(silentclear); 
clearTimeout(myfunctionclear); 
setInterval(sawareness_wh, 100000);
}


if (condition==6)


{

silentFunction();
sawareness_silent();
setInterval(silentFunction,80000);
clearTimeout(myfunctionclear); 
clearTimeout(whclear);
setInterval(sawareness_silent, 100000);
}

if (condition==7)


{

silentFunction();
sawareness_silent();
setInterval(silentFunction,80000);
clearTimeout(myfunctionclear); 
clearTimeout(whclear);
setInterval(sawareness_silent, 100000);
}


if (condition==8)


{

silentFunction();
sawareness_silent();
setInterval(silentFunction,80000);
clearTimeout(myfunctionclear); 
clearTimeout(whclear);
setInterval(sawareness_silent, 100000);
}


var timeleft = 480;


  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
   $("#countdown").html("Game Over");
   currentview = new Questionnaire();


  } else {
  
    minutes = parseInt(timeleft/60, 10);
    seconds = parseInt(timeleft % 60, 10);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
   $("#countdown").html("Time Left: " + minutes + ":" + seconds);
    

  }
  timeleft -= 1;
}, 1000);

    
    
record_responses();


}


var Questionnaire = function() {

	psiTurk.finishInstructions();
    
    var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

    record_responses = function() {

	psiTurk.recordTrialData({'phase':'checkquestion', 'status':'submit'});

	var radio_groups = {}
	$(":radio").each(function(i, val){
	    radio_groups[this.name] = true;
	})

	    for(group in radio_groups){
	        //psiTurk.recordUnstructuredData(group,$(":radio[name='"+group+"']:checked").val());
		psiTurk.recordUnstructuredData("final_check_question",$(":radio[name='"+group+"']:checked").val());
		
	    }

    };

    prompt_resubmit = function() {
	replaceBody(error_message);
	$("#resubmit").click(resubmit);
    };

    resubmit = function() {
	replaceBody("<h1>Trying to resubmit...</h1>");
	reprompt = setTimeout(prompt_resubmit, 10000);

	psiTurk.saveData({
	    success: function() {
		clearInterval(reprompt);

	    },
	    error: prompt_resubmit
	});
    };

    
    // Load the questionnaire snippet 
    psiTurk.showPage('check_question.html');

    psiTurk.recordTrialData({'phase':'checkquestion', 'status':'begin'});
    
 $("input[name=check]").change(function(){
	$('#next').removeAttr('disabled');
    });
    
    

	
$("#next").click(function () {
    	record_responses(); 
    	psiTurk.saveData();   
       currentview = new FinalQuestion();
	 
    });	
	
	
};



var FinalQuestion = function() {

	psiTurk.finishInstructions();

    var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your information. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

    record_responses = function() {

      psiTurk.recordTrialData({'phase':'checkquestion', 'status':'submit'});

      psiTurk.recordUnstructuredData('Open_Response_Robot', document.getElementById("openresponse1").value);


    };

       prompt_resubmit = function() {
	replaceBody(error_message);
	$("#resubmit").click(resubmit);
    };

    resubmit = function() {
	replaceBody("<h1>Trying to resubmit...</h1>");
	reprompt = setTimeout(prompt_resubmit, 10000);

	psiTurk.saveData({
	    success: function() {
		clearInterval(reprompt);

	    },
	    error: prompt_resubmit
	});
    };


    psiTurk.showPage('postquestionaire.html');
    window.scrollTo(0, 0);
    psiTurk.recordTrialData({'phase':'checkquestion', 'status':'begin'});

  var r1, r2 = false;

  function checkenable(){
      if (r1 && r2){
          $('#next').removeAttr('disabled');
      }
      else {
          $('#next').prop('disabled', true);
      }
  }

  

    $("#next").click(function () {
      if (!$.trim($("#openresponse1").val())) {
        alert("Complete the question before moving on.")
      } else {
      	record_responses();
        psiTurk.saveData({
                  success: function(){
                      psiTurk.computeBonus('compute_bonus', function() {
                          psiTurk.completeHIT(); 
                      });
                  },
                  error: prompt_resubmit});
      }
    });

	
	
	
	
};









var currentview;


$(window).on('load', async () => {
    await init;
    psiTurk.doInstructions(
    	instructionPages, 
    	function() { currentview = new Nback(); } 
    );
});
