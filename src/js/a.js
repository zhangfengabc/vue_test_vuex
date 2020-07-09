// export var firstName = 'Michale'
// export var lastName = 'Jackson'
// export var year = 1958

var firstName = 'Michale'
var lastName = 'Jackson'
var year = 1958

export { firstName, lastName, year }


function v1(){console.log('v1')}
function v2(){console.log('v2')}

export {
    v1 as stream1,
    v2 as stream2,
    v2 as streamLastestVersion
}