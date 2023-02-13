# svelte-alerts

This is a [Svelte](https://svelte.dev/) component for managing and displaying alerts. The alert message is displayed using the [Sveltestrap Alert](https://sveltestrap.js.org/?path=/story/components--alert) component. Of course, you can replace this component with one that suites your application.

The component uses a store to keep the messages. The objects representing the alerts have the following structure:

```
{
    id: // automatic
    type: // uno de ['info', 'danger', 'warning', 'success'], default 'info'
    dismissible: // boolean, default true
    timeout: // integer, dismiss timeout, 0 if permanent
    message: // string, the message to be shown
    title: // string, optional title, default ''
}
```

## Notes

* A sample *package.json* is included.
* You can try it live [here](https://svelte.dev/repl/f2b3c33763e34908aabf436c9c02c07f).

## License

Copyright (c) 2021, Rodolfo González González.

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
