<script>
  import { onMount } from 'svelte'

  // thanks to ivanhofer for cool example https://is.gd/bmBwcO
	let spectators = 0

	onMount(() => {
		const interval = setInterval(updateSpectatorCount, 2_000)
		return () => clearInterval(interval)
	})

	const updateSpectatorCount = () => {
		// no real data, just a simulation ;)
		spectators = spectators * 2 + 1
		if (spectators > 100_000) {
			spectators = 0
		}
	}

  const message = 'Hey you! This is Cloudflare pages deploy.'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, nihil magnam! Enim cupiditate maxime saepe perspiciatis cumque culpa fugit harum reiciendis! Alias magnam facere voluptas ratione! Hic quam aliquam vitae corporis asperiores dicta, ea quos ullam in rem aliquid voluptatum, est possimus nam fuga nesciunt optio expedita pariatur consequatur! Quos minima ab fugiat repudiandae expedita voluptatibus dolorum autem maiores aliquid?</p>

<p>{message}</p>

<p>{spectators}</p>
