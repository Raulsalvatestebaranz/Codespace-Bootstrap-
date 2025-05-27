const box = document.getElementById('box');
const controls = {
  display: document.getElementById('display'),
  dir: document.getElementById('dir'),
  wrap: document.getElementById('wrap'),
  justify: document.getElementById('justify'),
  align: document.getElementById('align'),
  content: document.getElementById('content'),
  gap: document.getElementById('gap'),
  width: document.getElementById('box-width'),
  height: document.getElementById('box-height'),
  place: document.getElementById('place'),
  resetBtn: document.getElementById('resetBtn'),
};

// Apply the current settings to the #box container
function applyStyles() {
  box.style.display = controls.display.value;
  box.style.flexDirection = controls.dir.value;
  box.style.flexWrap = controls.wrap.value;
  box.style.justifyContent = controls.justify.value;
  box.style.alignItems = controls.align.value;
  box.style.alignContent = controls.content.value;
  box.style.gap = controls.gap.value + 'px';
  box.style.width = controls.width.value.endsWith('%') ? controls.width.value : controls.width.value + 'px';
  box.style.height = controls.height.value === 'auto' ? 'auto' : controls.height.value + 'px';

  if (controls.place.value) {
    box.style.placeContent = controls.place.value;
  } else {
    box.style.placeContent = '';
  }
}

// Attach event listeners to all dropdowns
Object.values(controls).forEach(ctrl => {
  if (ctrl.tagName === 'SELECT' || ctrl.tagName === 'INPUT') {
    ctrl.addEventListener('change', applyStyles);
  }
});

// Reset button restores default values
controls.resetBtn.addEventListener('click', () => {
  controls.display.value = 'flex';
  controls.dir.value = 'row';
  controls.wrap.value = 'wrap';
  controls.justify.value = 'center';
  controls.align.value = 'stretch';
  controls.content.value = 'stretch';
  controls.gap.value = '16';
  controls.width.value = '600';
  controls.height.value = '300';
  controls.place.value = '';
  applyStyles();
});

// Initial setup
applyStyles();
