<template>
	<h1 class="title">Currency rates</h1>

	<a-table
		class="table"
		bordered
		:columns="columns"
		:dataSource="this.$store.state.currency"
	>
		<template #operation="{ record }"
			><a @click="onDelete(record.Cur_ID)">Delete</a></template
		>
	</a-table>
</template>

<script>
import { mapActions } from 'vuex';

const columns = [
	{
		title: 'Currency',
		dataIndex: 'Cur_Name',
	},
	{ title: 'Abbreviation', dataIndex: 'Cur_Abbreviation' },
	{ title: 'Official Rate', dataIndex: 'Cur_OfficialRate' },
	{
		title: 'More...',
		dataIndex: 'Delete',
		slots: { customRender: 'operation' },
	},
];

export default {
	name: 'App',
	data() {
		return {
			columns,
		};
	},
	methods: {
		...mapActions(['GET_RATES_FROM_API', 'DELETE_FROM_TABLE']),
		onDelete(Cur_ID) {
			this.DELETE_FROM_TABLE(Cur_ID);
		},
	},
	mounted() {
		if (!this.$store.state.currency.length) {
			this.GET_RATES_FROM_API();
		}
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.title {
	font-weight: 500;
}
.table {
	width: 500px;
	margin: 0 auto;
}
</style>
