var example1 = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(function () {
    this.MainAssets = Kotlin.kotlin.collections.listOf_9mqe4v$(['logo.png', 'logo2.png', 'panda.png']);
    this.JumpAssets = Kotlin.kotlin.collections.listOf_9mqe4v$(['font2.fnt', 'background.png', 'player01.png', 'rope01.png', 'rope02.png', 'rope03.png']);
  }, /** @lends _ */ {
    mainOld_kand9s$: function (args) {
      _.Koala.addModule_ndw8yw$(_.SpriteAlphaModule);
    },
    MainModule: Kotlin.createObject(function () {
      return [_.Koala.Module];
    }, function MainModule() {
      MainModule.baseInitializer.call(this, 'game.logo', Kotlin.kotlin.collections.listOf_za3rmp$(Kotlin.getCallableRefForConstructor(_.LogoScene)), _.MainAssets);
    }),
    SceneChangeModule: Kotlin.createObject(function () {
      return [_.Koala.Module];
    }, function SceneChangeModule() {
      SceneChangeModule.baseInitializer.call(this, 'game.colors', Kotlin.kotlin.collections.listOf_9mqe4v$([Kotlin.getCallableRefForConstructor(_.RedScene), Kotlin.getCallableRefForConstructor(_.GreenScene)]), Kotlin.kotlin.collections.emptyList());
    }),
    SpriteAlphaModule: Kotlin.createObject(function () {
      return [_.Koala.Module];
    }, function SpriteAlphaModule() {
      SpriteAlphaModule.baseInitializer.call(this, 'game.alpha', Kotlin.kotlin.collections.listOf_za3rmp$(Kotlin.getCallableRefForConstructor(_.SpriteAlphaScene)), _.MainAssets);
    }),
    AnimModule: Kotlin.createObject(function () {
      return [_.Koala.Module];
    }, function AnimModule() {
      AnimModule.baseInitializer.call(this, 'game.anim', Kotlin.kotlin.collections.listOf_za3rmp$(Kotlin.getCallableRefForConstructor(_.AnimScene)), _.MainAssets);
    }),
    PandaIcon: Kotlin.createClass(function () {
      return [game.Sprite];
    }, function PandaIcon() {
      PandaIcon.baseInitializer.call(this, 'panda.png');
      this.interactive = true;
    }, /** @lends _.PandaIcon.prototype */ {
      init: function () {
        this.scale.set(1, 1);
      },
      update: function () {
        this.rotation += 1 * game.delta;
      },
      mousemove: function (x, y, id, event) {
        this.alpha = 0.5;
        return false;
      },
      mouseout: function (x, y, id, event) {
        this.alpha = 1;
      }
    }),
    SpriteAlphaScene: Kotlin.createClass(function () {
      return [_.Panda.Scene];
    }, function SpriteAlphaScene() {
      SpriteAlphaScene.baseInitializer.call(this);
      this.sprite = new game.Sprite('panda.png');
      this.movingSprite = new game.Sprite('panda.png');
      this.speed = 100.0;
    }, /** @lends _.SpriteAlphaScene.prototype */ {
      init: function () {
        this.backgroundColor = '#666';
        this.sprite = new game.Sprite('panda.png');
        this.movingSprite = new game.Sprite('panda.png');
        var sprite = (new game.Sprite('logo.png')).addTo(this.stage);
        sprite.alpha = 0.5;
        sprite.blendMode = _.Panda.BlendModes.lighter.ordinal;
        sprite.scale.set(0.5, 0.5);
        sprite.visible = true;
        var sprite2 = (new game.Sprite('logo.png')).addTo(this.stage);
        sprite2.position.set(300, 300);
        sprite2.alpha = 0.5;
        sprite2.skew.set(0.5, 1);
        sprite.addChild(sprite2);
        this.sprite.addTo(this.stage);
        this.movingSprite.addTo(this.stage);
      },
      mousedown: function (x, y) {
        var sprite = new _.PandaIcon();
        sprite.position.set(x, y);
        sprite.addTo(this.stage);
      },
      mousemove: function (x, y) {
        this.sprite.position.set(x, y);
      },
      keydown: function (key) {
        if (Kotlin.equals(key, 'SPACE')) {
          var sprite = new game.Sprite('logo.png');
          sprite.position.set(123, 123);
          sprite.addTo(this.stage);
        }
      },
      update: function () {
        if (game.keyboard.down('UP')) {
          this.movingSprite.position.y = this.movingSprite.position.y - this.speed * game.system.delta;
        }
        if (game.keyboard.down('DOWN')) {
          this.movingSprite.position.y = this.movingSprite.position.y + this.speed * game.delta;
        }
        if (game.keyboard.down('LEFT')) {
          this.movingSprite.position.x = this.movingSprite.position.x - this.speed * game.delta;
        }
        if (game.keyboard.down('RIGHT')) {
          this.movingSprite.position.x = this.movingSprite.position.x + this.speed * game.delta;
        }
      }
    }),
    LogoScene: Kotlin.createClass(function () {
      return [_.Panda.Scene];
    }, function LogoScene() {
      LogoScene.baseInitializer.call(this);
    }, /** @lends _.LogoScene.prototype */ {
      init: function () {
        this.backgroundColor = '#666';
        var logo = (new game.Sprite('logo.png')).center(this.stage).addTo(this.stage);
      },
      mousedown: function (x, y) {
        game.system.setScene('RedScene');
      }
    }),
    RedScene: Kotlin.createClass(function () {
      return [_.Panda.Scene];
    }, function RedScene() {
      RedScene.baseInitializer.call(this, 'RedScene');
      this.backgroundColor = '#ff0000';
    }, /** @lends _.RedScene.prototype */ {
      mousedown: function (x, y) {
        game.system.setScene('GreenScene');
      }
    }),
    GreenScene: Kotlin.createClass(function () {
      return [_.Panda.Scene];
    }, function GreenScene() {
      GreenScene.baseInitializer.call(this, 'GreenScene');
      this.backgroundColor = '#00ff00';
    }, /** @lends _.GreenScene.prototype */ {
      mousedown: function (x, y) {
        game.system.setScene('Main');
      }
    }),
    AnimScene: Kotlin.createClass(function () {
      return [_.Panda.Scene];
    }, function AnimScene() {
      AnimScene.baseInitializer.call(this);
    }, /** @lends _.AnimScene.prototype */ {
      init: function () {
        this.backgroundColor = '#666';
        var anim = new game.Animation(['logo.png', 'logo2.png', 'logo.png']);
        anim.speed = 3;
        anim.play();
        anim.addTo(this.stage);
      }
    }),
    main_kand9s$: function (args) {
      _.Koala.addModule_ndw8yw$(_.JumpModule);
    },
    JumpModule: Kotlin.createObject(function () {
      return [_.Koala.Module];
    }, function JumpModule() {
      JumpModule.baseInitializer.call(this, 'game.logo', Kotlin.kotlin.collections.listOf_za3rmp$(Kotlin.getCallableRefForConstructor(_.JumpScene)), _.JumpAssets);
    }),
    Player: Kotlin.createClass(function () {
      return [game.Sprite];
    }, function Player() {
      Player.baseInitializer.call(this, 'player01.png');
      this.jumpSpeed = 12.0;
      this.incrY = 0.0;
      this.grav = 0.98;
      this.groundY = 350.0;
      this.jumping = true;
    }, /** @lends _.Player.prototype */ {
      init: function () {
        this.position.set(392, this.groundY);
      },
      update: function () {
        if (this.jumping) {
          this.incrY += this.grav;
          this.position.y = this.position.y + this.incrY;
          if (this.position.y > this.groundY) {
            this.position.y = this.groundY;
            this.jumping = false;
          }
        }
      },
      jump: function () {
        if (this.jumping)
          return;
        this.jumping = true;
        this.incrY = -this.jumpSpeed;
      }
    }),
    JumpScene: Kotlin.createClass(function () {
      return [_.Panda.Scene];
    }, function JumpScene() {
      JumpScene.baseInitializer.call(this);
      this.ropeSpeed = 1.0;
      this.score = 0;
      this.currentAngle = 0.0;
      this.incrAngle = 0.05;
      this.ropeOnBack = true;
      this.direction = 0;
      this.lastResult = 0.0;
      this.numFrames = 3;
    }, /** @lends _.JumpScene.prototype */ {
      init: function () {
        this.backgroundColor = '#666';
        this.backgroundSprite = (new game.Sprite('background.png')).addTo(this.stage);
        this.ropeAnim = new game.Animation(['rope01.png', 'rope02.png', 'rope03.png', 'rope02.png']);
        this.ropeAnim.position.set(327, 426);
        this.ropeAnim.speed = this.ropeSpeed;
        this.ropeAnim.addTo(this.stage);
        this.player = new _.Player();
        this.player.addTo(this.stage);
        this.setScore_3p81yu$(this.score);
      },
      resetGame: function () {
        this.resetScore();
        this.resetRopeSpeed();
      },
      resetScore: function () {
        this.score = 0;
        this.scoreText.remove();
        this.setScore_3p81yu$(this.score);
      },
      increaseScore: function () {
        this.score++;
        this.scoreText.remove();
        this.setScore_3p81yu$(this.score);
      },
      setScore_3p81yu$: function (score) {
        this.scoreText = new game.Text(score.toString(), _.JumpScene.setScore_3p81yu$f);
        this.scoreText.position.set(480, 170);
        this.scoreText.anchorCenter();
        this.scoreText.scale.set(2, 2);
        this.scoreText.addTo(this.stage);
      },
      mousedown: function (x, y) {
        this.increaseRopeSpeed();
        this.player.jump();
      },
      mousemove: function (x, y) {
      },
      keydown: function (key) {
        if (Kotlin.equals(key, 'SPACE')) {
          this.player.jump();
        }
      },
      update: function () {
        var result = Math.sin(this.currentAngle);
        if (result - this.lastResult > 0) {
          this.direction = 1;
        }
        if (result - this.lastResult < 0) {
          this.direction = -1;
        }
        this.lastResult = result;
        if (this.direction > 0 && Kotlin.equals(this.ropeOnBack, false)) {
          this.stage.swapChildren(this.ropeAnim, this.player);
          this.ropeOnBack = true;
          if (this.player.jumping) {
            this.increaseScore();
          }
           else {
            this.resetGame();
          }
        }
        if (this.direction < 0 && this.ropeOnBack) {
          this.stage.swapChildren(this.ropeAnim, this.player);
          this.ropeOnBack = false;
        }
        this.currentAngle += this.incrAngle * this.ropeSpeed;
        var ropeFrame = (result + 1) / 2 * this.numFrames | 0;
        this.ropeAnim.gotoFrame(ropeFrame);
      },
      resetRopeSpeed: function () {
        this.ropeSpeed = 1.0;
      },
      increaseRopeSpeed: function () {
        this.ropeSpeed += 0.1;
      }
    }, /** @lends _.JumpScene */ {
      setScore_3p81yu$f: function () {
        var font = 'Arial';
      }
    }),
    Koala: Kotlin.definePackage(null, /** @lends _.Koala */ {
      Module: Kotlin.createClass(null, function Module(name, scenes, assets) {
        this.name = name;
        this.scenes = scenes;
        this.assets = assets;
      }),
      addModule_ndw8yw$f: function (closure$module) {
        return function () {
          var tmp$0;
          tmp$0 = closure$module.assets.iterator();
          while (tmp$0.hasNext()) {
            var element = tmp$0.next();
            game.addAsset(element);
          }
          var tmp$1;
          tmp$1 = closure$module.scenes.iterator();
          while (tmp$1.hasNext()) {
            var element_0 = tmp$1.next();
            var scene = element_0();
            game.createScene(scene.name, scene);
          }
        };
      },
      addModule_ndw8yw$: function (module) {
        game.module(module.name).body(_.Koala.addModule_ndw8yw$f(module));
      }
    }),
    Panda: Kotlin.definePackage(null, /** @lends _.Panda */ {
      Scene: Kotlin.createClass(null, function Scene(name) {
        if (name === void 0)
          name = 'Main';
        this.name = name;
      }, /** @lends _.Panda.Scene.prototype */ {
        init: function () {
        },
        mousedown: function (x, y) {
        },
        mousemove: function (x, y) {
        },
        keydown: function (key) {
        },
        update: function () {
        }
      }),
      BlendModes: Kotlin.createEnumClass(function () {
        return [Kotlin.Enum];
      }, function BlendModes() {
        BlendModes.baseInitializer.call(this);
      }, function () {
        return {
          source_over: function () {
            return new _.Panda.BlendModes();
          },
          source_in: function () {
            return new _.Panda.BlendModes();
          },
          source_out: function () {
            return new _.Panda.BlendModes();
          },
          source_atop: function () {
            return new _.Panda.BlendModes();
          },
          destination_over: function () {
            return new _.Panda.BlendModes();
          },
          destination_in: function () {
            return new _.Panda.BlendModes();
          },
          destination_out: function () {
            return new _.Panda.BlendModes();
          },
          destination_atop: function () {
            return new _.Panda.BlendModes();
          },
          lighter: function () {
            return new _.Panda.BlendModes();
          },
          copy: function () {
            return new _.Panda.BlendModes();
          },
          xor: function () {
            return new _.Panda.BlendModes();
          },
          multiply: function () {
            return new _.Panda.BlendModes();
          },
          screen: function () {
            return new _.Panda.BlendModes();
          },
          overlay: function () {
            return new _.Panda.BlendModes();
          },
          darken: function () {
            return new _.Panda.BlendModes();
          },
          lighten: function () {
            return new _.Panda.BlendModes();
          },
          color_dodge: function () {
            return new _.Panda.BlendModes();
          },
          color_burn: function () {
            return new _.Panda.BlendModes();
          },
          hard_light: function () {
            return new _.Panda.BlendModes();
          },
          soft_light: function () {
            return new _.Panda.BlendModes();
          },
          difference: function () {
            return new _.Panda.BlendModes();
          },
          exclusion: function () {
            return new _.Panda.BlendModes();
          },
          hue: function () {
            return new _.Panda.BlendModes();
          },
          saturation: function () {
            return new _.Panda.BlendModes();
          },
          color: function () {
            return new _.Panda.BlendModes();
          },
          luminosity: function () {
            return new _.Panda.BlendModes();
          }
        };
      })
    }),
    Phaser: Kotlin.definePackage(null, /** @lends _.Phaser */ {
      AssertName: Kotlin.createTrait(null),
      Assert: Kotlin.createClass(null, function Assert(name, url) {
        this.name = name;
        this.url = url;
      }, /** @lends _.Phaser.Assert.prototype */ {
        component1: function () {
          return this.name;
        },
        component2: function () {
          return this.url;
        },
        copy_i88sg6$: function (name, url) {
          return new _.Phaser.Assert_init_puj7f4$(name === void 0 ? this.name : name, url === void 0 ? this.url : url);
        },
        toString: function () {
          return 'Assert(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + ')';
        },
        hashCode: function () {
          var result = 0;
          result = result * 31 + Kotlin.hashCode(this.name) | 0;
          result = result * 31 + Kotlin.hashCode(this.url) | 0;
          return result;
        },
        equals_za3rmp$: function (other) {
          return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url)))));
        }
      }),
      Assert_init_puj7f4$: function (name, url, $this) {
        $this = $this || Object.create(_.Phaser.Assert.prototype);
        _.Phaser.Assert.call($this, Kotlin.isType(tmp$0 = name, _.Phaser.AssertName) ? tmp$0 : Kotlin.throwCCE(), url);
        return $this;
      },
      GameStateType: Kotlin.createTrait(null),
      GameStateType_61zpoe$: function (name) {
        var tmp$0;
        return Kotlin.isType(tmp$0 = name, _.Phaser.GameStateType) ? tmp$0 : Kotlin.throwCCE();
      },
      GameState: Kotlin.createClass(null, function GameState(game) {
      }, /** @lends _.Phaser.GameState.prototype */ {
        preload: function () {
        },
        create: function () {
        },
        update: function () {
        },
        render: function () {
        }
      }),
      TextStyle_gqcoa5$: function (font, fontStyle, fontVariant, fontWeight, fontSize, backgroundColor, fill, align, boundsAlignH, boundsAlignV, stroke, strokeThickness, wordWrap, wordWrapWidth, tabs) {
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
      },
      image_we6qu1$: function ($receiver, assert) {
        $receiver.image(assert.name, assert.url);
      },
      image_alw5g3$: function ($receiver, asserts) {
        var tmp$2;
        for (tmp$2 = 0; tmp$2 !== asserts.length; ++tmp$2) {
          var element = asserts[tmp$2];
          $receiver.image(element.name, element.url);
        }
      },
      DirectionObj: Kotlin.createTrait(null)
    })
  });
  Kotlin.defineModule('example1', _);
  _.main_kand9s$([]);
  return _;
}(kotlin);
