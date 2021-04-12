<template>
  <div>
    {{ props }}
  </div>
</template>

<script>
  export default {
    name: 'MainMenu',
    props: ['home', 'news', 'history']
  }
</script>