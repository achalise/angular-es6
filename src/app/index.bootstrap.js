'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// main App module
import "./index.module";

import "../assets/styles/sass/index.scss";
import "../assets/styles/css/bootstrap.css";
import "../assets/styles/css/awesome-bootstrap-checkbox.css";
import "../assets/styles/css/font-awesome.css";

angular.element(document).ready(function () {
  angular.bootstrap(document, ['es6Sample'], {
    strictDi: true
  });
});
