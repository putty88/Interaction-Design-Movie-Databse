**CMSI 370** Interaction Design, Fall 2018

# Assignment 1214
We conclude your exposure to direct manipulation implementation with a different type of product—instead of a full application, this time you are asked to build a _reusable component_ that uses direct manipulation.

## Background Reading
Textbook reading is centered on the direct manipulation interaction style, which would be Shneiderman/Plaisant Chapter 5. Additional helpful material outside of the web and the [bazaar](https://github.com/dondi/bazaar) code will be the case studies in Chapter 9 of the JavaScript textbook. These case studies demonstrate lower-level event handling with some direct manipulation elements. Code from that chapter is available on the [JavaScript book’s GitHub repository](https://github.com/dondi/javascript-book/tree/master/chapter09).

## For Submission: Reusable Direct Manipulation User Interface Component
We wrap up our programming work by going back to the basics: design and implement a reusable direct maniuplation widget for general use—including your custom front end. The mechanism for enforcing usability depends on the selected front-end technology stack. Traditional web apps will use a [jQuery plugin](https://learn.jquery.com/plugins/); React web apps will use a React component; iOS apps will use a `UIView` or `UIControl` subclass. As a reusable component, your widget must maintain a per-widget _model_ for storing the specific data/state of that instance of the widget. Further, you are to provide a _notification mechanism_ (either in the form of a callback or a native platform event) that informs users of your widget of relevant events, e.g., such as when the widget’s model value changes.

The point here is to see how low-level event handling (e.g., mouse/keyboard/touch activity) translate into higher-level ones (e.g., selection or change events). Some ideas:

- A selection knob or slider
- A rolling or scrolling item selector
- An entry field that accepts text/numbers with drag-and-drop character tiles
- A “here-to-there” drag-and-drop area
- A directional pad (“d-pad”) control

If you have a widget idea that is not in this list, check with me to see if it will work.

Low-level events that can be used for implementing direct manipulation interactions include but are not limited to:
- mouse events
- touch events (multitouch is optional)
- device motion events
If your component is not handling any of these events, then there is a strong chance that you aren’t using the direct manipulation interaction style!

### General Instructions
Starter code for three possible front-end technology stacks is available in the [bazaar](https://github.com/dondi/bazaar) repository. Copy these files to the _top level of this repository_, including “invisible” files starting with `.`, to get started. Confirm that these copied files work just as they do in _bazaar_, then proceed to revise them for your own component:
* jQuery plugin: [jquery-plugin-samples](https://github.com/dondi/bazaar/tree/master/jquery-plugin-samples) (for this starter, you only need to copy code for the _swivel_ plugin)
* React component: [react-component-samples](https://github.com/dondi/bazaar/tree/master/react-component-samples)
* iOS view: [ios-direct-manipulation-samples](https://github.com/dondi/bazaar/tree/master/ios-direct-manipulation-samples)

The web-based starters require [Node.js](https://nodejs.org) and are fully configured for linting ([ESLint](http://eslint.org)), unit tests ([Jest](https://jestjs.io)), and code coverage ([Istanbul](https://github.com/gotwarlost/istanbul), built into Jest). These will be run automatically whenever you push to GitHub.

The iOS starter requires [Xcode](https://developer.apple.com/xcode/) and has similar tooling.

### jQuery Ground Rules
For jQuery plugins, Bootstrap use (if used at all) must be limited to _CSS only_—no Bootstrap JavaScript components allowed, whether in code or triggered by `data` attributes. To be more precise, aside from jQuery, _all other external JavaScript_ must be cleared by me first, and most definitely _all direct manipulation event-handling must be your own code_ and not handled by third-party libraries. For example, despite its name, the use of _jQuery UI_ is expressly prohibited.

### React Ground Rules
If you are in the React stack, your component must be the _direct recipient_ of low-level events; i.e., you may not build upon third-party libraries for the core behavior of your component. You may use third-party subcomponents _within_ your component, but the widget itself must be yours at the foundational level.

### iOS Ground Rules
For iOS, your `UIView` or `UIControl` subclass may not extend third-party libraries that already handle direct manipulation events. You may implement your component either completely in code, or accompany it with a _.xib_ file (the starter code is completely code-based). In neither source type, _.swift_ nor _.xib_, may you use a third-party library to handle or assist with direct manipulation event handling. Callbacks may use `UIControl` _actions_, the _delegate_ pattern, key-value coding, or a direct closure, in that order of preference (_actions_ and _delegate_ are perhaps the most common component-callback conventions within this tech stack).

The supplied repository includes three examples of reusable components _in general_, all with callback mechanisms, but _only the swivel control_ fulfills the direct-manipulation specification of this assignment.

### How to Turn it In
Commit your code in two places. Within _this_ repository, provide:

1. The reusable code for the widget
1. The unit test suite for the widget (see the supplied sample code for examples)
1. A standalone demonstration page or app that shows an instance of your widget in action (see the supplied demonstration gallery page for examples)

Under your repository for front end development:

1. Commit the reusable code again (simulating the scenario where you might have downloaded someone’s widget code for use with your front end), and
1. Integrate your widget into the user interface that you have already built.

## Specific Point Allocations
Programming assignments are scored according to outcomes _3a_, _3b_, and _4a_ to _4f_ in the [syllabus](http://dondi.lmu.build/fall2018/cmsi370/cmsi370-fall2018-syllabus.pdf). For this particular assignment, graded categories are as follows:

| Category | Points | Outcomes |
| -------- | -----: | -------- |
| Model Implementation | 20 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Direct Manipulation Implementation (view/controller) | 20 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Notification Mechanism (callback/event) | 20 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Front End Integration | 20 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Inappropriate Third-party Library Use | deduction only | _4a_ |
| Test Suite and Coverage | 20 | _4a_ |
| Linting | deduction only | _4c_ |
| Version Control | deduction only | _4e_ |
| Punctuality | deduction only | _4f_ |
| **Total** | **100** |

“Deduction only” categories mean that you will only get points taken off if there are significant issues with those categories (or, in the case of third-party library use, the very presence of inappropriate third-party library code). Such issues include but are not limited to: lingering linting errors as of the final commit (_4c_), insufficiently granular or unmessaged commits (_4e_), and late commits (_4f_).
