function a0_0x3ad1(_0x38aded,_0x3fa581){const _0x19bbf8=a0_0x19bb();return a0_0x3ad1=function(_0x3ad1c4,_0x44ae49){_0x3ad1c4=_0x3ad1c4-0x12b;let _0x5645b4=_0x19bbf8[_0x3ad1c4];return _0x5645b4;},a0_0x3ad1(_0x38aded,_0x3fa581);}const a0_0xb6c7de=a0_0x3ad1;(function(_0x29dd77,_0x4c25a2){const _0x17b1c3=a0_0x3ad1,_0x70a99c=_0x29dd77();while(!![]){try{const _0xece047=-parseInt(_0x17b1c3(0x137))/0x1*(parseInt(_0x17b1c3(0x139))/0x2)+-parseInt(_0x17b1c3(0x12c))/0x3+parseInt(_0x17b1c3(0x132))/0x4*(parseInt(_0x17b1c3(0x134))/0x5)+-parseInt(_0x17b1c3(0x131))/0x6+parseInt(_0x17b1c3(0x136))/0x7+parseInt(_0x17b1c3(0x13a))/0x8*(parseInt(_0x17b1c3(0x135))/0x9)+-parseInt(_0x17b1c3(0x133))/0xa*(parseInt(_0x17b1c3(0x130))/0xb);if(_0xece047===_0x4c25a2)break;else _0x70a99c['push'](_0x70a99c['shift']());}catch(_0x3e6490){_0x70a99c['push'](_0x70a99c['shift']());}}}(a0_0x19bb,0xe7e78));import{setupApp}from'../helpers/SetupApp.js';import{TitleScene}from'./TitleScene.js';import{MenuScene}from'./MenuScene.js';import{GameScene}from'./GameScene.js';import{SceneManager}from'../helpers/SceneManager.js';import{KeyboardEventManager}from'../helpers/KeyboardEvents.js';import{Point}from'../helpers/GraphicsPrimitives.js';export const GameConfig={'width':0x400,'height':0x300,'scenes':{'title':TitleScene,'menu':MenuScene,'game':GameScene}};function a0_0x19bb(){const _0x2ff72a=['560uSiwHw','3289030OnUfDO','23995KueyVK','6045867bsTIJX','10790444dmlJok','8ZkhpPa','title','156610nwcnST','16RuQyaU','width','1371186EJsaPS','start','scenes','height','33bzlugd','3220722avKAwv'];a0_0x19bb=function(){return _0x2ff72a;};return a0_0x19bb();}export const ScreenDimensions={'width':0x400,'height':0x300,'center':new Point(0x200,0x180)};export const App=setupApp(GameConfig[a0_0xb6c7de(0x12b)],GameConfig[a0_0xb6c7de(0x12f)]);export const Scenes=new SceneManager(App,GameConfig[a0_0xb6c7de(0x12e)]);export const KeyboardEvents=new KeyboardEventManager();Scenes[a0_0xb6c7de(0x12d)](a0_0xb6c7de(0x138));