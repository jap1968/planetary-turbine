<g {transform}>
    {#each Array(4) as _, p}
    <g>
        {#each Array(4) as _, n}
        <line
            x1={center.x + (n-1) * d + offset}
            y1={center.y + (p-1) * dv + offsetv}
            x2={center.x + (n-1) * d + l + offset}
            y2={center.y + (p-1) * dv + offsetv}
            stroke={color} />
        {/each}
        <!-- barbs -->
        {#each Array(4) as _, n}
        <line
            x1={center.x + (n-1) * d + offset}
            y1={center.y + (p-1) * dv + offsetv}
            x2={center.x + (n-1) * d + offset - barbincl}
            y2={center.y + (p-1) * dv + offsetv - barblength}
            stroke={color} />
        {/each}
        {#each Array(4) as _, n}
        <line
            x1={center.x + (n-1) * d + offset + barbsep}
            y1={center.y + (p-1) * dv + offsetv}
            x2={center.x + (n-1) * d + offset + barbsep - barbincl}
            y2={center.y + (p-1) * dv + offsetv - barblength}
            stroke={color} />
        {/each}
    </g>
    {/each}
</g>
  
<script>
    export let center = {
        x: 200,
        y: 200
    }
    export let color = "red";
    export let direction = 0;
    // export let speed = "1";
    let d = 100 // distance between wind markers
    let l = 40 // length of wind marker
    let offset = -70
    let dv = 90
    let offsetv = -45
    let barblength = 10
    let barbincl = 4
    let barbsep = 4

    $: transform = "rotate(" + (-direction * 180 / Math.PI) + ", " + center.x + ", " + center.y + ")";

    onMount: {
        // console.log(center);
        // console.log(Array(4).fill().map((_, i) => i+1))
    }
  </script>