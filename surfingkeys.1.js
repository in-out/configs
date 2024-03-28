const {
  aceVimMap,
  unmap,
  mapkey,
  imap,
  imapkey,
  getClickableElements,
  vmapkey,
  map,
  cmap,
  addSearchAlias,
  removeSearchAlias,
  tabOpenLink,
  readText,
  Clipboard,
  Front,
  Hints,
  Visual,
  RUNTIME
} = api;
// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function () {
  api.Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});
stealFocusOnLoad = true;
enableAutoFocus = false;
omnibarSuggestion = true;

// -----------------------------------------------------------------------------------------------------------------------
// Change hints styles
// -----------------------------------------------------------------------------------------------------------------------
//Hints.characters = "asdfgqwertvbn";
Hints.setCharacters("asdfgqwertvbn")

//Hints.style('border: solid 0px #ff79c6; color:#44475a; background: #f1fa8c; background-color: #f1fa8c; font-size: 9pt; font-family: "Microsoft YaHei", "Inconsolata", "Tahoma", "SimSun", "FontAwesome", "Segoe UI", "Segoe UI Symbol", "Symbola", "Meiryo", "Malgun Gothic", "NSimSun", "FZSongS", "方正宋体S-超大字符集", "Arial Unicode MS"');
//Hints.style("border: solid 0px #ff79c6; padding: 1px; background: #7FAB97; font-size: 9pt; font-family: 'Microsoft YaHei', 'Inconsolata', 'Tahoma', 'SimSun', 'FontAwesome', 'Segoe UI', 'Segoe UI Symbol', 'Symbola', 'Meiryo', 'Malgun Gothic', 'NSimSun', 'FZSongS', '方正宋体S-超大字符集', 'Arial Unicode MS'", "text");
// -----------------------------------------------------------------------------------------------------------------------
// Change search marks and cursor
// -----------------------------------------------------------------------------------------------------------------------
//Visual.style('marks', 'background-color: #f1fa8c;');
//Visual.style('cursor', 'background-color: #6272a4; color: #f8f8f2');

// ---- Hints ----
// Hints have to be defined separately
// Uncomment to enable


