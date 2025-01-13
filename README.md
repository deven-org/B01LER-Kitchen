# B01LER
![B01LER_UpdateImg_1100-480@2x](https://github.com/deven-org/boiler/assets/122102805/7f55e1fd-955f-4c9f-890d-3d5a03f5c3aa)


## :page_with_curl: Content
- [B01LER](#b01ler)
  - [:page_with_curl: Content](#page_with_curl-content)
  - [:star: Introduction](#star-introduction)
    - [Benefits of B01LER](#benefits-of-b01ler)
    - [Common misconceptions](#common-misconceptions)
      - [Accessibility of Web Components](#accessibility-of-web-components)
  - [:art: Resources](#art-resources)
  - [:tipping_hand_person: Help & Feedback](#tipping_hand_person-help--feedback)
    - [Slack](#slack)
    - [Teams](#teams)
    - [Email](#email)
    - [B01LER Monthly](#b01ler-monthly)
    - [Questions, feedback or feature requests?](#questions-feedback-or-feature-requests)
    - [Report an issue](#report-an-issue)
  - [:gear: Requirements](#gear-requirements)
    - [Figma](#figma)
    - [Tokens Studio](#tokens-studio)
  - [:triangular_ruler: Architecture](#triangular_ruler-architecture)
  - [:leftwards_arrow_with_hook: Prefixes](#leftwards_arrow_with_hook-prefixes)
  - [:arrow_forward: How to start](#arrow_forward-how-to-start)
    - [Installation](#installation)
    - [Setup](#setup)
    - [Icon Kit Setup](#icon-kit-setup)
      - [Structure](#structure)
      - [Adding Icons](#adding-icons)
      - [Changing Icons](#changing-icons)
      - [Removing Icons](#removing-icons)
  - [:white_check_mark: How to test](#white_check_mark-how-to-test)
  - [:toolbox: How to build](#toolbox-how-to-build)
  - [:rocket: How to deploy](#rocket-how-to-deploy)
  - [:v: Contribute](#v-contribute)
  - [:page_facing_up: License](#page_facing_up-license)
  - [:green_heart: Code of conduct](#green_heart-code-of-conduct)


## :star: Introduction
B01LER is a fully customisable design system (DS) that enables you to easily create cohesive and consistent digital
products across multiple platforms and brands.

B01LER provides pre-built components that exist in design in the form of a
[component library in Figma](https://www.figma.com/community/file/1354113903886620358/b01ler), as well as in code in a
repository (the one you have opened right now), which is also
[displayed in the web using Storybook](https://b01ler.onrender.com/). Both the components in design and in code are
connected via a token system.

A token system is a collection of values which represent the visual properties of a design system, such as typography,
color and spacing.

Utilizing tokens, B01LER is simultaneously consistent and flexible. By changing the tokens, you have the power to change
the appearance of the whole design, including all the components and all the digital products build with it. In Figma
and in code.

Overall, B01LER is a powerful tool that helps you work smarter, not harder. By streamlining the design and development
processes B01LER empowers you to create better products faster.

### Benefits of B01LER
1. Increased efficiency in building design systems on brand, because semantic structure and architecture are pre-built
2. Increased efficiency, through automated processes. Documentation, DEV Handover, and more
3. Increased effectivity, because the time saved on building all the components can be used to build features right away
4. Increased acceptance of DS because components work right from the beginning of project phase
5. Immense cost savings, because the DS ramp-up phase is reduced from multiple months to days

### Common misconceptions
#### Accessibility of Web Components
Some articles claim, that Web Components are not accessible or that they are not complying with standard accessibility
guidelines. The argument says that assistive technologies like screenreaders can not access the shadow DOM and for
example are not able to "see" aria or role attributes that are needed to make components accessible. This is wrong.
Modern screenreaders are not "looking" at the DOM. Instead they are accessing the accessibility tree, which is provided
by the browser and also contains information from the shadow DOM.


## :art: Resources
- [Check out our Figma File](https://www.figma.com/community/file/1354113903886620358/b01ler)
- [Have a look at our components in Storybook](https://b01ler.onrender.com/)


## :tipping_hand_person: Help & Feedback
### Slack
Slack is our main internal communications channel and will most likely be the place where you can reach us best. Join
the [#boiler](https://song-asg.slack.com/archives/C062PQ9DJTD) channel and say hi 👋 (you need to be part of the
Accenture Org to join).

### Teams
We are also on Microsoft Teams. Join the
[B01LER](https://teams.microsoft.com/l/team/19%3ABvYMwUq382hbRn7dJyucR3DN4KORS1HjIZl3n5GqE9k1%40thread.tacv2/conversations?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb)
channel and say hi 👋 (you need to be part of the Accenture Org to join).

### Email
You can send us messages via [hello@boilerds.com](mailto:hello@boilerds.com), which the team will try to respond to as
quickly as possible.

### B01LER Monthly
Join the B01LER Monthly Session and ask questions, if you have any. The session takes place on the last Thursday of each
month from 4 PM to 4:30 PM (CET). You can add the session to your calendar by following the guide in the pinned post of
our dedicated
[Teams channel](https://teams.microsoft.com/l/channel/19%3Aca0a1284d8b34c62b80e983ca3af7934%40thread.tacv2/Monthly%20Session?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb)
for the session (you need to be part of the Accenture Org to join).

### Questions, feedback or feature requests?
We are happy about anyone who wants to participate in our community. To ask questions or give us feedback please
[open a discussion on GitHub](https://github.com/deven-org/boiler/discussions). For feature requests please use our
[feature request template](https://github.com/deven-org/boiler/issues/new?assignees=&labels=%F0%9F%9A%A8+new%3A%3Aenhancement&projects=deven-org%2F3&template=2_feature_request.yaml&title=%5BFeature+Request%5D%3A+).

### Report an issue
Please let us know in case you are finding any bugs by reporting them with our
[bug report template](https://github.com/deven-org/boiler/issues/new?assignees=&labels=%F0%9F%9A%A8+new%3A%3Abug&projects=deven-org%2F3&template=1_bug_report.yaml&title=%5BBug%5D%3A+).
The template can also be used to report issues with our documentation. In case you discover a security vulnerability
please review our [security policy](/docs/SECURITY.md) for more details on how to report it.


## :triangular_ruler: Architecture
Get to know about our Architecture [here](./docs/ARCHITECTURE.md).


## :leftwards_arrow_with_hook: Prefixes
BO1LER uses the 'blr' prefix in three main areas: custom component tag names, events and icons

### Components
The names of BO1LER components follow the W3C Custom Elements specification. Component prefixes can easily be customized
by updating the exported TAG_NAME in each `renderFunction` file. The `renderFunction` file can be found in the directory
of each component in our `ui-library` package. In order for your component to be valid, the name must contain at least
one dash, it must start with a lowercase character of the alphabet and it cannot contain reserved tag names that already
exist in the HTML spec. For a full list of reserved tag names and more tips on naming Custom Elements, please explore
[this guide](https://webcomponents.guide/learn/components/naming-your-components/) to ensure that your naming convention
is compliant.

### Events
BO1LER uses custom event names in our components that come prefixed with `blr` by default. This is done to avoid using
the same names in HTML. Users may still need to use native events without having to worry about naming collisions. The
exported event names can be customized in the [events.ts file](./packages/ui-library/src/globals/events.ts). For
example, the focus event can be updated with a new prefix of your choosing by changing the value:
```
export const BlrFocusEventName = 'blrFocus';
```

### Icons
The prefixes of our icons can easily be renamed by opening the [index.mjs file](./packages/icons/scripts/index.mjs) in
the `icons` directory. This file is responsible for optimizing our icons, assigning a prefix and exporting their type
and exporting their keys. Simply replace the value of the variable `withPrefix` with a prefix of your choosing and run
`yarn compile:icons` from the root directory for your changes to take effect. Remember to update the test files and the
.stories.ts files with your chosen prefix for the app to function as expected.


## :gear: Requirements
1. First you need to install Git. Git is needed to clone the project to your local machine. If you don't have it
   installed yet you can follow this
   [installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. This project is a Node.js package. You need Node Version 18 or higher in order to run it. Check your installed
   version with node -v. For more information check out the [Node.js Documentation](https://nodejs.org/en/docs/).
3. If you don't have Yarn installed, please install it (any version, we will pick the right settings later). For more
   information check out the [Yarn Documentation](https://classic.yarnpkg.com/en/docs).

In addition, you might need to install Corepack. For more information checkout
[Corepack Documentation](https://nodejs.org/api/corepack.html).

### Figma
Figma is a collaborative tool used for designing user interfaces. Figma can be run on any operating system that can run
a browser which can help designers, developers and various other stakeholders to collaborate seamlessly. Sharing
designs, managing permissions on a granular level and requesting feedback are some of the many features that help teams
work in a more agile fashion.

### Tokens Studio
Tokens Studio for Figma (also known as Figma Tokens) is a plugin for Figma that allows users to integrate design tokens
into their Figma designs. Before you start working with B01LER Design System for Figma, make sure to install the Tokens
Studio for Figma (Figma Tokens) plugin so you can access and customize the UI kit easily.

The plugin allows both designers and developers to inspect tokens that have been applied to components. An overview of
all tokens for a component can be viewed with deep inspect or the specific tokens used for the building blocks of a
component can also be viewed


## :arrow_forward: How to start
### Installation
> **Note:** You need to run terminal as administrator on Windows machines.

1. First, open a terminal and navigate to the folder you want to fork or clone this project
   ```sh
   $ cd git_projects
   ```
2. If you want to use B01LER as a starting point for your own design system, the first step is to fork the repository.
   You can do this via the GitHub web interface and just follow the instructions or read the documentation
   [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).
   This step is only required for the initial setup of you repository.

   In case you want to contribute to this repository, the first step is to clone the repository:
   ```sh
   $ git clone https://github.com/deven-org/boiler.git
   ```
3. Now we enable corepack for yarn and choose right version
   ```sh
   $ corepack enable
   $ yarn set version 4.0.2
   ```
4. Next, install the app
   ```sh
   $ yarn
   ```
5. Now start up your app
   ```sh
   $ yarn start:storybook
   ```

> Note: This command will also open up Storybook locally. This provides you with a full list of available components
> that you can experiment with. Each component in Storybook also contains detailed documentation how to use them and the
> parameters that they can accept.

### Setup
> Note: To be able to edit tokens, you must own a pro license of token studio

1. First, open your Copy of the B01LER and bookmark Tokens Studio in the Plugins panel.
2. Launch Tokens Studio using 'New Empty File' since no tokens have been defined yet.
3. Connect your repository to Tokens Studio. First, generate and copy a new Personal Access Token in Github. You can use
   either Tokens (Classic) or 'Fine-grained tokens'. Next, use the copied token to add GitHub as a Sync Provider. Click
   the 'Settings tab' in Tokens Studio and in the 'Add new menu', select GitHub. Use the Personal Token that you copied
   to authenticate yourself and to connect your cloned B01LER repository.
4. If the entered credential are correct you will be asked to Pull from git. Please accept this dialog. The tokens tab
   should now contain all tokens sets of B01LER available.

Please refer to the 'Getting Started' section in our
[Figma file](https://www.figma.com/file/kG44mSWhEp2VcMvMqbJrRY/B01LER-%5Bv0.2--alpha-release%5D?type=design&node-id=1134%3A44297&mode=design&t=ZatzD7omF9pxalvP-1)
(the link to the Figma file above is exclusively for members of the Accenture organization, while those outside the
organization can download the file [here](https://boilerds.com/B01LER%20[v0.2%20-alpha%20release].fig)) for more
detailed instructions on how to set up the library, configure Figma Tokens Studio and customize the project assets to
meet your requirements.

The 'Getting Started' section also explains the logic behind our token names and enable you to find and change the right
tokens when rebranding B01LER or when you want to extend or change some functionality of a component.

### Icon Kit Setup
After you setup the project, you can start implementing your desired icons. B01LER comes with a set of predefined icons
in the variety of sizes: small, extra small, extra extra small, medium (default), large, extra large. All the default
icons can be seen in our [Storybook](https://b01ler.onrender.com/?path=/docs/foundation-icons--docs).

#### Structure
In the project you will find 2 folders containing icons. One of them represents an input folder and the other one -
output after compiling.

    └── packages
        └── icons               // Icon configuration files and a collection of icon files in svg format
            └── icon-set         // Input folder for the icons
            └── icons-optimized         // Output folder (after building icons)

To properly compile icons inside the B01LER project you need to follow a naming convention for them, as an example:
`icon_name_md.svg`. In this case we are looking at a medium sized icon `..._md.svg` (each icon has multiple size
variations: xxs, xs, sm, md, lg, xl). After you compile your Icons Set, every icon's name will be converted to
`blrIconName` and you will be referencing them by this name in your project.

#### Adding Icons
For the new icons to work properly, you should add each of your icons in all size variations. Follow these steps to add
your first icon:
> Note: B01LER only supports icons in black and white.
1. Navigate to `/icon-set` folder, paste your icon here (with all according resolutions) and run:
   ```sh
   $ yarn compile:icons
   ```
2. To check that your icon has been added run your project locally and inspect the Icons tab:
   ```sh
   $ yarn start:storybook
   ```

#### Changing Icons
It is also possible to just change existing icon file without renaming it.

1. Navigate to `/icon-set` folder
2. Pick and open an icon you want to replace. For example: `packages/icons/icon-set/Book_md.svg`
3. Replace the `<svg>` and `<path>` tags with yours
4. Compile and run your project locally with:
   ```sh
   $ yarn start:storybook
   ```
5. If now you navigate to the local Storybook and inspect Icons tab, you will see that the icon `blrBook` is updated

> Note: Remember that every icon has multiple files with different icon sizes. You need to replace all of them with new
> icons in respective sizes.

#### Replacing default Icons

Some of the components have the default icons connected to them (you can see the full list of these components in
[Removing Icons](#removing-icons) section), but it is possible to change them.

We will take `packages/ui-library/src/components/checkbox` component as an example in this case. If you open this folder
and navigate to `index.stories.ts` file, inside you will be able to see the default parameters for this component.

```
const defaultParams: BlrCheckboxType = {
  ...
  size: 'md',
  checked: false,
  checkedIcon: 'blrCheckmark', // the default icon is set to 'blrCheckmark'
  ...
};
```

To change the default icon you simply need to replace the value of `checkedIcon` with the name of the icon you want. For
example:
```
const defaultParams: BlrCheckboxType ={
   ...
   checkedIcon: 'blr360',
   ...
};
```

To check that changes have applied do the following:
1. Run you project locally with:
   ```sh
   $ yarn start:storybook
   ```
2. Navigate to the Checkbox tab in your local Storybook
3. Check the checkbox

#### Removing Icons
Removing is slightly more difficult than adding, because there are multiple components which are using some of the icons
by default. You can see the full list of these components below:

- Button Icon
- Button Text
- Checkbox
- Form Caption
- Icon
- Input Field Number
- Input Field Text
- Select
- TabBar
- Toggle Switch

> Note: If you use any of those components, make sure that you either haven't removed the icons they use from the
> project, or replaced missing icons with yours.

To remove any icon, simply navigate to `/icon-set` folder, delete icons you don't need in all resolutions and run:

```sh
$ yarn compile:icons
```

## :white_check_mark: How to test
Learn about our testing approach [here](./doc/TESTING.md).


## :toolbox: How to build
> Note: Each command must be run from the root directory of the project

The B01LER UI Library can be built using the following command:

```sh
$ yarn build:ui-library
```

B01LER can also be built with Storybook bundled alongside it which provides you with a sandbox to experiment with our
components:

```sh
$ yarn build:storybook
```

B01LER comes with an example vanilla JS application to demonstrate how easy it is to use components in your app. To
build this example app, run the following command:

```sh
$ yarn build:js-example
```

In the generated `dist` folder, the generated `index.html` file can be opened in the browser to preview our components.

## :rocket: How to deploy
Learn about our approach to deployment in our [deployment documentation](./doc/DEPLOYMENT.md).


## :building_construction: How to develop
Note: This is not filled out yet! ...


## :v: Contribute
For a detailed documentation on how to contribute to the B01LER project, have a look at our
[contribution documentation](./docs/CONTRIBUTING.md).

New members of the B01LER Core Team, should also have a look at our [get started documentation](./docs/GETSTARTED.md).


## :page_facing_up: License
This project is licensed under the [MIT license](./LICENSE.md).


## :green_heart: Code of conduct
The B01LER is using the [Contributor Covenant Code of Conduct](./docs/CODE_OF_CONDUCT.md).
