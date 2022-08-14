<template>
    <div>
        <ul>
            <li :class="{
          preferred: !$colorMode.unknown && 'light' === $colorMode.preference,
          selected: !$colorMode.unknown && 'light' === $colorMode.value
        }">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-sun"
                >
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
            </li>
            <li :class="{
          preferred: !$colorMode.unknown && 'dark' === $colorMode.preference,
          selected: !$colorMode.unknown && 'dark' === $colorMode.value
        }">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-moon"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            </li>
            <li :class="{
          preferred: !$colorMode.unknown && 'system' === $colorMode.preference,
          selected: !$colorMode.unknown && 'system' === $colorMode.value
        }">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-monitor"
                >
                    <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                    />
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
            </li>
            <li :class="{
          preferred: !$colorMode.unknown && 'sepia' === $colorMode.preference,
          selected: !$colorMode.unknown && 'sepia' === $colorMode.value
        }">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-coffee"
                >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
            </li>
        </ul>
        <p>
            <ColorScheme placeholder="..." tag="span">
                Color mode: <b>{{$colorMode.preference}}</b>
                <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{$colorMode.value}}</i> mode detected)</span>
            </ColorScheme>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    display: inline-block;
    padding: 5px;
}

p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
}

.feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
}

.feather:hover {
    top: -3px;
}

.preferred .feather {
    border-color: var(--color-primary);
    top: -3px;
}

.selected .feather {
    color: var(--color-primary);
}
</style>