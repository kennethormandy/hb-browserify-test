// mstc
// https://gist.github.com/tkissing/1347239
// mustache style templating compressed to (less than) 140byt.es
// Copyright © 2011 Timo Kissing http://kissing.name
// WTFPL
module.exports = function(a, b) { // a: template string, b: Object or Array with values to fill in
  // coerce a to a string
  return(a+'').replace(
    // search for anything with a mustache around it
    /\{\{([^{}]+)}}/g,
    function(c,d) { // c will be the complete placeholder, d the part between the mustaches
      // b is optional (but if passed, must be a type that is a valid operand for "in"
      return d in (b||{})
      // if d is a method of b, call it, otherwise return its value
      ? (/^f/.test(typeof b[d]) ? b[d]() :b[d] )
      // if d is not a member of b, don't replace anything to allow nested calls like
      // mstc(mstc(tmpl, obj), anotherObj)
      : c;
    }
  );
}
