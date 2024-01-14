<script>
  import { onDestroy, onMount } from 'svelte';

  import TurbineBg from './lib/TurbineBg.svelte'
  import TurbineArm from './lib/TurbineArm.svelte'
  import TurbineVane from './lib/TurbineVane.svelte'
  import WindConditions from './lib/WindConditions.svelte'

  let turbine = {
    alfa: 0,
    center: {
      x: 200,
      y: 200
    },
    arms: {
      number: 3,
      r: 150,
      colors: ["yellow", "green", "blue", "coral", "purple", "aqua", "plum", "teal"]
    },
    vane: {
      color: "black",
      r: 30,
      circle: 6,
      alfa: 0
    }
  }

  let wind = {
    direction: 0,
    speed: 1,
  }

  let alfaDeg = 90
  $: turbine.alfa = northDeg2Rad(alfaDeg)

  let vaneDegNorthDir = 180
  let windDegNorthDir = 180
  let vaneAsWind = true
  let showForces = {
    drag: true,
    lift: true,
    total: true,
    normal: true,
    tangential: true,
  }

  // Converts clockwise degrees relative to north to standard radians (ccw, relative to X axis)
  function northDeg2Rad(nDeg) {
//    return (270 - nDeg) * Math.PI / 180
    return (90 - nDeg) * Math.PI / 180
  }

  // Wind and vane directions are considered *from* where wind blows and where vane points to.
  // So, the real wind flow direction is just the opposite (+180 deg)
  $: turbine.vane.alfa = northDeg2Rad(180 + (vaneAsWind ? windDegNorthDir : vaneDegNorthDir))
  $: wind.direction = northDeg2Rad(180 + windDegNorthDir)

let arms = []

let rotationInterval;
let autoRotate = false;
let autoRotateRight = "left";

function startAnimation() {
    rotationInterval = setInterval(() => {
      let deltaAlfaDeg = (autoRotateRight == "right" ? 1 : -1)
      if (alfaDeg == 359 && deltaAlfaDeg == 1) {
        alfaDeg = 0
      }
      else if (alfaDeg == 0 && deltaAlfaDeg == -1) {
        alfaDeg = 359
      }
      else {
        alfaDeg += deltaAlfaDeg
      }
      // console.log(arms[0].getStatus())

    }, 30);
}

function stopAnimation() {
    clearInterval(rotationInterval)
}

$: if(autoRotate) {
  startAnimation()
}
else {
  stopAnimation()
}


onMount(() => {
    // startAnimation()
})

/*
onDestroy(() => {
    // stopAnimation()
})
*/

</script>
<h2>Planetary turbine</h2>

<main>

  <div class="row">
    <div class="column">
      <label for="numArms">Arms:</label>
      <input id="numArms" type="number" bind:value={turbine.arms.number} size="2" min="2" max="8" step="1"/><br/>

      <label for="degRotation">Rotation:</label>
      <input type="number" size="4" bind:value={alfaDeg} disabled/>&nbsp;
      <input id="degRotation" type="range" bind:value={alfaDeg} min="0" max="359" step="1" disabled={autoRotate} /><br/>
      
      <label for="autoRotate">Auto:</label>
      <input id="autoRotate" type="checkbox" bind:checked={autoRotate}/>
      <select bind:value={autoRotateRight} on:change={() => console.log(autoRotateRight)}>
        <option value="left"> CCW / Left</option>
        <option value="right"> CW / Right</option>
      </select><br/>
    
      <label for="wDirection">Wind Direction:</label>
      <input type="number" size="4" bind:value={windDegNorthDir} disabled/>&nbsp;
      <input id="wDirection" type="range" bind:value={windDegNorthDir} min="0" max="359" step="1"/><br/>
    
      <label for="vane">Vane follows wind:</label>
      <input id="vane" type="checkbox" bind:checked={vaneAsWind} /><br/>
    
      <label for="vDirection">Vane Direction:</label>
      <input type="number" size="4" bind:value={vaneDegNorthDir} disabled/>&nbsp;
      <input id="vDirection" type="range" bind:value={vaneDegNorthDir} min="0" max="359" step="1" disabled={vaneAsWind} /><br/>
    
      <br/>
    
      Display forces:<br/>
      <input type="checkbox" bind:checked={showForces.drag} /> Drag
      <input type="checkbox" bind:checked={showForces.lift} /> Lift
      <input type="checkbox" bind:checked={showForces.total} /> Total
      <input type="checkbox" bind:checked={showForces.normal} /> Normal
      <input type="checkbox" bind:checked={showForces.tangential} /> Tangential
    </div>

    <div class="column">

      <div class="turbine">
        <svg width="400" height="400">
          <TurbineBg
            cx={turbine.center.x}
            cy={turbine.center.y}
            r={turbine.arms.r}
            stroke="black"
            fill="lightgrey">
          </TurbineBg>
    
          {#each turbine.arms.colors.slice(0, turbine.arms.number) as color, index}
          <TurbineArm 
            bind:this={arms[index]}
            idx={index}
            center={turbine.center}
            r={turbine.arms.r}
            alfa={turbine.alfa + index * 2 * Math.PI / turbine.arms.number}
            vane={turbine.vane}
            wind={wind}
            {showForces}
            stroke={color} strokeWidth="2" fill="red"
          />
          {/each}
    
          <TurbineVane center={turbine.center} vane={turbine.vane} />
    
          <WindConditions center={turbine.center} direction={wind.direction} color="grey"/>
    
        </svg>
      </div>
    </div>
  </div> 

</main>

<style>
main {
  text-align: right;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>
