<script>
export let center
export let r
export let alfa
export let stroke
export let strokeWidth
export let fill

$: deltaX = r * Math.cos(alfa)
$: deltaY = -r * Math.sin(alfa)

</script>


<line
    x1={center.x - deltaX} y1={center.y - deltaY}
    x2={center.x + deltaX} y2={center.y + deltaY}
    {stroke} stroke-width={strokeWidth} {fill}
/>
