import { defineConfig } from 'histoire'

export default defineConfig({
    storyMatch: [
        '**/*.story.vue',
        '../workspace-a/src/**/*.story.vue',
    ],
});
