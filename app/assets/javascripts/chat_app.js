var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

this.ChatApp = (function() {
  ChatApp.prototype.messageTemplate = function(message, userName) {
    return "<div>\n  <span>\n    <label class='label label-info'>\n      [" + userName + "]\n    </label> " + message + "\n  </span>\n</div>";
  };

  function ChatApp(currentChannel, username) {
    this.currentChannel = currentChannel != null ? currentChannel : void 0;
    this.username = $('.username').text().split('@')[0];
    this.sendMessage = bind(this.sendMessage, this);
    this.receiveMessage = bind(this.receiveMessage, this);
    this.dispatcher = new WebSocketRails(window.location.host + "/websocket");
    this.currentChannel = this.dispatcher.subscribe("css_gradient");
    this.currentChannel.bind('new_message', this.receiveMessage);
    $('#send_message').click(this.sendMessage);
  }

  ChatApp.prototype.receiveMessage = function(message) {
    if(message.data == "Joined"){
      $('#chat_history').append(this.messageTemplate(message.data, message.username));
    }
    else{
      $('#gradient_list').append("<div style='"+message.data+"'><span>"+message.username+"</span></div>")
    }
  };


  ChatApp.prototype.sendMessage = function(e) {
    var message;
    e.preventDefault();
    message = $("#codetocopy").text();
    this.currentChannel.trigger('new_message', {
      data: message,
      username: this.username
    });    
    $('#new_message').val('');
  };

  return ChatApp;

})();

$(document).ready(function() {
  window.chatApp = new ChatApp;
  setTimeout(function(){
    window.chatApp.currentChannel.trigger('new_message',{data:"Joined", username: window.chatApp.username});
  },1000);

  initCSSGradient();
        
});


