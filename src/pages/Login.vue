<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[400px] border-none px-5 flex flex-col justify-center pt-20 text-platinum">
        <div class="text-platinum text-6xl font-extrabold">Login</div>
        <form class="pt-20">
          <div class="grid items-center w-full gap-5">

            <div class="flex flex-col space-y-3">
              <Label class="font-bold" for="email">Email</Label>
              <Input id="email" placeholder="name@domain.com" class="border-platinum/40 focus-visible:ring-0 py-5" />
            </div>

            <div class="flex flex-col space-y-3">
              <Label class="font-bold" for="password">Password</Label>
              <Input id="password" placeholder="Enter Password" class="border-platinum/40 focus-visible:ring-0 py-5" />
            </div>

            <Button class="justify-self-center rounded-full w-full h-[60px] bg-cardinal text-xl font-extrabold text-eerie-black mt-3" type="submit">Login</button>
          </div>
        </form>
    </div>
  </div>
</template>