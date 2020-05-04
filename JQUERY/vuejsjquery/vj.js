// Recipe calculator with jquery
var computeServing = function(serving) {
$('.js-recipeIngredient').each(function(index, item) {
    $(item).children('span').html($(item)[0].dataset.basevalue * serving)
})
}
$('#servingInput').on('change', function() {
computeServing($(this).val())
})
$('.js-decreaseService').on('click', function() {
var currentServing = $('#servingInput').val()
$('#servingInput').val(currentServing - 1)
computeServing(currentServing - 1)
})
$('.js-increaseService').on('click', function() {
var currentServing = $('#servingInput').val()
$('#servingInput').val(parseInt(currentServing) + 1)
computeServing(parseInt(currentServing) + 1)
})
computeServing(1)

// Recipe calculator with vuejs
new Vue({
el: '#Vue',
data() {
    return {
    serving: 1
    }
},
methods: {
    decreaseServing() {
    this.serving = this.serving - 1
    },
    increaseServing() {
    this.serving = this.serving + 1
    }
}
})