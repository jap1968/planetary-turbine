<script>
    export let center
    export let color
    export let force
    export let direction
    let strokeWidth = 4

    // Rotate: Clockwise, in degrees
    $: transform = "rotate(" + ( -direction * 180 / Math.PI) + ", " + center.x + ", " + center.y + ")"

</script>

<g {transform}>
    <line
        x1={center.x} y1={center.y} x2={center.x + force} y2={center.y}
        stroke={color} stroke-width={strokeWidth} fill={color}
    />
</g>