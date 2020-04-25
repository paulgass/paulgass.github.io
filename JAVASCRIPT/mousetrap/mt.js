// Bind a single Key:
Mousetrap.bind('4', function() {
  console.log('you pressed 4')
})
// Important note, It makes a difference whether it is a capital or small letter that was defined or pressed. For Mousetrap, for example, x is not equal to X.
// Bind a single key, trigger the function when you let the key come up, after holding it down. (Because of the keyup-setting)
Mousetrap.bind('x', function() {
  console.log('You pressed x and let it come up')
},'keyup')
// Trigger when the a, b and c keys are pressed in sequence. The specified sequence must be observed.
Mousetrap.bind('a b c', function() { 
  console.log('You pressed a, then b & after that you pressed c')
})
// Creating a key combination
Mousetrap.bind('command+shift+k', function(e) {
  console.log('you pressed command, shift & k')
})
// Several key combinations, which should be reacted to in the same way, can be passed with an array
Mousetrap.bind(['a+d', 'w+s'], function(e) {
  console.log('you pressed a & d OR w & s')
})
// MOREEXAMPLESBELOW
// MOREEXAMPLESBELOW
// MOREEXAMPLESBELOW
// single keys
Mousetrap.bind('6', function() { console.log('6'); });
Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');

// combinations
Mousetrap.bind('command+shift+k', function() { console.log('command shift k'); });

// map multiple combinations to the same callback
Mousetrap.bind(['command+k', 'ctrl+k'], function() {
    console.log('command k or control k');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});

// gmail style sequences
Mousetrap.bind('g i', function() { console.log('go to inbox'); });
Mousetrap.bind('* a', function() { console.log('select all'); });

// konami code!
Mousetrap.bind('up up down down left right left right b a enter', function() {
    console.log('konami code');
});
// MYEXAMPLESBELOW
// MYEXAMPLESBELOW
// MYEXAMPLESBELOW
// map multiple combinations to the same callback
Mousetrap.bind(['command+s', 'ctrl+s'], function() {
    console.log('execute code such as a function to save data on this page for example');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});