import angular from 'angular';

require('./common/core/_loader.js');
require('./common/layout/app-layout/_loader.js');

require('./main/home/_loader.js');
require('./sections/movies/_loader.js');

/*
 * The role of the mlApp module is to wire up other mostly independent modules. It
 * should not introduce any services, values, or constants of its own and should
 * only configure other modules.
 *
 */

angular.module('mlApp', [
  /*
   * Common Modules
   * ==============
   *
   * Common modules is shared code used by all features and sections.
   *
   */
  'mlApp.core',             // Configures angular, third-party, and utility modules
  'mlApp.appLayout',

  /*
   * Main
   * ====
   *
   * These are modules to get a minimally working app up and running.
   *
   */
  'mlApp.home',             // Homepage

  /*
   * Features
   * ========
   *
   * A "feature" could be considered a part of a "page". A feature module likely
   * does not contain any routes. These modules should not have dependencies to
   * other features or sections. (Ideally features should be independent. Removing
   * a feature should not break the application.)
   *
   */
  // note for this app there are none, but they'd be here had there been some!

  /*
   * Sections
   * ========
   *
   * A "section" could be considered a set of "pages". A section module is
   * navigable and defines routes. It might also introduce its own features
   * (e.g. a calendar page and calendar widgets). These should not have
   * dependencies to other features or sections. (Ideally removing a section
   * should not break the application.)
   *
   */
  // 'mlApp.goals',            // Goals
  // 'mlApp.reporting'
  'mlApp.movies'
])
.config(configLogProvider);

////////// Functions //////////

/* @ngInject */
function configLogProvider($logProvider) {
  if ($logProvider.debugEnabled) {
    $logProvider.debugEnabled(true);
  }
}
