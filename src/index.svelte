<script lang="ts">
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

import { createEventDispatcher } from "svelte";
import { Alert } from "sveltestrap/src";
import { alerts } from "./store.js";

const icons = {
    'info': 'info',
    'danger': 'error_outline',
    'warning': 'report_problem',
    'success': 'check_circle'
};

const dispatch = createEventDispatcher();
</script>
  
{#if $alerts}
    {#each $alerts as alert (alert.id)}
        <Alert color={alert.type} fade="{true}">
            <span class="material-icons md-36 inline-icon">{icons[alert.type]}</span>
            {#if alerts.title && alerts.title != ''}            
            <b class="alert-heading">{alert.title}</b>
            {/if}
            <span class="text">
                {alert.message}
            </span>
            {#if alert.dismissible}
            <button class="close" on:click={() => alerts.dismiss(alert.id)}>
                <span class="material-icons">close</span>
            </button>
            {/if}          
        </Alert>
    {/each}
{/if}

<style>
button {
  color: white;
  background: transparent;
  border: 0 none;
  padding: 0;
  margin: 0 0 0 auto;
  line-height: 1;
  font-size: 1rem;
}
.inline-icon {
  display:inline;
}
.text {
    margin-left: 1rem;
    display: inline;
}
</style>