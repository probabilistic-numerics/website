---
layout: page
permalink: /research/
title: Research
description: Selected publications in all areas of probabilistic numerics, in reversed chronological order. Select topics to restrict the list.
nav: true
weight: 20
---

<div class="tag-filter">
  <button type="button" class="tag-chip" data-tag="">All</button>
  {% for t in site.data.research_tags %}
  <button type="button" class="tag-chip" data-tag="{{ t.id }}">{{ t.label }}</button>
  {% endfor %}
  <span class="tag-status"></span>
</div>
<div class="publications">
{% bibliography --file papers %}
</div>

<script>
(function () {
  var chips = document.querySelectorAll('.tag-chip');
  var rows = document.querySelectorAll('.publications .row[data-tags]');
  var lists = document.querySelectorAll('.publications ol.bibliography');
  var status = document.querySelector('.tag-status');
  var selected = new Set();

  var rowTags = new Map();
  rows.forEach(function (row) {
    rowTags.set(row, row.dataset.tags.split(',').map(function (t) { return t.trim(); }));
  });

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var visible = selected.size === 0 || rowTags.get(row).some(function (t) { return selected.has(t); });
      // each row sits in its own <li>
      row.closest('li').hidden = !visible;
      if (visible) shown++;
    });
    // hide year headings whose list is empty
    lists.forEach(function (ol) {
      var empty = !ol.querySelector('li:not([hidden])');
      ol.hidden = empty;
      var heading = ol.previousElementSibling;
      if (heading && /^H\d$/.test(heading.tagName)) heading.hidden = empty;
    });
    chips.forEach(function (chip) {
      var tag = chip.dataset.tag;
      var active = tag ? selected.has(tag) : selected.size === 0;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', active);
    });
    status.textContent = selected.size
      ? shown + ' of ' + rows.length + ' papers'
      : rows.length + ' papers';

    var url = new URL(window.location);
    if (selected.size) url.searchParams.set('tags', Array.from(selected).join(','));
    else url.searchParams.delete('tags');
    history.replaceState(null, '', url);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var tag = chip.dataset.tag;
      if (!tag) selected.clear();
      else if (selected.has(tag)) selected.delete(tag);
      else selected.add(tag);
      apply();
    });
  });

  // tag links on individual papers select only that tag
  document.querySelectorAll('.publications .paper-tag').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      selected = new Set([link.dataset.tag]);
      apply();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  var initial = new URLSearchParams(window.location.search).get('tags');
  if (initial) initial.split(',').forEach(function (t) { if (t.trim()) selected.add(t.trim()); });
  apply();
})();
</script>
