<template>
	<div class="component">
		<h1>Modifier une tâche</h1>
		<TacheForm v-if="tache" ref="form" :tache="tache" @submit="evt.submit" />
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import TacheForm from '@/components/Tache/Form.vue';
const router = useRouter();
const props = defineProps({
	id: {
		type: [Number, String],
		required: true,
	},
});
const tache = ref(null);
axios.get('http://localhost:8000/api/taches/' + props.id)
	.then(response => {
		console.log(response.data);
		tache.value = response.data;
	})
	.catch(error => {
		console.log(error);
	});
const form = ref();
const evt = {
	"submit": async () => {
		form.value.$el.classList.add('wait');
		const response = await axios.put(`http://localhost:8000/api/taches/${tache.value.id}`, tache.value);
		router.push({ name: 'tache.show', params: { id: response.data.success.id } });
	}
};
</script>

<style lang="scss"></style>