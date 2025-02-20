#include QMK_KEYBOARD_H

enum layer_names {
_QWERTY,
_LOWER,
_RAISE,
_ADJUST
};

enum custom_keycodes {
LOWER = SAFE_RANGE,
RAISE,
ADJUST,
C_LBRC,
C_CBRC,
C_LBRC_R,
C_CBRC_R,
C_DOT,
C_COMM,
};

#define EISU LALT(KC_GRV)

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {

/* Qwerty
* ,----------------------------------------------------------------------------------------------------------------------.
* | ESC  |   1  |   2  |   3  |   4  |   5  |   [  |                    |   ´  |   6  |   7  |   8  |   9  |   0  |  +   |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* | Tab  |   Q  |   W  |   E  |   R  |   T  |   {  |                    |   ¨  |   Y  |   U  |   I  |   O  |   P  |  Å   |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* | Caps |   A  |   S  |   D  |   F  |   G  |  <>  |                    |  '   |   H  |   J  |   K  |   L  |   Ö  |  Ä   |
* |------+------+------+------+------+------+---------------------------+------+------+------+------+------+------+------|
* | Shift|   Z  |   X  |   C  |   V  |   B  | LShft|                    | RAlt |  N   |   M  |   ,  |   .  |   /  | Shift|
* |-------------+------+------+------+------+------+------+------+------+------+------+------+------+------+-------------|
* | Ctrl | GUI  | Ctrl |  Alt |||||||| Lower| Del  |  Space ||||| Enter | Bspc | Lower||||||| Left | Down |  Up  | Right |
* ,----------------------------------------------------------------------------------------------------------------------.
*/
[_QWERTY] = LAYOUT(
QK_GESC, KC_1,           KC_2,            KC_3,               KC_4,          KC_5,    C_LBRC,                                                   KC_EQL,  KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_MINS,
KC_TAB,  KC_Q,           KC_W,            KC_E,               KC_R,          KC_T,    C_CBRC,                                                   KC_RBRC, KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_LBRC,
KC_CAPS, LALT_T(KC_A),   LGUI_T(KC_S),    LCTL_T(KC_D),       LSFT_T(KC_F),  KC_G,    KC_NUBS,                   KC_NUHS, KC_H,    RSFT_T(KC_J),    RCTL_T(KC_K),    RGUI_T(KC_L),    RALT_T(KC_SCLN), KC_QUOT,
KC_LSFT, KC_Z,    KC_X,     KC_C,     KC_V,   KC_B,    KC_LSFT,                                                  KC_RALT, KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_RSFT,
KC_LCTL, KC_LGUI, KC_LCTL,  KC_LALT,  LOWER,  KC_SPC,  KC_DEL,                                                   KC_ENT,  KC_BSPC, RAISE,   KC_LEFT, KC_DOWN, KC_UP,   KC_RGHT
),

/* Lower
* ,----------------------------------------------------------------------------------------------------------------------.
* |  F11 |  F1  |  F2  |  F3  |  F4  |  F5  |   ]  |                    |   }  |  F6  |  F7  |  F8  |  F9  |  F10 |  F12 |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* |  ~   |   !  |   @  |   #  |   $  |   %  |   }  |                    |   +  |   ^  |   &  |   *  |   (  |   )  |  |   |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* | Tab  |   1  |   2  |   3  |   4  |   5  |  Del |                    |   -  | LEFT | DOWN |  UP  | RIGHT|   :  |  "   |
* |------+------+------+------+------+------+---------------------------+------+------+------+------+------+------+------|
* | Shift|   6  |   7  |   8  |   9  |   0  | Space|                    |   ;  |   N  |   M  |   <  |   >  |   ?  | Shift|
* |-------------+------+------+------+------+------+------+------+------+------+------+------+------+------+-------------|
* | Ctrl |  GUI |  ALt | EISU |||||||| Lower| Space|  Del |||||||| Bksp |   :  | Raise ||||||| Home |PageDn|PageUp|  End |
* ,----------------------------------------------------------------------------------------------------------------------.
*/
[_LOWER] = LAYOUT(
KC_F11,  KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   C_LBRC_R,                  KC_VOLU,  KC_F6,    KC_F7,    KC_F8,    KC_F9,    KC_F10,   KC_F12,
KC_GRV,  KC_EXLM, KC_AT,   KC_HASH, KC_DLR,  KC_PERC, C_CBRC_R,                  KC_MPLY,  KC_CIRC,  KC_AMPR,  KC_ASTR,  KC_LPRN,  KC_RPRN,  KC_PIPE,
KC_TAB,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_DEL ,                   KC_VOLD,  KC_LEFT,  KC_DOWN,  KC_UP,    KC_RIGHT, KC_COLN,  KC_DQT ,
KC_LSFT, KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_SPC ,                   C_COMM,   KC_N,     KC_M,     KC_LT,    KC_GT,    KC_QUES,  KC_RSFT,
KC_LCTL, KC_LGUI, KC_LALT, EISU,    LOWER,   KC_SPC,  KC_DEL,                    KC_BSPC,  C_DOT,    RAISE,    KC_HOME,  KC_PGDN,  KC_PGUP,  KC_END
),

/* Raise
* ,----------------------------------------------------------------------------------------------------------------------.
* |  F11 |  F1  |  F2  |  F3  |  F4  |  F5  |   {  |                    |   }  |  F6  |  F7  |  F8  |  F9  |  F10 |  F12 |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* |  ~   |   !  |   @  |   #  |   $  |   %  |   _  |                    |   +  |   ^  |   &  |   *  |   (  |   )  |  |   |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* | Tab  |   1  |   2  |   3  |   4  |   5  |  Del |                    | Bksp |   H  |   J  |   K  |   L  |   :  |  "   |
* |------+------+------+------+------+------+---------------------------+------+------+------+------+------+------+------|
* | Shift|   6  |   7  |   8  |   9  |   0  | Space|                    | Enter|   N  |   M  |   <  |   >  |   ?  | Shift|
* |-------------+------+------+------+------+------+------+------+------+------+------+------+------+------+-------------|
* | Ctrl |  GUI |  ALt | EISU |||||||| Lower| Space|  Del |||||||| Bksp | Enter| Raise|||||||| Home |PageDn|PageUp|  End |
* ,----------------------------------------------------------------------------------------------------------------------.
*/
[_RAISE] = LAYOUT(
KC_F11,  KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   C_LBRC_R,                  KC_RCBR,  KC_F6,    KC_F7,    KC_F8,    KC_F9,    KC_F10,   KC_F12,
KC_GRV,  KC_EXLM, KC_AT,   KC_HASH, KC_DLR,  KC_PERC, C_CBRC_R,                  KC_PLUS,  KC_CIRC,  KC_7,     KC_8,     KC_9,     KC_RPRN,  KC_PIPE,
KC_TAB,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_DEL ,                   KC_SLSH,  KC_LEFT,  KC_4,     KC_5,     KC_6,     KC_COLN,  KC_DQT ,
KC_LSFT, KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_SPC ,                   C_COMM,   KC_0,     KC_1,     KC_2,     KC_3,     KC_QUES,  KC_RSFT,
KC_LCTL, KC_LGUI, KC_LALT, EISU,    LOWER,   KC_SPC,  KC_DEL,                    KC_BSPC,  C_DOT,    RAISE,    KC_HOME,  KC_PGDN,  KC_PGUP,  KC_END
),

/* Adjust
* ,----------------------------------------------------------------------------------------------------------------------.
* | ESC  |   1  |   2  |   3  |   4  |   5  |   [  |                    |   ´  |   6  |   7  |   8  |   9  |   0  |  +   |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* | Tab  |   Q  |   W  |   F  |   P  |   B  |   {  |                    |   ¨  |   J  |   L  |   U  |   Y  |   Ö  |  Å   |
* |------+------+------+------+------+------+------+--------------------+------+------+------+------+------+------+------|
* | Caps |   A  |   R  |   S  |   T  |   G  |  <>  |                    |  '   |   M  |   N  |   E  |   I  |   O  |  Ä   |
* |------+------+------+------+------+------+---------------------------+------+------+------+------+------+------+------|
* | Shift|   Z  |   X  |   C  |   D  |   V  | LShft|                    | RAlt |  K   |   H  |   ,  |   .  |   /  | Shift|
* |-------------+------+------+------+------+------+------+------+------+------+------+------+------+------+-------------|
* | Ctrl | GUI  | Ctrl |  Alt |||||||| Lower| Del  |  Space ||||| Enter | Bspc | Lower||||||| Left | Down |  Up  | Right |
* ,----------------------------------------------------------------------------------------------------------------------.
*/
  [_ADJUST] = LAYOUT(
QK_GESC, KC_1,    KC_2,     KC_3,     KC_4,   KC_5,    C_LBRC,                    KC_EQL,  KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_MINS,
KC_TAB,  KC_Q,    KC_W,     KC_E,     KC_R,   KC_T,    C_CBRC,                    KC_RBRC, KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_LBRC,
KC_CAPS, KC_A,    KC_S,     KC_D,     KC_F,   KC_G,    KC_NUBS,                   KC_NUHS, KC_H,    KC_J,    KC_K,    KC_L,    KC_SCLN, KC_QUOT,
KC_LSFT, KC_Z,    KC_X,     KC_C,     KC_V,   KC_B,    KC_LSFT,                   KC_RALT, KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_RSFT,
KC_LCTL, KC_LGUI, KC_LCTL,  KC_LALT,  LOWER,  KC_SPC,  KC_DEL,                    KC_ENT,  KC_BSPC, RAISE,   KC_LEFT, KC_DOWN, KC_UP,   KC_RGHT
  )
};

