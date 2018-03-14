//designWidth:��Ƹ��ʵ�ʿ��ֵ����Ҫ����ʵ������
//maxWidth:������������ֵ����Ҫ����ʵ������
//���js������������������ǵ�Ҫ���ã�һ��Ϊ��Ƹ�ʵ�ʿ�ȣ�һ��Ϊ����������ȣ�������Ƹ�Ϊ750�������Ϊ750����Ϊ(750,750)
;(function(designWidth, maxWidth) {
  var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    console.log(width);
    maxWidth = maxWidth || 540;
    width>maxWidth && (width=maxWidth);
    width<375 && (width=375);
    var rem = width * 10 / designWidth;
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    var wrap = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  //Ҫ�� wiewport ���úú����ִ�� refreshRem����Ȼ refreshRem ��ִ��2�Σ�
  refreshRem();

  win.addEventListener("resize", function() {
    clearTimeout(tid); //��ִֹ������
    tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener("pageshow", function(e) {
    if (e.persisted) { // ��������˵�ʱ�����¼���
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener("DOMContentLoaded", function(e) {
      doc.body.style.fontSize = "16px";
    }, false);
  }
})(375, 375);