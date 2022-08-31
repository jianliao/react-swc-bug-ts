import React from "react";
import { createComponent } from "@lit-labs/react";
import '@spectrum-web-components/radio/sp-radio.js';
import '@spectrum-web-components/radio/sp-radio-group.js';
import { Radio, RadioGroup } from '@spectrum-web-components/radio';

export const SpRadio = createComponent(React, 'sp-radio', Radio, { change: 'change' }, 'SpRadio');
export const SpRadioGroup = createComponent(React, 'sp-radio-group', RadioGroup, {}, 'SpRadioGroup');
