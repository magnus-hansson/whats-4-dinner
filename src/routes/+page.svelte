<script>
    /** @type {import('./$types').PageData} */
    export let data;

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        return date.getFullYear() + '-' + 
               String(date.getDate()).padStart(2, '0') + '-' + 
               String(date.getMonth() + 1).padStart(2, '0');
    }
</script>

<div class="max-w-4xl mx-auto p-6">
    <nav class="flex mb-4 text-sm">
        <span class="text-gray-500">Home</span>
    </nav>

    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Dinner Ideas</h1>
        <a 
            href="/dinners/new" 
            class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Add New Dinner
        </a>
    </div>

    <div class="grid gap-6">
        {#each data.dinners as dinner}
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-xl font-semibold mb-2">{dinner.name}</h2>
                        <p class="text-gray-600">
                            <span class="font-medium">Ingredients:</span> {dinner.ingredients}
                        </p>
                        <p class="text-sm text-gray-500 mt-2">
                            Added on {formatDate(dinner.createdAt)}
                        </p>
                    </div>
                    <a 
                        href="/dinners/{dinner.id}/edit"
                        class="text-indigo-600 hover:text-indigo-800 px-3 py-1 rounded-md hover:bg-indigo-50"
                    >
                        Edit
                    </a>
                </div>
            </div>
        {:else}
            <p class="text-gray-600 text-center py-8">No dinner ideas yet. Add your first one!</p>
        {/each}
    </div>
</div>