//mapkey('H', '#4Go back in history', 'history.go(-1)');
//mapkey('L', '#4Go forward in history', 'history.go(1)');
// an example to remove mapkey `Ctrl-i`
// unmap('<Ctrl-i>');
unmap('w');
unmap('gr');
unmap('spa');
unmap('spb');
unmap('spd');
unmap('sps');
unmap('spc');
unmap('F');
unmap('gc');
unmap('aa');
unmap('as');
unmap('ar');
unmap('od');
unmap('oe');
unmap('og');
unmap('oy');
unmap('or');
unmap('sd');
unmap('sg');
unmap('om');
unmap('ss');
unmap('sm');
unmap('os')
unmap('.');
unmap('sb');
unmap('ob');
unmap('sf');
unmap('of');
unmap('sw');
unmap('se');
unmap('sh');
unmap('sy');
unmap('ow');
//unmap('f');
// search engine
removeSearchAlias('bg');
addSearchAlias('al', '猫狸盘搜', 'https://www.alipansou.com/search?k=', 's');
addSearchAlias('zh', 'zhihu', 'https://www.zhihu.com/search?type=question&q=', 's');
// addSearchAlias('es', 'ecosia', 'https://www.ecosia.org/search?q=', 's');
addSearchAlias('dd', 'duckduckgo', 'https://duckduckgo.com/?q=', 's');
addSearchAlias('db', 'douban', 'https://www.douban.com/search?source=suggest&q=', 's');
addSearchAlias('dm', 'douban movie', 'https://www.douban.com/search?source=suggest&cat=1002&q=', 's');
addSearchAlias('sf', 'SegmentFault', 'https://segmentfault.com/search?type=all&q=', 's');
addSearchAlias('sc', 'scoop', 'https://scoop.sh/#/apps?q=', 's');
addSearchAlias('bd', 'baidu', 'https://www.baidu.com/s?ie=UTF-8&wd=', 's');
addSearchAlias('bg', 'bing', 'https://cn.bing.com/search?q=', 's');
addSearchAlias('so', 'stackoverflow', 'https://stackoverflow.com/search?q=', 's');
addSearchAlias('md', 'mdn', 'https://developer.mozilla.org/zh-CN/search?q=', 's');
addSearchAlias('jd', 'jd', 'https://search.jd.com/Search?enc=utf-8&keyword=', 's');
addSearchAlias('jj', 'juejin', 'https://juejin.cn/search?query=', 's');
// addSearchAlias('js', 'jianshu', 'https://www.jianshu.com/search?q=', 's');
addSearchAlias('gh', 'github', 'https://github.com/search?q=', 's');
// addSearchAlias('rr', 'rarbg', 'https://rarbgto.org/torrents.php?search=', 's');
addSearchAlias('gg', 'google', 'https://www.google.com/search?pws=0&gl=us&gws_rd=cr&q=', 's');
addSearchAlias('gy', 'youtube', 'https://www.youtube.com/results?search_query=', 's');
addSearchAlias('dk', 'docker', 'https://hub.docker.com/search?q=', 's');
addSearchAlias('jb', 'jable', 'https://jable.tv/search/{0}/', 's');
addSearchAlias('ma', 'missav', 'https://missav.com/ja/search/{0}/', 's');
addSearchAlias('nf', 'netflav', 'https://netflav.com/search?type=title&keyword=', 's');
addSearchAlias('zz', 'zhaoziyuan', 'https://zhaoziyuan.pw/so?filename=', 's');
addSearchAlias('zs', 'assrt', 'https://assrt.net/sub/?searchword=', 's');
addSearchAlias('zd', 'subhd', 'https://subhd.tv/search/', 's');
// addSearchAlias('za', 'a4k', 'https://www.a4k.net/search?term=', 's');
addSearchAlias('zt', 'meow.tg', 'https://meow.tg/search/', 's');
addSearchAlias('yx', 'yandex', 'https://yandex.com/search/?text=', 's');
addSearchAlias('zk', 'zimuku', 'https://so.zimuku.org/search?q=', 's');
addSearchAlias('dh', 'dmhy', 'https://share.dmhy.org/topics/list?keyword=', 's');
addSearchAlias('js', '広辞苑', 'https://sakura-paris.org/dict/%E8%AC%9B%E8%AB%87%E7%A4%BE%E6%97%A5%E4%B8%AD%E8%BE%9E%E5%85%B8_%E5%B0%8F%E5%AD%A6%E9%A4%A8%E4%B8%AD%E6%97%A5%E3%83%BB%E6%97%A5%E4%B8%AD%E8%BE%9E%E5%85%B8_%E5%A4%A7%E8%BE%9E%E6%9E%97/exact/', 's');
//addSearchAlias('ms', 'mengso', 'https://mengso.com/search?q=', 's');
//addSearchAlias('p', 'panc', 'https://www.panc.cc/m/s/?s=', 's');
//addSearchAlias('sx', 'searx', 'https://searx.info/?q=', 's');
//addSearchAlias('sx', 'searx', 'https://searx.info/?q=', 's');
//addSearchAlias('sx', 'searx', 'https://searx.fmac.xyz/?q=', 's');
//addSearchAlias('t', 'translate', 'https://translate.google.cn/?source=osdd#auto/zh-CN/', 's');
//addSearchAlias('sm', 'smzdm', 'https://search.smzdm.com/?c=post&s=', 's');
//addSearchAlias('f', 'fsou', 'https://fsou.cc/search?q=', 's');

//mapkey('osx', 'call searx', function() {
//	Front.openOmnibar({
//		type: "SearchEngine",
//		extra: 'sx'
//	});
//});
//mapkey('osm', 'call smzdm search', function() {
//	Front.openOmnibar({
//		type: "SearchEngine",
//		extra: 'sm'
//	});
//});

