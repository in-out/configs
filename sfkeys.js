// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
	Normal.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

stealFocusOnLoad=true;
enableAutoFocus=false;

// -----------------------------------------------------------------------------------------------------------------------
// Change hints styles
// -----------------------------------------------------------------------------------------------------------------------
Hints.characters = "asdfgqwertvbn";

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

// Tomorrow-Night
/* -- DELETE LINE TO ENABLE THEME
Hints.style('border: solid 2px #373B41; color:#52C196; background: initial; background-color: #1D1F21;');
Hints.style("border: solid 2px #373B41 !important; padding: 1px !important; color: #C5C8C6 !important; background: #1D1F21 !important;", "text");
Visual.style('marks', 'background-color: #52C19699;');
Visual.style('cursor', 'background-color: #81A2BE;');
-- DELETE LINE TO ENABLE THEME */

// Nord
/* -- DELETE LINE TO ENABLE THEME
Hints.style('border: solid 2px #4C566A; color:#A3BE8C; background: initial; background-color: #3B4252;');
Hints.style("border: solid 2px #4C566A !important; padding: 1px !important; color: #E5E9F0 !important; background: #3B4252 !important;", "text");
Visual.style('marks', 'background-color: #A3BE8C99;');
Visual.style('cursor', 'background-color: #88C0D0;');
-- DELETE LINE TO ENABLE THEME */

// Doom One
Hints.style('border: solid 2px #282C34; color:#98be65; background: initial; background-color: #2E3440;');
Hints.style("border: solid 2px #282C34 !important; padding: 1px !important; color: #51AFEF !important; background: #2E3440 !important;", "text");
Visual.style('marks', 'background-color: #98be6599;');
Visual.style('cursor', 'background-color: #51AFEF;');

// Monokai
/* -- DELETE LINE TO ENABLE THEME
Hints.style('border: solid 2px #2D2E2E; color:#F92660; background: initial; background-color: #272822;');
Hints.style("border: solid 2px #2D2E2E !important; padding: 1px !important; color: #A6E22E !important; background: #272822 !important;", "text");
Visual.style('marks', 'background-color: #A6E22E99;');
Visual.style('cursor', 'background-color: #F92660;');
-- DELETE LINE TO ENABLE THEME */

//mapkey('H', '#4Go back in history', 'history.go(-1)');
//mapkey('L', '#4Go forward in history', 'history.go(1)');
// an example to remove mapkey `Ctrl-i`
// unmap('<Ctrl-i>');
unmap('gr');
unmap('spa');
unmap('spb');
unmap('spd');
unmap('sps');
unmap('spc');
unmap('F');
unmap('gc');
unmap('as');
unmap('aa');
unmap('ar');
unmap('od');
unmap('oe');
unmap('sd');
unmap('om');
unmap('ss');
unmap('sm');
//unmap('f');
// search engine
addSearchAliasX('z', 'zhihu', 'https://www.zhihu.com/search?type=question&q=', 's');
addSearchAliasX('e', 'ecosia', 'https://www.ecosia.org/search?q=', 's');
//addSearchAliasX('p', 'panc', 'https://www.panc.cc/m/s/?s=', 's');
addSearchAliasX('dd', 'duckduckgo', 'https://duckduckgo.com/?q=', 's');
addSearchAliasX('db', 'douban', 'https://www.douban.com/search?source=suggest&q=', 's');
addSearchAliasX('dm', 'douban movie', 'https://www.douban.com/search?source=suggest&cat=1002&q=', 's');
//addSearchAliasX('t', 'translate', 'https://translate.google.cn/?source=osdd#auto/zh-CN/', 's');
addSearchAliasX('sm', 'smzdm', 'https://search.smzdm.com/?c=post&s=', 's');
addSearchAliasX('sb', 'bing', 'https://www.bing.com/search?q=', 's');
//addSearchAliasX('sx', 'searx', 'https://searx.info/?q=', 's');
addSearchAliasX('sx', 'searx', 'https://searx.info/?q=', 's');
//addSearchAliasX('sx', 'searx', 'https://searx.fmac.xyz/?q=', 's');
addSearchAliasX('st', 'stackoverflow', 'https://stackoverflow.com/search?q=', 's');
addSearchAliasX('md', 'mdn', 'https://developer.mozilla.org/zh-CN/search?q=', 's');
addSearchAliasX('j', 'jd', 'https://search.jd.com/Search?enc=utf-8&keyword=', 's');
addSearchAliasX('c', 'github', 'https://github.com/search?q=', 's');
addSearchAliasX('do', 'doge', 'https://www.dogedoge.com/results?q=', 's');
addSearchAliasX('t', 'rarbg', 'https://rarbg.to/torrents.php?search=', 's');
addSearchAliasX('ms', 'mengso', 'https://mengso.com/search?q=', 's');

