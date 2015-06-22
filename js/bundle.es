var mstc = require('./vendor/mstc.js');
var vagueTime = require('vague-time');

document.getElementById( "ret1" ).innerHTML = mstc('Hello {{w}}! How is the {{x}}?',{w:'@140bytes', x: function() {return 'weather';}});
document.getElementById( "ret2" ).innerHTML = mstc('The array has a length of {{length}} and the first element is "{{0}}". Ah, what the heck, here is all of it: {{join}}', ['foo', 'bar', 'bam']);

if(document.getElementsByClassName) {
  var tags = document.getElementsByClassName('js-vagueTime');
  for (var i = tags.length - 1; i >= 0; i--) { tags[i].innerHTML = vagueTime.get({ to: new Date(tags[i].getAttribute('datetime')), from: Date.now(), }) };
}
