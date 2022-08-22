<template>
    <div class="json-tree">
        <div v-if="theData.constructor === Array">
            <span v-if="root"> [ </span>
            <div class="root_elem" v-for="(value, index) in theData" :key="index">
                <div v-if="value == null || false">
                    <span>null</span>
                    <span v-if="fullMarkup && index !== last">,</span>
                </div>
                <div v-else-if="typeof value === 'object'">
                    <span v-if="value.constructor === Array"> [ </span>
                    <span v-else> { </span>

                    <span
                        v-if="showObj[index]"
                        @click="toggle(index)"
                        class="cursor-pointer"
                    >
                        <slot name="hide">-</slot>
                    </span>

                    <span v-else @click="toggle(index)" style="cursor:pointer">
                        <slot name="expand">+</slot>
                    </span>

                    <TreeStructure
                        v-if="showObj[index]"
                        :jsonData="value"
                        :root="false"
                        :fullMarkup="fullMarkup"
                        :comma="index !== last"
                    >

                        <template v-slot:expand>
                            <slot name="expand"/>
                        </template>
                        <template v-slot:hide>
                            <slot name="hide"/>
                        </template>
                        <template v-slot:more>
                            <slot name="more"/>
                        </template>

                    </TreeStructure>

                    <slot name="more" v-else>...</slot>
                </div>

                <div v-else>
                    <span v-if="fullMarkup && typeof value === 'string'">
                        "{{value}}"
                    </span>
                    <span v-else>{{value}}</span>
                    <span v-if="fullMarkup && index !== last">,</span>
                </div>
            </div>

            ] <span v-if="fullMarkup && comma">,</span>
        </div>

        <div v-else>
            <span v-if="root"> { </span>
            <div class="root_elem" v-for="(value, key, index) in theData" :key="key">
                <div v-if="value == null || value == undefined">
                    <span v-if="fullMarkup">"</span>
                    <span class="json-tree-key">{{key}}</span>
                    <span v-if="fullMarkup">"</span>
                    <span>: null</span>
                    <span v-if="fullMarkup && index !== last">,</span>
                </div>
                <div v-else-if="typeof value === 'object'">
                    <span v-if="fullMarkup">"</span>
                    <span class="json-tree-key">{{key}}</span>
                    <span v-if="fullMarkup">"</span>
                    :
                    <span v-if="value.constructor === Array"> [ </span>
                    <span v-else> { </span>

                    <span
                        v-if="showObj[index]"
                        @click="toggle(index)"
                        style="cursor:pointer"
                    >
                        <slot name="hide">-</slot>
                    </span>
                    <span v-else @click="toggle(index)" style="cursor:pointer">
                        <slot name="expand">+</slot>
                    </span>
                    <TreeStructure
                        v-if="showObj[index]"
                        :jsonData="value"
                        :root="false"
                        :fullMarkup="fullMarkup"
                        :comma="index !== last"
                    >
                        <template v-slot:expand>
                            <slot name="expand"/>
                        </template>
                        <template v-slot:hide>
                            <slot name="hide"/>
                        </template>
                        <template v-slot:more>
                            <slot name="more"/>
                        </template>
                    </TreeStructure>
                    <slot name="more" v-else>...</slot>
                </div>
                <div v-else>
                    <span v-if="fullMarkup">"</span>
                    <span class="json-tree-key">{{key}}</span>
                    <span v-if="fullMarkup">"</span> :
                    <span v-if="fullMarkup && typeof value === 'string'">
                        "{{value}}"
                    </span>
                    <span v-else>{{value}}</span>
                    <span v-if="fullMarkup && index !== last">,</span>
                </div>
            </div>
            }<span v-if="fullMarkup && comma">,</span>
        </div>

    </div>

</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    jsonData: [Object, Array],
    root: {
        type: Boolean,
        default: true
    },
    filterKey: {
        type: String,
        default: ""
    },
    fullMarkup: {
        type: Boolean,
        default: false
    },
    comma: {
        type: Boolean,
        default: false
    }
})

const showObj = ref([]);
const len = ref(Object.keys(props.jsonData).length);
for (let i = 0, l = len.value; i < l; i++) {
    showObj.value.push(true);
}

const theData = computed(() => {
    const filter = props.filterKey && props.filterKey.toLowerCase();
    if (filter) {
        let filteredData = {};
        const keys = Object.keys(props.jsonData);
        keys.forEach(key => {
            if (
                key.toLowerCase().includes(filter) ||
                JSON.stringify(props.jsonData[key]).includes(filter)
            ) {
                filteredData[key] = props.jsonData[key];
            }
        });
        return filteredData;
    } else {
        return props.jsonData;
    }
})

const last = computed(() => {
    return Object.keys(theData).length - 1;
})

function toggle(index) {
    showObj.value[index] = !showObj.value[index];
    showObj.value.splice(index, 1, showObj.value[index]);
}

</script>

<style scoped>
.root_elem {
    margin-left: 25px;
}
</style>