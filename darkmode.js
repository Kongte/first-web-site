var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function darkmode(self) {
  var target = document.querySelector('body');
  if (self.value === 'dark') {
    Body.setBackgroundColor('rgb(53 54 58)');
    Body.setColor('rgb(218 220 224)');
    self.value = 'light';

    Links.setColor('rgb(218 220 224)')
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'dark';

    Links.setColor('black');
  }
}