#ifdef AUDIO_ENABLE
float tone_qwerty[][2]     = SONG(QWERTY_SOUND);
#endif

bool process_record_user(uint16_t keycode, keyrecord_t *record) {
  switch (keycode) {
    case LOWER:
      if (record->event.pressed) {
        layer_on(_LOWER);
        // If RAISE is already active, toggle the ADJUST layer.
        if (layer_state_is(_RAISE)) {
          layer_invert(_ADJUST);
        }
      } else {
        layer_off(_LOWER);
      }
      return false;
      break;
    case RAISE:
      if (record->event.pressed) {
        layer_on(_RAISE);
        // If LOWER is already active, toggle the ADJUST layer.
        if (layer_state_is(_LOWER)) {
          layer_invert(_ADJUST);
        }
      } else {
        layer_off(_RAISE);
      }
      return false;
      break;
    case C_LBRC:
      if (record->event.pressed) {
          register_code(KC_RALT); // Press AltGr
          tap_code(KC_8);         // Press 8
          unregister_code(KC_RALT); // Release AltGr
      }
      return false; // Skip default processing
      break;
    case C_CBRC:
      if (record->event.pressed) {
          register_code(KC_RALT); // Press AltGr
          tap_code(KC_7);         // Press 7
          unregister_code(KC_RALT); // Release AltGr
      }
      return false; // Skip default processing
      break;
    case C_LBRC_R:
      if (record->event.pressed) {
          register_code(KC_RALT); // Press AltGr
          tap_code(KC_9);         // Press 9
          unregister_code(KC_RALT); // Release AltGr
      }
      return false; // Skip default processing
      break;
    case C_CBRC_R:
      if (record->event.pressed) {
          register_code(KC_RALT); // Press AltGr
          tap_code(KC_0);         // Press 0
          unregister_code(KC_RALT); // Release AltGr
      }
      return false; // Skip default processing
      break;
    case C_DOT:
      if (record->event.pressed) {
          register_code(KC_LSFT); // Press AltGr
          tap_code(KC_DOT);         // Press .
          unregister_code(KC_LSFT); // Release AltGr
      }
      return false; // Skip default processing
      break;
    case C_COMM:
      if (record->event.pressed) {
          register_code(KC_LSFT); // Press AltGr
          tap_code(KC_COMM);         // Press ,
          unregister_code(KC_LSFT); // Release AltGr
      }
      return false; // Skip default processing
      break;
  }
  return true;
}

