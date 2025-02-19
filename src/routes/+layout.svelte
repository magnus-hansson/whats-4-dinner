<script>
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	// Initialize both Vercel tools
	injectAnalytics();
	injectSpeedInsights();
</script>

<slot />
