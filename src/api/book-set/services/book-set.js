'use strict';

/**
 * book-set service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-set.book-set');
