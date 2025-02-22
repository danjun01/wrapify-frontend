<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const route = useRoute();
const router = useRouter();

const authCode = ref('')
const error = ref('')

// Access the code or error immediately when the route changes

if (route.query.code) {
  authCode.value = route.query.code.toString();
  console.log('auth code: ', authCode.value);

  exchangeAuthCodeForToken(authCode.value) // Exchange code for token
    .then( () => getUserProfile())
    .catch( error => console.log(error));

  router.push('/');
} else if (route.query.error) {
  error.value = route.query.error.toString();
  console.log(error.value);
}


// Function to exchange the authorization code for an access token
async function exchangeAuthCodeForToken(code: string) {
  try {
    console.log('requesting token');
    const response = await axios.post('http://localhost:8000/api/spotify/token/', { code: code });
    console.log('Token response:', response.data);
    authStore.setTokens(response.data.access_token, response.data.refresh_token);

    // Do something with the token response
  } catch (err) {
    console.error('Error exchanging auth code for token:', err);
  }
}

async function getUserProfile() {
  try {
    console.log('Getting user profile');
    const response = await axios.get('http://localhost:8000/api/user/', {
      params: { access_token: authStore.access_token }
    });
    console.log(response);
    authStore.login(response.data.spotify_display_name, response.data.spotify_id, response.data.profile_image_url);
  }
  catch (err) {
    console.log('Error getting user profile:', err);
  }
};
</script>

<template>
    <div>
        
    </div>
</template>