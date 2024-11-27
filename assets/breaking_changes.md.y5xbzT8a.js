import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.B9AX-CPi.js";
const __pageData = JSON.parse('{"title":"Breaking Changes","description":"","frontmatter":{},"headers":[],"relativePath":"breaking_changes.md","filePath":"breaking_changes.md","lastUpdated":null}');
const _sfc_main = { name: "breaking_changes.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="breaking-changes" tabindex="-1">Breaking Changes <a class="header-anchor" href="#breaking-changes" aria-label="Permalink to &quot;Breaking Changes&quot;">​</a></h1><p>This document describes QMK&#39;s Breaking Change process. A Breaking Change is any change which modifies how QMK behaves in a way that in incompatible or potentially dangerous. We limit these changes so that users can have confidence that updating their QMK tree will not break their keymaps.</p><p>This also includes any keyboard moves within the repository.</p><p>The breaking change period is when we will merge PRs that change QMK in dangerous or unexpected ways. There is a built-in period of testing so we are confident that any problems caused are rare or unable to be predicted.</p><p>Practically, this means QMK merges the <code>develop</code> branch into the <code>master</code> branch on a 3-month cadence.</p><h2 id="what-has-been-included-in-past-breaking-changes" tabindex="-1">What has been included in past Breaking Changes? <a class="header-anchor" href="#what-has-been-included-in-past-breaking-changes" aria-label="Permalink to &quot;What has been included in past Breaking Changes?&quot;">​</a></h2><ul><li><a href="./ChangeLog/20241124">2024 Nov 24</a></li><li><a href="./ChangeLog/20240825">2024 Aug 25</a></li><li><a href="./ChangeLog/20240526">2024 May 26</a></li><li><a href="./breaking_changes_history">Older Breaking Changes</a></li></ul><h2 id="when-is-the-next-breaking-change" tabindex="-1">When is the next Breaking Change? <a class="header-anchor" href="#when-is-the-next-breaking-change" aria-label="Permalink to &quot;When is the next Breaking Change?&quot;">​</a></h2><p>The next Breaking Change is scheduled for February 23, 2025.</p><h3 id="important-dates" tabindex="-1">Important Dates <a class="header-anchor" href="#important-dates" aria-label="Permalink to &quot;Important Dates&quot;">​</a></h3><ul><li>2024 Nov 24 - <code>develop</code> is tagged with a new release version. Each push to <code>master</code> is subsequently merged to <code>develop</code> by GitHub actions.</li><li>2025 Jan 26 - <code>develop</code> closed to new PRs.</li><li>2025 Jan 26 - Call for testers.</li><li>2025 Feb 9 - Last day for merges -- after this point <code>develop</code> is locked for testing and accepts only bugfixes</li><li>2025 Feb 16 - <code>develop</code> is locked, only critical bugfix PRs merged.</li><li>2024 Nov 21 - <code>master</code> is locked, no PRs merged.</li><li>2025 Feb 23 - Merge <code>develop</code> to <code>master</code>.</li><li>2025 Feb 23 - <code>master</code> is unlocked. PRs can be merged again.</li></ul><h2 id="what-changes-will-be-included" tabindex="-1">What changes will be included? <a class="header-anchor" href="#what-changes-will-be-included" aria-label="Permalink to &quot;What changes will be included?&quot;">​</a></h2><p>To see a list of breaking changes merge candidates you can look at the <a href="https://github.com/qmk/qmk_firmware/pulls?q=is%3Aopen+label%3Acore+is%3Apr" target="_blank" rel="noreferrer"><code>core</code> label</a>. This label is applied whenever a PR is raised or changed, but only if the PR includes changes to core areas of QMK Firmware. A PR with that label applied is not guaranteed to be merged in the current cycle. New changes might be added between now and when <code>develop</code> is closed, and it is generally the responsibility of the submitter to handle conflicts. There is also another label used by QMK Collaborators -- <code>breaking_change_YYYYqN</code> -- which signifies to maintainers that it is a strong candidate for inclusion, and should be prioritized for review.</p><p>If you want your breaking change to be included in this round you need to create a PR and have it accepted by QMK Collaborators before <code>develop</code> closes. After <code>develop</code> closes, new submissions will be deferred to the next breaking changes cycle.</p><p>The simpler your PR is, the easier it is for maintainers to review, thus a higher likelihood of a faster merge. Large PRs tend to require a lot of attention, refactoring, and back-and-forth with subsequent reviews -- with other PRs getting merged in the meantime larger unmerged PRs are far more likely to be susceptible to conflicts.</p><p>Criteria for acceptance:</p><ul><li>The PR is complete and ready to merge</li><li>GitHub checks for the PR are green whenever possible <ul><li>A &quot;red&quot; check may be disregarded by maintainers if the items flagged are unrelated to the change proposed in the PR <ul><li>Modifications to existing files should not need to add license headers to pass lint, for instance.</li><li>If it&#39;s not directly related to your PR&#39;s functionality, prefer avoiding making a change.</li></ul></li></ul></li></ul><p>Strongly suggested:</p><ul><li>The PR has a ChangeLog file describing the changes under <code>&lt;qmk_firmware&gt;/docs/Changelog/20241124</code>. <ul><li>This should be in Markdown format, with a name in the format <code>PR12345.md</code>, substituting the digits for your PRs ID.</li><li>One strong recommendation that the ChangeLog document matches the PR description on GitHub, so as to ensure traceability.</li></ul></li></ul><h2 id="checklists" tabindex="-1">Checklists <a class="header-anchor" href="#checklists" aria-label="Permalink to &quot;Checklists&quot;">​</a></h2><p>This section documents various processes we use when running the Breaking Changes process.</p><h3 id="_4-weeks-before-merge" tabindex="-1">4 Weeks Before Merge <a class="header-anchor" href="#_4-weeks-before-merge" aria-label="Permalink to &quot;4 Weeks Before Merge&quot;">​</a></h3><ul><li><code>develop</code> is now closed to new PRs, only fixes for current PRs may be merged</li><li>Post call for testers: message <code>@Breaking Changes Updates</code> on <code>#qmk_firmware</code> in Discord: <ul><li><code>@Breaking Changes Updates -- Hey folks, last day for functional PRs to be raised against qmk_firmware for this breaking changes cycle is today.</code></li></ul></li></ul><h3 id="_2-weeks-before-merge" tabindex="-1">2 Weeks Before Merge <a class="header-anchor" href="#_2-weeks-before-merge" aria-label="Permalink to &quot;2 Weeks Before Merge&quot;">​</a></h3><ul><li><code>develop</code> is now closed to existing PR merges, only bugfixes for previous merges may be included</li><li>Post call for testers: message <code>@Breaking Changes Updates</code> on <code>#qmk_firmware</code> in Discord. <ul><li><code>@Breaking Changes Updates -- Hey folks, last day for functional PRs to be merged into qmk_firmware for this breaking changes cycle is today. After that, we&#39;re handling bugfixes only.</code></li></ul></li></ul><h3 id="_1-week-before-merge" tabindex="-1">1 Week Before Merge <a class="header-anchor" href="#_1-week-before-merge" aria-label="Permalink to &quot;1 Week Before Merge&quot;">​</a></h3><ul><li><code>develop</code> is now closed to PR merges, only critical bugfixes may be included</li><li>Announce that master will be closed from <code>&lt;2 Days Before&gt;</code> to <code>&lt;Day of Merge&gt;</code> -- message <code>@Breaking Changes Updates</code> on <code>#qmk_firmware</code> in Discord: <ul><li><code>@Breaking Changes Updates -- Hey folks, last day for functional PRs to be merged into qmk_firmware for this breaking changes cycle is today. After that, we&#39;re handling bugfixes only.</code></li></ul></li></ul><h3 id="_2-days-before-merge" tabindex="-1">2 Days Before Merge <a class="header-anchor" href="#_2-days-before-merge" aria-label="Permalink to &quot;2 Days Before Merge&quot;">​</a></h3><ul><li><code>master</code> is now closed to PR merges</li><li>Announce that master is closed for 2 days <ul><li><code>@Breaking Changes Updates -- Hey folks, the master branch of qmk_firmware is now locked for the next couple of days while we prepare to merge the newest batch of changes from develop.</code></li></ul></li></ul><h3 id="day-of-merge" tabindex="-1">Day Of Merge <a class="header-anchor" href="#day-of-merge" aria-label="Permalink to &quot;Day Of Merge&quot;">​</a></h3><ul><li><code>qmk_firmware</code> git commands <ul><li><code>git checkout develop</code></li><li><code>git pull --ff-only</code></li><li>Edit <code>readme.md</code><ul><li>Remove the notes about <code>develop</code></li></ul></li><li>Roll up the ChangeLog into one file.</li><li><code>git commit -m &#39;Merge point for &lt;DATE&gt; Breaking Change&#39;</code></li><li><code>git push upstream develop</code></li></ul></li><li>GitHub Actions <ul><li>Create a PR for <code>develop</code></li><li><strong>Turn off &#39;Automatically delete head branches&#39; for the repository</strong> -- confirm with @qmk/directors that it is done before continuing</li></ul></li><li><code>qmk_firmware</code> git commands <ul><li><code>git checkout master</code></li><li><code>git pull --ff-only</code></li><li><code>git merge --no-ff develop</code></li><li><code>git tag &lt;next_version&gt;</code> # Prevent the breakpoint tag from confusing version incrementing</li><li><code>git push upstream &lt;next_version&gt;</code></li><li><code>git push upstream master</code></li></ul></li></ul><h2 id="post-merge-operations" tabindex="-1">Post-merge operations <a class="header-anchor" href="#post-merge-operations" aria-label="Permalink to &quot;Post-merge operations&quot;">​</a></h2><h3 id="updating-the-develop-branch" tabindex="-1">Updating the <code>develop</code> branch <a class="header-anchor" href="#updating-the-develop-branch" aria-label="Permalink to &quot;Updating the `develop` branch&quot;">​</a></h3><p>This happens immediately after the previous <code>develop</code> branch is merged to <code>master</code>.</p><ul><li><p><code>qmk_firmware</code> git commands</p><ul><li><code>git checkout master</code></li><li><code>git pull --ff-only</code></li><li><code>git checkout develop</code></li><li><code>git pull --ff-only</code></li><li><code>git merge --no-ff master</code></li><li>Edit <code>readme.md</code><ul><li>Add a big notice at the top that this is a testing branch. See previous revisions of the <code>develop</code> branch.</li><li>Include a link to this document</li></ul></li><li><code>git commit -m &#39;Branch point for &lt;DATE&gt; Breaking Change&#39;</code></li><li><code>git tag breakpoint_&lt;YYYY&gt;_&lt;MM&gt;_&lt;DD&gt;</code></li><li><code>git push upstream breakpoint_&lt;YYYY&gt;_&lt;MM&gt;_&lt;DD&gt;</code></li><li><code>git push upstream develop</code></li></ul></li><li><p>All submodules under <code>lib</code> now need to be checked against their QMK-based forks:</p><ul><li><code>git submodule foreach git log -n1</code></li><li>Validate each submodule SHA1 matches the qmk fork, e.g. for ChibiOS: <ul><li>Go to <a href="https://github.com/qmk/ChibiOS" target="_blank" rel="noreferrer">qmk/ChibiOS</a></li><li>Compare the commit hash in the above output to the commit hash in the repository</li><li>If there&#39;s a mismatch, that repository needs to have its <code>qmk-master</code> branch updated to match (otherwise Configurator won&#39;t work): <ul><li><code>cd lib/chibios</code></li><li><code>git fetch --all</code></li><li><code>git checkout qmk-master</code></li><li><code>git reset --hard &lt;commit hash&gt;</code></li><li><code>git push origin qmk-master --force-with-lease</code></li></ul></li></ul></li></ul></li><li><p>Announce that both <code>master</code> and <code>develop</code> are now unlocked -- message <code>@Breaking Changes Updates</code> on <code>#qmk_firmware</code> in Discord:</p><ul><li><code>@Breaking Changes Updates -- Hey folks, develop has now been merged into master -- newest batch of changes are now available for everyone to use!</code></li></ul></li><li><p>(Optional) <a href="./chibios_upgrade_instructions">update ChibiOS + ChibiOS-Contrib on <code>develop</code></a></p></li></ul><h3 id="set-up-discord-events-for-the-next-cycle" tabindex="-1">Set up Discord events for the next cycle <a class="header-anchor" href="#set-up-discord-events-for-the-next-cycle" aria-label="Permalink to &quot;Set up Discord events for the next cycle&quot;">​</a></h3><ul><li>Update this file with the new dates: <code>docs/breaking_changes.md</code></li><li>Create Events on the QMK Discord - &quot;Somewhere Else&quot; =&gt; &quot;GitHub&quot;: <ul><li>Event #1: <table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Topic</td><td>Last <code>develop</code> functionality PRs to be raised</td></tr><tr><td>Start Date</td><td>((5 weeks before merge)), 12:00am</td></tr><tr><td>End Date</td><td>((4 weeks before merge)), 12:00am</td></tr><tr><td>Description</td><td>This is the last window for functional PRs to be raised against <code>develop</code> for the current breaking changes cycle. After ((4 weeks before merge)), any new PRs targeting <code>develop</code> will be deferred to the next cycle.</td></tr></tbody></table></li><li>Event #2: <table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Topic</td><td>Last <code>develop</code> functionality PRs to be merged</td></tr><tr><td>Start Date</td><td>((4 weeks before merge)), 12:00am</td></tr><tr><td>End Date</td><td>((2 weeks before merge)), 12:00am</td></tr><tr><td>Description</td><td>This is the last window for functional PRs to be merged into <code>develop</code> for the current breaking changes cycle. After ((2 weeks before merge)), only bugfix PRs targeting <code>develop</code> will be considered for merge.</td></tr></tbody></table></li><li>Event #3: <table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Topic</td><td><code>develop</code> closed for merges</td></tr><tr><td>Start Date</td><td>((2 weeks before merge)), 12:00am</td></tr><tr><td>End Date</td><td>((day of merge)), 12:00am</td></tr><tr><td>Description</td><td>This is the deadline for functionality bugfix PRs to be merged into <code>develop</code> for the current breaking changes cycle. After ((1 week before merge)), only critical bugfix PRs targeting <code>develop</code> will be considered for merge.</td></tr></tbody></table></li><li>Event #4: <table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Topic</td><td><code>master</code> closed for merges</td></tr><tr><td>Start Date</td><td>((2 days before merge)), 12:00am</td></tr><tr><td>End Date</td><td>((day of merge)), 12:00am</td></tr><tr><td>Description</td><td>This is the period that no PRs are to be merged to <code>master</code>, so that the merge of <code>develop</code> into <code>master</code> is stable.</td></tr></tbody></table></li><li>Event #5: <table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Topic</td><td><code>develop</code> merges to <code>master</code></td></tr><tr><td>Start Date</td><td>((day of merge)), 12:00am</td></tr><tr><td>End Date</td><td>((day of merge)), 11:45pm</td></tr><tr><td>Description</td><td>At some point, QMK will merge <code>develop</code> into <code>master</code> and everyone will be able to reap the benefits of the newest batch of functionality.</td></tr></tbody></table></li></ul></li></ul>', 37);
const _hoisted_38 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_38);
}
const breaking_changes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  breaking_changes as default
};
