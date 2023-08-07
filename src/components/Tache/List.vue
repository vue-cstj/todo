<template>
	<div class="tache-list" :class="{wait: taches.length === 0}">
		<table border="1">
			<thead>
				<tr>
					<th>Titre</th>
					<th title="Priorité">🚀︎</th>
					<th title="Complétion">🎯︎</th>
					<th colspan="2">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="tache in taches" :key="tache.id">
					<td>{{ tache.titre }}</td>
					<td>{{ tache.priorite }}</td>
					<td>{{ tache.completion }}</td>
					<!-- 🐌︎ 🦔︎ 🐢︎ 🐇︎ -->
					<td><router-link :to="{ name: 'tache.edit', params: { id: tache.id } }">✏️</router-link></td>
					<td><router-link :to="{ name: 'tache.delete', params: { id: tache.id } }">&#x1f5d1;&#xfe0f;</router-link></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th>Totaux</th>
					<td>{{ taches.length }}</td>
					<td>{{ taches.reduce((acc, tache) => acc + tache.completion, 0) }}</td>
					<td colspan="2"><router-link :to="{ name: 'tache.create'}">Ajouter</router-link></td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';

// import { ref, reactive, computed, onMounted } from 'vue';
const props = defineProps({
	"taches": {
		"type": Array,
		"default": () => []
	}
});
</script>

<style lang="scss">
</style>