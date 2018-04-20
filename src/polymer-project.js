import { Element } from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/iron-ajax/iron-ajax.js';
import '../../@polymer/iron-list/iron-list.js';
import '../../@polymer/iron-icon/iron-icon.js';
import '../../@polymer/paper-icon-button/paper-icon-button.js';
import '../../@polymer/paper-item/paper-item.js';
import './hyper-link.js';
import './shared-styles.js';

class PolymerProject extends Element {
  static get template() {
    return `
    <style include="shared-styles">
      :host {
        display: block;
        }
        h2 {
          color: black;
        }
        ul {
          margin: 16px 0px;
        }
        u {
          color:pink;
        }
        iron-list {
         height: 100px;
        }
    </style>

      <h1>Polymer Project</h1>
        
        <iron-ajax url="src/polymers.json" last-response="{{polymur}}" auto=""></iron-ajax>
        <iron-list items="[[polymur]]" as="polymur" scroll-offset="200">
        <template>
        <hyper-link url="[[polymur.url]]" publisher="[[polymur.publisher]]" title="[[polymur.title]]" paragraph="[[polymur.paragraph]]"></hyper-link>
        </template>
        </iron-list>

      <p>The Polymer Library provides a set of features for easily creating custom elements that work like standard DOM elements.</p>

      <h2>Polymer Features</h2>
      <ol>
        <!-- List Item #1 -->
        <li><u><a href="https://www.polymer-project.org/2.0/docs/devguide/custom-elements"><h2>Custom Elements</h2></a></u></li>
        <p>The custom elements <u>specification</u> provides features that let you build an element with its own public API that reacts to state changes.</p>
        <h2>Referance</h2>
        <ul>
          <li><a href="https://developers.google.com/web/fundamentals/web-components/customelements">Custom Elements v1: Reusable Web Components</a></li>
        </ul>
        <h2>Features</h2>
      <ul>
        <li>A mechanism for associating a class with a custom element name.</li>
        <li>A set of lifecycle callbacks invoked when an instance of the custom element changes state.</li>
        <li>A callback invoked whenever one of a specified set of attributes changes on the instance.</li>
        <li>Instance methods to handle common tasks.</li>
        <li>Automation for handling properties and attributes, such as setting a property based on the corresponding attribute.</li>
        <li>Creating shadow DOM trees for element instances based on a supplied template.</li>
        <li>A data system that supports data binding, property change observers, and computed properties.</li>
      </ul>

        <!-- List Item #2 -->
        <li><u><a href="https://www.polymer-project.org/2.0/docs/devguide/shadow-dom"><h2>Shadow DOM</h2></a></u></li>
        <p>Shadow DOM is a new DOM feature that helps you build components as a scoped subtree inside your element.</p>
        <p>Polymer provides a declarative mechanism for adding a shadow tree using a DOM template. When you provide a DOM template for an element, Polymer attaches a shadow root for each instance of the element and copies the template contents into the shadow tree.</p>
        <p>By default, if an element has shadow DOM, the shadow tree is rendered instead of the element's children. To allow children to render, you can add a slot element to your shadow tree. Think of the slot as a placeholder showing where child nodes will render.</p>
        <p>You can control where a child should be distributed into the flattened tree using named slots.</p>
        <ul>
          <li><h2>Shadow DOM and Composition</h2></li>
          <li><h2>Event Retargeting</h2></li>
          <li><h2>Shadow DOM Styling</h2></li>
          <li><h2>Theming and Custom Properties</h2></li>
          <li><h2>Shadow DOM Polyfills</h2></li>
        </ul>
        <h2>Specify a DOM template</h2>
        <!-- List Item #3 -->
        <li><u><a href="https://www.polymer-project.org/2.0/docs/devguide/events"><h2>Events</h2></a></u></li>

        <!-- List Item #4 -->
        <li><u><a href="https://www.polymer-project.org/2.0/docs/devguide/data-system"><h2>Data System</h2></a></u></li>
      </ol>


      

      <p>Create ES6 class and associate it with the custom element name, extend the Polymer.Element class. The element's class defines its behavior and public API.</p>
      <code>
          class MyPolymerElement extends Polymer.Element { ... }
      <br> 
          customElements.define('my-polymer-element', MyPolymerElement);
      </code>
      
      <h2>Polymer + Custom Element Features</h2>


      <h1>Custom Element Reactions / Lifecycle</h1>

      <ol>
        <li>constructor</li>
        <p>Hello</p>
        <li>connectedCallback</li>
        <li>disconnectedCallback</li>
        <li>attributeChangedCallback</li>
      </ol>

      <ol>
        <li>Custom element lifecycle</li>
        <li>Polymer element initialization</li>
        <li>Defer non-critical work</li>
        <li>Element upgrades</li>
        <li>Extending other elements</li>
        <li>Sharing code with class expression mixins</li>
        <li>Using mixins</li>
        <li>Defining mixins</li>
        <li>Packaging mixins for sharing</li>
      </ol>

      <ol>
        <li>Define a custom element</li>
        <li>Extending an existing element</li>
        <li>Using mixins</li>
        <li>Imports and APIs</li>
        <li>Define an element in the main HTML document</li>
        <li>Lifecycle callbacks</li>
      </ol>




      <h1>Shadow DOM concepts</h1>

      <p>Shadow DOM is a new DOM feature that helps you build components. You can think of shadow DOM as a scoped subtree inside your element.</p>

      <p>Shadow DOM lets you place the children in a scoped subtree, so document-level CSS can't restyle the button by accident, for example. This subtree is called a shadow tree.</p>

      <p>The shadow root is the top of the shadow tree. The element that the tree is attached </p>

      <ul>
        <li>Shadow DOM and composition</li>
        <li>Fallback content</li>
        <li>Multi-level distribution</li>
        <li>Slot APIs</li>
        <li>Observe added and removed children</li>
        <li>Event retargeting</li>
        <li>Shadow DOM styling</li>
        <li>Theming and custom properties</li>
        <li>Custom property mixins</li>
        <li>Shadow DOM polyfills</li>
      </ul>

      <h2>DOM templating</h2>

      <p>A shadow root is a document fragment that gets attached to a “host” element. The act of attaching a shadow root is how the element gains its shadow DOM. To create shadow DOM for an element, call element.attachShadow()</p>

      <p>Many elements use a subtree of DOM elements to implement their features. DOM templating provides an easy way to create a DOM subtree for your element.

      By default, adding a DOM template to an element causes Polymer to create a shadow root for the element and clone the template into the shadow tree.

      The DOM template is also processed to enable data binding and declarative event handlers.</p>

      <ul>
        <li>Specify a DOM template</li>
        <li>Specify a template using dom-module</li>
        <li>Specify a string template</li>
        <li>Inherited templates</li>
        <li>Elements with no shadow DOM</li>
        <li>URLs in templates</li>
        <li>Static node map</li>
        <li>Remove empty text nodes</li>
        <li>Preserve template contents</li>
        <li>Customize DOM initialization</li>
        <li>Create your own shadow root</li>
        <li>Stamp templates in light DOM</li>
      </ul>

      <h2>Style an element's shadow DOM</h2>

      <p>The HTML elements in your template become children in your custom element's shadow DOM. Shadow DOM provides a mechanism for encapsulation, meaning that elements inside the shadow DOM don't match selectors outside the shadow DOM.</p>

      <ul>
        <li>Style your elements</li>
        <li>Use inheritance from document-level styles</li>
        <li>Style the host element</li>
        <li>Style slotted content (distributed children)</li>
        <li>Style undefined elements</li>
        <li>Style directional text with the :dir() selector</li>
        <li>Share styles between elements</li>
        <li>Use style modules</li>
        <li>Use custom-style in document-level styles</li>
      </ul>

      <h2>Browser support</h2>

      <h2>Platform features</h2>

      <p>The Polymer library is a lightweight sugaring layer on top of the Web Components APIs.</p>

            <ul>
        <li>ready()</li>
        <li>super()</li>
        <li>constructor()</li>
        <li>connectedCallback()</li>
        <li>static get observers()</li>
        <li>static get properties()</li>
        <li>static get is()</li>
      </ul>

    <!-- List 1 -->

    <h1>Polymer Project</h1>
    <p>
      Polymer is a JavaScript library that helps you create custom reusable HTML elements, and use them to build performant, maintainable apps.
    </p>



<p><span style="font-size: 18pt; ">Website</span>
  </p><ul>
    <li>Polymer
      <ul>
        <li>Custom Elements
          <ul>
            <li>Custom Element
              <ul>
                <li>Lifecycle
                  <ul>
                    <li>constructor</li>
                    <li>connectedCallback</li>
                    <li>disconnectedCallback</li>
                    <li>attributeChangeCallback</li>
                  </ul>
                </li>
                <li>Polymer Element Initialization</li>
                <li>Defer non-critical work</li>
                <li>Define a Custom Element
                  <ul>
                    <li>Extending an existing element</li>
                    <li>Using mixins</li>
                    <li>Imports and APIs</li>
                    <li>Define an element in the main HTML document</li>
                    <li>Lifecycle callbacks
                      <ul>
                        <li>created</li>
                        <li>ready</li>
                        <li>attached</li>
                        <li>detached</li>
                        <li>attributeChanged</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Declare Properties
                  <ul>
                    <li>API
                      <ul>
                        <li>type</li>
                        <li>value</li>
                        <li>reflectToAttribute</li>
                        <li>readOnly</li>
                        <li>notify</li>
                        <li>computed</li>
                        <li>observer</li>
                      </ul>
                    </li>
                    <li>Attribute deserialization</li>
                    <li>Configuring default property values</li>
                    <li>Property change notification events (notify)</li>
                    <li>Read-only properties</li>
                    <li>Reflecting properties to attributes</li>
                    <li>Attribute serialization</li>
                    <li>Implicitly declared properties</li>
                    <li>Private and protected properties</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Element Upgrades</li>
            <li>Extending Other Elements</li>
            <li>Sharing code with class expression mixins
              <ul>
                <li>Using Mixins</li>
                <li>Defining Mixins</li>
                <li>Packaging Mixins for Sharing</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Shadow DOM
          <ul>
            <li>Concepts
              <ul>
                <li>Shadow DOM and composition
                  <ul>
                    <li>Fallback content</li>
                    <li>Multi-level distribution</li>
                    <li>Slot APIs</li>
                    <li>Observe added and removed children</li>
                  </ul>
                </li>
                <li>Event retargeting</li>
                <li>Shadow DOM styling</li>
                <li>Theming and custom properties
                  <ul>
                    <li>Custom property mixins</li>
                  </ul>
                </li>
                <li>Shadow DOM polyfills</li>
              </ul>
            </li>
            <li>DOM Templating
              <ul>
                <li>Specify a DOM template
                  <ul>
                    <li>Specify a template using dom-module</li>
                    <li>Specify a string template</li>
                    <li>Inherited templates</li>
                    <li>Elements with no shadow DOM</li>
                    <li>URLs in templates</li>
                  </ul>
                </li>
                <li>Static node map</li>
                <li>Remove empty text nodes</li>
                <li>Preserve template contents</li>
                <li>Customize DOM initialization
                  <ul>
                    <li>Create your own shadow root</li>
                    <li>Stamp templates in light DOM</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Style shadow DOM
              <ul>
                <li>Style your elements
                  <ul>
                    <li>Use inheritance from document-level styles</li>
                    <li>Style the host element</li>
                    <li>Style slotted content (distributed children)</li>
                    <li>Style undefined elements</li>
                    <li>Style directional text with the :dir() selector</li>
                  </ul>
                </li>
                <li>Share styles between elements
                  <ul>
                    <li>Use style modules</li>
                  </ul>
                </li>
                <li>Use custom-style in document-level styles</li>
              </ul>
            </li>
            <li>Custom CSS Properties
              <ul>
                <li>Use a custom properties API to style an element</li>
                <li>Create custom properties
                  <ul>
                    <li>Use custom CSS mixins</li>
                  </ul>
                </li>
                <li>Use CSS inheritance</li>
                <li>Create global styles
                  <ul>
                    <li>Custom property API for Polymer elements</li>
                    <li>Custom properties shim limitations</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Events
          <ul>
            <li>Fire Events
              <ul>
                <li>Add annotated event listeners</li>
                <li>Add and remove listeners imperatively
                  <ul>
                    <li>Listener on the custom element</li>
                    <li>Listener on child elements</li>
                    <li>Listener on outside elements</li>
                  </ul>
                </li>
                <li>Fire custom events</li>
                <li>Handle retargeted events</li>
                <li>Property change events</li>
              </ul>
            </li>
            <li>Gesture Events
              <ul>
                <li>Using gesture events
                  <ul>
                    <li>Gesture event types
                      <ul>
                        <li>down</li>
                        <li>up</li>
                        <li>tap</li>
                        <li>track</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Native browser gesture handling
                  <ul>
                    <li>Use passive gesture listeners</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Data System
          <ul>
            <li>Concepts
              <ul>
                <li>Observable changes
                  <ul>
                    <li>Unobservable changes</li>
                    <li>Mutating objects and arrays observably</li>
                    <li>Batched property changes</li>
                  </ul>
                </li>
                <li>Data paths
                  <ul>
                    <li>Linking paths with data bindings</li>
                    <li>Data binding scope</li>
                    <li>Special paths</li>
                    <li>Two paths referencing the same object</li>
                  </ul>
                </li>
                <li>Data flow
                  <ul>
                    <li>Data flow is synchronous</li>
                    <li>How data flow is controlled
                      <ul>
                        <li>Automatic</li>
                        <li>One-way</li>
                      </ul>
                    </li>
                    <li>Upward and downward data flow</li>
                    <li>Data flow for objects and arrays</li>
                    <li>Change notification events</li>
                    <li>Custom change notification events</li>
                  </ul>
                </li>
                <li>Property effects
                  <ul>
                    <li>Data bindings</li>
                  </ul>
                </li>
                <li>Using the MutableData mixin
                  <ul>
                    <li>Optional mutable data for reusable elements</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Object and Array Data
              <ul>
                <li>Specifying paths</li>
                <li>Get a value by path</li>
                <li>Set a property or subproperty by path
                  <ul>
                    <li>Notify Polymer of a subproperty change</li>
                  </ul>
                </li>
                <li>Work with arrays
                  <ul>
                    <li>Mutate an array</li>
                    <li>Notify Polymer of array mutations</li>
                  </ul>
                </li>
                <li>Batch multiple property changes</li>
                <li>Link two paths to the same object</li>
              </ul>
            </li>
            <li>Observers and Computed Properties
              <ul>
                <li>Observers and element initialization
                  <ul>
                    <li>Observers are synchronous</li>
                  </ul>
                </li>
                <li>Simple observers
                  <ul>
                    <li>Observe a property</li>
                  </ul>
                </li>
                <li>Complex observers
                  <ul>
                    <li>Observe changes to multiple properties</li>
                    <li>Observe sub-property changes</li>
                    <li>Observe array mutations</li>
                    <li>Observe all changes related to a path</li>
                    <li>Identify all dependencies</li>
                  </ul>
                </li>
                <li>Computed properties
                  <ul>
                    <li>Define a computed property</li>
                  </ul>
                </li>
                <li>Dynamic observer methods</li>
                <li>Add observers and computed properties dynamically
                  <ul>
                    <li>Add a simple observer dynamically</li>
                    <li>Add a complex observer dynamically</li>
                    <li>Add a computed property dynamically</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Data Binding
              <ul>
                <li>Anatomy of a data binding</li>
                <li>Bind to a target property
                  <ul>
                    <li>Bind to text content</li>
                  </ul>
                </li>
                <li>Bind to a target attribute
                  <ul>
                    <li>Native properties that don't support property binding</li>
                  </ul>
                </li>
                <li>Binding annotations
                  <ul>
                    <li>Bind to a host property</li>
                    <li>Bind to a host sub-property</li>
                    <li>Logical not operator</li>
                    <li>Computed bindings</li>
                  </ul>
                </li>
                <li>Compound bindings</li>
                <li>Binding to arrays and array items
                  <ul>
                    <li>Bind to an array item</li>
                  </ul>
                </li>
                <li>Two-way bindings
                  <ul>
                    <li>Two-way binding to a non-Polymer element</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Helper Elements
              <ul>
                <li>Template repeater (dom-repeat)
                  <ul>
                    <li>Handling events in dom-repeat templates</li>
                    <li>Filtering and sorting lists</li>
                    <li>Nesting dom-repeat templates</li>
                    <li>Forcing synchronous renders</li>
                    <li>Forcing the template to update</li>
                    <li>Improve performance for large lists</li>
                  </ul>
                </li>
                <li>Data bind an array selection (array-selector)</li>
                <li>Conditional templates (dom-if)</li>
                <li>Auto-binding templates (dom-bind)</li>
                <li>dom-change event</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>





    <article class="firstList">

    <iron-ajax url="src/polymers.json" last-response="{{polymur}}" auto=""></iron-ajax>

    <iron-list items="[[polymur]]" as="polymur" scroll-offset="200">

    <template>

        <paper-item class="post">
            <div class="description">
              <!-- Title -->
              <a href="[[polymur.url]]" target="_blank">
                <div class="title">
                  <div></div>
                  <!--
                  <img
                    class="guestLogo"
                    src="./images/polymer.png"
                    alt="Mozilla Developers"
                    width="48"
                    height="48">
                    -->
                  <div class="stamp">
                    <ul>
                      <!-- Title -->
                      <li><h2 class="postTitle">[[polymur.title]]</h2></li>
                      <!-- Publisher -->
                      <li><div class="publisher">[[polymur.publisher]]</div></li>
                    </ul>
                  </div>
                  
                  <iron-icon class="link" icon="link">
                  </iron-icon>
                </div>
              </a>
              <p class="paragraph">[[polymur.paragraph]]</p>
            </div>
          </paper-item>

    </template>

  </iron-list>
</article>
`;
  }

