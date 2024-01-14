<script>
  export let cx;
  export let cy;
  export let r;
  export let stroke = 'black';
  export let fill = 'lightgrey';
  let strokeWidth = 1;
  let strokeDasharray  = "20 6 2 6";

</script>

<circle {cx} {cy} {r} {stroke} stroke-width={strokeWidth} {fill} stroke-dasharray={strokeDasharray} />
