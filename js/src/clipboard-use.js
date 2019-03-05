/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-clone"></i><span>复制</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
    clipboard.on('success', function(e) {
        e.trigger.innerHTML = "<span>复制成功</span>";
        e.clearSelection();
        setTimeout(function() {
            e.trigger.innerHTML =  '  <i class="fa fa-clone"></i><span>复制</span>';
        }, 1500);
    });
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
  }
  initCopyCode();
}(window, document);