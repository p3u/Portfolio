Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

function isMobileWidth() {
    return $('.project-desc-mobile').is(':visible');
}

function imgClickListener() {
  $(".img-block").click(function(event) {
    if( !isMobileWidth() ) {
      descBoxId = "desc-box-" + event.target.dataset.targetBox
      imgPath = event.target.src
      imgName = imgPath.replace(/^.*[\\\/]/, '')
      descId = imgName.replace(".svg", "-desc")
      projectDesc = $("#" + descId).html()

      $(".collapsable-block").not("#" + descBoxId).hide()
      $("#" + descBoxId).slideDown(0)
      $('html, body').animate({
        scrollTop: $(event.target).offset().top
      }, 700);
      $("#" + descBoxId + " .project-desc-full").html(projectDesc)
    }
  })
}

function daysNotWorking(){
  today = new Date()
  dayIQuit = new Date(2016, 05, 10);
  diffInMonths = (today - dayIQuit) / 1000 / 60 / 60 / 24 / 30;

  months =  diffInMonths.toFixedDown(0)
  days = ((diffInMonths - months) * 30).toFixedDown(0)

  monthsString = months > 1 ? months + " months" : months + " month"
  daysString = days > 1 ? days + " days" : days + " day"
  dateInString = days != 0 ? monthsString +  " and " + daysString : monthsString

  return dateInString

}

$( document ).ready(function() {
  $(".not-working").html(daysNotWorking())
  imgClickListener()
})
