<script>
    export let center
    export let color
    export let force
    export let direction

    $: deltaX = force * Math.cos(direction)
    $: deltaY = -force * Math.sin(direction)

</script>

<line
    x1={center.x} y1={center.y} x2={center.x + deltaX} y2={center.y + deltaY}
    stroke={color} stroke-width="4" fill={color}
/>