  static get is() { return 'polymer-project'; }

  constructor() {
    super();
  }

  static get properties() {
      return {


      };
  }
}



window.customElements.define(PolymerProject.is, PolymerProject);

/*

            classed: {
              string: ''
            },
            domain: {
              string: ''
            },

            paragraph: {
              string: ''
            },

            title: {
              string: ''
            },

            up: {
              string: ''
            },

            down: {
              string: ''
            },

            rank: {
              string: ''
            },

            index: {
              string: ''
            },

            api: {
              string: ''
            },

            publisher: {
              string: ''
            },

            l1: {
              string: ''
            },

            l2: {
              string: ''
            },

            l3: {
              string: ''
            },

            l4: {
              string: ''
            },

            l5: {
              string: ''
            }


        <div class="three">
          <paper-toggle-button class="community">Community</paper-toggle-button>
          <paper-toggle-button class="api">API</paper-toggle-button>
          <paper-toggle-button class="cli">CLI</paper-toggle-button>
          <paper-toggle-button class="git">GitHub</paper-toggle-button>
          <paper-toggle-button class="specs">Specs</paper-toggle-button>
          <paper-toggle-button class="google">Google</paper-toggle-button>
          <paper-toggle-button class="google">Polymer</paper-toggle-button>
          <paper-toggle-button class="mozzila">Mozzila</paper-toggle-button>
        </div>


            <paper-card class="altItem">
      <div class="altGrid">
          <ul>

            <li>
              <h3 class="altTitle">Progressive Web Apps</h3>
              <a href="https://developers.google.com/web/progressive-web-apps">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
              <p>A new way to deliver amazing user experiences on the web.</p>
            </li>

            <li>
              <h3>Custom elements</h3>
              <a href="https://www.polymer-project.org/2.0/docs/devguide/custom-elements">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
              <p>Custom elements provide a component model for the web. These features let you build an element with its own public API that reacts to state changes.</p>
            </li>

            <li>
              <h3>Shadow DOM concepts</h3>
              <a href="https://www.polymer-project.org/2.0/docs/devguide/shadow-dom">
                <paper-icon-button class="link" icon="link"></paper-icon-button></a>
                <p>Shadow DOM lets you place the children in a scoped subtree, so document-level CSS can't restyle the button by accident, for example. This subtree is called a shadow tree.</p>
              </li>

            <li>
              <h3>Events</h3>
              <a href="https://www.polymer-project.org/2.0/docs/devguide/events">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
                <p>Elements use events to communicate state changes up the DOM tree to parent elements.</p>
              </li>

            <li>
              <h3>Data system</h3>
              <a href="https://www.polymer-project.org/2.0/docs/devguide/data-system">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
              <p>Each Polymer element manages its own data model and local DOM elements. The model for an element is the element's properties.</p>
            </li>

            <li>
              <h3>Define an element</h3>
              <a href="https://www.polymer-project.org/2.0/docs/devguide/custom-elements">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
              <p>To define a custom element, create a class that extends Polymer.Element and pass the class to the customElements.define method.</p>
            </li>

            <li>
              <h3>Polymer App Toolbox</h3>
              <a href="">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
                </a>
                <p>Polymer App Toolbox is a collection of components, tools and templates for building Progressive Web Apps with Polymer. You can use any one of these components separately, or use them together to build a full-featured Progressive web app.</p>
            </li>

            <li>
              <h3>PRPL Pattern</h3>
              <a href="">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
              <p>Currently, the Polymer CLI and reference server support a single-page app (SPA)</p>
            </li>

            <li>
              <h3>Build for production</h3>
              <a href="https://www.polymer-project.org/2.0/toolbox/build-for-production">
                <paper-icon-button class="link" icon="link"></paper-icon-button>
              </a>
              <p>The build toolset can reduce the download size of your app and its elements by minifying your code.</p>
            </li>

          </ul>
    </div>
    </paper-card>

*/
;