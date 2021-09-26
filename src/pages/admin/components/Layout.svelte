<script>
    import Navigation from './Navigation'
</script>

<div class="grid grid-cols-5 gap-8">
    <div class="col-span-1 bg-gray-300">
        <Navigation/>
    </div>
    <div class="col-span-4 bg-gray-800">
        <slot/>
    </div>
</div>