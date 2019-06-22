import * as $ from 'jquery';

export function  EnterFocus() {
  $(':input').keypress(function (event) {
    if (event.keyCode === 13) {
      $('[tabindex=' + (parseInt($(this).attr('tabindex')) + 1) + ']').focus();
    }
  });
}

export function  backFocus() {
  // $(':input').keyup(function (event) {
  //   if (event.keyCode === 38) {
  //     $('[tabindex=' + (parseInt($(this).attr('tabindex')) - 1) + ']').focus();
  //   }
  // });
}
