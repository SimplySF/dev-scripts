/*
 * Copyright (c) 2024, Clay Chipps; Copyright (c) 2024, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint-disable max-len */
module.exports = {
  extends: ['eslint-config-salesforce'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['eslint-plugin-header'],
  root: true,
  rules: {
    'header/header': [
      2,
      'block',
      [
        '',
        {
          pattern: ' \\* Copyright \\(c\\) \\d{4}, Clay Chipps; Copyright \\(c\\) \\d{4}, Salesforce.com, Inc.',
          template: ' * Copyright (c) 2024, Clay Chipps; Copyright (c) 2024, Salesforce.com, Inc.',
        },
        ' * All rights reserved.',
        ' * Licensed under the BSD 3-Clause license.',
        ' * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause',
        ' ',
      ],
    ],
  },
};
