Marketing.bindDependencyDOMParsed(function(){var Bootstrapper=window["Marketing"];var ensightenOptions=Marketing.ensightenOptions;try{window._qevents=window._qevents||[];var src=(document.location.protocol=="https:"?"https://secure":"http://edge")+".quantserve.com/quant.js";Marketing.insertScript(src);var prodcat=Marketing.UDO.prodcat;var product=Marketing.UDO.product;var segment=Marketing.scDataObj.segment;var ogid=Marketing.UDO.ogid;var udoRevenue=Marketing.UDO.revenue;var cid=Marketing.UDO.cid;
if(Marketing.scDataObj.page=="confirmation")_qevents.push({qacct:"p-03ceqXq6mSzQk",labels:"_fp.event.All Sales Confirmation,_fp.pcat."+prodcat+",_fp.productID."+product+",_fp.segmentid."+segment,orderid:ogid,revenue:udoRevenue,event:"refresh"});else _qevents.push({qacct:"p-03ceqXq6mSzQk"});window.addEventListener("udoReady",function(e){var prodcat=Marketing.UDO.prodcat;var product=Marketing.UDO.product;var segment=Marketing.scDataObj.segment;var ogid=Marketing.UDO.ogid;var udoRevenue=Marketing.UDO.revenue.toString();
if(/thankyou/i.test(location.href)&&/\/premier\//i.test(location.pathname)&&Marketing.scDataObj.country=="us")_qevents.push({qacct:"p-03ceqXq6mSzQk",labels:"_fp.event.Premier Checkout,_fp.pcat."+prodcat+",_fp.segmentid."+segment,orderid:ogid,revenue:udoRevenue,event:"refresh"})})}catch(e){dell_marketing_util.debug(e)}},3211111,[3496429],630693,[610323]);
Marketing.bindDependencyDOMParsed(function(){var Bootstrapper=window["Marketing"];var ensightenOptions=Marketing.ensightenOptions;try{var marketingUDO=Marketing.UDO;var createImage=Marketing.imageRequest;var firePixel=function(){if(window.location.href.includes("/cart/view")||window.location.href.includes("/cart/thankyou")||marketingUDO.promoid=="100"||marketingUDO.promoid=="9")createImage("//bat.bing.com/action/0?ti\x3d5102261\x26Ver\x3d2\x26gv\x3d"+marketingUDO.revenue+"\x26gc\x3d"+marketingUDO.currency);
else createImage("//bat.bing.com/action/0?ti\x3d5102261\x26Ver\x3d2")};if(Marketing.scDataObj.cms=="olr")window.addEventListener("hashchange",function(e){firePixel()});if(typeof Marketing!="undefined")firePixel();else window.addEventListener("udoReady",function(){firePixel()})}catch(e){dell_marketing_util.debug(e)}},3237875,[3496429],631952,[610323]);
Marketing.bindDependencyDOMParsed(function(){var Bootstrapper=window["Marketing"];var ensightenOptions=Marketing.ensightenOptions;try{var pixel="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1006166411/?guid\x3dON\x26script\x3d0\x26data\x3decomm_prodid\x3d"+Marketing.UDO.ogid+";ecomm_pagetype\x3d"+Marketing.UDO.promoid+";ecomm_seg\x3d"+Marketing.scDataObj.segment+";ecomm_family\x3d"+Marketing.UDO.family+";ecomm_category\x3d"+Marketing.UDO.category;Marketing.imageRequest(pixel);if(Marketing.scDataObj.cms==
"olr")window.addEventListener("hashchange",function(e){Marketing.imageRequest(pixel)})}catch(e){dell_marketing_util.debug(e)}},3183455,[3496429],632044,[610323]);
Marketing.bindDependencyDOMParsed(function(){var Bootstrapper=window["Marketing"];var ensightenOptions=Marketing.ensightenOptions;try{window.callSky=function(eventName){SSKY.push([eventName,{account:Marketing.scDataObj.country==="ca"?"dellca":"dell",order_id:Marketing.UDO.ogid,order_value:Marketing.UDO.revenue,profile:"1",attrs:{userid:"",sku:Marketing.UDO.ordercode.split("|"),cat:Marketing.UDO.category.split("|"),pgtyp:Marketing.scDataObj.page,seg:Marketing.scDataObj.segment,fam:Marketing.UDO.family,
price:Marketing.UDO.revenue,kw:""}}])};Marketing.loadScriptCallback("//cdn1-res.sundaysky.com/vop/v2/t.js",function(){window.SSKY=window.SSKY||[];var shouldBrowse=true;if(dell_marketing_util.getscMap("wacontroller")==="contents"||dell_marketing_util.getscMap("workflowstep")==="cart"){callSky("t.addToCart");shouldBrowse=false}else if(Marketing.UDO.promoid==="9"){callSky("t.cartView");shouldBrowse=false}if(Marketing.UDO.promoid==="100"){callSky("t.conversion");shouldBrowse=false}if(shouldBrowse)callSky("t.browse")})}catch(e){dell_marketing_util.debug(e)}},
3195583,[3496429],630500,[610323]);
Marketing.bindDOMParsed(function(){var Bootstrapper=window["Marketing"];var ensightenOptions=Marketing.ensightenOptions;try{if(Marketing.UDO.promoid==="100"){if(Marketing.scDataObj.segment==="dhs")Marketing.imageRequest("//www.googleadservices.com/pagead/conversion/962944263/?value\x3d"+Marketing.UDO.revenue+"\x26currency_code\x3dUSD\x26gclaw\x3dGCLID1.GCLID2.GCLID3\x26label\x3dXPDHCIGLswcQh7qVywM\x26guid\x3dON\x26script\x3d0");else if(Marketing.scDataObj.segment==="bsd")Marketing.imageRequest("//www.googleadservices.com/pagead/conversion/962944263/?value\x3d"+
Marketing.UDO.revenue+"\x26currency_code\x3dUSD\x26gclaw\x3dGCLID1.GCLID2.GCLID3\x26label\x3dxE7bCLHJ_QcQh7qVywM\x26guid\x3dON\x26script\x3d0");Marketing.imageRequest("//www.googleadservices.com/pagead/conversion/962944263/?value\x3d"+Marketing.UDO.revenue+"\x26currency_code\x3dUSD\x26gclaw\x3dGCLID1.GCLID2.GCLID3\x26label\x3dmKFLCMfduJYBEIe6lcsD\x26guid\x3dON\x26script\x3d0")}if(Marketing.scDataObj.cms=="olr"&&window.location.href.includes("deals/premierselect?tabName\x3ddeals2"))Marketing.imageRequest("//www.googleadservices.com/pagead/conversion/962944263/?value\x3d"+
Marketing.UDO.revenue+"\x26currency_code\x3dUSD\x26gclaw\x3dGCLID1.GCLID2.GCLID3\x26label\x3d8L9DCKPZr9gBEIe6lcsD\x26guid\x3dON\x26script\x3d0");window.addEventListener("udoReady",function(e){if(/thankyou/i.test(location.href)&&/\/premier\//i.test(location.pathname)&&Marketing.scDataObj.country=="us")Marketing.imageRequest("//www.googleadservices.com/pagead/conversion/962944263/?value\x3d"+Marketing.UDO.revenue+"\x26currency_code\x3dUSD\x26gclaw\x3dGCLID1.GCLID2.GCLID3\x26label\x3dmKFLCMfduJYBEIe6lcsD\x26guid\x3dON\x26script\x3d0");
if(Marketing.scDataObj.cms=="olr"&&window.location.href.includes("deals/premierselect?tabName\x3ddeals2"))Marketing.imageRequest("//www.googleadservices.com/pagead/conversion/962944263/?value\x3d"+Marketing.UDO.revenue+"\x26currency_code\x3dUSD\x26gclaw\x3dGCLID1.GCLID2.GCLID3\x26label\x3d8L9DCKPZr9gBEIe6lcsD\x26guid\x3dON\x26script\x3d0")})}catch(e){dell_marketing_util.debug(e)}},3323158,633693);