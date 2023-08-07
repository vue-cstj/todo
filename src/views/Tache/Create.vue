<template>
	<div class="component">
		<h1>Nouvelle tâche</h1>
		<TacheForm ref="form" :tache="tache" @submit="evt.submit" />
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import TacheForm from '@/components/Tache/Form.vue';
import { fakerFR as faker } from '@faker-js/faker';
const router = useRouter();
const props = defineProps({
	// ...
});
const tache = ref({
	"titre": faker.company.buzzPhrase(),
	"details": faker.company.catchPhrase(),
	"priorite": Math.floor(Math.random() * 5),
	"completion": Math.random(),
	"echeance": faker.date.future({years: .3}).toISOString().slice(0, 10),
});
const form = ref();
const evt = {
	"submit": async () => {
		form.value.$el.classList.add('wait');
		const response = await axios.post('http://localhost:8000/api/taches', tache.value);
		router.push({ name: 'tache.show', params: { id: response.data.success.id } });
	}
};
</script>

<style lang="scss"></style>