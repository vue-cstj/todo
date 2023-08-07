<template>
	<div class="component">
		<TacheList :taches="taches" />
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import TacheList from '@/components/Tache/List.vue';


// import { ref, reactive, computed, onMounted } from 'vue';
const props = defineProps({
	// ...
});
const taches = ref([]);

onBeforeMount(async () => {
	const response = await axios('http://localhost:8000/api/taches');
	console.log(response.data);
	taches.value = response.data;
})
</script>

<style lang="scss">
</style>