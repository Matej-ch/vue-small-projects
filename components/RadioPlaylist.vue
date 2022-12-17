<script setup>
import RadioSong from "~/components/RadioSong.vue";

const {songs, state} = usePlaylist()
const {playing, play} = useCurrentTrack()

function isSelected(song) {
    return song.slug === state.value.slug
}

function isPlaying(song) {
    return isSelected(song) && playing.value
}
</script>
<template>
    <ul>
        <RadioSong
            v-for="song in songs"
            :key="song.slug"
            :song="song"
            :isSelected="isSelected(song)"
            :isPlaying="isPlaying(song)"
            @click="play(song)"
        />
    </ul>
</template>