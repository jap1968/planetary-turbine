<script >

import TurbineBlade from './TurbineBlade.svelte'
import BladeForce from './BladeForce.svelte'

export let idx
export let center
export let r
export let alfa
export let vane
export let wind
export let showForces
export let stroke
export let strokeWidth
export let fill
let bladeRadius = 30
let forceCoef = 1 // Visualization scale

// Test
/*
export function getStatus() {
    return {
        alfa: alfa,
        drag: drag,
        lift: lift,
        normalForce: normalForce,
        tangentForce: tangentForce
    }
}
*/

$: x2 = center.x + r * Math.cos(alfa)
$: y2 = center.y - r * Math.sin(alfa)

$: centerBlade = {
        x: x2,
        y: y2
        }

$: alfaBlade = alfa / 2 + (vane.alfa - Math.PI / 2) / 2

// TODO: get a realistic model (drag/lift coefs, relative speeds, ...)

// Angle between wind direction and static position of the blade
// TODO: Consider dynamic status (speed > 0), i.e. relative speed of wind
$: dragAngle = Math.PI / 2 + alfaBlade - wind.direction
$: frontArea = 2 * bladeRadius * Math.abs(Math.cos(dragAngle))

$: dragCoef = Math.abs(Math.cos(dragAngle))
$: drag = {
    force: wind.speed * frontArea * dragCoef,
    direction: wind.direction
}

$: liftCoef = 0.8 * Math.sin(dragAngle) // Determines direction (normal-left | normal-right)
$: lift = {
    force: wind.speed * frontArea * liftCoef,
    direction: wind.direction + Math.sign(Math.cos(dragAngle)) * Math.PI / 2
}

function getTotalForce(drag, lift) {
    let x = drag.force * Math.cos(drag.direction) + lift.force * Math.cos(lift.direction)
    let y = drag.force * Math.sin(drag.direction) + lift.force * Math.sin(lift.direction)
    let total = {
        force: Math.sqrt(x * x + y * y ),
        direction: Math.atan2(y, x)
    }
    return total
}
$: totalForce = getTotalForce(drag, lift)

$: normalForce = {
    force: totalForce.force * Math.cos(totalForce.direction - alfa),
    direction: alfa
}
$: tangentForce = {
    force: totalForce.force * Math.sin(totalForce.direction - alfa),
    direction: alfa + Math.PI / 2
}

</script>


<line x1={center.x} y1={center.y} {x2} {y2} {stroke} stroke-width={strokeWidth} {fill} />
<text x={x2 - 15} y={y2 + 15} fill="blue">{ idx }</text>
<TurbineBlade center={centerBlade} r={bladeRadius} alfa={alfaBlade} stroke="red" strokeWidth="2" fill="red" />
{#if showForces.drag}
<BladeForce center={centerBlade} force={forceCoef * drag.force} direction={drag.direction} color="blue" />
{/if}
{#if showForces.lift}
<BladeForce center={centerBlade} force={forceCoef * lift.force} direction={lift.direction} color="blue" />
{/if}
{#if showForces.total}
<BladeForce center={centerBlade} force={forceCoef * totalForce.force} direction={totalForce.direction} color="orange" />
{/if}
{#if showForces.normal}
<BladeForce center={centerBlade} force={forceCoef * normalForce.force} direction={normalForce.direction} color="green" />
{/if}
{#if showForces.tangential}
<BladeForce center={centerBlade} force={forceCoef * tangentForce.force} direction={tangentForce.direction} color="green" />
{/if}
