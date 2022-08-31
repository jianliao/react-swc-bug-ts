import React from 'react';
import { createComponent } from "@lit-labs/react";
import '@spectrum-web-components/theme/sp-theme.js';
import { Theme } from '@spectrum-web-components/theme';
import '@spectrum-web-components/theme/src/themes.js';

export const SpTheme = createComponent(React, 'sp-theme', Theme, {}, 'SpTheme');
