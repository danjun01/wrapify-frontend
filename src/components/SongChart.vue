<script setup lang="ts">
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from "@/components/ui/table"
</script>

<template>
    <Table class="text-xl">
        <TableHeader>
            <TableRow>
                <TableHead class="text-center">Rank</TableHead>
                <TableHead>Song</TableHead>
                <TableHead>Artist</TableHead>
                <TableHead>Plays</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell class="text-center">
                    1
                </TableCell>
                <TableCell class="flex items-center">
                    <img class="aspect-square w-20" src="../assets/imgs/I-don't-think-that-I-like-her.jpg" />
                    <h2 class="pl-10 text-align-center">
                        I Don't Think I Like Her
                    </h2>
                </TableCell>
                <TableCell>
                    Charlie Puth
                </TableCell>
                <TableCell>
                    6
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>