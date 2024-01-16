<script>
export let center
export let r
export let alfa
export let stroke
export let strokeWidth
export let fill

$: transform = "rotate(" + ( -alfa * 180 / Math.PI) + ", " + center.x + ", " + center.y + ")"

</script>

<line
    x1={center.x - r} y1={center.y}
    x2={center.x + r} y2={center.y}
    {stroke} stroke-width={strokeWidth} {fill}
    {transform}
/>