function initCSSGradient(){
  $('.btn-c2').colorpicker({
    altField: '#btn-c1',
    altProperties: 'background-color,color',
    altAlpha: true,
    colorFormat: "#HEX",
    select: function (event, color) {
      document.getElementById("color1a").innerHTML = color.formatted;
      document.getElementById("color1b").innerHTML = color.formatted;
      document.getElementById("color1c").innerHTML = color.formatted;
      document.getElementById("color1d").innerHTML = color.formatted;
      document.getElementById("color1e").innerHTML = color.formatted;
                        
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
        $('html > head').append(style);
      },
  });
  $('.btn-c4').colorpicker({
    altField: '#btn-c3',
    altProperties: 'background-color,color',
    //colorFormat: '#HEX',
    colorFormat: "#HEX",
    select: function (event, color) {
      //var color2_in_hex_format = color.formatted;
      document.getElementById("color2b").innerHTML = color.formatted;
      document.getElementById("color2c").innerHTML = color.formatted;
      document.getElementById("color2d").innerHTML = color.formatted;
      document.getElementById("color2e").innerHTML = color.formatted;
    
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
    },
  });

  $('#btn-1').click(function(){
      document.getElementById("id-type2").innerHTML = "linear";
      document.getElementById("id-type3").innerHTML = "linear";
      document.getElementById("id-type4").innerHTML = "linear";
      document.getElementById("id-type5").innerHTML = "linear";
      
      document.getElementById("id-direction2").innerHTML = "top";
      document.getElementById("id-direction3").innerHTML = "top";
      document.getElementById("id-direction4").innerHTML = "top";
      document.getElementById("id-direction5").innerHTML = "to bottom";
      
      $(this).addClass('active');
      $('#btn-2').removeClass('active');
      
      $('#btn-3').addClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      $('#btn-7').hide();
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
  $('#btn-2').click(function(){
      document.getElementById("id-type2").innerHTML = "radial";
      document.getElementById("id-type3").innerHTML = "radial";
      document.getElementById("id-type4").innerHTML = "radial";
      document.getElementById("id-type5").innerHTML = "radial";
      
      document.getElementById("id-direction2").innerHTML = "center";
      document.getElementById("id-direction3").innerHTML = "center";
      document.getElementById("id-direction4").innerHTML = "center";
      document.getElementById("id-direction5").innerHTML = "ellipse at center";
      
      $(this).addClass('active');
      $('#btn-1').removeClass('active');
      
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').addClass('active');
      $('#btn-7').show();
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });


  $('#btn-3').click(function(){
      document.getElementById("id-direction2").innerHTML = "top";
      document.getElementById("id-direction3").innerHTML = "top";
      document.getElementById("id-direction4").innerHTML = "top";
      document.getElementById("id-direction5").innerHTML = "to bottom";
      
      $(this).addClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $('#btn-3-4').click(function(){
      document.getElementById("id-direction2").innerHTML = "top right";
      document.getElementById("id-direction3").innerHTML = "top right";
      document.getElementById("id-direction4").innerHTML = "top right";
      document.getElementById("id-direction5").innerHTML = "top right";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });    

  $('#btn-4').click(function(){
      
      document.getElementById("id-direction2").innerHTML = "right";
      document.getElementById("id-direction3").innerHTML = "right";
      document.getElementById("id-direction4").innerHTML = "right";
      document.getElementById("id-direction5").innerHTML = "to left";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $('#btn-5-4').click(function(){
      
      document.getElementById("id-direction2").innerHTML = "bottom right";
      document.getElementById("id-direction3").innerHTML = "bottom right";
      document.getElementById("id-direction4").innerHTML = "bottom right";
      document.getElementById("id-direction5").innerHTML = "bottom right";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $('#btn-5').click(function(){
      
      document.getElementById("id-direction2").innerHTML = "bottom";
      document.getElementById("id-direction3").innerHTML = "bottom";
      document.getElementById("id-direction4").innerHTML = "bottom";
      document.getElementById("id-direction5").innerHTML = "to top";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $('#btn-5-6').click(function(){
      
      document.getElementById("id-direction2").innerHTML = "bottom left";
      document.getElementById("id-direction3").innerHTML = "bottom left";
      document.getElementById("id-direction4").innerHTML = "bottom left";
      document.getElementById("id-direction5").innerHTML = "bottom left";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $('#btn-6').click(function(){
      document.getElementById("id-direction2").innerHTML = "left";
      document.getElementById("id-direction3").innerHTML = "left";
      document.getElementById("id-direction4").innerHTML = "left";
      document.getElementById("id-direction5").innerHTML = "to right";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });

  $('#btn-3-6').click(function(){
      document.getElementById("id-direction2").innerHTML = "top left";
      document.getElementById("id-direction3").innerHTML = "top left";
      document.getElementById("id-direction4").innerHTML = "top left";
      document.getElementById("id-direction5").innerHTML = "top left";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $('#btn-7').click(function(){
      document.getElementById("id-direction2").innerHTML = "center";
      document.getElementById("id-direction3").innerHTML = "center";
      document.getElementById("id-direction4").innerHTML = "center";
      document.getElementById("id-direction5").innerHTML = "ellipse at center";
      
      $(this).addClass('active');
      $('#btn-3').removeClass('active');
      $('#btn-3-4').removeClass('active');
      $('#btn-3-6').removeClass('active');
      $('#btn-4').removeClass('active');
      $('#btn-5').removeClass('active');
      $('#btn-5-4').removeClass('active');
      $('#btn-5-6').removeClass('active');
      $('#btn-6').removeClass('active');
      $('#btn-7').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });


  $('#btn-11').click(function(){
      $(this).addClass('active');
      $('#btn-12').removeClass('active');
      $('#btn-13').removeClass('active');
      
      var csstext = $("#codetocopy").text();
      var style = $('<style>#gradient-preview {' + csstext + '}</style>');
      $('html > head').append(style);
      
      return false;
  });
      
  $(document).on('click', 'pre', function () {
   
    if (this.select) {
      this.select();
    }
    else if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(this);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(this);
      window.getSelection().addRange(range);
    }
  });
}