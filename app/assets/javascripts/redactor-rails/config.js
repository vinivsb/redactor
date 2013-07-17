$(document).ready(
  function(){
  var csrf_token = $('meta[name=csrf-token]').attr('content');
  var csrf_param = $('meta[name=csrf-param]').attr('content');
  var params;
  if (csrf_param !== undefined && csrf_token !== undefined) {
    params = csrf_param + "=" + encodeURIComponent(csrf_token);
  }

  $('.redactor').redactor({ 
    buttons: ['html', '|', 'formatting', '|', 'bold', 'italic', 'deleted', '|',
              'unorderedlist', 'orderedlist', 'outdent', 'indent', '|',
              'image', 'table', 'link', '|', 'alignment', '|', 'horizontalrule'],
    "lang": 'pt_br',
    "path":"/assets/redactor-rails",
    "css":"style.css"
  });
});
