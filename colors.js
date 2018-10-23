
    var Body = {
      setColorAndBackgroundColor(color1, color2){
        $('body').css({
          'color': color1,
          'backgroundColor':color2
        });
      }

      /*setColor: function(color) {
        document.querySelector('body').style.color = color;
      },

      setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
      }*/
    }

    var Links = {
      setColor: function(color) {
        $('a').css('color', color);
        
        /*var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = color;
          i = i + 1;
        }*/
      }
    }

    function nightDayHandler(self) {
      /*var target = document.querySelector('body');*/
      if(self.value === 'night'){
        Body.setColorAndBackgroundColor('white', 'black');

        /*Body.setColor('white');
        Body.setBackgroundColor('black');*/

        /*target.style.backgroundColor = 'black';
        target.style.color = 'white';*/

        Links.setColor('powderblue');
        /*var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = 'powderblue';
          i = i + 1;
        }*/

        self.value = 'day';
      } else {
        Body.setColorAndBackgroundColor('black', 'white');

        /*Body.setColor('black');
        Body.setBackgroundColor('white');*/

        /*target.style.backgroundColor = 'white';
        target.style.color = 'black';*/

        Links.setColor('blue');
        /*var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = 'blue';
          i = i + 1;
        }*/

        self.value = 'night';
      }
    }