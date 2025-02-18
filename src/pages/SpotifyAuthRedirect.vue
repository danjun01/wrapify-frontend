<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';


const route = useRoute();
const router = useRouter();

const authCode = ref('')
const error = ref('')

// Access the code or error immediately when the route changes
if (route.query.code) {
  authCode.value = route.query.code.toString();
  console.log('auth code: ', authCode.value);
  exchangeAuthCodeForToken(authCode.value); // Exchange code for token

} else if (route.query.error) {
  error.value = route.query.error.toString();
}



// Function to exchange the authorization code for an access token
async function exchangeAuthCodeForToken(code: string) {
  try {
    console.log('requesting token');
    const response = await axios.post('http://localhost:8000/api/spotify/token/', { code: code });
    console.log('Token response:', response.data);
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    router.push('/')

    // Do something with the token response
  } catch (err) {
    console.error('Error exchanging auth code for token:', err)
  }
}
</script>

<template>
    <div>
        
    </div>
</template>