input.onPinPressed(TouchPin.P0, function () {
    index = randint(0, 4)
    basic.showString("" + (text_list[index]))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[0]))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (text_list[1]))
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (text_list[1]))
    basic.showNumber(0)
})
let index = 0
let text_list: string[] = []
text_list = [
"ironman",
"batman",
"superman",
"spiderman",
"hulk"
]
let test_list2 = [
"thanos",
"joker",
"superman1",
"spiderman1",
"lol"
]
basic.forever(function () {
	
})
