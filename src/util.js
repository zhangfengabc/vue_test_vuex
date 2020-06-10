function v1() {
    alert('this is function v1')
}

function v2() {
    alert('this is function v2')
}

export function area(radius) {
    return Math.PI * radius * radius
}

export function circumference(radius) {
    return 2 * Math.PI * radius
}


export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
}