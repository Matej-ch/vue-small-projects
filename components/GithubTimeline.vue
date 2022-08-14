<template>
    <div>
        <div class="component-header">
            <h2>Github timeline</h2>
        </div>

        <div class="px-4 py-5">
            <div class="flex justify-between mb-3 w-full flex-col">
                <label class="mb-1 font-bold text-white">Github username</label>
                <input v-model="username" placeholder="Github username" @keyup.enter="getRepos"
                       class="w-full">
            </div>

            <div>
                <button @click="getRepos"
                        class="btn btn-green">
                    Generate
                </button>
            </div>

            <div v-show="message.length" class="p-4 text-white font-bold my-2"
                 :class="isFound ? 'bg-green-500' : 'bg-red-500'">
                {{message}}
            </div>

            <ul v-show="topRepos.length" class="timeline">
                <li v-for="(repo,index) in topRepos">
                    <div :class="index%2 === 0 ? 'direction-l' : 'direction-r'">
                        <div class="flag-wrapper">
                            <span class="flag">{{repo.name}}</span>
                            <span class="time-wrapper" v-show="repo.stargazers_count > 0">
                                <span class="time" title="Star count">{{repo.stargazers_count}}</span>
                            </span>
                        </div>
                        <div class="desc" v-if="repo.description">
                            <a :href=repo.html_url target="_blank" rel="noreferrer"
                               class="text-black">{{repo.description}}</a>
                        </div>
                        <div class="desc" v-else>
                            <a class="text-black" :href=repo.html_url>{{repo.full_name}}</a>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const username = ref('')
const message = ref('')
const isFound = ref(false)
const topRepos = ref([]);

function getRepos() {
    fetch(`https://api.github.com/users/${username.value}/repos`)
        .then(res => res.json())
        .then(data => {
            topRepos.value = data;
        }).catch(err => console.error(err))
}

</script>

<style scoped>

.timeline {
    position: relative;
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 1em 0;
    list-style-type: none;
}

.timeline:before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 6px;
    height: 100%;
    margin-left: -3px;
    background: rgb(80, 80, 80);
    background: -moz-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(30, 87, 153, 1)), color-stop(100%, rgba(125, 185, 232, 1)));
    background: -webkit-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: -o-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: -ms-linear-gradient(top, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);
    background: linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%);

    z-index: 5;
}

.timeline li {
    padding: 1em 0;
}

.timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.direction-l {
    position: relative;
    width: 300px;
    float: left;
    text-align: right;
}

.direction-r {
    position: relative;
    width: 300px;
    float: right;
}

.flag-wrapper {
    position: relative;
    display: inline-block;

    text-align: center;
}

.flag {
    position: relative;
    display: inline;
    background: rgb(248, 248, 248);
    padding: 6px 10px;
    border-radius: 5px;

    font-weight: 600;
    text-align: left;
}

.direction-l .flag {
    -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-r .flag {
    -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-l .flag:before,
.direction-r .flag:before {
    position: absolute;
    top: 50%;
    right: -36px;
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -10px;
    background: #fff;
    border-radius: 10px;
    border: 4px solid rgb(255, 80, 80);
    z-index: 10;
}

.direction-r .flag:before {
    left: -36px;
}

.direction-l .flag:after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(248, 248, 248);
    border-width: 8px;
    pointer-events: none;
}

.direction-r .flag:after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(248, 248, 248);
    border-width: 8px;
    pointer-events: none;
}

.time-wrapper {
    display: inline;

    line-height: 1em;
    font-size: 0.66666em;
    color: rgb(250, 80, 80);
    vertical-align: middle;
}

.direction-l .time-wrapper {
    float: left;
}

.direction-r .time-wrapper {
    float: right;
}

.time {
    display: inline-block;
    padding: 4px 6px;
    background: rgb(248, 248, 248);
}

.desc {
    margin: 1em 0.75em 0 0;

    font-size: 0.77777em;
    font-style: italic;
    line-height: 1.5em;
}

.direction-r .desc {
    margin: 1em 0 0 0.75em;
}

/* ================ Timeline Media Queries ================ */

@media screen and (max-width: 660px) {

    .timeline {
        width: 100%;
        padding: 4em 0 1em 0;
    }

    .timeline li {
        padding: 2em 0;
    }

    .direction-l,
    .direction-r {
        float: none;
        width: 100%;

        text-align: center;
    }

    .flag-wrapper {
        text-align: center;
    }

    .flag {
        background: rgb(255, 255, 255);
        z-index: 15;
    }

    .direction-l .flag:before,
    .direction-r .flag:before {
        position: absolute;
        top: -30px;
        left: 50%;
        content: ' ';
        display: block;
        width: 12px;
        height: 12px;
        margin-left: -9px;
        background: #fff;
        border-radius: 10px;
        border: 4px solid rgb(255, 80, 80);
        z-index: 10;
    }

    .direction-l .flag:after,
    .direction-r .flag:after {
        content: "";
        position: absolute;
        left: 50%;
        top: -8px;
        height: 0;
        width: 0;
        margin-left: -8px;
        border: solid transparent;
        border-bottom-color: rgb(255, 255, 255);
        border-width: 8px;
        pointer-events: none;
    }

    .time-wrapper {
        display: block;
        position: relative;
        margin: 4px 0 0 0;
        z-index: 14;
    }

    .direction-l .time-wrapper {
        float: none;
    }

    .direction-r .time-wrapper {
        float: none;
    }

    .desc {
        position: relative;
        margin: 1em 0 0 0;
        padding: 1em;
        background: rgb(245, 245, 245);
        -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
        -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);

        z-index: 15;
    }

    .direction-l .desc,
    .direction-r .desc {
        position: relative;
        margin: 1em 1em 0 1em;
        padding: 1em;

        z-index: 15;
    }

}

@media screen and (min-width: 400px) and (max-width: 660px) {

    .direction-l .desc,
    .direction-r .desc {
        margin: 1em 4em 0 4em;
    }

}
</style>