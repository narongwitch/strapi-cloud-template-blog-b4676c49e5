'use strict';

/**
 * original-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::original-book.original-book');
