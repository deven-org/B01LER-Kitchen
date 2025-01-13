import {
  BlrButtonIcon,
  BlrButtonText,
  BlrCheckbox,
  BlrInputFieldNumber,
  BlrInputFieldText,
  BlrRadio,
  BlrSelect,
  BlrTabBar,
  BlrTextarea,
  BlrToggleSwitch,
  BlrRadioGroup,
} from '@boiler/ui-library';

async function hydrate() {
  // Start fetching the Lit hydration support module (note the absence
  // of "await" -- we don't want to block yet).
  const litHydrateSupportInstalled = import('@lit-labs/ssr-client/lit-element-hydrate-support.js');

  if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
    // Fetch the declarative shadow DOM polyfill.
    const { hydrateShadowRoots } = await import('@webcomponents/template-shadowroot/template-shadowroot.js');

    // Apply the polyfill. This is a one-shot operation, so it is important
    // it happens after all HTML has been parsed.
    hydrateShadowRoots(document.body);
  }

  await litHydrateSupportInstalled;

  // Import component modules causing them to become interactive
  await import('@boiler/ui-library');
}

function init() {
  const toggleLoadingButton = document.querySelector('#toggleLoadingState')!;
  const toggleDisabledState = document.querySelector('#toggleDisabledState')!;
  const logsContainer = document.querySelector('#logs')!;

  const blrButtonText = document.getElementsByTagName('blr-button-text')[0] as BlrButtonText;
  const blrButtonIcon = document.getElementsByTagName('blr-button-icon')[0] as BlrButtonIcon;
  const blrCheckbox = document.getElementsByTagName('blr-checkbox')[0] as BlrCheckbox;
  const blrSelect = document.getElementsByTagName('blr-select')[0] as BlrSelect;
  const blrInputFieldText = document.getElementsByTagName('blr-input-field-text')[0] as BlrInputFieldText;
  const blrInputFieldNumber = document.getElementsByTagName('blr-input-field-number')[0] as BlrInputFieldNumber;
  const blrTextArea = document.getElementsByTagName('blr-textarea')[0] as BlrTextarea;
  const blrRadio = document.getElementsByTagName('blr-radio')[0] as BlrRadio;
  const blrRadioGroup = document.getElementsByTagName('blr-radio-group')[0] as BlrRadioGroup;
  const blrToggleSwitch = document.getElementsByTagName('blr-label-toggleswitch')[0] as BlrToggleSwitch;
  const blrTabBar = document.getElementsByTagName('blr-tab-bar')[0] as BlrTabBar;

  const addLog = (log: string) => {
    logsContainer.innerHTML = logsContainer.innerHTML + log + '<br>';

    logsContainer.scrollTo(0, logsContainer.scrollHeight);
  };

  toggleLoadingButton.addEventListener('click', () => {
    const currentState = blrButtonText.getAttribute('loading');

    if (currentState) {
      blrButtonText.removeAttribute('loading');
      addLog('Set blr-button-text loading state to false');
    } else {
      blrButtonText.setAttribute('loading', 'true');
      addLog('Set blr-button-text loading state to true');
    }
  });

  toggleDisabledState.addEventListener('click', () => {
    const currentState = blrButtonText.getAttribute('disabled');

    if (currentState) {
      blrButtonText.removeAttribute('disabled');
      addLog('Set blr-button-text disabled state to false');
    } else {
      blrButtonText.setAttribute('disabled', 'true');
      addLog('Set blr-button-text loading state to true');
    }
  });

  blrButtonText.addEventListener('blrClick', () => {
    addLog('blr-button-text clicked');
  });

  blrButtonText.addEventListener('blrFocus', () => {
    addLog('blr-button-text focused');
  });

  blrButtonText.addEventListener('blrBlur', () => {
    addLog('blr-button-text blurred');
  });

  blrButtonIcon.addEventListener('blrClick', () => {
    addLog('blr-button-icon clicked');
  });

  blrButtonIcon.addEventListener('blrFocus', () => {
    addLog('blr-button-icon focused');
  });

  blrButtonIcon.addEventListener('blrBlur', () => {
    addLog('blr-button-icon blurred');
  });

  blrCheckbox.addEventListener('blrCheckedChange', (e) => {
    addLog('blr-checkbox changed: ' + e.detail.checkedState);
  });

  blrCheckbox.addEventListener('blrFocus', () => {
    addLog('blr-checkbox focused');
  });

  blrCheckbox.addEventListener('blrBlur', () => {
    addLog('blr-checkbox blurred');
  });

  blrSelect.addEventListener('blrSelectedValueChange', (e) => {
    addLog('blr-select changed: ' + e.detail.selectedValue);
  });

  blrSelect.addEventListener('blrFocus', () => {
    addLog('blr-select focused');
  });

  blrSelect.addEventListener('blrBlur', () => {
    addLog('blr-select blurred');
  });

  blrInputFieldText.addEventListener('blrFocus', () => {
    addLog('blr-text-input focused');
  });

  blrInputFieldText.addEventListener('blrBlur', () => {
    addLog('blr-input-field-text blurred');
  });

  blrInputFieldText.addEventListener('blrSelect', () => {
    addLog('blr-input-field-text selected');
  });

  blrInputFieldText.addEventListener('blrTextValueChange', (e) => {
    addLog('blr-input-field-text changed: ' + e.detail.inputValue);
  });

  blrInputFieldNumber.addEventListener('blrFocus', () => {
    addLog('blr-input-field-number focused');
  });

  blrInputFieldNumber.addEventListener('blrBlur', () => {
    addLog('blr-input-field-number blurred');
  });

  blrInputFieldNumber.addEventListener('blrSelect', () => {
    addLog('blr-input-field-number selected');
  });

  blrInputFieldNumber.addEventListener('blrNumberValueChange', (e) => {
    addLog('blr-input-field-number value changed: ' + e.detail.inputValue);
  });

  blrTextArea.addEventListener('blrFocus', () => {
    addLog('blr-textarea focused');
  });

  blrTextArea.addEventListener('blrBlur', () => {
    addLog('blr-textarea blurred');
  });

  blrTextArea.addEventListener('blrTextValueChange', (e) => {
    addLog('blr-textarea changed: ' + e.detail.inputValue);
  });

  blrTextArea.addEventListener('blrSelect', () => {
    addLog('blr-textarea selected');
  });

  blrRadio.addEventListener('blrFocus', () => {
    addLog('blr-radio focused');
  });

  blrRadio.addEventListener('blrBlur', () => {
    addLog('blr-radio blurred');
  });

  blrRadio.addEventListener('blrSelectedValueChange', (e) => {
    addLog('blr-radio changed: ' + e.detail.selectedValue);
  });

  blrRadioGroup.addEventListener('blrSelectedValueChange', (e) => {
    addLog('blr-radio value changed blrRadioGroupValueChange: ' + e.detail.selectedValue);
  });

  blrToggleSwitch.addEventListener('blrFocus', () => {
    addLog('blr-toggleswitch focused');
  });

  blrToggleSwitch.addEventListener('blrBlur', () => {
    addLog('blr-toggleswitch blurred');
  });

  blrToggleSwitch.addEventListener('blrCheckedChange', (e) => {
    addLog('blr-toggleswitch changed: ' + e.detail.checkedState);
  });

  blrTabBar.addEventListener('blrChange', (e) => {
    addLog('blr-tab-bar changed: ' + e.detail.changedValue);
  });
}

await hydrate();
init();
