/* 此处为该插件依赖的GAF库，如不搭配GAF使用请取消注释
function fadeIn(element,speed){
    if(document.getElementById(element).style.opacity !=1){
        var speed = speed || 30 ;
        var num = 0;
        var st = setInterval(function(){
            num++;
            document.getElementById(element).style.opacity = num / 10 ;
            if(num>=10)  {
            clearInterval(st);
            }
        },speed);
    }
}

function fadeOut(element){
    if(document.getElementById(element).style.opacity !=0){
        var speed = speed || 30 ;
        var num = 10;
        var st = setInterval(function(){
            num--;
            document.getElementById(element).style.opacity = num / 10 ;
            if(num<=0)  { 
                clearInterval(st);
            }
        },speed);
    }
}
*/

var gafExtension={"Author":"zzChumo","Name":"GameAuth","Desp":"A module can refuse connections from China's mainland.","Version":"1.00"};
var json=gafExtension;
var obj=eval(json);
console.log(obj.Name+' V'+obj.Version+' by '+obj.Author);
console.log(obj.Desp);

window.onload=function(){
    document.getElementById('loading').style.display='block';
    //以下1行代码需要配合GAF使用
    fadeIn('loading',20);
    console.log(returnCitySN);
    var json=returnCitySN;
    var obj=eval(json);
    console.log('Target IP:'+obj.cip);
    var _0x27d8=['Y29tcGlsZQ==','YXBwZW5kQ2hpbGQ=','Y29uc3RydWN0b3I=','aGVhZA==','Y2lw','XihbXiBdKyggK1teIF0rKSspK1teIF19','d2ZpcnU=','JmFrPWpqR1ZZbGxMQnU0MzZOVklOU1c3UU5UZHJQZjNUeVJZJmNhbGxiYWNrPWpzb25SZWFk','dGVzdA==','TldvZVo=','RExtQmo=','bVBmSmE=','cmhLaUE=','c3Jj','SW1Sam4=','YXBwbHk=','aHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9sb2NhdGlvbi9pcD8maXA9','c2FBTko=','SUVqcGk=','cmV0dXJuIC8iICsgdGhpcyArICIv','ZUNRRUQ=','Y1plc1k=','a2pHVE8='];(function(_0x1f380e,_0x27d8da){var _0xf91051=function(_0x596b34){while(--_0x596b34){_0x1f380e['push'](_0x1f380e['shift']());}};var _0x477ebd=function(){var _0x35dd41={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4bde19,_0x4071af,_0x526056,_0xbf1f98){_0xbf1f98=_0xbf1f98||{};var _0x55efc9=_0x4071af+'='+_0x526056;var _0x25af80=0x0;for(var _0x2d639c=0x0,_0x258214=_0x4bde19['length'];_0x2d639c<_0x258214;_0x2d639c++){var _0x142e35=_0x4bde19[_0x2d639c];_0x55efc9+=';\x20'+_0x142e35;var _0x13f5e0=_0x4bde19[_0x142e35];_0x4bde19['push'](_0x13f5e0);_0x258214=_0x4bde19['length'];if(_0x13f5e0!==!![]){_0x55efc9+='='+_0x13f5e0;}}_0xbf1f98['cookie']=_0x55efc9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1186d8,_0x3b8e80){_0x1186d8=_0x1186d8||function(_0x360bc8){return _0x360bc8;};var _0x5302cb=_0x1186d8(new RegExp('(?:^|;\x20)'+_0x3b8e80['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x49858f=function(_0x4420d4,_0x17228b){_0x4420d4(++_0x17228b);};_0x49858f(_0xf91051,_0x27d8da);return _0x5302cb?decodeURIComponent(_0x5302cb[0x1]):undefined;}};var _0x2b55f7=function(){var _0x3351e3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3351e3['test'](_0x35dd41['removeCookie']['toString']());};_0x35dd41['updateCookie']=_0x2b55f7;var _0x25a15b='';var _0x388f81=_0x35dd41['updateCookie']();if(!_0x388f81){_0x35dd41['setCookie'](['*'],'counter',0x1);}else if(_0x388f81){_0x25a15b=_0x35dd41['getCookie'](null,'counter');}else{_0x35dd41['removeCookie']();}};_0x477ebd();}(_0x27d8,0xe7));var _0xf910=function(_0x1f380e,_0x27d8da){_0x1f380e=_0x1f380e-0x0;var _0xf91051=_0x27d8[_0x1f380e];if(_0xf910['aNjOFW']===undefined){(function(){var _0x596b34;try{var _0x2b55f7=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x596b34=_0x2b55f7();}catch(_0x25a15b){_0x596b34=window;}var _0x35dd41='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x596b34['atob']||(_0x596b34['atob']=function(_0x388f81){var _0x4bde19=String(_0x388f81)['replace'](/=+$/,'');var _0x4071af='';for(var _0x526056=0x0,_0xbf1f98,_0x55efc9,_0x25af80=0x0;_0x55efc9=_0x4bde19['charAt'](_0x25af80++);~_0x55efc9&&(_0xbf1f98=_0x526056%0x4?_0xbf1f98*0x40+_0x55efc9:_0x55efc9,_0x526056++%0x4)?_0x4071af+=String['fromCharCode'](0xff&_0xbf1f98>>(-0x2*_0x526056&0x6)):0x0){_0x55efc9=_0x35dd41['indexOf'](_0x55efc9);}return _0x4071af;});}());_0xf910['TVFMJA']=function(_0x2d639c){var _0x258214=atob(_0x2d639c);var _0x142e35=[];for(var _0x13f5e0=0x0,_0x1186d8=_0x258214['length'];_0x13f5e0<_0x1186d8;_0x13f5e0++){_0x142e35+='%'+('00'+_0x258214['charCodeAt'](_0x13f5e0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x142e35);};_0xf910['DuBzOL']={};_0xf910['aNjOFW']=!![];}var _0x477ebd=_0xf910['DuBzOL'][_0x1f380e];if(_0x477ebd===undefined){var _0x3b8e80=function(_0x5302cb){this['urzrrx']=_0x5302cb;this['YNGJyG']=[0x1,0x0,0x0];this['RxImtI']=function(){return'newState';};this['OsxQKE']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['dvqawM']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3b8e80['prototype']['FWNntE']=function(){var _0x49858f=new RegExp(this['OsxQKE']+this['dvqawM']);var _0x360bc8=_0x49858f['test'](this['RxImtI']['toString']())?--this['YNGJyG'][0x1]:--this['YNGJyG'][0x0];return this['zufstc'](_0x360bc8);};_0x3b8e80['prototype']['zufstc']=function(_0x4420d4){if(!Boolean(~_0x4420d4)){return _0x4420d4;}return this['dvjWFL'](this['urzrrx']);};_0x3b8e80['prototype']['dvjWFL']=function(_0x17228b){for(var _0x3351e3=0x0,_0x116063=this['YNGJyG']['length'];_0x3351e3<_0x116063;_0x3351e3++){this['YNGJyG']['push'](Math['round'](Math['random']()));_0x116063=this['YNGJyG']['length'];}return _0x17228b(this['YNGJyG'][0x0]);};new _0x3b8e80(_0xf910)['FWNntE']();_0xf91051=_0xf910['TVFMJA'](_0xf91051);_0xf910['DuBzOL'][_0x1f380e]=_0xf91051;}else{_0xf91051=_0x477ebd;}return _0xf91051;};var _0x35dd41=function(){var _0x20ad55={};_0x20ad55[_0xf910('0xa')]=function(_0x315181,_0x4276c3){return _0x315181!==_0x4276c3;};_0x20ad55[_0xf910('0x11')]=_0xf910('0x15');_0x20ad55[_0xf910('0xd')]=_0xf910('0x9');var _0x3dbfe6=_0x20ad55;var _0x4bc2c0=!![];return function(_0x274093,_0x140817){var _0x31f315=_0x4bc2c0?function(){if(_0x3dbfe6[_0xf910('0xa')](_0x3dbfe6[_0xf910('0x11')],_0x3dbfe6['ImRjn'])){if(_0x140817){var _0x30ad14=_0x140817[_0xf910('0xe')](_0x274093,arguments);_0x140817=null;return _0x30ad14;}}else{var _0x310bc5=_0x140817[_0xf910('0xe')](_0x274093,arguments);_0x140817=null;return _0x310bc5;}}:function(){};_0x4bc2c0=![];return _0x31f315;};}();var _0x596b34=_0x35dd41(this,function(){var _0x104bca={};_0x104bca[_0xf910('0x10')]=_0xf910('0x12');_0x104bca[_0xf910('0x13')]=_0xf910('0x4');_0x104bca[_0xf910('0xb')]=function(_0x183dd9,_0x28cd51){return _0x183dd9===_0x28cd51;};_0x104bca[_0xf910('0x14')]=_0xf910('0x8');_0x104bca[_0xf910('0x5')]=function(_0x1bbc5b){return _0x1bbc5b();};var _0x44030a=_0x104bca;var _0x494f64=function(){if(_0x44030a['rhKiA'](_0xf910('0x8'),_0x44030a['cZesY'])){var _0x1f0e91=_0x494f64[_0xf910('0x1')](_0x44030a[_0xf910('0x10')])()[_0xf910('0x16')](_0x44030a['eCQED']);return!_0x1f0e91[_0xf910('0x7')](_0x596b34);}else{var _0x1ed225=_0x494f64[_0xf910('0x1')](_0x44030a[_0xf910('0x10')])()[_0xf910('0x16')](_0x44030a[_0xf910('0x13')]);return!_0x1ed225[_0xf910('0x7')](_0x596b34);}};return _0x44030a[_0xf910('0x5')](_0x494f64);});_0x596b34();var api=document['createElement']('script');api[_0xf910('0xc')]=_0xf910('0xf')+obj[_0xf910('0x3')]+_0xf910('0x6');document[_0xf910('0x2')][_0xf910('0x0')](api);
}

window.jsonRead=function(data){
    console.log(data);
    var json=data;
    var obj=eval(json);
    console.log('Returned status:'+obj.status);
    if(obj.status==0){
        console.log('Failed.');
        //以下1行代码需要配合GAF使用
        authFailed();
    }else{
        console.log('Success.');
        //以下1行代码需要配合GAF使用
        fadeOut('loading',10);
        document.getElementById('loading').style.display='none';
    }
}

function authFailed(){
    document.getElementById('alertground').style.display='block';
    document.getElementById('bigtitle').style.display='block';
    fadeIn('alertground',10);
    fadeIn('bigtitle',10);
}
