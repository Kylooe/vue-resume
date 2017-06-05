<template>
  <navigator></navigator>
</template>

<script>
  export default {
    data: () => ({
      currentPage: 0,
    })

    mouted() {
      function mousewheel(e) {
        let e = e || window.event,
            target = e.target,
            wheelDelta = e.wheelDelta ? e.wheelDelta : -e.detail; // firefox不支持event.wheelDelta
        if(e.wheelDelta>0) currentPage--;  // +120 up, -120 down
      }
      window.addEventListener('mousewheel', mousewheel, false);
      window.addEventListener('DOMMouseScroll', mousewheel, false);
    }
  }
</script>

<style>
  
</style>