<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <nav class="flex mb-4 text-sm">
        <a href="/" class="text-indigo-600 hover:text-indigo-800">Home</a>
        <span class="mx-2 text-gray-500">/</span>
        <span class="text-gray-500">Add New Dinner</span>
    </nav>

    <h1 class="text-2xl font-bold mb-6">Add New Dinner Idea</h1>
    
    <form method="POST" class="space-y-4">
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Dinner Name</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="e.g., Chili con Carne"
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
                placeholder="e.g., ground beef, white beans, onions"
                required
            ></textarea>
        </div>

        <button 
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Save Dinner Idea
        </button>
    </form>

    {#if form?.success}
        <p class="mt-4 text-green-600">Dinner idea saved successfully!</p>
    {:else if form?.error}
        <p class="mt-4 text-red-600">{form.error}</p>
    {/if}
</div>