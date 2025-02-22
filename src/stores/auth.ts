import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false, // Tracks if user is logged in
    access_token: 'null' as string | null,
    refresh_token: null as string | null,
    display_name: null as string | null,
    spotify_id: null as string | null,
    profile_image_url: null as string | null,
  }),
  actions: {
    setTokens(access_token: string, refresh_token: string) {
      this.access_token = access_token;
      this.refresh_token = refresh_token;
    },
    login(display_name: string, spotify_id: string, profile_image_url: string) {
      this.display_name = display_name;
      this.spotify_id = spotify_id;
      this.profile_image_url = profile_image_url;
      this.isAuthenticated = true;
    },
    logout() {
      this.access_token = null;
      this.refresh_token = null;
      this.display_name = null;
      this.spotify_id = null;
      this.profile_image_url = null;
      this.isAuthenticated = false;
    },
  },
//   persist: true, // Optional: Keeps state after page refresh (needs plugin)
});