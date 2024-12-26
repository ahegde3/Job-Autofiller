export const xpaths = {
  TEXT_INPUT: [
    `.//div`,
    `[starts-with(@data-automation-id, 'formField-')]`,
    `[.//input[@type='text']]`,
    `[not(.//*[@aria-haspopup])]`,
  ].join(''),
  MULTI_CHECKBOX: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[count(.//input[@type='checkbox']) > 1]",
  ].join(''),
  MULTI_FILE_UPLOAD: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[.//div[@data-automation-id='file-upload-drop-zone']]",
  ].join(''),
  TEXT_AREA: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    '[.//textarea]',
  ].join(''),
  YEAR: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[.//input[@aria-label='Year']]",
    "[not(.//input[@aria-label='Month'])]",
  ].join(''),
  MONTH_DAY_YEAR: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[.//input[@aria-label='Month']]",
    "[.//input[@aria-label='Day']]",
    "[.//input[@aria-label='Year']]",
  ].join(''),
  PASSWORD_INPUT: [
    `.//div`,
    `[starts-with(@data-automation-id, 'formField-')]`,
    `[.//input[@type='password']]`,
    `[not(.//*[@aria-haspopup])]`,
  ].join(''),
  SIMPLE_DROPDOWN: [
    `.//div`,
    `[starts-with(@data-automation-id, 'formField-')]`,
    `[.//button[@aria-haspopup='listbox']] `,
  ].join(''),
  SEARCHABLE_SINGLE_DROPDOWN: [
    './/div',
    '[',
    "(@data-automation-id='formField-sourcePrompt') or ",
    "(@data-automation-id='formField-source') or ",
    "(@data-automation-id='formField-country-phone-code') or ",
    "(@data-automation-id='formField-field-of-study') or ",
    "(@data-automation-id='formField-certification') or ",
    "(@data-automation-id='formField-schoolItem')",
    ']',
    "[.//div[@data-automation-id='multiSelectContainer']]",
  ].join(''),
  SINGLE_CHECKBOX: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[count(.//input[@type='checkbox']) = 1]",
  ].join(''),
  MONTH_YEAR: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[.//input[@aria-label='Month']]",
    "[.//input[@aria-label='Year']]",
    "[not(.//input[@aria-label='Day'])]",
  ].join(''),
  BOOLEAN_RADIO: [
    './/div',
    "[starts-with(@data-automation-id, 'formField-')]",
    "[count(.//input[@type='radio']) = 2]",
  ].join(''),
}