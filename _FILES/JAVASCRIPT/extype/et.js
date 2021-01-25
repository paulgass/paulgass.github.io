// exmaples below
// exmaples below
// exmaples below
xtype.type(new Date())                 // date
xtype.type(['Max', 'Carl', 'Tom'])     // array
xtype.type({ name: 'Max', age: 20 })   // object
xtype.type(/ab+c/i)                    // regexp
xtype.type(new Error('Error'))         // error
// Cool, hm? And it gets better. Because by not using the type function, but passing the value directly, we can also get more details about our value.
xtype.type(-1.1)                       // number
// more details please:
xtype(-1.1)                            // negative_float
xtype(1)                               // positive_integer
xtype('')                              // empty_string 
xtype('  ')                            // whitespace
xtype(["Max", "Carl"])                 // multi_elem_array
xtype(["Max"])                         // single_elem_array
// examples above
// examples above
// examples above
// examples above
// Gass examples below
// Gass examples below
// Gass examples below
// Gass examples below
// Gass examples below
// examples above
// examples above
// examples above
// examples above


xtype.ext.registerType('ssn', {
    validator: function(val) {
        return typeof val === 'string' && /^\d{3}-\d{2}-\d{4}$/.test(val);
    }
});

function searchEmployees(value) {
    switch (xtype.which(value, 'str2+ str1 ssn int+ obj1 obj2+ nil')) {
        case 'str2+':
            return { error: 'example of two strings' };
        case 'str1':
            return { error: 'examples of 1 string' };
        case 'ssn':
            return { error: 'example of ssn' };
        case 'int+':
            return { error: 'example of positve int' };
        case 'obj1':
            return { error: 'No search value supplied' };
        case 'obj2+':
            return { error: 'Search by multiple fields not supported' };
        case 'nil':
            return { error: 'No search value supplied' };
        default:
            return { error: 'Invalid search value supplied' };
    }
}

// more exmaples below
// more exmaples below
console.log('Gass extype.js examples below')
// more exmaples below
// more exmaples below
console.log('Testing: Paul below...')
searchEmployees('Paul')
console.log('Testing: 23 below...')
searchEmployees(299440293)
console.log('Testing: 299-44-0293 below...')
searchEmployees("299-44-0293")
console.log('Testing: Natalie below...')
searchEmployees('Natalie')
// more examples above
// more examples above
// more examples above