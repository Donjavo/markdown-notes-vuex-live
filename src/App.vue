<template>
  <div class=" dev | container | p-3 my-3 mx-auto | flex">
    <!-- left side -->
    <section class="dev | w-1/4 p-3 mr-3">
    <!-- search-notes -->
    <p>Search Notes</p>
    <!-- Notes-List-->
    <note-list />
    </section>
    <!-- right side -->
    <section class="dev | p-3 | flex-grow">
      <!-- Active Note -->
      <active-note />
    </section>
  </div>
</template>

<script>
import ActiveNote from './components/ActiveNote.vue'
import NoteList from './components/NoteList.vue'
export default {
  name: 'App',
  components: {
    NoteList,
    ActiveNote
  }
}
</script>
<style>
.dev {
  border: 1px solid red;
}
</style>