mapkey('osx', 'call searx', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'sx'
	});
});
mapkey('osm', 'call smzdm search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'sm'
	});
});
mapkey('osb', 'call bing search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'sb'
	});
});
mapkey('ost', 'call stackoverflow search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'st'
	});
});
mapkey('omd', 'call mdn search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'md'
	});
});
mapkey('oms', 'call mengso search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'ms'
	});
});
mapkey('oj', 'call jd search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'j'
	});
});
mapkey('oc', 'call github search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'c'
	});
});
mapkey('oe', 'call ecosia search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'e'
	});
});
mapkey('odb', 'call douban search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'db'
	});
});
mapkey('odm', 'call douban movie search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'dm'
	});
});
mapkey('odd', 'call dockduckgo search', function() {
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
mapkey('oz', 'call zhihu search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'z'
	});
});
mapkey('odo', 'call dogedoge search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 'do'
	});
});
mapkey('ot', 'call rarbg search', function() {
	Front.openOmnibar({
		type: "SearchEngine",
		extra: 't'
	});
});
map('or', ':openSession r');
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
    mapkey('gc', '#12Open Chrome Configure', function() {
        tabOpenLink("chrome://settings/");
    });
settings.blacklistPattern = /.*mail.google.com.*|.*inbox.google.com.*|trello.com|inoreader.com|route.asus.com|localhost/i;
settings.nextLinkRegex = /((>>|下一页|next|older posts|older entries|forward|>|>>|❯|›|»|more|下一张|下页|(阅读)?下一章|次へ)+)/i;
settings.prevLinkRegex = /((<<|上一页|prev(ious)?|newer posts|newer entries|back|<|❮|<<«|less|‹|上一张|(阅读)?上一章|前へ)+)/i;

// Prevent automatic next/previous page loads
settings.smartPageBoundary = false;
settings.stealFocusOnLoad = false;

// set theme
/* -- DELETE LINE TO ENABLE THEME
settings.theme = `
.sk_theme {
	background: #100a14dd;
	color: #4f97d7;
}
.sk_theme tbody {
	color: #292d;
}
.sk_theme input {
	color: #d9dce0;
}
.sk_theme .url {
	color: #2d9574;
}
.sk_theme .annotation {
	color: #a31db1;
}
.sk_theme .omnibar_highlight {
	color: #333;
	background: #ffff00aa;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
	background: #5d4d7a55;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
	background: #5d4d7aaa;
}
.sk_theme #sk_omnibarSearchResult .omnibar_folder {
	color: #a31db1;
}
`;
-- DELETE LINE TO ENABLE THEME */

settings.theme = `
/* Edit these variables for easy theme making */
:root {
  /* Font */
  --font: 'Microsoft YaHei', 'FontAwesome',  'Meiryo', 'Source Code Pro', Ubuntu, sans;
  --font-size: 18;
  --font-weight: bold;
    /* -------------- */
  /* --- THEMES --- */
  /* -------------- */

  /* -------------------- */
  /* -- Tomorrow Night -- */
  /* -------------------- */
  /* -- DELETE LINE TO ENABLE THEME
  --fg: #C5C8C6;
  --bg: #282A2E;
  --bg-dark: #1D1F21;
  --border: #373b41;
  --main-fg: #81A2BE;
  --accent-fg: #52C196;
  --info-fg: #AC7BBA;
  --select: #585858;
  -- DELETE LINE TO ENABLE THEME */

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
  --fg: #51AFEF;
  --bg: #2E3440;
  --bg-dark: #21242B;
  --border: #2257A0;
  --main-fg: #51AFEF;
  --accent-fg: #98be65;
  --info-fg: #C678DD;
  --select: #4C566A;

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
}

.sk_theme #sk_omnibarSearchArea input,
.sk_theme #sk_omnibarSearchArea span {
  font-size: var(--font-size);
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
