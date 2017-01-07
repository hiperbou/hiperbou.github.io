if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'example1'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'example1'.");
}
var example1 = function (_, Kotlin) {
  'use strict';
  var properties_0 = Kotlin.kotlin.properties;
  var get_js = Kotlin.kotlin.js.get_js_t5ir34$;
  Sprite.prototype = Object.create(Phaser.Sprite.prototype);
  Sprite.prototype.constructor = Sprite;
  Player.prototype = Object.create(Sprite.prototype);
  Player.prototype.constructor = Player;
  Jump.prototype = Object.create(Phaser.State.prototype);
  Jump.prototype.constructor = Jump;
  var phaserGame;
  function get_phaserGame() {
    return phaserGame.getValue_dsk1ci$(this, new Kotlin.PropertyMetadata('phaserGame'));
  }
  function set_phaserGame(phaserGame_0) {
    phaserGame.setValue_w32e13$(this, new Kotlin.PropertyMetadata('phaserGame'), phaserGame_0);
  }
  function Sprite(x, y, key, frame) {
    Phaser.Sprite.call(this, get_phaserGame(), x, y, key, frame);
  }
  Sprite.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Sprite',
    baseClasses: []
  };
  function initKoala(config) {
    set_phaserGame(new Phaser.Game(config.width, config.height, config.renderer, config.parent, config.state, config.transparent, config.antialias, config.physicsConfig));
    return get_phaserGame();
  }
  function T$2() {
  }
  T$2.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$2',
    baseClasses: []
  };
  function RGBColor() {
  }
  RGBColor.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'RGBColor',
    baseClasses: []
  };
  function ColorComponents() {
  }
  ColorComponents.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'ColorComponents',
    baseClasses: [RGBColor]
  };
  function CursorKeys() {
  }
  CursorKeys.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'CursorKeys',
    baseClasses: []
  };
  function SinCosGenerator() {
  }
  SinCosGenerator.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'SinCosGenerator',
    baseClasses: []
  };
  function WheelEventProxy() {
  }
  WheelEventProxy.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'WheelEventProxy',
    baseClasses: []
  };
  function T$9() {
  }
  T$9.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$9',
    baseClasses: []
  };
  function T$10() {
  }
  T$10.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$10',
    baseClasses: []
  };
  function T$11() {
  }
  T$11.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$11',
    baseClasses: []
  };
  function T$12() {
  }
  T$12.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$12',
    baseClasses: []
  };
  function PhaserTextStyle() {
  }
  PhaserTextStyle.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'PhaserTextStyle',
    baseClasses: []
  };
  function T$13() {
  }
  T$13.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$13',
    baseClasses: []
  };
  function T$14() {
  }
  T$14.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$14',
    baseClasses: []
  };
  function T$15() {
  }
  T$15.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'T$15',
    baseClasses: []
  };
  var kPI2;
  var kPI;
  function sin($receiver, value) {
    return Math.sin(value);
  }
  function cos($receiver, value) {
    return Math.cos(value);
  }
  function get_PI2($receiver) {
    return kPI2;
  }
  function get_PI($receiver) {
    return kPI;
  }
  function round($receiver, value) {
    return Math.round(value);
  }
  function floor($receiver, value) {
    return Math.floor(value);
  }
  function atan2($receiver, x, y) {
    return Math.atan2(x, y);
  }
  function sqrt($receiver, value) {
    return Math.sqrt(value);
  }
  function abs($receiver, value) {
    return Math.abs(value);
  }
  function random($receiver) {
    return Math.random();
  }
  function random_0($receiver, min, max) {
    return random($receiver) * (max - min) + min | 0;
  }
  function crop($receiver, rect, copy) {
    if (copy === void 0)
      copy = null;
    $receiver.crop(rect, copy);
  }
  function destroy($receiver, destroyChildren, unknown) {
    if (destroyChildren === void 0)
      destroyChildren = null;
    if (unknown === void 0)
      unknown = null;
    $receiver.destroy(destroyChildren, unknown);
  }
  function revive($receiver, health) {
    if (health === void 0)
      health = 100;
    return $receiver.revive(health);
  }
  function reset($receiver, x, y, health) {
    if (x === void 0)
      x = null;
    if (y === void 0)
      y = null;
    if (health === void 0)
      health = null;
    return $receiver.reset(x, y, health);
  }
  function setScaleMinMax($receiver, minX, minY, maxX, maxY) {
    if (minX === void 0)
      minX = null;
    if (minY === void 0)
      minY = null;
    if (maxX === void 0)
      maxX = null;
    if (maxY === void 0)
      maxY = null;
    $receiver.setScaleMinMax(minX, minY, maxX, maxY);
  }
  function setTexture($receiver, texture) {
    $receiver.setTexture(texture, undefined);
  }
  function setTexture_0($receiver, texture) {
    $receiver.setTexture(texture, undefined);
  }
  function setTexture_1($receiver, texture, destroyBase) {
    $receiver.setTexture(texture, destroyBase);
  }
  function setTexture_2($receiver, texture, destroyBase) {
    $receiver.setTexture(texture, destroyBase);
  }
  function getBounds($receiver) {
    return $receiver.getBounds(null);
  }
  function getBounds_0($receiver, targetCoordinateSpace) {
    return $receiver.getBounds(targetCoordinateSpace);
  }
  function getBounds_1($receiver, targetCoordinateSpace) {
    return $receiver.getBounds(targetCoordinateSpace);
  }
  function alignTo($receiver, container, position, offsetX, offsetY) {
    if (position === void 0)
      position = null;
    if (offsetX === void 0)
      offsetX = null;
    if (offsetY === void 0)
      offsetY = null;
    return $receiver.alignTo(container, position, offsetX, offsetY);
  }
  function enable($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_0($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_1($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_2($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_3($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_4($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_5($receiver, group, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(group, children);
  }
  function enable_6($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function enable_7($receiver, spr, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(spr, children);
  }
  function enable_8($receiver, array, children) {
    if (children === void 0)
      children = undefined;
    $receiver.enable(array, children);
  }
  function Asset(name, url) {
    this.name = name;
    this.url = url;
  }
  Asset.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Asset',
    baseClasses: []
  };
  Asset.prototype.component1 = function () {
    return this.name;
  };
  Asset.prototype.component2 = function () {
    return this.url;
  };
  Asset.prototype.copy_puj7f4$ = function (name, url) {
    return new Asset(name === void 0 ? this.name : name, url === void 0 ? this.url : url);
  };
  Asset.prototype.toString = function () {
    return 'Asset(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Asset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Asset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url)))));
  };
  function start($receiver, state, clearWorld, clearCache, args) {
    if (clearWorld === void 0)
      clearWorld = null;
    if (clearCache === void 0)
      clearCache = null;
    var stateID = get_js(Kotlin.getKClassFromExpression(state)).name;
    $receiver.add(stateID, state, false);
    $receiver.start(stateID);
  }
  function GameStateType(name) {
    var tmp$;
    return Kotlin.isType(tmp$ = name, Object) ? tmp$ : Kotlin.throwCCE();
  }
  function GameState(game) {
  }
  GameState.prototype.preload = function () {
  };
  GameState.prototype.create = function () {
  };
  GameState.prototype.update = function () {
  };
  GameState.prototype.render = function () {
  };
  GameState.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'GameState',
    baseClasses: []
  };
  function TextStyle(font, fontStyle, fontVariant, fontWeight, fontSize, backgroundColor, fill, align, boundsAlignH, boundsAlignV, stroke, strokeThickness, wordWrap, wordWrapWidth, tabs) {
    if (font === void 0)
      font = null;
    if (fontStyle === void 0)
      fontStyle = null;
    if (fontVariant === void 0)
      fontVariant = null;
    if (fontWeight === void 0)
      fontWeight = null;
    if (fontSize === void 0)
      fontSize = null;
    if (backgroundColor === void 0)
      backgroundColor = null;
    if (fill === void 0)
      fill = null;
    if (align === void 0)
      align = null;
    if (boundsAlignH === void 0)
      boundsAlignH = null;
    if (boundsAlignV === void 0)
      boundsAlignV = null;
    if (stroke === void 0)
      stroke = null;
    if (strokeThickness === void 0)
      strokeThickness = null;
    if (wordWrap === void 0)
      wordWrap = null;
    if (wordWrapWidth === void 0)
      wordWrapWidth = null;
    if (tabs === void 0)
      tabs = null;
    var out = {};
    if (font != null)
      out.font = font;
    if (fontStyle != null)
      out.fontStyle = fontStyle;
    if (fontVariant != null)
      out.fontVariant = fontVariant;
    if (fontWeight != null)
      out.fontWeight = fontWeight;
    if (fontSize != null)
      out.fontSize = fontSize;
    if (backgroundColor != null)
      out.backgroundColor = backgroundColor;
    if (fill != null)
      out.fill = fill;
    if (align != null)
      out.align = align;
    if (boundsAlignH != null)
      out.boundsAlignH = boundsAlignH;
    if (boundsAlignV != null)
      out.boundsAlignV = boundsAlignV;
    if (stroke != null)
      out.stroke = stroke;
    if (strokeThickness != null)
      out.strokeThickness = strokeThickness;
    if (wordWrap != null)
      out.wordWrap = wordWrap;
    if (wordWrapWidth != null)
      out.wordWrapWidth = wordWrapWidth;
    if (tabs != null)
      out.tabs = tabs;
    return out;
  }
  function GameConfig(enableDebug, width, height, renderer, parent, transparent, antialias, resolution, physicsConfig, state) {
    if (enableDebug === void 0)
      enableDebug = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (renderer === void 0)
      renderer = null;
    if (parent === void 0)
      parent = null;
    if (transparent === void 0)
      transparent = null;
    if (antialias === void 0)
      antialias = null;
    if (resolution === void 0)
      resolution = null;
    if (physicsConfig === void 0)
      physicsConfig = null;
    if (state === void 0)
      state = null;
    var out = {};
    if (enableDebug != null)
      out.enableDebug = enableDebug;
    if (width != null)
      out.width = width;
    if (height != null)
      out.height = height;
    if (renderer != null)
      out.renderer = renderer;
    if (parent != null)
      out.parent = parent;
    if (transparent != null)
      out.transparent = transparent;
    if (antialias != null)
      out.antialias = antialias;
    if (resolution != null)
      out.resolution = resolution;
    if (physicsConfig != null)
      out.physicsConfig = physicsConfig;
    if (state != null)
      out.state = state;
    return out;
  }
  function IGameConfig() {
  }
  IGameConfig.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'IGameConfig',
    baseClasses: []
  };
  function ContactMaterialOptions(friction, restitution, stiffness, relaxation, frictionStiffness, frictionRelaxation, surfaceVelocity) {
    if (friction === void 0)
      friction = null;
    if (restitution === void 0)
      restitution = null;
    if (stiffness === void 0)
      stiffness = null;
    if (relaxation === void 0)
      relaxation = null;
    if (frictionStiffness === void 0)
      frictionStiffness = null;
    if (frictionRelaxation === void 0)
      frictionRelaxation = null;
    if (surfaceVelocity === void 0)
      surfaceVelocity = null;
    var out = {};
    if (friction != null)
      out.friction = friction;
    if (restitution != null)
      out.restitution = restitution;
    if (stiffness != null)
      out.stiffness = stiffness;
    if (relaxation != null)
      out.relaxation = relaxation;
    if (frictionStiffness != null)
      out.frictionStiffness = frictionStiffness;
    if (frictionRelaxation != null)
      out.frictionRelaxation = frictionRelaxation;
    if (surfaceVelocity != null)
      out.surfaceVelocity = surfaceVelocity;
    return out;
  }
  function IContactMaterialOptions() {
  }
  IContactMaterialOptions.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'IContactMaterialOptions',
    baseClasses: []
  };
  function image($receiver, asset) {
    return $receiver.image(asset.name, asset.url);
  }
  function images($receiver, assets) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== assets.length; ++tmp$) {
      var element = assets[tmp$];
      $receiver.image(element.name, element.url);
    }
  }
  function images_0($receiver, assets) {
    var tmp$;
    tmp$ = assets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.image(element.name, element.url);
    }
  }
  function sound($receiver, asset) {
    return $receiver.audio(asset.name, asset.url);
  }
  function sounds($receiver, assets) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== assets.length; ++tmp$) {
      var element = assets[tmp$];
      $receiver.audio(element.name, element.url);
    }
  }
  function sounds_0($receiver, assets) {
    var tmp$;
    tmp$ = assets.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.audio(element.name, element.url);
    }
  }
  function DirectionObj() {
  }
  DirectionObj.$metadata$ = {
    type: Kotlin.TYPE.TRAIT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'DirectionObj',
    baseClasses: []
  };
  function main(args) {
    jumpMain();
  }
  function BackgroundFX(game, container) {
    this.game = game;
    this.container = container;
    this.count = 0.0;
  }
  BackgroundFX.prototype.preload = function () {
    this.game.load.image('spin1', 'assets/sprites/spinObj_01.png');
    this.game.load.image('spin2', 'assets/sprites/spinObj_02.png');
    this.game.load.image('spin3', 'assets/sprites/spinObj_03.png');
    this.game.load.image('spin4', 'assets/sprites/spinObj_04.png');
    this.game.load.image('spin5', 'assets/sprites/spinObj_05.png');
    this.game.load.image('spin6', 'assets/sprites/spinObj_06.png');
    this.game.load.image('spin7', 'assets/sprites/spinObj_07.png');
    this.game.load.image('spin8', 'assets/sprites/spinObj_08.png');
  };
  BackgroundFX.prototype.create = function () {
    var tmp$;
    this.renderTexture = this.game.add.renderTexture(960, 640, 'texture1');
    this.renderTexture2 = this.game.add.renderTexture(960, 640, 'texture2');
    this.currentTexture = this.renderTexture;
    this.outputSprite = this.game.add.sprite(960 / 2 | 0, 640 / 2 | 0, this.currentTexture);
    this.container.add(this.outputSprite);
    this.outputSprite.anchor.x = 0.5;
    this.outputSprite.anchor.y = 0.5;
    this.stuffContainer = this.game.add.group();
    this.stuffContainer.x = 960 / 2.0;
    this.stuffContainer.y = 640 / 2.0;
    this.container.add(this.stuffContainer);
    tmp$ = 20 - 1;
    for (var i = 0; i <= tmp$; i++) {
      var item = this.stuffContainer.create(Math_0.random() * 400 - 200, Math_0.random() * 400 - 200, 'spin' + random_0(Phaser.Math, 1, 8));
      item.anchor.setTo(0.5, 0.5);
    }
    this.count = 0.0;
  };
  BackgroundFX.prototype.update = function () {
    this.stuffContainer.addAll('rotation', 0.1);
    this.count += 0.01;
    var temp = this.renderTexture;
    this.renderTexture = this.renderTexture2;
    this.renderTexture2 = temp;
    setTexture_0(this.outputSprite, this.renderTexture);
    this.stuffContainer.rotation = this.stuffContainer.rotation - 0.01;
    this.outputSprite.scale.x = 1 + Math_0.sin(this.count) * 0.2;
    this.outputSprite.scale.y = 1 + Math_0.sin(this.count) * 0.2;
    this.renderTexture2.renderXY(this.container, 0, 0, true);
  };
  BackgroundFX.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'BackgroundFX',
    baseClasses: []
  };
  var Math_0;
  function jumpMain() {
    var game = initKoala(GameConfig(void 0, gameProperties_getInstance().screenWidth, gameProperties_getInstance().screenHeight, Phaser.CANVAS, 'gameDiv', void 0, void 0, void 0, void 0, new Jump()));
  }
  function gameProperties() {
    gameProperties_instance = this;
    this.screenWidth = 960.0;
    this.screenHeight = 640.0;
  }
  gameProperties.$metadata$ = {
    type: Kotlin.TYPE.OBJECT,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'gameProperties',
    baseClasses: []
  };
  var gameProperties_instance = null;
  function gameProperties_getInstance() {
    if (gameProperties_instance === null) {
      gameProperties_instance = new gameProperties();
    }
    return gameProperties_instance;
  }
  function Player(jumpSound) {
    Sprite.call(this, 392.0, 350.0, 'jumpAtlas', 'player');
    this.jumpSound = jumpSound;
    this.jumpSpeed = 12.0;
    this.incrY = 0.0;
    this.grav = 0.98;
    this.groundY = 350.0;
    this.jumping = true;
    this.position.set(392, this.groundY);
    this.jumpSound.volume = 0.5;
  }
  Player.prototype.update = function () {
    if (this.jumping) {
      this.incrY += this.grav;
      this.position.y = this.position.y + this.incrY;
      if (this.position.y > this.groundY) {
        this.position.y = this.groundY;
        this.jumping = false;
      }
    }
  };
  Player.prototype.jump = function () {
    if (this.jumping)
      return;
    this.jumping = true;
    this.incrY = -this.jumpSpeed;
    this.jumpSound.play();
  };
  Player.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Player',
    baseClasses: [Sprite]
  };
  function Jump() {
    Phaser.State.call(this);
    this.fxTween = null;
    this.anim = ['rope1', 'rope2', 'rope3', 'rope2'];
    this.ropeSpeed = 1.0;
    this.hiScore = 0;
    this.score = 0;
    this.currentAngle = 0.0;
    this.incrAngle = 0.05;
    this.ropeOnBack = true;
    this.direction = 0;
    this.lastResult = 0.0;
    this.numFrames = 3;
  }
  Jump.prototype.preload = function () {
    console.log('preload');
    this.game.load.pack('level', 'assets/jump/assets-pack.json', null, this);
    this.fx = this.game.add.group();
    this.backgroundFX = new BackgroundFX(this.game, this.fx);
    this.backgroundFX.preload();
  };
  Jump.prototype.loadUpdate = function () {
    console.log('loadUpdate');
  };
  function Jump$create$ObjectLiteral() {
    this.angle = 35;
  }
  Jump$create$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  Jump.prototype.create = function () {
    console.log('create');
    this.lev = new level(this.game);
    this.lev.addAt(this.fx, 1);
    this.fx.alpha = 0.0;
    this.backgroundFX.create();
    var music = this.game.add.audio('music');
    var sound_0 = this.game.add.sound('sound');
    music.loop = true;
    music.play();
    var sun = this.lev.fSun;
    sun.angle = -35.0;
    this.game.add.tween(sun).to(new Jump$create$ObjectLiteral(), 1000, Kotlin.getBoundCallableRefForMemberFunction(Phaser.Easing.Quadratic, 'Out'), true, null, -1).yoyo(true);
    this.ropeAnim = this.lev.fRope1;
    this.player = new Player(sound_0);
    this.lev.addChild(this.player);
    this.scoreText = this.game.add.bitmapText(480, 170, 'font2', '0', 70);
    this.hiScoreText = this.game.add.bitmapText(800, 0, 'font2', '0', 54);
    this.scoreText.anchor.set(0.5, 0.5);
    this.hiScoreText.anchor.set(0.0, 0.2);
    this.setScore_3p81yu$(this.score);
    this.setHiScore_3p81yu$(this.hiScore);
    this.game.input.onDown.add(Kotlin.getBoundCallableRefForMemberFunction(this, 'onTap'), this);
    this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(Kotlin.getBoundCallableRefForMemberFunction(this, 'keydown'));
    this.setupScale_0(this.game);
  };
  Jump.prototype.setupScale_0 = function (game) {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
  };
  Jump.prototype.resetGame = function () {
    if (this.score > this.hiScore)
      this.resetHiScore_za3lpa$(this.score);
    this.resetScore();
    this.resetRopeSpeed();
  };
  function Jump$resetScore$ObjectLiteral() {
    this.alpha = 0.0;
  }
  Jump$resetScore$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  Jump.prototype.resetScore = function () {
    var tmp$;
    this.score = 0;
    this.setScore_3p81yu$(this.score);
    if (this.fxTween != null)
      ((tmp$ = this.fxTween) != null ? tmp$ : Kotlin.throwNPE()).stop();
    this.fxTween = this.game.add.tween(this.fx).to(new Jump$resetScore$ObjectLiteral(), 1000, Kotlin.getBoundCallableRefForMemberFunction(Phaser.Easing.Linear, 'None'), true, null);
  };
  function Jump$increaseScore$ObjectLiteral() {
    this.alpha = 1.0;
  }
  Jump$increaseScore$ObjectLiteral.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    baseClasses: []
  };
  Jump.prototype.increaseScore = function () {
    var tmp$;
    this.score++;
    this.setScore_3p81yu$(this.score);
    if (this.score === 10) {
      if (this.fxTween != null)
        ((tmp$ = this.fxTween) != null ? tmp$ : Kotlin.throwNPE()).stop();
      this.fxTween = this.game.add.tween(this.fx).to(new Jump$increaseScore$ObjectLiteral(), 10000, Kotlin.getBoundCallableRefForMemberFunction(Phaser.Easing.Linear, 'None'), true, null);
    }
  };
  Jump.prototype.setScore_3p81yu$ = function (score) {
    this.scoreText.text = score.toString();
  };
  Jump.prototype.setHiScore_3p81yu$ = function (score) {
    this.hiScoreText.text = score.toString();
  };
  Jump.prototype.resetHiScore_za3lpa$ = function (score) {
    this.hiScore = score;
    this.setHiScore_3p81yu$(score);
  };
  Jump.prototype.onTap = function () {
    this.increaseRopeSpeed();
    this.player.jump();
  };
  Jump.prototype.keydown = function () {
    this.increaseRopeSpeed();
    this.player.jump();
  };
  Jump.prototype.update = function () {
    this.backgroundFX.update();
    var result = Math_0.sin(this.currentAngle);
    if (result - this.lastResult > 0) {
      this.direction = 1;
    }
    if (result - this.lastResult < 0) {
      this.direction = -1;
    }
    this.lastResult = result;
    if (this.direction > 0 && Kotlin.equals(this.ropeOnBack, false)) {
      this.lev.swap(this.ropeAnim, this.player);
      this.ropeOnBack = true;
      if (this.player.jumping) {
        this.increaseScore();
      }
       else {
        this.resetGame();
      }
    }
    if (this.direction < 0 && this.ropeOnBack) {
      this.lev.swap(this.ropeAnim, this.player);
      this.ropeOnBack = false;
    }
    this.currentAngle += this.incrAngle * this.ropeSpeed;
    var ropeFrame = (result + 1) / 2 * this.numFrames | 0;
    this.ropeAnim.frameName = this.anim[ropeFrame];
  };
  Jump.prototype.resetRopeSpeed = function () {
    this.ropeSpeed = 1.0;
  };
  Jump.prototype.increaseRopeSpeed = function () {
    this.ropeSpeed += 0.1;
  };
  Jump.$metadata$ = {
    type: Kotlin.TYPE.CLASS,
    classIndex: Kotlin.newClassIndex(),
    simpleName: 'Jump',
    baseClasses: []
  };
  var package$Koala = _.Koala || (_.Koala = {});
  Object.defineProperty(package$Koala, 'phaserGame', {
    get: get_phaserGame,
    set: set_phaserGame
  });
  package$Koala.Sprite_init_rpaqe6$ = Sprite_init;
  package$Koala.Sprite = Sprite;
  package$Koala.initKoala_lcgo3e$ = initKoala;
  var package$Phaser = _.Phaser || (_.Phaser = {});
  package$Phaser.T$2 = T$2;
  package$Phaser.RGBColor = RGBColor;
  package$Phaser.ColorComponents = ColorComponents;
  package$Phaser.CursorKeys = CursorKeys;
  package$Phaser.SinCosGenerator = SinCosGenerator;
  package$Phaser.WheelEventProxy = WheelEventProxy;
  package$Phaser.T$9 = T$9;
  package$Phaser.T$10 = T$10;
  package$Phaser.T$11 = T$11;
  package$Phaser.T$12 = T$12;
  package$Phaser.PhaserTextStyle = PhaserTextStyle;
  package$Phaser.T$13 = T$13;
  package$Phaser.T$14 = T$14;
  package$Phaser.T$15 = T$15;
  Object.defineProperty(package$Phaser, 'kPI2', {
    get: function () {
      return kPI2;
    }
  });
  Object.defineProperty(package$Phaser, 'kPI', {
    get: function () {
      return kPI;
    }
  });
  package$Phaser.sin_m4iyer$ = sin;
  package$Phaser.cos_m4iyer$ = cos;
  package$Phaser.get_PI2_akwgk1$ = get_PI2;
  package$Phaser.get_PI_akwgk1$ = get_PI;
  package$Phaser.round_hax2yj$ = round;
  package$Phaser.floor_hax2yj$ = floor;
  package$Phaser.atan2_g73mox$ = atan2;
  package$Phaser.sqrt_m4iyer$ = sqrt;
  package$Phaser.abs_m4iyer$ = abs;
  package$Phaser.random_akwgk1$ = random;
  package$Phaser.random_n28dad$ = random_0;
  package$Phaser.crop_p8qxvh$ = crop;
  package$Phaser.destroy_2ajn2y$ = destroy;
  package$Phaser.reviveKt = revive;
  package$Phaser.resetKt = reset;
  package$Phaser.setScaleMinMaxKt = setScaleMinMax;
  package$Phaser.setTextureKt = setTexture;
  package$Phaser.setTextureKt2 = setTexture_0;
  package$Phaser.setTextureKt3 = setTexture_1;
  package$Phaser.setTextureKt4 = setTexture_2;
  package$Phaser.getBoundsKt = getBounds;
  package$Phaser.getBoundsKt1 = getBounds_0;
  package$Phaser.getBoundsKt2 = getBounds_1;
  package$Phaser.alignKt = alignTo;
  package$Phaser.enableKt = enable;
  package$Phaser.enableKt2 = enable_0;
  package$Phaser.enableKt3 = enable_1;
  package$Phaser.enableKt4 = enable_2;
  package$Phaser.enableKt5 = enable_3;
  package$Phaser.enableKt6 = enable_4;
  package$Phaser.enableKt7 = enable_5;
  package$Phaser.enableKt8 = enable_6;
  package$Phaser.enableKt9 = enable_7;
  package$Phaser.enableKt10 = enable_8;
  package$Phaser.Asset = Asset;
  package$Phaser.start_6a57ie$ = start;
  package$Phaser.GameStateType_61zpoe$ = GameStateType;
  package$Phaser.GameState = GameState;
  package$Phaser.TextStyle_gqcoa5$ = TextStyle;
  package$Phaser.GameConfig_g1t93r$ = GameConfig;
  package$Phaser.IGameConfig = IGameConfig;
  package$Phaser.ContactMaterialOptions_20gh5a$ = ContactMaterialOptions;
  package$Phaser.IContactMaterialOptions = IContactMaterialOptions;
  package$Phaser.image_ci216l$ = image;
  package$Phaser.images_wf56vb$ = images;
  package$Phaser.images_dslnxl$ = images_0;
  package$Phaser.sound_ci216l$ = sound;
  package$Phaser.sounds_wf56vb$ = sounds;
  package$Phaser.sounds_dslnxl$ = sounds_0;
  package$Phaser.DirectionObj = DirectionObj;
  _.main_kand9s$ = main;
  var package$jump = _.jump || (_.jump = {});
  package$jump.BackgroundFX = BackgroundFX;
  Object.defineProperty(package$jump, 'Math', {
    get: function () {
      return Math_0;
    }
  });
  package$jump.jumpMain = jumpMain;
  Object.defineProperty(package$jump, 'gameProperties', {
    get: gameProperties_getInstance
  });
  package$jump.Player = Player;
  package$jump.Jump = Jump;
  phaserGame = properties_0.Delegates.notNull();
  function Sprite_init(x, y, key, $this) {
    $this = $this || Object.create(Sprite.prototype);
    Sprite.call($this, x, y, key, undefined);
    return $this;
  }
  kPI2 = Math.PI * 2;
  kPI = Math.PI;
  Math_0 = Math;
  Kotlin.defineModule('example1', _);
  main([]);
  return _;
}(typeof example1 === 'undefined' ? {} : example1, kotlin);
