# svelte-alerts

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
![GitHub all releases](https://img.shields.io/github/downloads/rgglez/svelte-alerts/total) 
![GitHub issues](https://img.shields.io/github/issues/rgglez/svelte-alerts) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/rgglez/svelte-alerts)

This is a [Svelte](https://svelte.dev/) component for managing and displaying alerts. The alert message is displayed using the [Sveltestrap Alert](https://sveltestrap.js.org/?path=/story/components--alert) component. Of course, you can replace this component with one that suites your application. And, of course, you can replace Bootstrap with any other CSS system, or your own stylesheets. And, finally, you can also change the material-icons for some of your preference.

The component uses a store to keep the messages. The objects representing the alerts have the following structure:

```javascript
{
    id: // automatic
    type: // uno de ['info', 'danger', 'warning', 'success'], default 'info'
    dismissible: // boolean, default true
    timeout: // integer, dismiss timeout, 0 if permanent
    message: // string, the message to be shown
    title: // string, optional title, default ''
}
```

## Installation

Copy the *Alerts* directory to your components directory.

## Usage

```javascript
<script>
// You must adjust the paths according to your setup:
import Alert from "components/Alerts/index.svelte";
import { alerts } from "components/Alerts/store";
</script>

<!-- the widget which displays alerts -->

<Alert></Alert>

<!-- you add messages to the alert store, which are displayed by the Alert widget -->

<button on:click="{() => alerts.add({message:"OK", type:"success", timeout:5000})}" class="btn btn-success">OK</button>
```

## Notes

* A sample *package.json* is included, to show which the dependencies are.
* You can **try it live** [here](https://svelte.dev/repl/f2b3c33763e34908aabf436c9c02c07f).

## License

Copyright (c) 2021, Rodolfo González González.

See the LICENSE file.
