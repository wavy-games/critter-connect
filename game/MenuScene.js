function a0_0x4870(_0x27b435,_0x3da1e7){const _0x105dc1=a0_0x105d();return a0_0x4870=function(_0x487043,_0x2a99d7){_0x487043=_0x487043-0x80;let _0x374d2b=_0x105dc1[_0x487043];return _0x374d2b;},a0_0x4870(_0x27b435,_0x3da1e7);}(function(_0x1442b4,_0x4a21f7){const _0x28c0c8=a0_0x4870,_0x5e3676=_0x1442b4();while(!![]){try{const _0x525d2a=-parseInt(_0x28c0c8(0x8d))/0x1+-parseInt(_0x28c0c8(0x93))/0x2+-parseInt(_0x28c0c8(0x9b))/0x3*(parseInt(_0x28c0c8(0x94))/0x4)+-parseInt(_0x28c0c8(0x96))/0x5*(-parseInt(_0x28c0c8(0x86))/0x6)+-parseInt(_0x28c0c8(0x90))/0x7*(-parseInt(_0x28c0c8(0x85))/0x8)+-parseInt(_0x28c0c8(0x89))/0x9*(-parseInt(_0x28c0c8(0x97))/0xa)+-parseInt(_0x28c0c8(0x99))/0xb*(parseInt(_0x28c0c8(0x95))/0xc);if(_0x525d2a===_0x4a21f7)break;else _0x5e3676['push'](_0x5e3676['shift']());}catch(_0x1e0107){_0x5e3676['push'](_0x5e3676['shift']());}}}(a0_0x105d,0x78f5c));import{Scene}from'../helpers/Scene.js';import{Scenes}from'./game.js';import{Label}from'../helpers/Label.js';function a0_0x105d(){const _0x2fd4b4=['./sprites/number-button.png','game','normal','89842siTuhD','./sprites/menu-scene.png','load','4230877vRHVfj','centerAt','start','842856scILRW','4iqZYVp','1577220HhjIEl','62750azCoIR','50BEkDWg','Label','33gmThsJ','addChild','459807ZUJDeo','container','Bangers','Title','Assets','Choose\x20a\x20Level','8QhSldp','108KyGoXZ','from','set','1303173NIWzlh'];a0_0x105d=function(){return _0x2fd4b4;};return a0_0x105d();}import{ButtonArray}from'../helpers/ButtonArray.js';import{Size,Point}from'../helpers/GraphicsPrimitives.js';import{setCurrentLevel}from'./GameScene.js';import{GameColor}from'./GameColors.js';export class MenuScene extends Scene{async['create'](){const _0x4c2624=a0_0x4870;await this['createBackground']();let _0x41c1ae=new ButtonArray(0x3,0x5,Size['of'](0x78,0x64),_0x4c2624(0x8a),menuButtonPressed,GameColor[_0x4c2624(0x98)],new Point(0x0,-0x7));_0x41c1ae[_0x4c2624(0x91)](0x200,0x140),this[_0x4c2624(0x80)]['addChild'](_0x41c1ae);}async['createBackground'](){const _0x31c16e=a0_0x4870;let _0x1055b7=await PIXI[_0x31c16e(0x83)][_0x31c16e(0x8f)](_0x31c16e(0x8e)),_0x2cf872=PIXI['Sprite'][_0x31c16e(0x87)](_0x1055b7);this[_0x31c16e(0x80)][_0x31c16e(0x9a)](_0x2cf872);}['createTitle'](){const _0x3383ba=a0_0x4870;let _0x132276=new FontSpec(_0x3383ba(0x81),0x28,_0x3383ba(0x8c),GameColor[_0x3383ba(0x82)]),_0xc37cf5=new Label(_0x3383ba(0x84),_0x132276);_0xc37cf5['x']=0x200,_0xc37cf5['y']=0x46,_0xc37cf5['anchor'][_0x3383ba(0x88)](0.5),this[_0x3383ba(0x80)][_0x3383ba(0x9a)](_0xc37cf5);}}function menuButtonPressed(_0x5ae216){const _0xce8284=a0_0x4870;setCurrentLevel(_0x5ae216),Scenes[_0xce8284(0x92)](_0xce8284(0x8b));}