function getEleByTextContent(content) {
  var aTags = document.getElementsByTagName("a");
  var searchText = content;
  var found;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      return aTags[i];
    }
  }
  return undefined;
}

mapkey("ww", "add to nsfw", function () {
  var ele = getEleByTextContent('NSFW');
  if (ele) ele.click();
}
);

mapkey("wa", "add to art", function () {
  var ele = getEleByTextContent('art');
  if (ele) ele.click();
}
);

mapkey("wg", "add to girls", function () {
  var ele = getEleByTextContent('girls');
  if (ele) ele.click();
}
);

mapkey("wf", "full screen", function () {
  var ele = document.querySelector('[data-plyr=fullscreen]');
  if (ele) ele.click();
}
);

mapkey("a1", "rotate 90 degrees", function () {
  var ele = document.getElementsByClassName('art-video')[0];
  if (ele) ele.style.transform = 'rotate(90deg)';
}
);

mapkey("a2", "rotate 0 degrees", function () {
  var ele = document.getElementsByClassName('art-video')[0];
  if (ele) ele.style.transform = 'rotate(0deg)';
}
);

// mapkey("aa", "add to view later or extract audio source of first audio", function () {
//   var domain = document.domain;
//   var meta = document.querySelector('meta[name="generator"]').content;
//   if (domain == 'nekodict.com') {
//     console.log('neko');
//     Clipboard.write(document.getElementsByTagName('audio')[0].src);
//   } else {
//     if (meta && meta.startsWith('AList')) {
//       console.log('alist');
//       document.getElementsByClassName('art-control-fullscreen')[0].click();
//     } else {
//       console.log('jav');
//       var btn = document.querySelectorAll('[data-fav-type="1"]')[0];
//       if (btn) btn.click();
//     }
//   }
// }
//   //, {domain: /jable.tv.com/i}
// );
mapkey("aa", "add to view later", function () {
    var btn = document.querySelectorAll('[data-fav-type="1"]')[0];
    if (btn) btn.click();
}
  //, {domain: /jable.tv.com/i}
);
mapkey("as", "add to view later", function () {
    var btn = document.querySelectorAll('[data-fav-type="0"]')[0];
    if (btn) btn.click();
}
  //, {domain: /jable.tv.com/i}
);

mapkey('oal', 'call 猫狸盘搜 search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'al'
  });
});

mapkey('ozs', 'call assrt search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'zs'
  });
});

mapkey('ozd', 'call subhd search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'zd'
  });
});

mapkey('ojs', 'call 広辞苑 search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'js'
  });
});

mapkey('ozk', 'call zimuku search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'zk'
  });
});

// mapkey('oza', 'call a4k search', function () {
//   Front.openOmnibar({
//     type: "SearchEngine",
//     extra: 'za'
//   });
// });

mapkey('ozz', 'call zhaoziyuan search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'zz'
  });
});

mapkey('ozt', 'call meow.tg search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'zt'
  });
});

