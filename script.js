$(function() {
  var el, newValue, newPlace, offset;

  // Select all range inputs, watch for change
  $("input[id='slider']").on('mouseover slide change', function() {

    // Caching
    el = $(this);

    // Measure width of SLider Track
    width = el.width();

    // Figure out placement percentage between left and right of input
    newValue = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

    // Alignment
    offset = 0;

    // Positioning
    if (newValue < 0) {
      newPlace = 0;
    } else if (newValue > 1) {
      newPlace = width;
    } else {
      newPlace = width * newValue + offset;
      offset -= newValue+5;
    }

    // Move bubble
    el
      .next("output[name=toolTip]")
      .css({
        left: newPlace,
        marginLeft: offset + "%"
      })
      .text(el.val());

  })
    
    //FIrst Load
   .trigger('change'); 
  
  //Updates position of tooltip on Click of +, - 
  $(".valueChanger").on('click', function(){
    $("input[id='slider']").change();
  })
 
  //Show-hide on Mouse Over-Mouse Out

  $(".rangeSlider").mouseover(function() {
    $("input[id='slider']").next("output[name=toolTip]").show();
  })

  $(".rangeSlider").mouseout(function() {
    $("input[id='slider']").next("output[name=toolTip]").hide();
  })

  //Caching
  var slider = document.getElementById("slider");
 
 //Increement - Decreement Slider Value
  $("#plus").click(function() {
    slider.value = parseInt(slider.value) + parseInt(slider.step);
  })

  $("#minus").click(function() {
    slider.value = parseInt(slider.value) - parseInt(slider.step);

  })

})
