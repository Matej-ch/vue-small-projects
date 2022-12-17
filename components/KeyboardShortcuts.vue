<script setup>
import {ref} from 'vue'
import IconInfo from '~/assets/img/radio/icon-info.svg'
import IconUp from '~/assets/img/radio/icon-up.svg'
import IconDown from '~/assets/img/radio/icon-down.svg'
import IconLeft from '~/assets/img/radio/icon-left.svg'
import IconRight from '~/assets/img/radio/icon-right.svg'

import {onClickOutside, onKeyStroke} from '@vueuse/core'

const open = ref(false)
const el = ref(null)
const button = ref(null)
onClickOutside(el, () => (open.value = false))
onKeyStroke('i', e => {
    e.preventDefault()
    open.value = !open.value
    open.value ? button.value.focus() : button.value.blur()
})
</script>
<template>
    <div class="absolute right-5" ref="el">
        <button ref="button" class="absolute right-0" @click="open = !open">
            <IconInfo/>
        </button>

        <aside v-show="open" class="mt-5 shadow-md bg-slate-100 mr-5 p-3 text-slate-600">
            <h3 class="font-bold mb-5 p-1 border-b-[1px] border-slate-300">Keyboard Shortcuts</h3>
            <ul>
                <li><span class="key">␣</span> Play</li>
                <li>
                    <span class="key">
                        <IconUp/>
                    </span>
                    <span class="key">
                        <IconDown/>
                    </span>
                    Volume
                </li>
                <li>
                    <span class="key">
                        <IconLeft/>
                    </span>
                    <span class="key">
                        <IconRight/>
                    </span>
                    Seek
                </li>
                <li>
                    <span class="key">⇧</span>
                    <span class="key">
                        <IconLeft/>
                    </span>,
                    <span class="key">⇧</span>
                    <span class="key">
                        <IconRight/>
                    </span>
                    Skip
                </li>
                <li>
                    <span class="key">i</span>
                    Keyboard Shortcuts
                </li>
            </ul>
        </aside>
    </div>
</template>

<style scoped>
li {
    margin-bottom: 10px;
}

.key {
    @apply bg-white p-1 border-slate-200 border-[1px] rounded inline-block;
    width: 2rem;
    text-align: center;
    transform: scale(0.8);
}

li svg {
    width: 14px;
    @apply w-3 inline;
}
</style>