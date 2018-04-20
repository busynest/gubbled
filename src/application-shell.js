import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/helpers/helpers.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/font-roboto/roboto.js';
import './shared-styles.js';
import './developer-tools.js';
import './404.js';
import './website-development.js';
import './mozilla-developers.js';
import './polymer-project.js';
import './send-feedback.js';
import './google-developers.js';
import './log-in.js';
import { importHref } from '@polymer/polymer/lib/utils/import-href.js';

/* POLYMER */
/*  Header LAYOUT */
/*  Drawer LAYOUT */
/*  Layout Helpers */
/*  Drawer */
/* HEADER */
/* TOOLBAR */
/* APP LOCATION */
/* APP ROUTE */
/* PAGES */
/* Iroon Icons */
/* Iron Selector */
/* Paper Item */
/* Paper Input */
/* Paper Card */
/* Icon Button */
/* Paper Button */
/* Font */
/*<link rel="import" href="../bower_components/iron-resizable-behavior/iron-resizable-behavior.html">*/
/*
<link rel="import" href="../bower_components/polymerfire/firebase-app.html">
<link rel="import" href="../bower_components/polymerfire/firebase-auth.html">
<link rel="import" href="../bower_components/polymerfire/firebase-query.html">
*/
/* Custom Elements */
export class ApplicationShell extends PolymerElement {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        --app-primary-color: #37474f;
        --app-secondary-color: black;
      }

      app-drawer {
        overflow-x: hidden;
        overflow-y: auto;
        top: 0px;
        bottom: 0px;
        --app-drawer-content-container: {
          /* background: linear-gradient(to right,#19212b 85%, white); /* #039be5 #19212b;  #262f3d */
          padding: 0px;
          height: 100%;
        };
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      @media screen and (min-width: 580px) {
        .advert {
          width: 80%;
        }
      }
      
      app-header {
        background: var(--paper-blue-grey-900); /* var(--app-primary-color) */
      }

      iron-pages {
        width: 100%;
        height: 100%;
      }

      paper-icon-item {
        border-bottom: 1px solid rgba(255,255,255,0.12);
        padding: 10px;
        color: black;
      }

      paper-button {
        width: 90%;
        margin: auto;
        background-color: white;
      }

      h1{
        color: var(--paper-blue-grey-100);
      }

      main {
        padding: 15px;
      }
    </style>

    <app-location route="{{route}}"></app-location>
    <app-route route="{{route}}" pattern="[[rootPattern]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

    <!-- App Drawer Layout -->  
    <app-drawer-layout fullbleed="">

      <!-- APP DRAWER -->
      <app-drawer id="drawer" slot="drawer">

        <app-header fixed="" shadow="">
          <app-toolbar>
           <a name="log-in" href="log-in" tabindex="-1">
            <paper-button raised="" tabindex="-1">Log In</paper-button>
          </a>
          <span class="flex" style="flex:1;"></span>
          <a name="log-in" href="log-in" tabindex="-1">
            <paper-button raised="" tabindex="-1">Sign Up</paper-button>
          </a>
          </app-toolbar>
        </app-header>

        <div class="drawer-contents">

        <!-- TOPICS & FEATURES -->
        <iron-selector class="magicTabsOne" role="navigation" selected="[[page]]" attr-for-selected="name">

          <a name="polymer-project" href="polymer-project">
            <paper-icon-item>
              <iron-icon icon="apps" slot="item-icon"></iron-icon>Polymer Application
            </paper-icon-item>
          </a>

          <a name="website-development" href="website-development">
            <paper-icon-item>
              <iron-icon icon="apps" slot="item-icon"></iron-icon>Website Applications
            </paper-icon-item>
          </a>

          <a name="developer-tools" href="developer-tools">
            <paper-icon-item>
              <iron-icon icon="apps" slot="item-icon"></iron-icon>Developer Tools
            </paper-icon-item>
          </a>
          <a name="google-developers" href="google-developers">
            <paper-icon-item>
              <iron-icon icon="apps" slot="item-icon"></iron-icon>Google Developers
            </paper-icon-item>
          </a>
          <a name="mozilla-developers" href="mozilla-developers">
            <paper-icon-item>
              <iron-icon icon="apps" slot="item-icon"></iron-icon>Mozilla Developers
            </paper-icon-item>
          </a>

        </iron-selector>
        </div>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout fullbleed="" hasscrollingregion="">

        <app-header slot="header" fixed="" shadow="">

          <!-- Toolbar #1 -->
          <app-toolbar>
            <!-- Website Title -->
            <span class="flex" style="flex:1;"></span>
              <a name="website-development" href="website-development">
                <h1 main-title="" itemprop="name" class="screen">Website Development
                </h1>
              </a>
            <!-- Divider -->
            <span class="flex" style="flex:1;"></span>
            <a hidden="" class="signin" name="log-in" href="log-in">
              <paper-button>Log In</paper-button>
            </a>
            <!-- Drawer Toggle -->
            <paper-icon-button drawer-toggle="" role="button" icon="icons:menu">
            </paper-icon-button>
          </app-toolbar>
        </app-header>
        <main>

         <div class="advert">
            <slot></slot>
         </div>

        <!-- IRON PAGES -->
        <iron-pages selected="[[page]]" attr-for-selected="name" fallback-selection="gubbled-404" role="main">

          <website-development itemscope="" itemtype="http://schema.org/Article" name="website-development"></website-development>

          <!-- POLYMER -->
          <polymer-project itemscope="" itemtype="http://schema.org/Article" name="polymer-project"></polymer-project>

          <!-- FEEDBACK -->
          <google-developers itemscope="" itemtype="http://schema.org/Article" name="google-developers"></google-developers>

          <!-- Mozilla -->
          <mozilla-developers itemscope="" itemtype="http://schema.org/Article" name="mozilla-developers"></mozilla-developers>

          <!-- Developer Tools -->
          <developer-tools itemscope="" itemtype="http://schema.org/Article" name="developer-tools"></developer-tools>

          <!-- FEEDBACK -->
          <send-feedback name="send-feedback"></send-feedback>

          <!-- Log-in -->
          <log-in name="log-in"></log-in>

          <!-- 404 -->
          <gubbled-404 name="gubbled-404"></gubbled-404>

        </iron-pages>
      </main>
      </app-header-layout>
    </app-drawer-layout>
`;
  }

  static get is() { return 'application-shell'; }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      rootPattern: String,
      routeData: Object,
      subroute: String,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('application-shell created!');
  }

  //ready() {
  //  super.ready();
  //   this.textContent = 'I\'m a custom element!';
  //}

  constructor() {
    super();

    // Get root pattern for app-route, for more info about `rootPath` see:
    // https://www.polymer-project.org/2.0/docs/upgrade#urls-in-templates
    this.rootPattern = (new URL(this.rootPath)).pathname;
  }

  _routePageChanged(page) {
    // Polymer 2.0 will call with `undefined` on initialization.
    // Ignore until we are properly called with a string.
    if (page === undefined) {
      return;
    }

    // If no page was found in the route data, page will be an empty string.
    // Deault to 'view1' in that case.
    this.page = page || 'polymer-project';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Load page import on demand. Show 404 page if fails
    var resolvedPageUrl = this.resolveUrl(page + '.html');
    importHref(
        resolvedPageUrl,
        null,
        this._showPage404.bind(this),
        true);
  }

  _showPage404() {
    this.page = '404';
  }
}

window.customElements.define(ApplicationShell.is, ApplicationShell);

/* FIREBASE 

          // Element class can define custom element reactions
        connectedCallback() {
          super.connectedCallback();
          console.log('my-element created!');
        }

        ready() {
          super.ready();
        }
<script defer src="../bower_components/firebase/firebase-app.js"></script>
<script defer src="../bower_components/firebase/firebase-auth.js"></script>
<script defer src="../bower_components/firebase/firebase-database.js"></script>
<script defer src="../bower_components/firebase/firebase-messaging.js"></script>
<script defer src="../bower_components/firebase/firebase-storage.js"></script>

*/
;
