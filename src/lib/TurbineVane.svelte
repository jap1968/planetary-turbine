
<script>
    export let center;
    export let vane;

    $: x1 = center.x - vane.r;
    $: y1 = center.y;
    $: x2 = center.x + vane.r;
    $: y2 = center.y;
    $: cx = center.x + vane.r;
    $: cy = center.y;
    $: transform = "rotate(" + (-vane.alfa * 180 / Math.PI) + ", " + center.x + ", " + center.y + ")"

    </script>

<g {transform}>
    <line {x1} {y1} {x2} {y2} stroke={vane.color} stroke-width="2" fill="vane.color" />
    <polygon points="{x1},{y1} {x1 + 12},{y1 + 3} {x1 + 12},{y1 - 3}" style="fill:white;stroke:{vane.color};stroke-width:1" />
    <circle {cx} {cy} r={vane.circle} fill={vane.color}/>
</g>
  