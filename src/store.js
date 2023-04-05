/*
Copyright (c) 2021, Rodolfo González González.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import { writable } from "svelte/store";

/*
Almacena alertas, que tienen esta estructura:

{
    id: // automático
    type: // uno de ['info', 'danger', 'warning', 'success'], default 'info'
    dismissible: // boolean, default true
    timeout: // integer, dismiss timeout, 0 if permanent
    message: // string, el mensaje a presentar
    title: // string el título opcional, default ''
}
*/
function createAlerts() 
{
    const { subscribe, update, add, dismiss } = writable([]);

    return {
        subscribe,
        dismiss: (id) => {
            update((all) => all.filter((t) => t.id !== id));
        },
        add: (notification) => {
            const id = Math.floor(Math.random() * 10000);
            const defaults = {
                id,
                type: "info",
                dismissible: true,
                timeout: 10000
            };
            update((all) => {
                const index = all.findIndex(o => (o.message === notification.message && o.type === notification.type));
                if (index < 0) {
                    return [{ ...defaults, ...notification }, ...all];
                }
                else {
                    return [...all];
                }
            });
            if (notification.timeout && notification.timeout > 0) {
                setTimeout(() => update((all) => all.filter((t) => t.id !== id)), notification.timeout);
            }
        }
    };
}

export const alerts = createAlerts();