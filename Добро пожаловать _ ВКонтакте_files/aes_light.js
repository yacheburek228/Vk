!function(){var AdsLight={},isVkDomain="vk.com"===document.domain,uaLight=navigator.userAgent.toLowerCase(),browserLight={msie6:/msie 6/i.test(uaLight)&&!/opera/i.test(uaLight),msie7:/msie 7/i.test(uaLight)&&!/opera/i.test(uaLight),msie8:/msie 8/i.test(uaLight)&&!/opera/i.test(uaLight)};isVkDomain&&("__adsLoaded"in window||(window.__adsLoaded=vkNow()),window.AdsLight=AdsLight),AdsLight.init=function(){window.vk__adsLight||(window.vk__adsLight={},AdsLight.initUserHandlers(),vk__adsLight.widgetsIds={},vk__adsLight.observersInited=!1,vk__adsLight.publishTimers={},vk__adsLight.windowId=Math.round(1e9*Math.random()+1),vk__adsLight.activeTab=0,vk__adsLight.userEventTime=0,vk__adsLight.wrapVisible=!1,vk__adsLight.imagesTimer=!1,vk__adsLight.reloadTimer=!1,vk__adsLight.updateBlockTimer=!1,vk__adsLight.adsCanShow=1,vk__adsLight.adsSection=!1,vk__adsLight.adsShowed="",vk__adsLight.adsShowedHash=+new Date,vk__adsLight.adsParams=!1,vk__adsLight.updateProgress=0,vk__adsLight.adsShowedAll={},vk__adsLight.loadComplete=!1,vk__adsLight.loaderParams=!1,vk__adsLight.adsIdsApplyNeeded={},vk__adsLight.adsIdsApplyProcess=[],vk__adsLight.adsIdsApplyTimer=!1,vk__adsLight.adsIdsApplyLocked=!1,"onfocusin"in window?window.addEventListener?(window.addEventListener("focusin",vk__adsLight.userHandlers.onFocusWindow,!1),window.addEventListener("focusout",vk__adsLight.userHandlers.onBlurWindow,!1)):window.attachEvent&&(window.attachEvent("onfocusin",vk__adsLight.userHandlers.onFocusWindow),window.attachEvent("onfocusout",vk__adsLight.userHandlers.onBlurWindow)):window.addEventListener&&(window.addEventListener("focus",vk__adsLight.userHandlers.onFocusWindow,!0),window.addEventListener("blur",vk__adsLight.userHandlers.onBlurWindow,!0)),document.addEventListener?(window.addEventListener("scroll",vk__adsLight.userHandlers.onScrollWindow,!0),document.addEventListener("mousedown",vk__adsLight.userHandlers.onMouseDownDocument,!0)):document.attachEvent&&(window.attachEvent("onscroll",vk__adsLight.userHandlers.onScrollWindow),document.attachEvent("onmousedown",vk__adsLight.userHandlers.onMouseDownDocument)),!isVkDomain&&window.VK&&VK.addCallback&&VK.addCallback("adsPublish",AdsLight.handleEvent),vk__adsLight.yaDirectLoaded=!1,vk__adsLight.yaDirectAdActive=!1,vk__adsLight.yaDirectLoadTries=0,vk__adsLight.gadxLoaded=!1,vk__adsLight.gadxLoading=!1,vk__adsLight.gadxLoadTries=0,vk__adsLight.showWmgAd=!0,vk__adsLight.wmgLoading=!1,vk__adsLight.wmgLoadTries=0,vk__adsLight.GPTLoading=!1,vk__adsLight.GPTLoaded=!1,vk__adsLight.GPTLoadTries=0,vk__adsLight.userHandlers.onInit(!0))},AdsLight.initUserHandlers=function(){var t=!(vk__adsLight.userHandlers={onInit:function(e){AdsLight.initObservers(),e&&AdsLight.handleEvent("ads.onEvent","onInit",0);e||AdsLight.loadAds();document.hasFocus&&document.hasFocus()&&n(!0)},onHasFocus:n,onFocusWindow:function(e){e&&AdsLight.handleEvent("ads.onEvent","onFocusWindow",0);if(t)return;t=!0,s=window.vkNow&&vkNow()||0,vk__adsLight.userEventTime=window.vkNow&&vkNow()||0,r()},onBlurWindow:function(e){if(t=!1,window.vkNow&&vkNow()-s<1e3)return;e&&AdsLight.handleEvent("ads.onEvent","onBlurWindow",0);vk__adsLight.activeTab=window.vkNow&&-vkNow()||0},onScrollWindow:function e(t,i){if(t&&!i)return clearTimeout(a),void(a=setTimeout(function(){e(t,!0)},100));t&&AdsLight.handleEvent("ads.onEvent","onScrollWindow",0);vk__adsLight.userEventTime=window.vkNow&&vkNow()||0;r();isVkDomain&&window.vkNow&&window.vk&&vk.ads_rotate_interval&&s()&&(clearTimeout(d),d=setTimeout(function(){s()&&(__adsLoaded=0,AdsLight.updateBlock())},10));isVkDomain&&AdsLight.applyAds();function s(){return"web"===vk__adsLight.adsSection&&vkNow()-__adsLoaded>=vk.ads_rotate_interval||vkNow()-__adsLoaded>=5*vk.ads_rotate_interval}},onMouseDownDocument:function(e){e&&AdsLight.handleEvent("ads.onEvent","onMouseDownDocument",0);if(vk__adsLight.userEventTime=window.vkNow&&vkNow()||0,r(),!e)return;var t=e.target;for(;t&&"A"!=t.tagName&&!t.onclick;)t=t.parentNode;if(!t)return;o(!0)},onMouseDownDocumentAction:o,onActiveTab:r}),i=!1,s=!1,d=!1,a=!1;function n(e){e&&AdsLight.handleEvent("ads.onEvent","onHasFocus",0),r()}function o(e){e&&AdsLight.handleEvent("ads.onEvent","onMouseDownDocumentAction",0),clearTimeout(d),i=!0,setTimeout(function(){i=!1},10)}function r(e){function t(){return vkNow()-__adsLoaded>=vk.ads_rotate_interval}isVkDomain&&window.vkNow&&window.vk&&vk.ads_rotate_interval&&!i&&vk__adsLight.activeTab<0&&15e3<=vkNow()+vk__adsLight.activeTab&&t()&&(clearTimeout(d),d=setTimeout(function(){t()&&(__adsLoaded=0,AdsLight.updateBlock())},10)),vk__adsLight.activeTab=1}},AdsLight.initWeb=function(e,t,i,s){if(vk__adsLight.adsSection=e,top!==window){var d={adsPublish:function(){AdsLight.handleEvent.apply(AdsLight,arguments)},onAdsAttached:function(){vk__adsLight.rpc.callMethod("publish","ads.subscribeEvents")},onInit:function(){vk__adsLight.rpc.callMethod("publish","ads.subscribeEvents")}};try{vk__adsLight.rpc=new fastXDM.Client(d),vk__adsLight.rpc.callMethod("adsOnInitLoader",i),vk__adsLight.loaderParams=t,vk__adsLight.adsParamsExport=s}catch(e){debugLog(e)}}},AdsLight.initObservers=function(){if(window.VK&&VK.Observer&&VK.Observer.subscribe&&!vk__adsLight.observersInited)for(var e in vk__adsLight.observersInited=!0,VK.Observer.subscribe("ads.isVisibleBlockWrap",t("ads.isVisibleBlockWrap")),VK.Observer.subscribe("ads.subscribeEvents",t("ads.subscribeEvents")),VK.Observer.subscribe("ads.onEvent",t("ads.onEvent")),VK.Observer.subscribe("ads.onAdsShowed",t("ads.onAdsShowed")),VK.Widgets.RPC)VK.Widgets.RPC[e].methods.adsOnInit&&VK.Widgets.RPC[e].callMethod("onAdsAttached");function t(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t),AdsLight.handleEvent.apply(AdsLight,e)}}},AdsLight.handleEvent=function(){var e=Array.prototype.slice.call(arguments);switch(e.shift()){case"ads.isVisibleBlockWrap":AdsLight.isVisibleBlockWrapRpc.apply(AdsLight,e);break;case"ads.subscribeEvents":var t=e[0];t&&!vk__adsLight.widgetsIds[t]&&(vk__adsLight.widgetsIds[t]=!0),vk__adsLight.userHandlers.onInit(!0);break;case"ads.onEvent":AdsLight.onEvent.apply(AdsLight,e);break;case"ads.onAdsShowed":AdsLight.onAdsShowed.apply(AdsLight,e)}},AdsLight.onEvent=function(e,t){if(0===t)t=[];else{var i=!1;for(var s in t)if(t[s]==vk__adsLight.windowId){i=!0;break}if(i)return;vk__adsLight.userHandlers[e]&&vk__adsLight.userHandlers[e](!1)}t.push(vk__adsLight.windowId),AdsLight.publish(!1,"ads.onEvent",e,t)},AdsLight.onAdsShowed=function(e){0===e&&(e={});var t=[];for(var i in e)t.push(parseInt(i));t.sort();for(var s=[],d=0,a=t.length;d<a;d++){i=t[d];s.push(e[i].ads_showed_hash)}var n=(s=s.join("_"))&&e[vk__adsLight.windowId]&&s===e[vk__adsLight.windowId].publish_hash,o=+new Date;for(var i in e[vk__adsLight.windowId]||(e[vk__adsLight.windowId]={},t.push(vk__adsLight.windowId),t.sort()),e[vk__adsLight.windowId].ads_showed=vk__adsLight.adsShowed,e[vk__adsLight.windowId].ads_showed_hash=vk__adsLight.adsShowedHash,e[vk__adsLight.windowId].update_progress=vk__adsLight.updateProgress,vk__adsLight.adsShowedAll)(!e[i]||vk__adsLight.adsShowedAll[i].publish_time>e[i].publish_time)&&o-vk__adsLight.adsShowedAll[i].publish_time<1e4&&(e[i]=vk__adsLight.adsShowedAll[i]);for(s=[],d=0,a=t.length;d<a;d++){i=t[d];s.push(e[i].ads_showed_hash)}for(var i in s=s.join("_"),e[vk__adsLight.windowId].publish_time=o,e[vk__adsLight.windowId].publish_hash=s,e)vk__adsLight.adsShowedAll[i]=e[i];n||AdsLight.publish(!0,"ads.onAdsShowed",e)},AdsLight.publish=function(e,t){var i,s=Array.prototype.slice.call(arguments,1),d=s.slice(),a=s.slice(),n=s.slice(),o=s.slice();d.unshift("adsPublish"),a.unshift("adsPublish"),n.unshift("adsPublish"),o.unshift("publish");var r=[];if(window.VK&&VK.Widgets&&VK.Widgets.RPC)for(var g in vk__adsLight.widgetsIds)VK.Widgets.RPC[g]&&VK.Widgets.RPC[g].callMethod&&(i=function(){var e=g;return function(){VK.Widgets.RPC[e].callMethod.apply(VK.Widgets.RPC[e],d)}}(),r.push(i));function l(){for(var e=0,t=r.length;e<t;e++)r[e]()}!isVkDomain&&window.VK&&VK.callMethod&&(i=function(){VK.callMethod.apply(VK,a)},r.push(i)),isVkDomain&&"web"!==vk__adsLight.adsSection&&window.cur&&cur.app&&cur.app.runCallback&&(i=function(){cur.app.runCallback.apply(cur.app,n)},r.push(i)),isVkDomain&&"web"===vk__adsLight.adsSection&&vk__adsLight.rpc&&vk__adsLight.rpc.callMethod&&(i=function(){vk__adsLight.rpc.callMethod.apply(vk__adsLight.rpc,o)},r.push(i)),clearTimeout(vk__adsLight.publishTimers[t]),1<r.length&&e?vk__adsLight.publishTimers[t]=setTimeout(l,50):l()},AdsLight.canUpdate=function(e){var t=ge("ads_left"),i=e&&!1===__adsLoaded,s=!0;return s=(s=s&&t&&isVisible(t)&&(0<vk__adsLight.activeTab&&AdsLight.isVisibleBlockWrap()||i))&&vk.id&&(1<=vk__adsLight.adsCanShow||36e5<vkNow()+vk__adsLight.adsCanShow),s="web"===vk__adsLight.adsSection?s&&2===vk__adsLight.loadComplete:(s=s&&isVisible("side_bar")&&!layers.visible&&!isVisible("left_friends"))&&!AdsLight.isNoAds()&&(vk.loaded||i)},AdsLight.isNoAds=function(){return vk.no_ads||AdsLight.isNoAdsForce()},AdsLight.isNoAdsForce=function(){return window.cur&&window.cur.no_left_ads},AdsLight.getAjaxParams=function(e,t){var i={},s=AdsLight.canUpdate(!0);return cur.group_id&&(i._ads_group_id=cur.group_id),t.noAds||t.cache?i.al_ad=0:s||t.ads?((t.ads||window.vkNow&&window.vk&&vk.ads_rotate_interval&&"web"!==vk__adsLight.adsSection&&vkNow()-__adsLoaded>=vk.ads_rotate_interval)&&(__adsLoaded=vkNow(),i.al_ad=1),(e.al_ad||i.al_ad)&&(i.ads_section=vk__adsLight.adsSection,i.ads_showed=AdsLight.getAdsShowed())):i.al_ad=null,i},AdsLight.doRequest=function(n,e){var o="web"===vk__adsLight.adsSection&&1===vk__adsLight.loadComplete;if(!e)return vk__adsLight.updateProgress=1,AdsLight.onAdsShowed(0),void setTimeout(AdsLight.doRequest.pbind(n,!0),300);var r,g,l=0,h={};!function e(t){var i=+new Date;var s=0;for(var d in vk__adsLight.adsShowedAll){var a=vk__adsLight.adsShowedAll[d];if(3e4<=i-a.publish_time)delete vk__adsLight.adsShowedAll[d];else if(!o||!h[d]){if(2==a.update_progress){s=d;break}1==a.update_progress&&(!s||d<s)&&(s=d)}}t||!s||s==vk__adsLight.windowId?(clearInterval(r),clearTimeout(g),vk__adsLight.updateProgress=2,AdsLight.onAdsShowed(0),n()):s!=l&&(l=s,clearInterval(r),clearTimeout(g),r=setInterval(e,o?100:200),g=setTimeout(e.pbind(!0),5050));h[s]=h[s]?h[s]+1:1}()},AdsLight.getAdsShowed=function(){var e=[];for(var t in vk__adsLight.adsShowedAll){var i=vk__adsLight.adsShowedAll[t];i.ads_showed&&e.push(i.ads_showed)}return e=e.join(",")},AdsLight.updateBlock=function(e,t){if("very_lazy"!==e){if("lazy"===e){if(__adsLoaded)return void(__adsLoaded=0);__adsLoaded=0}if("force"===e&&(__adsLoaded=0),"force_hard"===e&&(__adsLoaded=0),"already"!==e){if(!__adsLoaded&&!1!==__adsLoaded){if(!t)return clearTimeout(vk__adsLight.updateBlockTimer),void(vk__adsLight.updateBlockTimer=setTimeout(AdsLight.updateBlock.pbind(!1,1),1e3));var i=AdsLight.canUpdate();if(1!=t){if(i||"force_hard"==e&&!AdsLight.isNoAdsForce()){__adsLoaded=vkNow();var s={};for(var d in vk__adsLight.adsParams)s[d]=vk__adsLight.adsParams[d];AdsLight.doRequest(function(){s.ads_showed=AdsLight.getAdsShowed(),s.ya_ad_active=+vk__adsLight.yaDirectAdActive,ajax.post("/ads_rotate.php?act=al_update_ad",s,{ads:1,onDone:n,onFail:a})})}}else setTimeout(AdsLight.updateBlock.pbind(!1,2),500)}}else __adsLoaded=vkNow()}else __adsLoaded=0;function a(){return n(),!0}function n(){vk__adsLight.updateProgress=3}},AdsLight.sendExperimentStat=function(e,t,i){if(window.vk&&vk.id){if(vk.id%20!=2)return}else if(.05<=Math.random())return;var s;switch(t){case"try":s=e+1;break;case"success":s=e+2;break;case"fail":s=e+3;break;case"noresult":s=e+7;break;case"lineup":s=e+8;break;case"extra":s=e+9;break;default:return}var d="/wkview.php?act=mlet&mt="+s;i&&(d+="&extra="+encodeURIComponent(i)),ajax.post(d,{},{onFail:function(){return!0}})},AdsLight.tryExperiment=function(t){for(var i in t){i=intval(i);var e=t[i].split(":"),s=e[0],d=parseInt(e[1]),a=e.slice(2),n=a.length?a[a.length-1]:"",o="label=",r="";switch(n.substr(0,o.length)===o&&(r=n.substr(o.length),a=a.slice(0,-1)),vk__adsLight.yaDirectAdActive=!1,s){case"ya_direct":return AdsLight.sendExperimentStat(d,"lineup"),vk__adsLight.yaCloseLink=a[0],vk__adsLight.yaDirectLoaded?(AdsLight.tryRenderYaDirect(a[1],d,r,t.slice(i+1)),!0):void(3<vk__adsLight.yaDirectLoadTries?(AdsLight.sendExperimentStat(d,"fail"),AdsLight.tryExperiment(t.slice(i+1))):(AdsLight.initYaDirect(a[2]),setTimeout(function(){AdsLight.tryExperiment(t)},300)));case"criteo":return AdsLight.sendExperimentStat(d,"lineup"),AdsLight.tryRenderCriteo(d,t.slice(i+1)),!0;case"rb":return AdsLight.sendExperimentStat(d,"lineup"),AdsLight.tryRenderTarget(a[0],a[1],d,r,a[2],a[3],a[4],a[6],a[5],t.slice(i+1)),!0;case"vk":AdsLight.sendExperimentStat(d,"lineup"),AdsLight.sendExperimentStat(d,"try");var g=+new Date,l="__vkAdsReq_"+g;window[l]=function(e){e.ads_count&&AdsLight.sendExperimentStat(d,"success"),delete window[l]},setTimeout(function(){delete window[l]},6e4);var h=vk__adsLight.adsParams;return vk__adsLight.adsParams=vk__adsLight.adsParams||{},vk__adsLight.adsParams.ads_req_id=g,vk__adsLight.adsParams.ignore_experiments=d,AdsLight.updateBlock("force_hard",2),vk__adsLight.adsParams=h,!0;case"gadx":if(AdsLight.sendExperimentStat(d,"lineup"),!vk__adsLight.gadxLoaded)return void(3<vk__adsLight.gadxLoadTries?(AdsLight.sendExperimentStat(d,"fail"),AdsLight.tryExperiment(t.slice(i+1))):(AdsLight.initGADX(a[0],[a[1],a[2]],d,t.slice(i+1)),setTimeout(function(){AdsLight.tryExperiment(t)},300)));var c=AdsLight.getBusyBlockID(vk__adsLight.gadxBlocks),_=AdsLight.getFreeBlockID(vk__adsLight.gadxBlocks);if(!_)return void AdsLight.sendExperimentStat(d,"fail");if(c){var v=ge(c),u=(L=ge("ads_left"),getSize(L)[1]);setStyle(L,{minHeight:u,maxHeight:u}),setStyle(v,{position:"absolute",top:0,left:0,width:"100%"}),v=ce("div",{id:_},{maxHeight:0,overflow:"hidden"}),L.appendChild(v)}else{var L;if(v=ce("div",{id:_},{maxHeight:0,overflow:"hidden"}),!(L=ge("ads_left")))return AdsLight.sendExperimentStat(d,"fail"),void AdsLight.tryExperiment(t.slice(i+1));if(L.innerHTML)return AdsLight.showNewBlock(L,"",!0),void setTimeout(function(){ge("ads_left").innerHTML="",AdsLight.tryExperiment(t)},1e3);L.appendChild(v)}return googletag.cmd.push(function(e,t){AdsLight.sendExperimentStat(t,"try"),googletag.pubads().refresh([vk__adsLight.gadxSlots[e]]),googletag.display(e)}.pbind(_,d)),!0;case"wmg":return AdsLight.sendExperimentStat(d,"lineup"),AdsLight.wmgMessageCallback=function(e){AdsLight.checkWmgMessage.call(this,e,d,t,i)},addEventListener("message",AdsLight.wmgMessageCallback),window.glade?(vk__adsLight.showWmgAd=!0,AdsLight.tryRenderWmg(d,t.slice(i+1))):3<vk__adsLight.wmgLoadTries?(vk__adsLight.showWmgAd=!1,AdsLight.onWmgRenderUnsuccessful(d,t.slice(i+1))):(vk__adsLight.showWmgAd=!0,AdsLight.initWmg(),setTimeout(function(){AdsLight.tryExperiment(t)},300)),!0;case"gpt":return AdsLight.sendExperimentStat(d,"lineup"),window.googletag&&window.googletag.apiReady&&vk__adsLight.GPTLoaded?AdsLight.tryRenderGPT(d,t,t.slice(i+1)):3<vk__adsLight.GPTLoadTries?AdsLight.onGPTRenderUnsuccessful(d,t.slice(i+1)):(AdsLight.initGPT(d,t.slice(i+1)),setTimeout(function(){AdsLight.tryExperiment(t)},300)),!0}}return!1},AdsLight.setNewBlock=function(e,t,i,s,d,a){"string"==typeof t&&(vk__adsLight.adsSection=t);var n="\x3c!--ads_experiment";if(e&&e.slice(0,n.length)===n){var o=e.split(";");AdsLight.tryExperiment(o.slice(1,-1))}else{var r="\x3c!--ads_props_data;",g=e?e.indexOf(r):-1,l=-1!=g?e.indexOf(";--\x3e",g+r.length):-1;if(-1!=l&&(a=e.slice(g+r.length,l)),a&&"string"==typeof a)try{a=window.parseJSON?parseJSON(a):JSON.parse(a)}catch(e){}if(a&&"[object Object]"===Object.prototype.toString.call(a)||(a={}),vk__adsLight.adsCanShow=i||"0"===i?1:-vkNow(),vk__adsLight.adsShowed=s,vk__adsLight.adsShowedHash=+new Date,d&&(vk__adsLight.adsParams=d),!e)if(AdsLight.isNoAds())e="";else{if("im"!==vk__adsLight.adsSection||0!=__seenAds)return void AdsLight.resizeBlockWrap([0,0],!1,!1,!0);e=""}__adsLoaded=vkNow();var h=ge("ads_left"),c=h&&isVisible(h)||vk.ad_preview;if(!h){var _=ge("side_bar");if(!_)return void AdsLight.resizeBlockWrap([0,0],!1,!1,!0);h=_.appendChild(ce("div",{id:"ads_left",className:"ads_left_empty"},{display:c?"block":"none"}))}if(AdsLight.showNewBlock(h,e,c),window.vk&&vk.ads_rotate_interval&&"web"===vk__adsLight.adsSection&&(clearInterval(vk__adsLight.reloadTimer),vk__adsLight.reloadTimer=setInterval(function(){vkNow()-__adsLoaded>=vk.ads_rotate_interval&&vkNow()-vk__adsLight.userEventTime<=3*vk.ads_rotate_interval/4&&(__adsLoaded=0,AdsLight.updateBlock())},vk.ads_rotate_interval)),a.ads_req_id)try{var v="__vkAdsReq_"+a.ads_req_id;window[v]&&window[v](a)}catch(e){}setTimeout(function(){vk__adsLight.updateProgress=3,AdsLight.onAdsShowed(0)},100),"undefined"!=typeof abp&&abp&&setCookie("remixab",1,30)}},AdsLight.showNewBlock=function(i,e,t){if(!t||browserLight.msie6||browserLight.msie7){t||debugLog("Ads container is hidden"),i.innerHTML=e,toggleClass(i,"ads_left_empty",!e);var s=AdsLight.getBlockSize(i);return AdsLight.resizeBlockWrap(s,!1,!1,!0),void AdsLight.updateExternalStats(i)}for(var d=getXY(i)[1],a=scrollGetY(),n=!e,o=d+50>a+lastWindowHeight?0:200,r=AdsLight.getBlockSize(i),g=[0,0],l=i.appendChild("string"==typeof e?ce("div",{innerHTML:e},{display:"none"}):e),h=geByClass1("ads_ads_box3",l)||l,c=geByTag("img",l),_=[],v=0,u=c.length;v<u;v++){var L=vkImage();L.onload=p,L.onerror=p,L.src=c[v].src,_.push(L)}function p(){if(isVisible(l)){var e=AdsLight.getBlockSize(h);e=AdsLight.resizeBlockWrap(e,r,g)}}function k(){toggleClass(i,"ads_left_empty",n),cleanElems(i);var e=AdsLight.getBlockSize(h);e=AdsLight.resizeBlockWrap(e,!1,g,!0),n?m():animate(l,{opacity:1},o,m.pbind())}function m(){if(n)if(l.previousSibling)for(var e=l;e=e.previousSibling;)if(e.nodeType===Node.ELEMENT_NODE){var t=e.previousSibling?null:f.pbind();animate(e,{opacity:0},o,t)}else f();else f();else f()}function f(){for(cleanElems(l);l.previousSibling;)re(l.previousSibling);setStyle(l,{position:"static",zIndex:"",width:""}),setStyle(i,{width:"",height:"",overflow:"visible"}),window.updSideTopLink&&updSideTopLink(),AdsLight.updateExternalStats(i),n||AdsLight.scrollToPreview()}clearInterval(vk__adsLight.imagesTimer),vk__adsLight.imagesTimer=setInterval(function(e){if(0<--e.count)for(var t in _)if(!_[t].width||!_[t].height)return;clearInterval(vk__adsLight.imagesTimer),function(){setStyle(i,{overflow:"hidden"}),setStyle(l,{display:"block",position:"absolute",left:0,top:0,opacity:0,zIndex:10,width:"100%"});var e=AdsLight.getBlockSize(h);e=AdsLight.resizeBlockWrap(e,r,g),n?k():animate(i,{width:e[0],height:e[1]},o,k.pbind())}()}.pbind({count:40}),50)},AdsLight.updateExternalStats=function(e){var t;t=e&&e.getAttribute("external_stats_src")?[e]:geByClass("ads_ad_external_stats",e);for(var i,s=0;i=t[s];s++)i.getAttribute("external_stats_complete")||(i.setAttribute("external_stats_complete",1),vkImage().src=i.getAttribute("external_stats_src"))},AdsLight.addAdsToApply=function(e){var t;for(var i in t=window.cur?(window.cur.adsIdsApplyNeeded||(window.cur.adsIdsApplyNeeded={}),window.cur.adsIdsApplyNeeded):vk__adsLight.adsIdsApplyNeeded,e)t[i]=e[i];AdsLight.applyAds()},AdsLight.applyAds=function(e){var d=window.cur&&window.cur.adsIdsApplyNeeded||vk__adsLight.adsIdsApplyNeeded||{};if(!isEmpty(d)){if(!e)return clearTimeout(vk__adsLight.adsIdsApplyTimer),void(vk__adsLight.adsIdsApplyTimer=setTimeout(AdsLight.applyAds.pbind(!0),100));!function(){for(var e in d){var t=ge(e);if(t){if(elemRect=t.getBoundingClientRect(),0<elemRect.bottom&&elemRect.top<lastWindowHeight){var i=document.elementFromPoint(elemRect.left+1,elemRect.top+1),s=document.elementFromPoint(elemRect.right-1,elemRect.bottom-1);if(i&&(i===t||isAncestor(i,t))||s&&(s===t||isAncestor(s,t))){vk__adsLight.adsIdsApplyProcess.push(d[e][0]),delete d[e];continue}}d[e][1]&&(vkNow()-vk.started)/1e3>d[e][1]&&(re(t),delete d[e])}else delete d[e]}!function e(t){if(0==vk__adsLight.adsIdsApplyProcess.length)return;if(vk__adsLight.adsIdsApplyLocked)return;if(!t)return clearTimeout(vk__adsLight.adsIdsApplyTimer),void(vk__adsLight.adsIdsApplyTimer=setTimeout(e.pbind(!0),100));vk__adsLight.adsIdsApplyLocked=!0;var i={};i.ads_ids_apply=vk__adsLight.adsIdsApplyProcess.join(";");cur&&cur.adsDelayedViewsSrc&&(i.ads_src=cur.adsDelayedViewsSrc);vk__adsLight.adsIdsApplyProcess=[];ajax.post("/ads_light.php?act=apply_views",i,{onDone:a,onFail:a})}()}()}function a(e){if(vk__adsLight.adsIdsApplyLocked=!1,e&&isObject(e)){for(var t in e){var i=ge("ads_ad_box2_"+t);if(i)for(var s in e[t])i.setAttribute(s,e[t][s])}AdsLight.applyAds()}}},AdsLight.isVisibleBlockWrap=function(e){var t=ge("ads_left"),i=t.getBoundingClientRect(),s=[];return i.right&&i.bottom&&(s.push([i.left+1*(i.right-i.left)/5,i.top+1*(i.bottom-i.top)/5]),s.push([i.left+4*(i.right-i.left)/5,i.top+4*(i.bottom-i.top)/5])),AdsLight.isVisibleBlockWrapCoords(s,t,function(e){vk__adsLight.wrapVisible=e},e),vk__adsLight.wrapVisible},AdsLight.isVisibleBlockWrapCoords=function(e,t,i,s){for(var d,a=!1,n=[],o=0,r=e.length;o<r;o++){var g=document.elementFromPoint(e[o][0],e[o][1]),l=g&&(g===t||c(g,t));a=a||l;l&&n.push(e[o])}a=!!a;function h(e){clearTimeout(d),i(void 0!==e?e:a)}function c(e,t){if(!e||!t)return!1;for(;e=e.parentNode;)if(e===t)return!0;return!1}!s&&n.length&&window!=parent&&isVkDomain&&"web"===vk__adsLight.adsSection&&vk__adsLight.rpc&&vk__adsLight.rpc.callMethod?(vk__adsLight.rpc.callMethod("publish","ads.isVisibleBlockWrap",n,h),d=setTimeout(h,300)):!s&&n.length&&window!=parent&&!isVkDomain&&window.VK&&VK.callMethod?(VK.callMethod("adsPublish","ads.isVisibleBlockWrap",n,h),d=setTimeout(h,300)):h()},AdsLight.isVisibleBlockWrapRpc=function(e,t,i){for(var s,d=(s=i?VK.Widgets.RPC[i].frame:cur.app.frame).getBoundingClientRect(),a=[],n=0,o=e.length;n<o;n++){var r=e[n][0]+d.left,g=e[n][1]+d.top;a.push([r,g])}AdsLight.isVisibleBlockWrapCoords(a,s,t)},AdsLight.getBlockSize=function(e){var t=geByClass("ads_ad_box",e),i=geByClass("ads_ad_box5",e);each(i,function(e,t){addClass(t,"max_size")}),browserLight.msie8&&each(t,function(e,t){var i=Math.ceil(floatval(getStyle(t,"width"))),s=Math.ceil(floatval(getStyle(t,"max-width")));s&&200<s&&s<=i&&(t.style.width=s+"px")});var s=[Math.ceil(floatval(getStyle(e,"width"))),Math.ceil(floatval(getStyle(e,"height")))];return each(i,function(e,t){removeClass(t,"max_size")}),s},AdsLight.resizeBlockWrap=function(e,t,i,s){if(!e)return[0,0];var d=e[0],a=e[1];d&&vk__adsLight.adsParams&&vk__adsLight.adsParams.ads_ad_unit_width_real>d&&(d=vk__adsLight.adsParams.ads_ad_unit_width_real),a&&vk__adsLight.adsParams&&vk__adsLight.adsParams.ads_ad_unit_height_real>a&&(a=vk__adsLight.adsParams.ads_ad_unit_height_real);var n=!!(s||t&&d>t[0]||i&&i[0]&&d>i[0]),o=!!(s||t&&a>t[1]||i&&i[1]&&a>i[1]);return(n||o)&&(i&&(n&&(i[0]=d),o&&(i[1]=a)),isVkDomain&&"web"===vk__adsLight.adsSection&&vk__adsLight.rpc&&vk__adsLight.rpc.callMethod&&vk__adsLight.rpc.callMethod("resizeWidget",n&&d,o&&a)),[d,a]},AdsLight.loadAds=function(){if(isVkDomain&&vk__adsLight.loaderParams&&!vk__adsLight.loadComplete){vk__adsLight.loadComplete=1;var adsParamsExport=vk__adsLight.adsParamsExport;delete vk__adsLight.adsParamsExport;var ajaxParams={};for(var i in vk__adsLight.loaderParams)ajaxParams[i]=vk__adsLight.loaderParams[i];ajaxParams.url=document.referrer;try{ajaxParams.url_top=top.location.toString()}catch(e){}var isVisibleWeb=AdsLight.isVisibleBlockWrap(!0);isVisibleWeb||(ajaxParams.web_invisible=1),document.documentMode&&(ajaxParams.ie_document_mode=document.documentMode),AdsLight.doRequest(function(){ajaxParams.ads_showed=AdsLight.getAdsShowed(),ajax.post("/ads_rotate.php?act=ads_web",ajaxParams,{onDone:onComplete,onFail:onComplete})})}function onComplete(response,nothing,js){if(vk__adsLight.updateProgress=3,response&&isObject(response)&&"ads_html"in response){var styleElemOld=ge("ads_style_web_loader"),sheetOld=styleElemOld.sheet?styleElemOld.sheet:styleElemOld.styleSheet,deleteFunc=sheetOld.deleteRule?"deleteRule":"removeRule";sheetOld[deleteFunc](0);var styleElemNew=ce("style",{type:"text/css"});styleElemNew.styleSheet?styleElemNew.styleSheet.cssText=response.css:styleElemNew.appendChild(document.createTextNode(response.css)),headNode.appendChild(styleElemNew),AdsLight.setNewBlock(response.ads_html,response.ads_section,response.ads_can_show,response.ads_showed,response.ads_params);var adsParamsExport=response.ads_params_export;if(adsParamsExport.ads_params_unclean)for(var i in delete adsParamsExport.ads_params_unclean,adsParamsExport)adsParamsExport[i]=unclean(adsParamsExport[i]);vk__adsLight.rpc.callMethod("adsOnInit",response.ads_count,adsParamsExport),vk__adsLight.loadComplete=2}else{if("string"==typeof js)try{eval(js)}catch(e){debugLog(e)}AdsLight.loadAdsFailed(-3001,adsParamsExport)}}},AdsLight.loadAdsFailed=function(e,t){if(!vk__adsLight.rpc)return!1;if(-1===vk__adsLight.loadComplete)return!0;if(vk__adsLight.loadComplete=-1,t.ads_params_unclean)for(var i in delete t.ads_params_unclean,t)t[i]=unclean(t[i]);return vk__adsLight.rpc.callMethod("resizeWidget",0,0),vk__adsLight.rpc.callMethod("adsOnInit",e,t),!0},AdsLight.blockOverOut=function(e,t,i){var s,d="mouseover"===e.type,a=!1;if(hasClass(t,i)?(s=t,toggleClass(s,"over",d),a=d?1:.3):((s=geByClass1(i,s)).over=1,hasClass(s,"over")||(a=d?.3:0)),!1!==a&&animate(s,{opacity:a},200),d&&t==s){var n=geByClass1("tooltip_text",s);n&&showTooltip(s,{text:n.innerHTML,showdt:0,black:1,shift:[14,3,3]})}},AdsLight.closeNewsBlock=function(e,t,i){for(;!hasClass(e,"feed_row");)e=e.parentNode;function s(){return!0}slideUp(e,200),ajax.post("/ads_light.php?act=close_news",{hash:t,ads_section:i},{onDone:s,onFail:s})},AdsLight.scrollToPreview=function(e){if(e){var t=geByClass1("ads_ads_preview");if(t&&!hasClass(t,"ads_ads_preview_viewed")){addClass(t,"ads_ads_preview_viewed");var i=scrollGetY(),s=getXY(t)[1],d=getSize(t)[1],a=vk.staticheader?0:getSize("page_header_cont")[1];(s+d>i+lastWindowHeight||s<i+a)&&(d>=lastWindowHeight-a?scrollToY(s-10,500):scrollToY(s-(lastWindowHeight-d)/2,500))}}else setTimeout(AdsLight.scrollToPreview.pbind(!0),100)},AdsLight.overrideClickEvents=function(e,t,i){if(!e)return!1;var s=e.getAttribute("onclick_inside"),d=e.getAttribute("onclick_outside");if(!d)return!1;if(s=new Function("event",s||d),d=new Function("event",d),!i)for(var a,n=geByTag("a",e),o=0;a=n[o];o++)a.setAttribute("_href",a.href),a.removeAttribute("href");var r=!1;return addEvent(e,"click dblclick mousedown mouseup touchstart touchmove touchend",function(e){var t=!1;if(e=normEvent(e),!r)if("mouseup"==e.type&&(2==e.which||1==e.which&&checkEvent(e))){if("A"==e.target.nodeName&&e.target.hasAttribute("href")&&"#"!==e.target.getAttribute("href"))return!0;r=!0,setTimeout(function(){r=!1},100),d(e)}else"click"==e.type&&1==e.which&&(t=s(e));return!(!i||t)||cancelEvent(e)},!1,!1,!0),t||cur.destroy.push(function(e){cleanElems(e)}.pbind(e)),!0},AdsLight.initYaDirect=function(e){var t,i,s,d,a;vk__adsLight.yaDirectLoadTries++,vk__adsLight.yaDirectLoading||(vk__adsLight.yaDirectLoading=!0,t=window,i=window.document,t[s="yandexContextAsyncCallbacks"]=t[s]||[],t[s].push(function(){vk__adsLight.yaDirectLoaded=!0,vk__adsLight.yaDirectLoading=!1}),a=i.getElementsByTagName("script")[0],(d=i.createElement("script")).type="text/javascript",d.src=e||"//an.yandex.ru/system/context.js",d.async=!0,a.parentNode.insertBefore(d,a))},AdsLight.tryRenderYaDirect=function(e,t,i,s){if(vk__adsLight.yaDirectLoaded){var d,a="yandex_ad_"+e;if(ge(a))animate(ge(a),{opacity:0},200,function(){re(a),AdsLight.tryRenderYaDirect(e,t,i,s)});else{d=ce("div",{id:a});var n=ge("ads_left");if(!n)return AdsLight.sendExperimentStat(t,"fail"),void AdsLight.onYaDirectRenderUnsuccessful(s);n.appendChild(d),d=ge(a),Ya.Context.AdvManager.render({blockId:e,renderTo:a,async:!0,onRender:function(){i&&!geByClass1("ads_label",d)&&d.insertBefore(se(i),d.firstChild),AdsLight.sendExperimentStat(t,"success"),AdsLight.onYaDirectRenderSuccessful(d)}},function(){AdsLight.sendExperimentStat(t,"fail"),AdsLight.onYaDirectRenderUnsuccessful(s)}),AdsLight.sendExperimentStat(t,"try")}}},AdsLight.onYaDirectRenderSuccessful=function(e){if(vk__adsLight.yaCloseLink){var t=se('<div id="ya_direct" style="display:none;" onmouseover="leftBlockOver(\'ya_direct\');" onmouseout="leftBlockOut(\'ya_direct\');"><div id="left_hideya_direct" class="left_hide_button" onmouseover="leftBlockOver(this);" onmouseout="leftBlockOut(this);" onclick="leftAdBlockClose(\'ya_direct\', \''+vk__adsLight.yaCloseLink+"'); return cancelEvent(event);\"></div></div>");t.appendChild(e),e=t}AdsLight.showNewBlock(ge("ads_left"),e,!0),vk__adsLight.yaDirectAdActive=!0},AdsLight.onYaDirectRenderUnsuccessful=function(e){vk__adsLight.yaDirectAdActive=!1,AdsLight.tryExperiment(e)},AdsLight.tryRenderCriteo=function(e,t){var i="criteo-iframe",s=ge(i);s?animate(s,{opacity:0},200,function(){re(s),AdsLight.tryRenderCriteo(t)}):(AdsLight.sendExperimentStat(e,"try"),(s=ce("iframe",{id:i,frameBorder:"0",marginWidth:"0",marginHeight:"0",height:"0",width:"118",scrolling:"no"},{opacity:0})).onload=function(){400<s.contentDocument.body.scrollHeight?(AdsLight.sendExperimentStat(e,"success"),s.height=600,animate(s,{opacity:1},200)):(AdsLight.sendExperimentStat(e,"fail"),re(s),AdsLight.tryExperiment(t))},s.src="/ads_light.php?act=criteo",ge("ads_left").appendChild(s))},AdsLight.initWmg=function(){if(vk__adsLight.wmgLoadTries++,!vk__adsLight.wmgLoading){vk__adsLight.wmgLoading=!0;var e=geByTag1("script"),t=ce("script",{type:"text/javascript",async:!0,src:"https://securepubads.g.doubleclick.net/static/glade.js"});e.parentNode.insertBefore(t,e),vk__adsLight.wmgLoading=!1}},AdsLight.tryRenderWmg=function(e,t){if(!vk__adsLight.wmgLoading)if(vk__adsLight.wmgLoading=!0,AdsLight.sendExperimentStat(e,"try"),vk__adsLight.showWmgAd&&window&&window.glade&&glade.run){var i=ge("ads_left");if(i){var s=AdsLight.getWmgDivId(i),d=AdsLight.addWmgBlock(s);i.appendChild(d),d.addEventListener("gladeAdFetched",AdsLight.onLoadWmgAd.pbind(e,t)),d.addEventListener("gladeAdRendered",AdsLight.onRenderWmgAd.pbind(s,d,i,e,t)),glade.run()}else AdsLight.onWmgRenderUnsuccessful(e,t)}else AdsLight.onWmgRenderUnsuccessful(e,t)},AdsLight.getWmgDivId=function(e){var t="glade-aslot-1";return e.innerHTML&&ge("glade-aslot-1")&&(t="glade-aslot-2"),t},AdsLight.addWmgBlock=function(e){var t=ce("div",{id:e},{display:"none",opacity:0});return t.setAttribute("data-ad-unit-path","/205338224/120x600_vk.com"),t.setAttribute("data-click-url","vk.com"),t.setAttribute("data-glade",!0),t.setAttribute("width","120"),t.setAttribute("height","600"),t},AdsLight.onLoadWmgAd=function(e,t,i){vk__adsLight.wmgLoadTries=0,i&&i.detail&&!i.detail.empty||(vk__adsLight.showWmgAd=!1,AdsLight.onWmgRenderUnsuccessful(e,t))},AdsLight.onRenderWmgAd=function(e,t,i,s,d){vk__adsLight.showWmgAd&&AdsLight.onWmgRenderSuccessful(e,t,i,s,d)},AdsLight.onWmgRenderUnsuccessful=function(e,t){vk__adsLight.wmgLoading=!1,AdsLight.wmgMessageCallback&&removeEventListener("message",AdsLight.wmgMessageCallback),AdsLight.sendExperimentStat(e,"fail"),AdsLight.tryExperiment(t)},AdsLight.onWmgRenderSuccessful=function(e,t,i,s,d){vk__adsLight.wmgLoading=!1,AdsLight.sendExperimentStat(s,"success"),t.removeEventListener("gladeAdFetched",AdsLight.onLoadWmgAd.pbind(s,d)),t.removeEventListener("gladeAdRendered",AdsLight.onRenderWmgAd.pbind(e,t,i,s,d)),AdsLight.showWmgAfterFetch(e,t,i)},AdsLight.showWmgAfterFetch=function(e,t,i){setStyle("ads_left",{overflow:"hidden"}),setStyle(e,{display:"block",position:"absolute",left:0,top:0,opacity:0,zIndex:10,width:"100%"});var s=AdsLight.getBlockSize(i),d=geByClass1("ads_ads_box3",t)||t,a=AdsLight.getBlockSize(d);a=AdsLight.resizeBlockWrap(a,s,[0,0]),animate("ads_left",{width:a[0],height:a[1]},200,function(){AdsLight.cleanAdBlockForWmg(e,t,i)})},AdsLight.cleanAdBlockForWmg=function(d,a,n){removeClass(n,"ads_left_empty"),animate(d,{opacity:1},200,function(){if(n.innerHTML)for(var e=0,t=n.childNodes.length;e<t;e++){var i=n.childNodes[e]?n.childNodes[e].getAttribute("id"):"";if(i&&i===d)return;var s=n.childNodes[e];animate(s,{opacity:0},200,function(e){re(e),AdsLight.showWmgBlock(a,n)})}})},AdsLight.showWmgBlock=function(e,t){setStyle(e,{position:"static",zIndex:"",width:""}),setStyle(t,{width:"",height:"",overflow:"visible"})},AdsLight.getRBAds=function(n,e,t,o){var r,i,s="__rb"+(new Date).getTime(),d=o.slot_id,a="https://ad.mail.ru/adq/?callback="+s+"&q%5B%5D="+d+"%3Fn%3D"+encodeURIComponent(n),g={};for(i in o&&o.test_id&&(g.test_id=o.test_id),o&&o.cpm_floor&&"0"!=o.cpm_floor&&(g.cpm_floor=o.cpm_floor),o&&o.vk_id&&(g.vk_id=o.vk_id),o&&o.count&&(g.count=o.count),o&&o.sign&&(g.sign=o.sign),g)a+="&"+i+"="+g[i];return function(e,d,a){clearTimeout(r),r=setTimeout(function(){a({reason:"timeout"})},5e3),window[s]=function(e){if(clearTimeout(r),e&&e[0]&&e[0].html){try{var t=ge(n),i=t&&isVisible(t)||vk.ad_preview;if(!t){var s=ge("side_bar");if(!s)return AdsLight.resizeBlockWrap([0,0],!1,!1,!0),void a({reason:"no-side-bar"});t=s.appendChild(ce("div",{id:"ads_left",className:"ads_left_empty"},{display:i?"block":"none"}))}AdsLight.showNewBlock(t,(o.label?o.label:"")+e[0].html,i)}catch(e){}d(e)}else a({reason:"no-ads"})};var t=document.createElement("script");t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}(a,e,t),s},AdsLight.tryRenderTarget=function(e,t,s,i,d,a,n,o,r,g){var l={slot_id:t,label:i,cpm_floor:d,test_id:a,count:n};e&&(l.test_id=e),window.vk&&vk.id&&(l.vk_id=vk.id,o&&(l.sign=o)),AdsLight.sendExperimentStat(s,"try");var h=!1,c=setTimeout(function(){AdsLight.sendExperimentStat(s,"noresult"),h&&window[h]&&(window[h]=function(){}),AdsLight.tryExperiment(g)},6e3),_="ads_left";stManager.add(["mrtarg.js","mrtarg.css"],function(){h=AdsLight.getRBAds(_,function(e){clearTimeout(c),AdsLight.sendExperimentStat(s,"success"),window.RB&&window.RB.doCheck&&window.RB.doCheck();var t=function(e){var t=ge(_);if(t){var i=geByClass1("trg-b-banner-block",t);return i||isArray(e)&&isObject(e[0])&&e[0].banner&&(i=ge("b"+e[0].banner)),i}}(e);if(t){var i=["rbccl",t.getAttribute("c"),t.getAttribute("ac"),r].join(";");AdsLight.sendExperimentStat(s,"extra",i)}},function(e){clearTimeout(c),AdsLight.sendExperimentStat(s,"fail"),AdsLight.tryExperiment(g)},l)})},AdsLight.initGADX=function(s,e,t,i){if(vk__adsLight.gadxLoadTries++,!vk__adsLight.gadxLoading&&!vk__adsLight.gadxLoaded){vk__adsLight.gadxLoading=!0,vk__adsLight.gadxBlocks=e;var d=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.type="text/javascript",a.src="//www.googletagservices.com/tag/js/gpt.js",a.async=!0,d.parentNode.insertBefore(a,d),window.googletag=window.googletag||{},googletag.cmd=googletag.cmd||[],vk__adsLight.gadxSlots={},googletag.cmd.push(function(){each(e,function(e,t){var i=googletag.defineSlot(s,["fluid"],t);(vk__adsLight.gadxSlots[t]=i).addService(googletag.pubads())}),googletag.pubads().enableSingleRequest(),googletag.pubads().addEventListener("slotRenderEnded",function(e){AdsLight.initGoogleRenderFinished(e,t,i,vk__adsLight.gadxBlocks)}),googletag.pubads().disableInitialLoad(),googletag.enableServices(),vk__adsLight.gadxLoaded=!0,vk__adsLight.gadxLoading=!1})}},AdsLight.initGoogleRenderFinished=function(i,s,d,a){setTimeout(function(){var e=i.slot.getSlotElementId(),t=AdsLight.getBusyBlockID(a,e);i.isEmpty?(t&&(animate(ge(t),{maxHeight:0},300,function(){re(t)}),animate(ge("ads_left"),{minHeight:0,maxHeight:400},300,function(){setStyle(ge("ads_left"),{minHeight:"",maxHeight:""})})),re(e),AdsLight.sendExperimentStat(s,"fail"),AdsLight.tryExperiment(d)):(t?(setStyle(ge(e),{maxHeight:"",opacity:.01}),animate(ge(e),{opacity:1},200),animate(t,{opacity:0},200,function(){re(t)}),animate(ge("ads_left"),{minHeight:0,maxHeight:400},300,function(){setStyle(ge("ads_left"),{minHeight:"",maxHeight:""})})):animate(ge(e),{maxHeight:400},300,function(){}),AdsLight.sendExperimentStat(s,"success"))},500)},AdsLight.getFreeBlockID=function(e){var t;for(var i in e)if(t=e[i],!ge(t))return t;return!1},AdsLight.getBusyBlockID=function(e,t){var i;for(var s in e)if(i=e[s],(!t||t!==i)&&ge(i))return i;return!1},AdsLight.checkWmgMessage=function(e,t,i,s){"ads_wmg_no_ad"===e.data&&AdsLight.onWmgRenderUnsuccessful(t,i.slice(s+1))},AdsLight.initGPT=function(t,i){if(vk__adsLight.GPTLoadTries++,!vk__adsLight.GPTLoading&&!vk__adsLight.GPTLoaded){vk__adsLight.GPTLoading=!0,vk__adsLight.GPTBlocks=["ads_tgb_google_0","ads_tgb_google_1"];var e=geByTag1("script"),s=ce("script",{type:"text/javascript",async:!0,src:"https://www.googletagservices.com/tag/js/gpt.js"});e.parentNode.insertBefore(s,e),window.googletag=window.googletag||{},googletag.cmd=googletag.cmd||[],vk__adsLight.GPTAdSlots={},googletag.cmd.push(function(){each(vk__adsLight.GPTBlocks,function(e,t){var i=googletag.defineSlot("/21802649096/vk_native_left",["fluid"],t);(vk__adsLight.GPTAdSlots[t]=i).addService(googletag.pubads())}),googletag.pubads().enableSingleRequest(),googletag.pubads().addEventListener("slotRenderEnded",function(e){AdsLight.initGoogleRenderFinished(e,t,i,vk__adsLight.GPTBlocks)}),googletag.pubads().disableInitialLoad(),googletag.enableServices(),vk__adsLight.GPTLoading=!1,vk__adsLight.GPTLoaded=!0})}},AdsLight.onGPTRenderUnsuccessful=function(e,t){vk__adsLight.GPTLoading=!1,AdsLight.sendExperimentStat(e,"fail"),AdsLight.tryExperiment(t)},AdsLight.tryRenderGPT=function(e,t,i){if(!vk__adsLight.GPTLoading)if(vk__adsLight.GPTLoading=!0,window&&window.googletag&&window.googletag.apiReady&&vk__adsLight.GPTLoaded){var s=ge("ads_left");if(s){var d=AdsLight.getBusyBlockID(vk__adsLight.GPTBlocks),a=AdsLight.getFreeBlockID(vk__adsLight.GPTBlocks);if(a){if(d){o=ge(d);var n=getSize(s)[1];setStyle(s,{minHeight:n,maxHeight:n}),setStyle(o,{position:"absolute",top:0,left:0,width:"100%"}),o=ce("div",{id:a},{maxHeight:0,overflow:"hidden"}),s.appendChild(o)}else{var o=ce("div",{id:a},{maxHeight:0,overflow:"hidden"});if(s.innerHTML)return AdsLight.showNewBlock(s,"",!0),void setTimeout(function(){ge("ads_left").innerHTML="",AdsLight.tryExperiment(t)},1e3);s.appendChild(o)}googletag.cmd.push(function(e,t){AdsLight.sendExperimentStat(t,"try"),googletag.pubads().refresh([vk__adsLight.GPTAdSlots[e]]),googletag.display(e)}.pbind(a,e))}else AdsLight.onGPTRenderUnsuccessful(e,i)}else AdsLight.onGPTRenderUnsuccessful(e,i)}else AdsLight.onGPTRenderUnsuccessful(e,i)},AdsLight.init()}();try{stManager.done("aes_light.js")}catch(e){}