<template>
	<form class="form-tache" @submit="evt.submit">
		<div class="form-row">
			<label for="titre">Titre</label>
			<span><input type="text" id="titre" name="titre" v-model="tache.titre"></span>
		</div>
		<div class="form-row" @submit="evt.submit">
			<label for="details">Détails</label>
			<span><input type="text" id="details" name="details" v-model="tache.details"></span>
		</div>
		<div class="form-row">
			<label for="priorite">Priorité</label>
			<span><input type="range" id="priorite" name="priorite" v-model="tache.priorite" min="0" :max="priorites.length - 1"><output for="priorite" :style="{color:couleursPriorites[tache.priorite]}">{{ priorites[tache.priorite] }}</output></span>
		</div>
		<div class="form-row">
			<label for="completion">Complétion</label>
			<span><input type="range" id="completion" name="completion" v-model="pctCompletion" min="0" max="100" step="5"><output for="completion" :style="{color:`hsl(${120*tache.completion}, 80%, 35%)`}">{{ pctCompletion }}&nbsp;%</output></span>
		</div>
		<div class="form-row">
			<label for="echeance">Écheance</label>
			<span><input type="date" id="echeance" name="echeance" v-model="tache.echeance"></span>
		</div>
		<div class="form-row">
			<slot><button type="submit">Envoyer</button></slot>
		</div>
	</form>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';
const priorites = ['Optionnelle', 'Basse', 'Moyenne', 'Haute', 'Urgent'];
const couleursPriorites	= ['gray', 'green', 'hsl(55, 100%, 40%)', 'orange', 'red'];
const props = defineProps({
	tache: {
		type: Object,
		default: () => ({})
	},
});
const emit = defineEmits(['submit']);
const evt = {
	submit: (e) => {
		e.preventDefault();
		emit('submit', tache.value);
	}
};
const pctCompletion = computed({
	get: () => Math.round(tache.value.completion * 100),
	set: (value) => tache.value.completion = (value / 100)
});
const tache = ref(props.tache);
</script>

<style lang="scss">
form.form-tache {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-gap: 1rem;
	> div {
		display: contents;
		align-items: center;
		> span {
			display: flex;
			align-items: center;
		}
	}
}
</style>