mapkey('ojb', 'call jable search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'jb'
  });
});
mapkey('oma', 'call missav search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'ma'
  });
});
mapkey('onf', 'call netflav search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'nf'
  });
});
mapkey('obg', 'call bing search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'bg'
  });
});
mapkey('obd', 'call baidu search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'bd'
  });
});
mapkey('oso', 'call stackoverflow search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'so'
  });
});
mapkey('osc', 'call scoop search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'sc'
  });
});
mapkey('osf', 'call segmentfault search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'sf'
  });
});
mapkey('omd', 'call mdn search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'md'
  });
});
//mapkey('oms', 'call mengso search', function() {
//	Front.openOmnibar({
//		type: "SearchEngine",
//		extra: 'ms'
//	});
//});
mapkey('ojd', 'call jd search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'jd'
  });
});
mapkey('ojj', 'call juejin search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'jj'
  });
});
// mapkey('ojs', 'call jianshu search', function () {
//   Front.openOmnibar({
//     type: "SearchEngine",
//     extra: 'js'
//   });
// });
mapkey('ogh', 'call github search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'gh'
  });
});
mapkey('ogg', 'call google search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'gg'
  });
});
mapkey('ogy', 'call youtube search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'gy'
  });
});
mapkey('oyx', 'call yandex search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'yx'
  });
});
// mapkey('oes', 'call ecosia search', function () {
//   Front.openOmnibar({
//     type: "SearchEngine",
//     extra: 'es'
//   });
// });
//mapkey('of', 'call fsou search', function() {
//	Front.openOmnibar({
//		type: "SearchEngine",
//		extra: 'f'
//	});
//});
mapkey('odb', 'call douban search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'db'
  });
});
mapkey('odm', 'call douban movie search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'dm'
  });
});
mapkey('odh', 'call dmhy search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'dh'
  });
});
mapkey('odd', 'call dockduckgo search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'dd'
  });
});
/**mapkey('op', 'call pancc search', function() {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'p'
  });
});**/
mapkey('ozh', 'call zhihu search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'zh'
  });
});
// mapkey('orr', 'call rarbg search', function () {
//   Front.openOmnibar({
//     type: "SearchEngine",
//     extra: 'rr'
//   });
// });
mapkey('odk', 'call docker search', function () {
  Front.openOmnibar({
    type: "SearchEngine",
    extra: 'dk'
  });
});
//map('or', ':openSession r');
mapkey("-j", "google translate", () => {
  const selection = window.getSelection().toString();
  if (selection === "") {
    tabOpenLink(
      `http://translate.google.com/translate?u=${window.location.href}`
    );
  } else {
    tabOpenLink(
      `https://translate.google.com/?sl=auto&tl=ja&text=${encodeURIComponent(
        selection
      )}`
    );
  }
});

mapkey("-c", "google translate", () => {
  const selection = window.getSelection().toString();
  if (selection === "") {
    tabOpenLink(
      `http://translate.google.com/translate?u=${window.location.href}`
    );
  } else {
    tabOpenLink(
      `https://translate.google.com/?sl=auto&tl=zh-CN&text=${encodeURIComponent(
        selection
      )}`
    );
  }
});

mapkey("-e", "google translate", () => {
  const selection = window.getSelection().toString();
  if (selection === "") {
    tabOpenLink(
      `http://translate.google.com/translate?u=${window.location.href}`
    );
  } else {
    tabOpenLink(
      `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(
        selection
      )}`
    );
  }
});

