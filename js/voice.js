  var recognition;
  var recognizing = false;
  if (!('webkitSpeechRecognition' in window)) {
    alert("Can not access microphone");
  } else {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "es-MX";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
      recognizing = true;
      console.log("...");
    }

    recognition.onresult = function(event) {
      for (var i = event.resultIndex; i < event.results.length; i++) {
        if(event.results[i].isFinal){
          document.getElementById("input-looking-for").value = ''
          document.getElementById("input-looking-for").value += event.results[i][0].transcript;
        }
        
    }
  }
    recognition.onerror = function(event) {}

    recognition.onend = function() {
      recognizing = false;
      document.getElementById("input-button-voice").innerHTML = " ";
      console.log("listening is finish");
    }
  }

  function procvoice() {

    if (recognizing == false) {
      recognition.start();
      recognizing = true;
      document.getElementById("input-button-voice").innerHTML = "...";

      setTimeout(function(){
      recognition.stop();
      recognizing = false;
      document.getElementById("input-button-voice").innerHTML = " ";
    },4300)
    } else {
      recognition.stop();
      recognizing = false;
      document.getElementById("input-button-voice").innerHTML = " ";
    }
  }
