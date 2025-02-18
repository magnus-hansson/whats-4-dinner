<script>
    /** @type {import('./$types').PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <nav class="flex mb-4 text-sm">
        <a href="/" class="text-indigo-600 hover:text-indigo-800">Home</a>
        <span class="mx-2 text-gray-500">/</span>
        <span class="text-gray-500">Edit Dinner</span>
    </nav>

    <h1 class="text-2xl font-bold mb-6">Edit Dinner Idea</h1>
    
    <form method="POST" class="space-y-4">
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Dinner Name</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={data.dinner.name}
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
            />
        </div>
        
        <div>
            <label for="ingredients" class="block text-sm font-medium text-gray-700">Main Ingredients</label>
            <textarea 
                id="ingredients" 
                name="ingredients" 
                rows="3" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
            >{data.dinner.ingredients}</textarea>
        </div>

        <div class="flex gap-4">
            <button 
                type="submit"
                class="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Save Changes
            </button>
            <a 
                href="/"
                class="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-center"
            >
                Cancel
            </a>
        </div>
    </form>

    {#if form?.success}
        <p class="mt-4 text-green-600">Dinner idea updated successfully!</p>
    {:else if form?.error}
        <p class="mt-4 text-red-600">{form.error}</p>
    {/if}
</div>