Front.registerInlineQuery({
  url: function (q) {
    return `http://dict.youdao.com/w/eng/${q}/#keyfrom=dict2.index`;
  },
  parseResult: function (res) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(res.text, "text/html");
    var collinsResult = doc.querySelector("#collinsResult");
    var authTransToggle = doc.querySelector("#authTransToggle");
    var examplesToggle = doc.querySelector("#examplesToggle");
    if (collinsResult) {
      collinsResult.querySelectorAll("div>span.collinsOrder").forEach(function (span) {
        span.nextElementSibling.prepend(span);
      });
      collinsResult.querySelectorAll("div.examples").forEach(function (div) {
        div.innerHTML = div.innerHTML.replace(/<p/gi, "<span").replace(/<\/p>/gi, "</span>");
      });
      var exp = collinsResult.innerHTML;
      return exp;
    } else if (authTransToggle) {
      authTransToggle.querySelector("div.via.ar").remove();
      return authTransToggle.innerHTML;
    } else if (examplesToggle) {
      return examplesToggle.innerHTML;
    }
  }
});
api.mapkey('p', '#0enter ephemeral PassThrough mode to temporarily suppress SurfingKeys', function() {
    api.Normal.passThrough(2000);
});
//Front.registerInlineQuery({
//    url: function(q) {
//        return `https://jisho.org/search/${q}`;
//    },
//    parseResult: function(res) {
//        var parser = new DOMParser();
//        var doc = parser.parseFromString(res.text, "text/html");
//        var result = doc.querySelector("#primary>div.exact_block");
//        if (result) {
//            result.querySelectorAll('div>span.furigana').forEach(function(e){
//                br = document.createElement("br");
//                e.appendChild(br);
//            });
//            result.querySelectorAll('h4').forEach(function(e){
//                e.remove();
//            });
//            result.querySelectorAll('div>div.concept_light-status').forEach(function(e){
//                e.remove();
//            });
//            result.querySelectorAll('div>a.light-details_link').forEach(function(e){
//                e.remove();
//            });
//            result.querySelectorAll('div>span.meaning-abstract').forEach(function(e){
//                e.remove();
//            });
//            result.querySelectorAll('div>span.supplemental_info').forEach(function(e){
//                e.outerHTML = "&nbsp;" + e.outerHTML;
//            });
//            var exp = result.innerHTML;
//            return exp;
//        }    }
//});
// an example to replace `u` with `?`, click `Default mappings` to see how `u` works.
//map('?', 'u');
//map('J','E');
//map('K','R');
//map('F','af');
//map('f','gf');
// Set H and L for back/forward
// mapkey('S', '#8Open opened URL in current tab', 'Normal.openOmnibar({type: "URLs", extra: "getTabURLs"})');
// mapkey('H', '#4Go back in history', 'history.go(-1)');
// mapkey('L', '#4Go forward in history', 'history.go(1)');
// Tabs
//mapkey('gT', '#3Go one tab left', 'RUNTIME("previousTab")');
//mapkey('gt', '#3Go one tab right', 'RUNTIME("nextTab")');
mapkey('gc', '#12Open Chrome Configure', function () {
  tabOpenLink("chrome://settings/");
});
settings.lurkingPattern = /.*jable.*|.*missav.*|.*bilibili.*|.*youtube.*|.*playav.*|.*taiav.*|list\.airsee\.xyz|.*hsex\.men.*|.*rou\.video.*/i;
settings.blocklistPattern = /.*mail.google.com.*|.*inbox.google.com.*|trello.com|feishu.cn|inoreader.com|route.asus.com|rsshub.airsee.xyz|localhost/i;
settings.nextLinkRegex = /((>>|下一页|next|older posts|older entries|forward|Next »|>|>>|❯|›|»|more|下一张|下页|(阅读)?下一章|下一章|下一頁|次へ)+)/i;
settings.prevLinkRegex = /((<<|上一页|prev(ious)?|newer posts|newer entries|« Previous|back|<|❮|<<«|less|‹|上一张|(阅读)?上一章|上一章|前へ)+)/i;

// Prevent automatic next/previous page loads
settings.smartPageBoundary = false;
settings.stealFocusOnLoad = false;
// Tomorrow-Night
Hints.style('border: solid 2px #373B41; color:#52C196; background: initial; background-color: #1D1F21;');
Hints.style("border: solid 2px #373B41 !important; padding: 1px !important; color: #C5C8C6 !important; background: #1D1F21 !important;", "text");
Visual.style('marks', 'background-color: #52C19699;');
Visual.style('cursor', 'background-color: #81A2BE;');

// Nord
/* -- DELETE LINE TO ENABLE THEME
Hints.style('border: solid 2px #4C566A; color:#A3BE8C; background: initial; background-color: #3B4252;');
Hints.style("border: solid 2px #4C566A !important; padding: 1px !important; color: #E5E9F0 !important; background: #3B4252 !important;", "text");
Visual.style('marks', 'background-color: #A3BE8C99;');
Visual.style('cursor', 'background-color: #88C0D0;');
-- DELETE LINE TO ENABLE THEME */

// Doom One
/* -- DELETE LINE TO ENABLE THEME
Hints.style('border: solid 2px #282C34; color:#98be65; background: initial; background-color: #2E3440;');
Hints.style("border: solid 2px #282C34 !important; padding: 1px !important; color: #51AFEF !important; background: #2E3440 !important;", "text");
Visual.style('marks', 'background-color: #98be6599;');
Visual.style('cursor', 'background-color: #51AFEF;');
-- DELETE LINE TO ENABLE THEME */

