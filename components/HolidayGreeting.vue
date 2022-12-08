<template>
    <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
        <section class="flex flex-col items-center leading-loose text-center">
            <div class="text-3xl">
                <span class="i-twemoji-christmas-tree"></span>
                {{$t('happyHolidays')}}
                <span class="i-twemoji-world-map"></span>
            </div>

            <select v-model="locale">
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="ja">ja-JP</option>
            </select>
            <!-- Dates - Check out locales/en.json for the key -->
            <!-- Controls - I give you an .icon-button class if you want to use it -->
            <!-- Flags - the current locale -->
        </section>
    </main>
</template>

<script setup>

const christmasDate = new Date('2022/12/25')

const {locale} = useI18n()
</script>

<style scoped>
.icon-button {
    @apply text-xl w-[32px] h-[32px] rounded-full border border-transparent bg-transparent cursor-pointer duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>