import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.B9AX-CPi.js";
const __pageData = JSON.parse('{"title":"QMK Breaking Changes - 2024 November 24 Changelog","description":"","frontmatter":{},"headers":[],"relativePath":"ChangeLog/20241124.md","filePath":"ChangeLog/20241124.md","lastUpdated":null}');
const _sfc_main = { name: "ChangeLog/20241124.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qmk-breaking-changes-2024-november-24-changelog" tabindex="-1">QMK Breaking Changes - 2024 November 24 Changelog <a class="header-anchor" href="#qmk-breaking-changes-2024-november-24-changelog" aria-label="Permalink to &quot;QMK Breaking Changes - 2024 November 24 Changelog&quot;">​</a></h1><h2 id="notable-features" tabindex="-1">Notable Features <a class="header-anchor" href="#notable-features" aria-label="Permalink to &quot;Notable Features&quot;">​</a></h2><p>November 2024 brings a relatively lightweight QMK release. As with previous cycles, almost all PRs were related to cleanup or re-organization of aspects of QMK.</p><p>One notable item is the removal of <code>arm_atsam</code> -- this affects users with <code>massdrop/ctrl</code> or <code>massdrop/alt</code> keyboards. These have no current replacement, but support for an alternative to the <code>arm_atsam</code> backend is nearing completion. Unfortunately the alternative backend didn&#39;t make this quarter&#39;s list of merges, so there&#39;s a temporary removal of these boards. Users who need to build for these targets should stay on the <code>0.26.x</code> version of QMK until these boards have been restored.</p><h2 id="changes-requiring-user-action" tabindex="-1">Changes Requiring User Action <a class="header-anchor" href="#changes-requiring-user-action" aria-label="Permalink to &quot;Changes Requiring User Action&quot;">​</a></h2><h3 id="updated-keyboard-codebases" tabindex="-1">Updated Keyboard Codebases <a class="header-anchor" href="#updated-keyboard-codebases" aria-label="Permalink to &quot;Updated Keyboard Codebases&quot;">​</a></h3><p>One note with updated keyboard names -- historical keyboard names are still considered valid when using <a href="./../newbs_external_userspace">External Userspace</a> for builds. If you&#39;re already using External Userspace, you do not need to move your keymap inside your repository.</p><table><thead><tr><th>Old Keyboard Name</th><th>New Keyboard Name</th></tr></thead><tbody><tr><td>saevus/cor</td><td>concreteflowers/cor</td></tr><tr><td>saevus/cor_tkl</td><td>concreteflowers/cor_tkl</td></tr></tbody></table><h2 id="deprecation-notices" tabindex="-1">Deprecation Notices <a class="header-anchor" href="#deprecation-notices" aria-label="Permalink to &quot;Deprecation Notices&quot;">​</a></h2><p>In line with the <a href="./../support_deprecation_policy#how-much-advance-notice-will-be-given">notice period</a>, deprecation notices for larger items are listed here.</p><h3 id="rgb-keycode-overhaul-23679-24484-24490" tabindex="-1">RGB Keycode Overhaul (<a href="https://github.com/qmk/qmk_firmware/pull/23679" target="_blank" rel="noreferrer">#23679</a>, <a href="https://github.com/qmk/qmk_firmware/pull/24484" target="_blank" rel="noreferrer">#24484</a>, <a href="https://github.com/qmk/qmk_firmware/pull/24490" target="_blank" rel="noreferrer">#24490</a>) <a class="header-anchor" href="#rgb-keycode-overhaul-23679-24484-24490" aria-label="Permalink to &quot;RGB Keycode Overhaul ([#23679](https://github.com/qmk/qmk_firmware/pull/23679), [#24484](https://github.com/qmk/qmk_firmware/pull/24484), [#24490](https://github.com/qmk/qmk_firmware/pull/24490))&quot;">​</a></h3><p>RGB keycodes have been reworked to allow for both rgblight and rgb_matrix to coexist for the handful of boards in the repo with both enabled. Previously, <code>RGB_xxx</code> style keycodes were available, but now for rgblight we have <code>UG_xxx</code> (underglow), and <code>RM_xxx</code> for rgb_matrix. Default keymaps have been updated to reflect whichever system the respective board enables.</p><p>Longer-term, <code>RGB_xxx</code> style keycodes will be removed, but for now they act as if they&#39;re <code>UG_xxx</code>, and <code>UG_xxx</code> keycodes act upon both rgblight and rgb_matrix simultaneously. Put simply, the existing <code>RGB_xxx</code> keycodes act as they always have, giving users time to transition across to the new keycodes instead.</p><h3 id="adns9800-and-pmw33xx-sensor-firmware-rom-removal-24428" tabindex="-1">ADNS9800 and PMW33xx sensor firmware ROM removal (<a href="https://github.com/qmk/qmk_firmware/pull/24428" target="_blank" rel="noreferrer">#24428</a>) <a class="header-anchor" href="#adns9800-and-pmw33xx-sensor-firmware-rom-removal-24428" aria-label="Permalink to &quot;ADNS9800 and PMW33xx sensor firmware ROM removal ([#24428](https://github.com/qmk/qmk_firmware/pull/24428))&quot;">​</a></h3><p>Following on from the last Breaking Changes cycle, Binary blobs for optical sensors have been removed from the QMK codebase. Hooks allowing users to supply their own have been put in place; users wishing to source firmware blobs and integrate them into their keymap may do so. Doing so renders their firmware un-distributable due to licensing incompatibility with the GPL -- as such user firmware containing such blobs must not be distributed.</p><p>Please get in touch with the QMK team on Discord if your sensor is no longer functional.</p><h2 id="full-changelist" tabindex="-1">Full changelist <a class="header-anchor" href="#full-changelist" aria-label="Permalink to &quot;Full changelist&quot;">​</a></h2><p>Core:</p><ul><li>Refactor F4 ld files to use common files (<a href="https://github.com/qmk/qmk_firmware/pull/18059" target="_blank" rel="noreferrer">#18059</a>)</li><li>Add LD7032 support to QP. (<a href="https://github.com/qmk/qmk_firmware/pull/20828" target="_blank" rel="noreferrer">#20828</a>)</li><li>Add combo key repress feature (<a href="https://github.com/qmk/qmk_firmware/pull/22858" target="_blank" rel="noreferrer">#22858</a>)</li><li>Add Layer Lock feature (<a href="https://github.com/qmk/qmk_firmware/pull/23430" target="_blank" rel="noreferrer">#23430</a>)</li><li>Added MCU support for ArteryTek AT32F415 (<a href="https://github.com/qmk/qmk_firmware/pull/23445" target="_blank" rel="noreferrer">#23445</a>)</li><li>Allow codegen of <code>keymap.json</code> =&gt; <code>keymap.c</code> without requiring layers/layout etc. (<a href="https://github.com/qmk/qmk_firmware/pull/23451" target="_blank" rel="noreferrer">#23451</a>)</li><li>Separate RGBLight/RGB Matrix keycode handling (<a href="https://github.com/qmk/qmk_firmware/pull/23679" target="_blank" rel="noreferrer">#23679</a>)</li><li>Allow for inverted SPI CS logic (<a href="https://github.com/qmk/qmk_firmware/pull/23699" target="_blank" rel="noreferrer">#23699</a>)</li><li>Add timer_save and _restore functions. (<a href="https://github.com/qmk/qmk_firmware/pull/23887" target="_blank" rel="noreferrer">#23887</a>)</li><li>Allow for <code>get_hardware_id()</code> to be used for serial number. (<a href="https://github.com/qmk/qmk_firmware/pull/24053" target="_blank" rel="noreferrer">#24053</a>)</li><li>Segregrate keycode at pre-process record quantum (<a href="https://github.com/qmk/qmk_firmware/pull/24194" target="_blank" rel="noreferrer">#24194</a>)</li><li>Add ability to poweroff ADNS5050 sensor (<a href="https://github.com/qmk/qmk_firmware/pull/24223" target="_blank" rel="noreferrer">#24223</a>)</li><li>quantum: util: add bit and bitmask helpers (<a href="https://github.com/qmk/qmk_firmware/pull/24229" target="_blank" rel="noreferrer">#24229</a>)</li><li>Add new connection keycodes for Bluetooth, 2.4GHz. (<a href="https://github.com/qmk/qmk_firmware/pull/24251" target="_blank" rel="noreferrer">#24251</a>)</li><li><code>usb_device_state</code>: consolidate usb state handling across implementations (<a href="https://github.com/qmk/qmk_firmware/pull/24258" target="_blank" rel="noreferrer">#24258</a>)</li><li>Remove global k_rgb_matrix_split (<a href="https://github.com/qmk/qmk_firmware/pull/24348" target="_blank" rel="noreferrer">#24348</a>)</li><li>util: uf2families: sync with upstream (<a href="https://github.com/qmk/qmk_firmware/pull/24351" target="_blank" rel="noreferrer">#24351</a>)</li><li>[Maintenance] builddefs: common_rules: overhaul debug information generation (<a href="https://github.com/qmk/qmk_firmware/pull/24352" target="_blank" rel="noreferrer">#24352</a>)</li><li>Add easier way to set default single layer (<a href="https://github.com/qmk/qmk_firmware/pull/24376" target="_blank" rel="noreferrer">#24376</a>)</li><li>Tweak OS detect, add OS_DETECTION_SINGLE_REPORT (<a href="https://github.com/qmk/qmk_firmware/pull/24379" target="_blank" rel="noreferrer">#24379</a>)</li><li>Reinstate global <code>k_rgb_matrix_split</code> (<a href="https://github.com/qmk/qmk_firmware/pull/24388" target="_blank" rel="noreferrer">#24388</a>)</li><li>Bring supported STM32F4 configs in line with F4x1 (<a href="https://github.com/qmk/qmk_firmware/pull/24413" target="_blank" rel="noreferrer">#24413</a>)</li><li>Extended wheel reports (<a href="https://github.com/qmk/qmk_firmware/pull/24422" target="_blank" rel="noreferrer">#24422</a>)</li><li>Remove binary blobs from optical sensors. (<a href="https://github.com/qmk/qmk_firmware/pull/24428" target="_blank" rel="noreferrer">#24428</a>)</li><li>Remove <code>STM32_PWM_USE_ADVANCED</code> references (<a href="https://github.com/qmk/qmk_firmware/pull/24432" target="_blank" rel="noreferrer">#24432</a>)</li><li>Remove <code>RING_BUFFERED_6KRO_REPORT_ENABLE</code> due to disuse. (<a href="https://github.com/qmk/qmk_firmware/pull/24433" target="_blank" rel="noreferrer">#24433</a>)</li><li>Move pointing device driver code (<a href="https://github.com/qmk/qmk_firmware/pull/24445" target="_blank" rel="noreferrer">#24445</a>)</li><li>Add svlinky converter (<a href="https://github.com/qmk/qmk_firmware/pull/24449" target="_blank" rel="noreferrer">#24449</a>)</li><li>Update combo user function variable (<a href="https://github.com/qmk/qmk_firmware/pull/24467" target="_blank" rel="noreferrer">#24467</a>)</li><li><code>qmk find</code>: expand operator support (<a href="https://github.com/qmk/qmk_firmware/pull/24468" target="_blank" rel="noreferrer">#24468</a>)</li><li>Rename RGB and HSV structs (<a href="https://github.com/qmk/qmk_firmware/pull/24471" target="_blank" rel="noreferrer">#24471</a>)</li><li>RGBLight: Improve RGB Test animation (<a href="https://github.com/qmk/qmk_firmware/pull/24477" target="_blank" rel="noreferrer">#24477</a>)</li><li>Change default ARM hardware PWM WS2812 tick frequency to 800kHz (<a href="https://github.com/qmk/qmk_firmware/pull/24508" target="_blank" rel="noreferrer">#24508</a>)</li><li>Add pointing tests (<a href="https://github.com/qmk/qmk_firmware/pull/24513" target="_blank" rel="noreferrer">#24513</a>)</li><li>Joystick: add support for 8-way hat switch (<a href="https://github.com/qmk/qmk_firmware/pull/24515" target="_blank" rel="noreferrer">#24515</a>)</li><li>Refactor Riverflow matrix effect with runner (<a href="https://github.com/qmk/qmk_firmware/pull/24520" target="_blank" rel="noreferrer">#24520</a>)</li><li>Update Pixel Rain to respect LED range limits (<a href="https://github.com/qmk/qmk_firmware/pull/24532" target="_blank" rel="noreferrer">#24532</a>)</li><li>Update Jellybean Raindrops to respect LED range limits (<a href="https://github.com/qmk/qmk_firmware/pull/24534" target="_blank" rel="noreferrer">#24534</a>)</li><li>Refactor Breathing effect with runner (<a href="https://github.com/qmk/qmk_firmware/pull/24535" target="_blank" rel="noreferrer">#24535</a>)</li><li>Refactor LED Breathing effect with runner (<a href="https://github.com/qmk/qmk_firmware/pull/24540" target="_blank" rel="noreferrer">#24540</a>)</li><li>Expose rgb_matrix_update_pwm_buffers to be available in keymaps (<a href="https://github.com/qmk/qmk_firmware/pull/24573" target="_blank" rel="noreferrer">#24573</a>)</li><li>Simple Python script to show polling rate (<a href="https://github.com/qmk/qmk_firmware/pull/24622" target="_blank" rel="noreferrer">#24622</a>)</li><li>Add keycode PDF(layer) to set the default layer in EEPROM (<a href="https://github.com/qmk/qmk_firmware/pull/24630" target="_blank" rel="noreferrer">#24630</a>)</li><li>Provide method to save a single default layer in the full range of 0-31 (<a href="https://github.com/qmk/qmk_firmware/pull/24639" target="_blank" rel="noreferrer">#24639</a>)</li></ul><p>CLI:</p><ul><li>Refactor painter arguments to table instead of commandline (<a href="https://github.com/qmk/qmk_firmware/pull/24456" target="_blank" rel="noreferrer">#24456</a>)</li><li><code>qmk new-keyboard</code>: separate dev board and MCU selection (<a href="https://github.com/qmk/qmk_firmware/pull/24548" target="_blank" rel="noreferrer">#24548</a>)</li><li>Bump minimum required Python version (<a href="https://github.com/qmk/qmk_firmware/pull/24554" target="_blank" rel="noreferrer">#24554</a>)</li></ul><p>Submodule updates:</p><ul><li>Remove <code>arm_atsam</code> platform (<a href="https://github.com/qmk/qmk_firmware/pull/24337" target="_blank" rel="noreferrer">#24337</a>)</li></ul><p>Keyboards:</p><ul><li>add ergodox Community Layout for LAYOUT_ergodox keyboards (<a href="https://github.com/qmk/qmk_firmware/pull/22963" target="_blank" rel="noreferrer">#22963</a>)</li><li>Cutie Club Fidelity Layout Additions (<a href="https://github.com/qmk/qmk_firmware/pull/23838" target="_blank" rel="noreferrer">#23838</a>)</li><li>Add Ploopyco functions for host state control (<a href="https://github.com/qmk/qmk_firmware/pull/23953" target="_blank" rel="noreferrer">#23953</a>)</li><li>Corne rev4 (<a href="https://github.com/qmk/qmk_firmware/pull/24084" target="_blank" rel="noreferrer">#24084</a>)</li><li>Rename saevus to concreteflowers (<a href="https://github.com/qmk/qmk_firmware/pull/24249" target="_blank" rel="noreferrer">#24249</a>)</li><li>Remove <code>60_tsangan_hhkb</code> community layout (<a href="https://github.com/qmk/qmk_firmware/pull/24355" target="_blank" rel="noreferrer">#24355</a>)</li><li>add USART configuration to config.h for PS/2 mouse support (<a href="https://github.com/qmk/qmk_firmware/pull/24398" target="_blank" rel="noreferrer">#24398</a>)</li><li>Add SteelSeries Prime+ mouse (<a href="https://github.com/qmk/qmk_firmware/pull/24408" target="_blank" rel="noreferrer">#24408</a>)</li><li>Rename RGB/HSV structs: keyboard-level code (<a href="https://github.com/qmk/qmk_firmware/pull/24476" target="_blank" rel="noreferrer">#24476</a>)</li><li>xiudi/xd002: Remove broken oversized <code>multilayer_rgb</code> keymap (<a href="https://github.com/qmk/qmk_firmware/pull/24480" target="_blank" rel="noreferrer">#24480</a>)</li><li>Update keycodes for keyboards with RGB Matrix (<a href="https://github.com/qmk/qmk_firmware/pull/24484" target="_blank" rel="noreferrer">#24484</a>)</li><li>Cipulot Updates (<a href="https://github.com/qmk/qmk_firmware/pull/24539" target="_blank" rel="noreferrer">#24539</a>)</li><li>Update keymaps to use PDF keycode (<a href="https://github.com/qmk/qmk_firmware/pull/24633" target="_blank" rel="noreferrer">#24633</a>)</li><li>Remove keyboard use of eeconfig_read_default_layer (<a href="https://github.com/qmk/qmk_firmware/pull/24635" target="_blank" rel="noreferrer">#24635</a>)</li></ul><p>Keyboard fixes:</p><ul><li>Fix rendering of <code>keymap_config.no_gui</code> within <code>led_update_kb</code> (<a href="https://github.com/qmk/qmk_firmware/pull/24473" target="_blank" rel="noreferrer">#24473</a>)</li><li>Fix duplication of core <code>GU_TOGG</code> keycode (<a href="https://github.com/qmk/qmk_firmware/pull/24474" target="_blank" rel="noreferrer">#24474</a>)</li><li>keebio/nyquist: Remove invalid I2C config (<a href="https://github.com/qmk/qmk_firmware/pull/24479" target="_blank" rel="noreferrer">#24479</a>)</li><li>horrortroll/nyx/rev1: Fix compilation of custom RGB effect (<a href="https://github.com/qmk/qmk_firmware/pull/24481" target="_blank" rel="noreferrer">#24481</a>)</li></ul><p>Others:</p><ul><li>Improve consistency of syntax within <code>data/constants/keycodes</code> (<a href="https://github.com/qmk/qmk_firmware/pull/24528" target="_blank" rel="noreferrer">#24528</a>)</li></ul><p>Bugs:</p><ul><li>WS2812 API rework (<a href="https://github.com/qmk/qmk_firmware/pull/24364" target="_blank" rel="noreferrer">#24364</a>)</li><li>Backward compatibility for new RGB keycode handling (<a href="https://github.com/qmk/qmk_firmware/pull/24490" target="_blank" rel="noreferrer">#24490</a>)</li><li>Fix compiliation issues with OS Detection (<a href="https://github.com/qmk/qmk_firmware/pull/24502" target="_blank" rel="noreferrer">#24502</a>)</li><li>Revert removal of <code>QK_OUTPUT_AUTO</code>, fixup docs to reflect. (<a href="https://github.com/qmk/qmk_firmware/pull/24593" target="_blank" rel="noreferrer">#24593</a>)</li><li>Review fixes for layer lock feature (<a href="https://github.com/qmk/qmk_firmware/pull/24627" target="_blank" rel="noreferrer">#24627</a>)</li></ul>', 31);
const _hoisted_32 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_32);
}
const _20241124 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20241124 as default
};
