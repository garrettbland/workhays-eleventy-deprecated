<script>
    import { fade } from 'svelte/transition'
    import Navigation from './Navigation'
</script>

<div class="grid grid-cols-5 gap-8 relative">
    <div class="col-span-1">
        <Navigation/>
    </div>
    <div class="col-span-4" in:fade="{{duration: 500}}">
        <slot/>
    </div>
</div>