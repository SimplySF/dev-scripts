/*
 * Copyright (c) 2024, Clay Chipps; Copyright (c) 2024, Salesforce.com, Inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const { accessSync } = require('fs');

module.exports = (path) => {
  try {
    accessSync(path);
    return true;
  } catch (err) {
    /* do nothing */
  }
  return false;
};
