
function getTriangleArea(a, h) {
	if ( (a <= 0) || (h <= 0) ) {
    return('Nieprawidłowe dane')
	}
	return(a*h/2)
}

console.log(getTriangleArea(8, 6))

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(14, 25),
	triangle3Area = getTriangleArea(5, 9);

console.log('Triangle 1 Area equal = ' + triangle1Area)
console.log('Triangle 2 Area equal = ' + triangle2Area)
console.log('Triangle 3 Area equal = ' + triangle3Area)