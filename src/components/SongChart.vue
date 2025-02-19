<script setup lang="ts">
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from "@/components/ui/table"
import axios from "axios";
import { onMounted, ref } from 'vue';
import Button from "./ui/button/Button.vue";

const access_token = ref(localStorage.getItem('access_token') || '');
const topTracks = ref([]);
const getTopTracks = async () => {
    const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
        params: {
            'time_range': 'short_term',
            'limit': '15'
        },
        headers: {
            "Authorization": `Bearer ${access_token.value}`
        }
    });
    console.log('RESPONSE \n-------------------------------------------\n\n',res.data);
    
    topTracks.value = res.data['items']
    console.log('TOP Tracks \n-------------------------------------------\n\n',topTracks.value);
}

onMounted(getTopTracks);

</script>

<template>
    <Table class="text-2xl font-semibold">
        <TableHeader>
            <TableRow>
                <TableHead class="text-center">Rank</TableHead>
                <TableHead>Song</TableHead>
                <TableHead>Artist</TableHead>
                <TableHead>Plays</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="(track, index) in topTracks" :key="index">
                <TableCell class="text-center">
                    {{index + 1}}
                </TableCell>
                <TableCell class="flex items-center">
                    <img class="aspect-square w-40" :src="track['album']['images'][0]['url']" />
                    <h2 class="pl-10 text-align-center">
                        {{ track['name'] }}
                    </h2>
                </TableCell>
                <TableCell>
                    {{ track['artists'][0]['name'] }}
                </TableCell>
                <TableCell>
                    6
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>