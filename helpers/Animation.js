const a0_0x2cb69e=a0_0x35d5;function a0_0x35d5(_0x470b58,_0x3a39c3){const _0xb795bb=a0_0xb795();return a0_0x35d5=function(_0x35d5bc,_0x46e931){_0x35d5bc=_0x35d5bc-0x123;let _0x73fd6=_0xb795bb[_0x35d5bc];return _0x73fd6;},a0_0x35d5(_0x470b58,_0x3a39c3);}(function(_0x5001fb,_0xfc646b){const _0x2b532e=a0_0x35d5,_0x58aaa8=_0x5001fb();while(!![]){try{const _0x381fde=parseInt(_0x2b532e(0x12b))/0x1*(parseInt(_0x2b532e(0x132))/0x2)+-parseInt(_0x2b532e(0x13b))/0x3+-parseInt(_0x2b532e(0x133))/0x4*(parseInt(_0x2b532e(0x135))/0x5)+-parseInt(_0x2b532e(0x13a))/0x6*(parseInt(_0x2b532e(0x125))/0x7)+-parseInt(_0x2b532e(0x127))/0x8*(-parseInt(_0x2b532e(0x131))/0x9)+-parseInt(_0x2b532e(0x138))/0xa*(-parseInt(_0x2b532e(0x123))/0xb)+parseInt(_0x2b532e(0x139))/0xc;if(_0x381fde===_0xfc646b)break;else _0x58aaa8['push'](_0x58aaa8['shift']());}catch(_0x38564d){_0x58aaa8['push'](_0x58aaa8['shift']());}}}(a0_0xb795,0x34e5e));class AnimationContext{constructor(){const _0x5f3a0d=a0_0x35d5;this['app']=null,this[_0x5f3a0d(0x136)]=0x0,this[_0x5f3a0d(0x137)]=0x1,this[_0x5f3a0d(0x124)]=null,this[_0x5f3a0d(0x128)]=null;}[a0_0x2cb69e(0x12a)](_0x41d024,_0xb04295,_0x410f7e,_0x403a73,_0xf7306c){const _0xbf02d3=a0_0x2cb69e;this[_0xbf02d3(0x12c)]=_0x41d024,this[_0xbf02d3(0x136)]=_0xb04295,this['totalTicks']=_0x410f7e,this['invokeFunction']=_0x403a73,this[_0xbf02d3(0x128)]=_0xf7306c;}}export class AnimationManager{constructor(_0x431d91){const _0x5ca2f9=a0_0x2cb69e;this[_0x5ca2f9(0x12c)]=_0x431d91;}static ['context']=new AnimationContext();['wait'](_0x29e435){return new Promise(_0x58c87c=>setTimeout(_0x58c87c,_0x29e435));}[a0_0x2cb69e(0x126)](_0x517858,_0x2166ac){const _0x3732b0=a0_0x2cb69e;let _0x4018e7=this[_0x3732b0(0x12c)],_0x453c49=new Promise(function(_0xc02b43,_0x135870){const _0x4ba459=_0x3732b0;_0x4018e7[_0x4ba459(0x12d)][_0x4ba459(0x134)]=0x3c;let _0x3c1a25=_0x517858*_0x4018e7[_0x4ba459(0x12d)][_0x4ba459(0x134)]/0x3e8,_0x49c2ad=AnimationManager[_0x4ba459(0x12f)];_0x49c2ad[_0x4ba459(0x12a)](_0x4018e7,0x0,_0x3c1a25,_0x2166ac,_0xc02b43),_0x4018e7[_0x4ba459(0x12d)][_0x4ba459(0x12e)](tickerCallback);});return _0x453c49;}['runAsync'](_0x37abcf,_0x4c23f6){const _0x5373cc=a0_0x2cb69e;this[_0x5373cc(0x12c)][_0x5373cc(0x12d)][_0x5373cc(0x134)]=0x3c;let _0x57437f=_0x37abcf*this[_0x5373cc(0x12c)]['ticker'][_0x5373cc(0x134)]/0x3e8,_0x3f345f=AnimationManager['context'];_0x3f345f[_0x5373cc(0x12a)](this[_0x5373cc(0x12c)],0x0,_0x57437f,_0x4c23f6,null),this[_0x5373cc(0x12c)][_0x5373cc(0x12d)]['add'](tickerCallback);}['runWithCompletion'](_0x1ffda1,_0x74f4f7,_0x599a14){const _0x43944e=a0_0x2cb69e;console[_0x43944e(0x129)](_0x43944e(0x130)),this[_0x43944e(0x12c)][_0x43944e(0x12d)]['maxFPS']=0x3c;let _0x3c8de3=_0x1ffda1*this['app'][_0x43944e(0x12d)][_0x43944e(0x134)]/0x3e8,_0x5e14e5=AnimationManager[_0x43944e(0x12f)];_0x5e14e5[_0x43944e(0x12a)](this[_0x43944e(0x12c)],0x0,_0x3c8de3,_0x74f4f7,_0x599a14),this[_0x43944e(0x12c)]['ticker'][_0x43944e(0x12e)](tickerCallback);}}function tickerCallback(){const _0x108768=a0_0x2cb69e;let _0x3fca85=AnimationManager[_0x108768(0x12f)];_0x3fca85[_0x108768(0x136)]+=0x1;let _0x1075c7=_0x3fca85['tickCount']/_0x3fca85['totalTicks'],_0x3bf745=0x1/_0x3fca85[_0x108768(0x137)];_0x3fca85['invokeFunction'](_0x1075c7,_0x3bf745),_0x3fca85[_0x108768(0x136)]>_0x3fca85[_0x108768(0x137)]&&(_0x3fca85['app']['ticker']['remove'](tickerCallback),_0x3fca85['completionFunction']!=null&&_0x3fca85['completionFunction']());}function delay(_0x12b6b8){return new Promise(_0x4e6ed5=>setTimeout(_0x4e6ed5,_0x12b6b8));}function a0_0xb795(){const _0x287ce5=['403974qraiKF','4CjADcj','maxFPS','987535nVtkvx','tickCount','totalTicks','622540NXDlrg','6252312AluyLI','18OGqKrf','900054qKNXjX','33oUriDF','invokeFunction','971593BmgWXr','run','4024HYwpqL','completionFunction','log','set','1oZtcaB','app','ticker','add','context','--runWithCompletion','3951gFcVjv'];a0_0xb795=function(){return _0x287ce5;};return a0_0xb795();}