(function(b){function a(b,d){if({}.hasOwnProperty.call(a.cache,b))return a.cache[b];var e=a.resolve(b);if(!e)throw new Error('Failed to resolve module '+b);var c={id:b,require:a,filename:b,exports:{},loaded:!1,parent:d,children:[]};d&&d.children.push(c);var f=b.slice(0,b.lastIndexOf('/')+1);return a.cache[b]=c.exports,e.call(c.exports,c,c.exports,f,b),c.loaded=!0,a.cache[b]=c.exports}a.modules={},a.cache={},a.resolve=function(b){return{}.hasOwnProperty.call(a.modules,b)?a.modules[b]:void 0},a.define=function(b,c){a.modules[b]=c};var c=function(a){return a='/',{title:'browser',version:'v8.11.1',browser:!0,env:{},argv:[],nextTick:b.setImmediate||function(a){setTimeout(a,0)},cwd:function(){return a},chdir:function(b){a=b}}}();a.define('/dist/index.js',function(b,c,d,e){(function(){c.helpers=a('/dist/helpers/index.js',b),c.ABCampaign=a('/dist/ab-campaign.js',b)}.call(this))}),a.define('/dist/ab-campaign.js',function(a,c,d,e){(function(){'use strict';var c;c=function(){function a(a){a||(a={}),a.interval||(a.interval=10),a.cycles||(a.cycles=0),a.name||(a.name='abcampaign'),this.opts=a,this.name=a.name,this.timers=[],this.counters=[]}return a.prototype._await=function(a,b,c){if(b()){this.log(a+' ready!'),delete this.timers[a],delete this.counters[a],c();return}if(this.counters[a]=(this.counters[a]||0)+1,this.counters[a]%500===0&&this.log(a+' not ready yet!'),this.opts.cycles&&this.opts.cycles<this.counters[a]){this.log(a+' not loaded!'),delete this.timers[a],delete this.counters[a];return}this.timers[a]=setTimeout(function(d){return function(){d._await(a,b,c)}}(this),this.interval)},a.prototype.init=function(){return window.__karma__!=null&&(b.p13n==null&&(b.p13n={}),b.p13n[this.name]=this),this._await('jQuery',function(){return typeof jQuery==='function'},function(a){return function(){var b;try{return a.start()}catch(c){return b=c,a.bailOut(b)}}}(this)),this},a.prototype.report=function(a,b){return this.opts.enableReport?this._await('recsClick',function(){return typeof recsClick==='function'},function(c){return function(){return recsClick(a,b+':0:0')}}(this)):void 0},a.prototype.log=function(b){var a;this.opts.showLogs&&(a=new Date,console.log('[p13n]['+a.toISOString()+']',b))},a.prototype.bailOut=function(b){var a;a=new Date,console.error('[p13n]['+a.toISOString()+']',b)},a.prototype.start=function(){},a}(),a.exports=c}.call(this))}),a.define('/dist/helpers/index.js',function(b,c,d,e){(function(){c.url=a('/dist/helpers/url.js',b),c.cookie=a('/dist/helpers/cookie.js',b),c.i18n=a('/dist/helpers/i18n.js',b)}.call(this))}),a.define('/dist/helpers/i18n.js',function(a,b,c,d){(function(){a.exports=function(a){return a&&typeof a==='object'||console.error('I18N module expects @param labels Dictonary object of NLS strings'),{translate:function(c){var b;return b=a[c]||'',b||console.error("Label not found '"+c+"'"),b}}}}.call(this))}),a.define('/dist/helpers/cookie.js',function(b,a,c,d){(function(){a.get=function(f){var a,c,b,e,d;for(d=f+'=',c=document.cookie.split(';'),b=0,e=c.length;b<e;b++){a=c[b];while(a.charAt(0)===' ')a=a.substring(1,a.length);if(a.indexOf(d)===0)return a.substring(d.length,a.length)}return null},a.set=function(c,d,a){var b;return b=c+'='+d,a&&(a.expDate&&(b+='; expires='+a.expDate.toGMTString()),a.path&&(b+='; path='+escape(a.path)),a.domain&&(b+='; domain='+escape(a.domain)),a.secure&&(b+='; secure')),document.cookie=b}}.call(this))}),a.define('/dist/helpers/url.js',function(b,a,c,d){(function(){a.getUrlParam=function(d,e){var a,b,c;return a=null,b=(c=d.split('?')[1])!=null?c.split('&'):void 0,b?(b.forEach(function(f){var c,b,d;return b=f.split('='),c=b[0],d=b[1],c===e?a=d:void 0}),a):a},a.setUrlParam=function(h,b,c,i){var d,g,e,a,f;if(a=document.createElement('a'),a.href=h,f=a.href.match(/\?[^#?]*/g),f){a.search='?',e=0;while(e<f.length)a.search+=f[e].substring(1)+(e<f.length-1?'&':''),e++;a.hash&&(a.hash=a.hash.replace(/\?[^#?]*/,''))}return a.href.indexOf(b+'=')>-1?a.href.replace(b+'=',b+'='+c+i):a.search?a.href.replace('?','?'+b+'='+c+'&'):a.href.indexOf('?')>-1?(d=a.href.match(/\?([^#]*)/),a.href=a.href.replace(d[0],''),a.pathname.charAt(0)!=='/'?a.host===''?'/'+a.pathname+'?'+b+'='+c+'&'+d[1]+a.hash:(g=a.host.substr(-3)===':80'?a.hostname:a.host,a.protocol+'//'+g+'/'+a.pathname+'?'+b+'='+c+'&'+d[1]+a.hash):a.protocol+'//'+a.host+a.pathname+'?'+b+'='+c+'&'+d[1]+a.hash):a.pathname.charAt(0)!=='/'?a.host===''?'/'+a.pathname+'?'+b+'='+c+a.hash:(g=a.host.substr(-3)===':80'?a.hostname:a.host,a.protocol+'//'+g+'/'+a.pathname+'?'+b+'='+c+a.hash):a.protocol+'//'+a.host+a.pathname+'?'+b+'='+c+a.hash},a.getQueryParam=function(b){return window.location.search==null?null:a.getUrlParam(window.location.search,b)},a.addRef=function(b,c){return a.setUrlParam(b,'ref',c,'|')}}.call(this))}),b.p13nTargetCampaignLibrary=a('/dist/index.js')}.call(this,this))