// Monokai
/* -- DELETE LINE TO ENABLE THEME
Hints.style('border: solid 2px #2D2E2E; color:#F92660; background: initial; background-color: #272822;');
Hints.style("border: solid 2px #2D2E2E !important; padding: 1px !important; color: #A6E22E !important; background: #272822 !important;", "text");
Visual.style('marks', 'background-color: #A6E22E99;');
Visual.style('cursor', 'background-color: #F92660;');
-- DELETE LINE TO ENABLE THEME */

settings.theme = `
/* Edit these variables for easy theme making */
:root {
  /* Font */
  --font: 'Source Code Pro', Ubuntu, sans;
  --font-size: 1.3em;
  --font-weight: bold;
  /* -------------- */
  /* --- THEMES --- */
  /* -------------- */
  /* -------------------- */
  /* -- Tomorrow Night -- */
  /* -------------------- */
  --fg: #C5C8C6;
  --bg: #282A2E;
  --bg-dark: #1D1F21;
  --border: #373b41;
  --main-fg: #81A2BE;
  --accent-fg: #52C196;
  --info-fg: #AC7BBA;
  --select: #585858;
  /* Unused Alternate Colors */
  /* --cyan: #4CB3BC; */
  /* --orange: #DE935F; */
  /* --red: #CC6666; */
  /* --yellow: #CBCA77; */
  /* -------------------- */
  /* --      NORD      -- */
  /* -------------------- */
  /* -- DELETE LINE TO ENABLE THEME
  --fg: #E5E9F0;
  --bg: #3B4252;
  --bg-dark: #2E3440;
  --border: #4C566A;
  --main-fg: #88C0D0;
  --accent-fg: #A3BE8C;
  --info-fg: #5E81AC;
  --select: #4C566A;
  -- DELETE LINE TO ENABLE THEME */
  /* Unused Alternate Colors */
  /* --orange: #D08770; */
  /* --red: #BF616A; */
  /* --yellow: #EBCB8B; */
  /* -------------------- */
  /* --    DOOM ONE    -- */
  /* -------------------- */
  /* -- DELETE LINE TO ENABLE THEME
  --fg: #51AFEF;
  --bg: #2E3440;
  --bg-dark: #21242B;
  --border: #2257A0;
  --main-fg: #51AFEF;
  --accent-fg: #98be65;
  --info-fg: #C678DD;
  --select: #4C566A;
  -- DELETE LINE TO ENABLE THEME */
  /* Unused Alternate Colors */
  /* --border-alt: #282C34; */
  /* --cyan: #46D9FF; */
  /* --orange: #DA8548; */
  /* --red: #FF6C6B; */
  /* --yellow: #ECBE7B; */
  /* -------------------- */
  /* --    MONOKAI    -- */
  /* -------------------- */
  /* -- DELETE LINE TO ENABLE THEME
  --fg: #F8F8F2;
  --bg: #272822;
  --bg-dark: #1D1E19;
  --border: #2D2E2E;
  --main-fg: #F92660;
  --accent-fg: #E6DB74;
  --info-fg: #A6E22E;
  --select: #556172;
  -- DELETE LINE TO ENABLE THEME */
  /* Unused Alternate Colors */
  /* --red: #E74C3C; */
  /* --orange: #FD971F; */
  /* --blue: #268BD2; */
  /* --violet: #9C91E4; */
  /* --cyan: #66D9EF; */
}
/* ---------- Generic ---------- */
.sk_theme {
background: var(--bg);
color: var(--fg);
  background-color: var(--bg);
  border-color: var(--border);
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
input {
  font-family: var(--font);
  font-weight: var(--font-weight);
}
.sk_theme tbody {
  color: var(--fg);
}
.sk_theme input {
  color: var(--fg);
}
/* Hints */
#sk_hints .begin {
  color: var(--accent-fg) !important;
}
#sk_tabs .sk_tab {
  background: var(--bg-dark);
  border: 1px solid var(--border);
}
#sk_tabs .sk_tab_title {
  color: var(--fg);
}
#sk_tabs .sk_tab_url {
  color: var(--main-fg);
}
#sk_tabs .sk_tab_hint {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--accent-fg);
}
.sk_theme #sk_frame {
  background: var(--bg);
  opacity: 0.2;
  color: var(--accent-fg);
}
/* ---------- Omnibar ---------- */
/* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
/* .sk_theme#sk_omnibar {
  width: 100%;
  left: 0;
} */
.sk_theme .title {
  color: var(--accent-fg);
}
.sk_theme .url {
  color: var(--main-fg);
}
.sk_theme .annotation {
  color: var(--accent-fg);
}
.sk_theme .omnibar_highlight {
  color: var(--accent-fg);
}
.sk_theme .omnibar_timestamp {
  color: var(--info-fg);
}
.sk_theme .omnibar_visitcount {
  color: var(--accent-fg);
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: var(--bg-dark);
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
  background: var(--border);
}
.sk_theme #sk_omnibarSearchArea {
  border-top-color: var(--border);
  border-bottom-color: var(--border);
  border-bottom: 0px;
}
.sk_theme #sk_omnibarSearchArea input,
.sk_theme #sk_omnibarSearchArea span {
  font-size: var(--font-size);
  display: flex;
  align-items: center;
}
.sk_theme .separator {
  color: var(--accent-fg);
}
/* ---------- Popup Notification Banner ---------- */
#sk_banner {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  background: var(--bg);
  border-color: var(--border);
  color: var(--fg);
  opacity: 0.9;
}
/* ---------- Popup Keys ---------- */
#sk_keystroke {
  background-color: var(--bg);
}
.sk_theme kbd .candidates {
  color: var(--info-fg);
}
.sk_theme span.annotation {
  color: var(--accent-fg);
}
/* ---------- Popup Translation Bubble ---------- */
#sk_bubble {
  background-color: var(--bg) !important;
  color: var(--fg) !important;
  border-color: var(--border) !important;
}
#sk_bubble * {
  color: var(--fg) !important;
}
#sk_bubble div.sk_arrow div:nth-of-type(1) {
  border-top-color: var(--border) !important;
  border-bottom-color: var(--border) !important;
}
#sk_bubble div.sk_arrow div:nth-of-type(2) {
  border-top-color: var(--bg) !important;
  border-bottom-color: var(--bg) !important;
}
/* ---------- Search ---------- */
#sk_status,
#sk_find {
  font-size: var(--font-size);
  border-color: var(--border);
}
.sk_theme kbd {
  background: var(--bg-dark);
  border-color: var(--border);
  box-shadow: none;
  color: var(--fg);
}
.sk_theme .feature_name span {
  color: var(--main-fg);
}
/* ---------- ACE Editor ---------- */
#sk_editor {
  background: var(--bg-dark) !important;
  height: 50% !important;
  /* Remove this to restore the default editor size */
}
.ace_dialog-bottom {
  border-top: 1px solid var(--bg) !important;
}
.ace-chrome .ace_print-margin,
.ace_gutter,
.ace_gutter-cell,
.ace_dialog {
  background: var(--bg) !important;
}
.ace-chrome {
  color: var(--fg) !important;
}
.ace_gutter,
.ace_dialog {
  color: var(--fg) !important;
}
.ace_cursor {
  color: var(--fg) !important;
}
.normal-mode .ace_cursor {
  background-color: var(--fg) !important;
  border: var(--fg) !important;
  opacity: 0.7 !important;
}
.ace_marker-layer .ace_selection {
  background: var(--select) !important;
}
.ace_editor,
.ace_dialog span,
.ace_dialog input {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
`;
